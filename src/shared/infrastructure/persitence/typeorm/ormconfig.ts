import path from "path";
import { ConnectionOptions } from "typeorm";

export default {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "ddd-template",
  synchronize: true,
  logging: true,
  migrationsRun: true,
  dropSchema: false,
  entities: [path.join("entities", "**", "*.*"), path.join("entities", "*.*")],
  migrations: [path.join("migrations", "*.*")],
  cli: {
    entitiesDir: path.join("entities"),
    migrationsDir: path.join("migrations")
  }
} as ConnectionOptions;
