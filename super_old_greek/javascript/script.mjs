import { open } from 'node:fs/promises';

const file = await open('../test_text.txt');
const correctFile = await open('../correct_output.txt');

const text = await file.readFile({ encoding: 'utf8' });
const correctText = await correctFile.readFile({ encoding: 'utf8' });

file.close();
correctFile.close();

console.log(`Staring with text: ${text}`);

const modifiedText = text
      .normalize('NFD')
      .replace(/(?!\n)([\u0300-\u036F]|[^\u0370-\u03FF]|͵)/g, '')
      .toUpperCase();

console.log(`Modified text to: ${modifiedText}`);

console.log(`Are they the same? ${modifiedText === correctText}`);
