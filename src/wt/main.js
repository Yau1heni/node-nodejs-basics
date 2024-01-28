import {Worker} from 'node:worker_threads'
import {cpus} from 'os';
import path from 'path';

const fileUrl = path.join(import.meta.dirname, 'worker.js');

const performCalculations = async () => {
  const numCores = cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < numCores; i++) {
    const worker = new Worker(fileUrl, {workerData: 10 + i});
    workers.push(worker);

    worker.on('message', (result) => {
      results[i] = {status: 'resolved', data: result};

      if (results.length === numCores) {
        console.log(results);
      }
    });

    worker.on('error', () => {
      results[i] = {status: 'error', data: null};

      if (results.length === numCores) {
        console.log(results);
      }
    });
  }
};

await performCalculations();
