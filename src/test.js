const fs = require('fs');
const path = require('path');

const htmlToPdf = require('./index');

async function run() {
  const outputPath = path.join(__dirname, 'output.pdf');

  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }

  const htmlString = '<h1>Hello, world!</h1>';
  const pdfBuffer = await htmlToPdf(htmlString);
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log('PDF generated!');
}

run().catch(console.error);
