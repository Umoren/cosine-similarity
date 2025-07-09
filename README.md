# Cosine Similarity Guide with PDF Generation

This project includes a comprehensive guide on cosine similarity with a clean PDF generation service.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the PDF service:**
   ```bash
   npm start
   ```

3. **Open the HTML file:**
   - Open `index.html` in your browser
   - Click "📄 Download PDF" to generate a clean PDF

## Development

For development with auto-restart:
```bash
npm run dev
```

## How it works

- **Frontend:** HTML page with content and download button
- **Backend:** Node.js service using Puppeteer for PDF generation
- **PDF Quality:** Uses headless Chrome for perfect CSS rendering and page breaks

## Features

- ✅ Clean PDF formatting with proper page breaks
- ✅ Maintains all styling and layout
- ✅ Fast generation using Puppeteer
- ✅ Automatic download when ready
- ✅ Error handling with user feedback

## Troubleshooting

If PDF generation fails:
1. Make sure the server is running (`npm start`)
2. Check the browser console for errors
3. Verify the service is accessible at `http://localhost:3000/health`