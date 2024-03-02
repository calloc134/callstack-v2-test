import { createSchema } from "graphql-yoga";
import { loadFilesSync } from "@graphql-tools/load-files";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";
import { schema_path } from "../env/env";
import { resolvers } from "./resolver";

export const schema = createSchema({
  resolvers,
  typeDefs: [...scalarTypeDefs, ...loadFilesSync(schema_path)],
});
