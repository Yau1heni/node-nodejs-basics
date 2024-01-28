import path from 'path'
import {createReadStream} from 'fs';

const fileUrl = path.join(import.meta.dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readableStream = createReadStream(fileUrl)
  readableStream.pipe(process.stdout);
};

await read();
