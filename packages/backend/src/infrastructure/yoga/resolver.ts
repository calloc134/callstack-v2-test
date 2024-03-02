import { GraphQLContext } from "./context";
import { resolvers as scalarResolvers } from "graphql-scalars";
import { Resolvers } from "./generated/types";

export const resolvers: Resolvers<GraphQLContext> = {
  ...scalarResolvers,
};
