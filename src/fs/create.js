import {writeFile} from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {MESSAGE_ERROR} from './constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, 'files', 'fresh.txt');

  try {
    await writeFile(filePath, 'I am fresh and young', {flag: 'wx'})
  } catch (err) {
    throw new Error(MESSAGE_ERROR)
  }
};

await create();