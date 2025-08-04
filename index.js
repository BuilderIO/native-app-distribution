const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5193;

// Create a simple server that serves the README content
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    // Read README and convert to HTML
    fs.readFile(path.join(__dirname, 'README.md'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading README.md');
        return;
      }
      
      // Basic markdown to HTML conversion
      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Builder.io Desktop App Distribution</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px;
            line-height: 1.6;
        }
        h1 { color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        h2 { color: #666; margin-top: 30px; }
        code { 
            background: #f5f5f5; 
            padding: 2px 4px; 
            border-radius: 3px;
            font-family: 'Monaco', 'Consolas', monospace;
        }
        pre { 
            background: #f5f5f5; 
            padding: 15px; 
            border-radius: 5px;
            overflow-x: auto;
        }
        a { color: #007acc; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .download-links { 
            background: #f0f8ff; 
            padding: 15px; 
            border-radius: 8px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="download-links">
        ${data.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
    </div>
</body>
</html>`;
      
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(htmlContent);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Builder.io Distribution Server running on http://localhost:${PORT}`);
  console.log('Serving download links for Builder.io Desktop App');
});
