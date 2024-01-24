import { readdir } from "fs/promises";
import {MESSAGE_ERROR} from './constants.js';

const folderPath = 'src/fs/files'

const list = async () => {
  try {
    console.log(await readdir(folderPath));
  } catch {
    throw new Error(MESSAGE_ERROR)
  }
};

await list();