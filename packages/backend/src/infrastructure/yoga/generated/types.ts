import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import type { GraphQLContext } from "src/infrastructure/yoga/context";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date; output: Date };
  File: { input: File; output: File };
  UUID: { input: string; output: string };
};

export type Mutation = {
  updateBioInProfile: User;
  updateRoleInProfile: User;
  updateScreenNameInProfile: User;
  updatehandleInProfile: User;
  uploadImageInProfile: User;
};

export type MutationUpdateBioInProfileArgs = {
  bio: Scalars["String"]["input"];
};

export type MutationUpdateRoleInProfileArgs = {
  role: Role;
};

export type MutationUpdateScreenNameInProfileArgs = {
  screen_name: Scalars["String"]["input"];
};

export type MutationUpdatehandleInProfileArgs = {
  handle: Scalars["String"]["input"];
};

export type MutationUploadImageInProfileArgs = {
  image: Scalars["File"]["input"];
};

export type Query = {
  getMyProfile: User;
  getProfileById: User;
};

export type QueryGetProfileByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type Role = "ADMIN" | "USER";

export type User = {
  bio: Scalars["String"]["output"];
  created_date: Scalars["String"]["output"];
  handle: Scalars["String"]["output"];
  id: Scalars["UUID"]["output"];
  image_url: Scalars["String"]["output"];
  role: Role;
  screen_name: Scalars["String"]["output"];
  updated_date: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  File: ResolverTypeWrapper<Scalars["File"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  UUID: ResolverTypeWrapper<Scalars["UUID"]["output"]>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  DateTime: Scalars["DateTime"]["output"];
  File: Scalars["File"]["output"];
  ID: Scalars["ID"]["output"];
  Mutation: {};
  Query: {};
  String: Scalars["String"]["output"];
  UUID: Scalars["UUID"]["output"];
  User: User;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export interface FileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["File"], any> {
  name: "File";
}

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]> = {
  updateBioInProfile?: Resolver<ResolversTypes["User"], ParentType, ContextType, RequireFields<MutationUpdateBioInProfileArgs, "bio">>;
  updateRoleInProfile?: Resolver<ResolversTypes["User"], ParentType, ContextType, RequireFields<MutationUpdateRoleInProfileArgs, "role">>;
  updateScreenNameInProfile?: Resolver<ResolversTypes["User"], ParentType, ContextType, RequireFields<MutationUpdateScreenNameInProfileArgs, "screen_name">>;
  updatehandleInProfile?: Resolver<ResolversTypes["User"], ParentType, ContextType, RequireFields<MutationUpdatehandleInProfileArgs, "handle">>;
  uploadImageInProfile?: Resolver<ResolversTypes["User"], ParentType, ContextType, RequireFields<MutationUploadImageInProfileArgs, "image">>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]> = {
  getMyProfile?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  getProfileById?: Resolver<ResolversTypes["User"], ParentType, ContextType, RequireFields<QueryGetProfileByIdArgs, "id">>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["UUID"], any> {
  name: "UUID";
}

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]> = {
  bio?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  created_date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["UUID"], ParentType, ContextType>;
  image_url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  role?: Resolver<ResolversTypes["Role"], ParentType, ContextType>;
  screen_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  DateTime?: GraphQLScalarType;
  File?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};
