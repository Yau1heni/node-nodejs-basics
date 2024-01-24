import {mkdir, readdir, copyFile} from 'node:fs/promises';
import {join} from 'node:path';
import {MESSAGE_ERROR} from './constants.js';

const copy = async () => {
  try {
    await mkdir('src/fs/files_copy', {recursive: false});
    const files = await readdir('src/fs/files');

    for (const file of files) {
      const sourceFile = join('src/fs/files', file);
      const destinationFile = join('src/fs/files_copy', file);

      await copyFile(sourceFile, destinationFile);
    }
  } catch (err) {
    throw new Error(MESSAGE_ERROR)
  }
};

await copy();


