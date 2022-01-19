import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';

const __dirname = path.resolve();

export const savePassword = (password) => {
  fs.open(path.join(path.resolve(__dirname), 'passwords.txt'), 'a', (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green('Password saved to passwords.txt'));
      });
    });
  });
};
