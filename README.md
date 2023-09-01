# @webmogilevtsev/html-to-pdf
Эта библиотека позволяет создавать PDF-файлы из HTML-строк с использованием Node.js и Puppeteer.

### Установка
```bash
npm install @webmogilevtsev/html-to-pdf
```
### Использование
Подключите библиотеку и используйте функцию htmlToPdf для создания PDF-файла.

### Пример
```javascript
import htmlToPdf from '@webmogilevtsev/html-to-pdf';
import fs from 'fs';
import { writeFile } from 'fs/promises';

async function generatePdf() {
  const htmlString = '<h1>Привет, мир!</h1>';
  const pdfBuffer = await htmlToPdf(htmlString);

  await writeFile('output.pdf', pdfBuffer);
  console.log('PDF создан!');
}

generatePdf().catch(console.error);
```
Этот пример создает PDF-файл с содержимым "Привет, мир!" и сохраняет его как output.pdf.