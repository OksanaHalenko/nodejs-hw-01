import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
    console.log('All your contacts have been deleted');
  } catch (err) {
    console.error('Error deleting all contacts:', err);
  }
};

removeAllContacts();
