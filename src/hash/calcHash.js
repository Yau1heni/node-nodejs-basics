import {readFile} from 'fs/promises';
import {createHash} from 'node:crypto'

const filePath = './files/fileToCalculateHashFor.txt';
const fileUrl = new URL(filePath, import.meta.url);

const calculateHash = async () => {
  const content = await readFile(fileUrl);
  const hash = createHash('sha256')
  hash.update(content);
  const hashHex = hash.digest('hex')

  console.log(hashHex);
};

await calculateHash();