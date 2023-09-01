const puppeteer = require('puppeteer');
const http = require('http');
const { Worker } = require('worker_threads');
const { join } = require('path');

async function htmlToPdf(htmlString) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(join(__dirname, 'worker.js'), {
      workerData: { htmlString }
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

module.exports = htmlToPdf;
