import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`${number} contacts generated and added to your collection`);
  } catch (err) {
    console.error('Error generating contacts:', err);
  }
};

generateContacts(5);
