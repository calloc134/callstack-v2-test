import { NodePgDatabase } from "drizzle-orm/node-postgres";

export type GraphQLContext = {
  // drizzle context
  db: NodePgDatabase;
};
