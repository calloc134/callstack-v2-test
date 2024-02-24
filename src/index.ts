import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

const yoga = createYoga({
  graphqlEndpoint: "/api/graphql",
  graphiql: true,
});

const server = createServer(yoga);

server.listen(6173, () => {
  console.log("🚀 Server is running");
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("🛑 Server stopped");
  });
});
