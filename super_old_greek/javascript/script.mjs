import { open } from 'node:fs/promises';

const file = await open('../test_text.txt');
const correctFile = await open('../correct_output.txt');

const text = await file.readFile({ encoding: 'utf8' });
let correctText = await correctFile.readFile({ encoding: 'utf8' });

// GOT TO REMOVE THAT NEWLINE FROM THE STRING.
correctText = correctText.replace(/[\n\r]/g, '');

file.close();
correctFile.close();

console.log(`Staring with text: ${text}`);

const modifiedText = text.normalize('NFD').replace(/[\u0300-\u036f]|[^\u0391-\u03C9]/g, '').toUpperCase();

console.log(`Modified text to: ${modifiedText}`);

console.log(`Are they the same? ${modifiedText === correctText}`);
