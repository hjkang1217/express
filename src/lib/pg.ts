import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const db = pgp('postgres://postgres:postgres@localhost:9999/postgres');

export = db;