import path from 'path'
import {createWriteStream} from 'fs';

const fileUrl = path.join(import.meta.dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writableStream = createWriteStream(fileUrl, {flags: 'a'});
  process.stdin.pipe(writableStream);
};

await write();