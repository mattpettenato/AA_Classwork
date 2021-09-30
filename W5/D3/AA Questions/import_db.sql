DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255) NOT NULL,
  lname VARCHAR(255) NOT NULL
);

INSERT INTO 
  users (fname, lname)
VALUES
  ('Lebron', 'James'), ('Mark', 'Twain'), ('Andy', 'Huang');

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO
  questions (title, body, author_id)
SELECT
  'Lebron Question', 'Lebron Lebron Lebron', users.id
FROM
  users
WHERE
  users.fname = 'Lebron' AND users.lname = 'James';

INSERT INTO
  questions (title, body, author_id)
SELECT
  'Mark Question', 'Mark Mark Mark', users.id
FROM
  users
WHERE
  users.fname = 'Mark' AND users.lname = 'Twain';

INSERT INTO
  questions (title, body, author_id)
SELECT
  'Andy Question', 'Andy Andy Andy', users.id
FROM
  users
WHERE
  users.fname = 'Andy' AND users.lname = 'Huang';

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  ((SELECT id FROM users WHERE users.fname = 'Lebron' AND users.lname = 'James'),
    (SELECT id FROM questions WHERE title = 'Lebron Question'));

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  ((SELECT id FROM users WHERE users.fname = 'Mark' AND users.lname = 'Twain'),
    (SELECT id FROM questions WHERE title = 'Lebron Question'));


CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_reply_id INTEGER,
  author_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
  FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO
  replies (question_id, parent_reply_id, author_id, body)
VALUES
  ((SELECT id FROM questions WHERE title = 'Lebron Question'),
    NULL,
    (SELECT id FROM users WHERE users.fname = 'Lebron' AND users.lname = 'James'),
    'I am replying to your message');

INSERT INTO
  replies (question_id, parent_reply_id, author_id, body)
VALUES
  ((SELECT id FROM questions WHERE title = 'Mark Question'),
    (SELECT id FROM replies WHERE body = 'I am replying to your message'),
    (SELECT id FROM users WHERE users.fname = 'Mark' AND users.lname = 'Twain'),
    'I am replying to your REPLY');


CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
  question_likes (user_id, question_id)
VALUES
  ((SELECT id FROM users WHERE users.fname = 'Andy' AND users.lname = 'Huang'),
    (SELECT id FROM questions WHERE title = 'Lebron Question'));