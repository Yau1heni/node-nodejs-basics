import {readFile} from 'fs/promises';
import {MESSAGE_ERROR} from './constants.js';

const filePath = 'src/fs/files/fileToRead.txt'

const read = async () => {
  try {
    console.log(await readFile(filePath, 'utf8'));
  } catch {
    throw new Error(MESSAGE_ERROR)
  }
};

await read();