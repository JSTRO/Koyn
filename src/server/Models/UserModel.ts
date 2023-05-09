import { Pool, QueryResult } from 'pg';

interface User {
  // id: number;
  username: string;
  email: string;
  password_hash: string;
  // created_at: Date;
}

const pool = new Pool({
  connectionString:
    'postgres://pdixnjlm:5lhkeS2Z6TTSsRADeXd5WhFsOGARtR5g@drona.db.elephantsql.com/pdixnjlm',
});

async function createUserTable(): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS "Users" (
      "id" SERIAL,
      "username" VARCHAR(255) NOT NULL,
      "email" VARCHAR(255),
      "password_hash" VARCHAR(255) NOT NULL,
      "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY ("id")
    );
  `;
  await pool.query(query);
}

async function createUser(user: User): Promise<QueryResult<User>> {
  const { username, email, password_hash } = user;
  const query = {
    text: 'INSERT INTO "Users" (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
    values: [username, email, password_hash],
  };
  const result = await pool.query<User>(query);
  return result;
}

async function getUser(username: string): Promise<QueryResult<User>> {
  const query = {
    text: 'SELECT * FROM "Users" WHERE username = $1',
    values: [username],
  };
  const result = await pool.query<User>(query);
  return result;
}

export { createUserTable, createUser, getUser };
