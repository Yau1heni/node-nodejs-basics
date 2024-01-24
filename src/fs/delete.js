import {rm} from 'fs/promises';
import {MESSAGE_ERROR} from './constants.js';

const filePath = 'src/fs/files/fileToRemove.txt'

const remove = async () => {
  try {
    await rm(filePath);
  } catch {
    throw new Error(MESSAGE_ERROR)
  }
};

await remove();