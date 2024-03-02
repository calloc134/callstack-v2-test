import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./infrastructure/yoga/schema";
import { createDBPool } from "./infrastructure/db/connect";
import { drizzle } from "drizzle-orm/node-postgres";

const db_pool = createDBPool();

const yoga = createYoga({
  graphqlEndpoint: "/api/graphql",
  graphiql: true,
  schema,
  context: {
    db: drizzle(db_pool),
  },
});

const server = createServer(yoga);

server.listen(6173, () => {
  console.log("🚀 Server is running");
});

process.on("SIGINT", async () => {
  console.log("🛑 Stopping server");
  await db_pool.end();
  server.close(() => {
    console.log("🛑 Server stopped");
    process.exit(0);
  });
});
