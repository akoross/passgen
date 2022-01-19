#!/usr/bin/env node

import chalk from 'chalk';
import program from 'commander';
import clipboard from 'clipboardy';
import { createPassword } from './utils/createPassword.js';
import { savePassword } from './utils/savePassword.js';

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Get geberator password
const generatedPassword = createPassword(length, numbers, symbols);

//Save to file
if (save) {
  savePassword(generatedPassword);
}

//Copy to clipboard
clipboard.writeSync(generatedPassword);

console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
console.log(chalk.yellow('Password copied to clipboard'));
