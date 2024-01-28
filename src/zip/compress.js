import {pipeline} from 'stream/promises';
import {createGzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import path from 'path';

const fileUrl = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
const archiveUrl = path.join(import.meta.dirname, 'files', 'archive.gz');

const compress = async () => {
  await pipeline(
    createReadStream(fileUrl),
    createGzip(),
    createWriteStream(archiveUrl)
  );
};

await compress();