import { GraphQLClient } from "graphql-request";

export function request(
  query: string,
  variables?: { slug: string | string[] | undefined }
): Promise<any> {
  const endpoint =
    process.env.NODE_ENV !== "production"
      ? `https://graphql.datocms.com/preview`
      : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: String(process.env.DATO_CMS),
    },
  });
  return client.request(query, variables);
}
