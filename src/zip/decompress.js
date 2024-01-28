import path from 'path';
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const fileUrl = path.join(import.meta.dirname, 'files', 'fileToCompress.txt');
const archiveUrl = path.join(import.meta.dirname, 'files', 'archive.gz');

const decompress = async () => {
  await pipeline(
    createReadStream(archiveUrl),
    createGunzip(),
    createWriteStream(fileUrl)
  );
};

await decompress();