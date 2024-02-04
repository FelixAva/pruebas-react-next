const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedAssociations(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXIST "uuid-ossp"`;
    // Create the "associations" table if doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS associations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(50) NOT NULL
      );
    `;

    console.log(`Created "associations" table`);

    // Insert data into the "associations" table
    const insertedAssociations = await Promise.all(
      list.forEach(async (id) => {
        return client.sql`
          INSERT INTO associations (id, name)
          VALUES ('1', 'PEMEX')
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedAssociations.length} associations`);

    return {
      createTable,
      associations: insertedAssociations,
    }
  } catch (error) {
    console.error('Error seeding associations:', error);
    throw error;
  }
}

async function seedRaffles(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the Raffle table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS raffles (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        finishDate DATE NOT NULL,
        association_id UUID NOT NULL,
        reward1 TEXT NOT NULL,
        reward2 TEXT NOT NULL,
        reward3 TEXT NOT NULL
      )
    `;
  }
}