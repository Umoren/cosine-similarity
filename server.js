const express = require('express');
const puppeteer = require('puppeteer-core');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('.'));

// PDF Generation endpoint
app.post('/generate-pdf', async (req, res) => {
    let browser;
    
    try {
        console.log('Starting PDF generation...');
        
        // Launch browser with production settings
        browser = await puppeteer.launch({
            headless: 'new',
            executablePath: '/usr/bin/chromium',
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process',
                '--disable-gpu'
            ]
        });
        
        const page = await browser.newPage();
        
        // Set viewport for consistent rendering
        await page.setViewport({
            width: 1200,
            height: 800,
            deviceScaleFactor: 2
        });
        
        // Navigate to the HTML file
        const htmlPath = path.join(__dirname, 'index.html');
        await page.goto(`file://${htmlPath}`, {
            waitUntil: 'networkidle0'
        });
        
        // Hide the download button
        await page.addStyleTag({
            content: `
                .download-button { display: none !important; }
                body { background: white !important; }
                .container { max-width: none !important; }
            `
        });
        
        // Generate PDF
        const pdf = await page.pdf({
            format: 'A4',
            margin: {
                top: '20px',
                right: '20px',
                bottom: '20px',
                left: '20px'
            },
            printBackground: true,
            preferCSSPageSize: true
        });
        
        console.log('PDF generated successfully');
        
        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=cosine-similarity-guide.pdf');
        res.setHeader('Content-Length', pdf.length);
        
        // Send the PDF
        res.send(pdf);
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'PDF service is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`PDF generation service running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});