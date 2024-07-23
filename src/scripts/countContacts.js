import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    let count = contacts.length;
    return count;
  } catch (err) {
    console.error('Error reading contacts:', err);
  }
};

console.log(await countContacts());
