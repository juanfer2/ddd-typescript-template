import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "ddd-template",
  synchronize: true,
  logging: true,
  entities: ['../entities/*{.js,.ts}'],
  migrations: ['./migrations'],
});

export const db = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "ddd-template",
  synchronize: true,
  logging: true,
  entities: ['../entities/*{.js,.ts}'],
  migrations: ['./migrations'],
});
