import path from 'path';
import {fork} from 'child_process';

const fileUrl = path.join(import.meta.dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const childProcess = fork(fileUrl, args, {silent: true});

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Пример использования функции spawnChildProcess с аргументами
spawnChildProcess(['argument1', 'argument2']);