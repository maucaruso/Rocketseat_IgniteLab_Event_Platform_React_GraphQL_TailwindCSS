import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nz5p3r058q01z32jv0ce3e/master",
  cache: new InMemoryCache(),
});
