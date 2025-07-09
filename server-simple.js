const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('.'));

// Simple PDF generation endpoint that uses browser's print
app.post('/generate-pdf', (req, res) => {
    // For now, just return a response that triggers browser print
    res.json({ 
        action: 'print',
        message: 'Please use Ctrl+P to print as PDF'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Simple PDF service is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Simple PDF service running on http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});