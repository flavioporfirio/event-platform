import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o57dt20lce01xra9i5f0ki/master",
  cache: new InMemoryCache(),
});
