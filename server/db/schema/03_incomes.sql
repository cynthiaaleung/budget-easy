DROP TABLE IF EXISTS incomes CASCADE;

CREATE TABLE incomes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  category VARCHAR(255) NOT NULL,
  amount INTEGER NOT NULL
);