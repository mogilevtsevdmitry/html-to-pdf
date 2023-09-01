const { parentPort, workerData } = require('worker_threads');
const puppeteer = require('puppeteer');
const http = require('http');

async function generatePdf() {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(workerData.htmlString);
  });
  const port = 3333;

  server.listen(port, async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}`);
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
          top: '1cm',
          bottom: '1cm',
      },
  });
    await browser.close();
    server.close();
    parentPort.postMessage(pdfBuffer);
  });
}

generatePdf().catch((err) => {
  parentPort.postMessage(err);
});
