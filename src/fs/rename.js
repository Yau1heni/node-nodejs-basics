import {access, rename as renameFile} from 'node:fs/promises';
import {MESSAGE_ERROR} from './constants.js';

const sourceFile = 'src/fs/files/wrongFilename.txt';
const destinationFile = 'src/fs/files/properFilename.md';

const rename = async () => {
  try {
    await access(sourceFile);
    await access(destinationFile);

    throw new Error(MESSAGE_ERROR)
  } catch (err) {
    if (err.code === 'ENOENT') {
      try {
        await renameFile(sourceFile, destinationFile)
      } catch (err) {
        throw new Error(MESSAGE_ERROR)
      }
    } else {
      throw new Error(MESSAGE_ERROR)
    }
  }
};

await rename();