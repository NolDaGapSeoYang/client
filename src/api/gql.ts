/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment PlaceInfo on Place {\n    parkingAvailable\n    parkingCount\n    wheelChairRentable\n    elevatorAvailable\n    toiletAvailable\n    pathExists\n    pathDescription\n    latitude\n    longitude\n    etc\n    basicInfo\n    category\n    id\n  }\n':
    types.PlaceInfoFragmentDoc,
  '\n  query GetSearchList(\n    $before: String\n    $after: String\n    $first: Int\n    $last: Int\n    $categories: [String!]\n    $parkingAvailable: Boolean\n    $wheelChairRentable: Boolean\n    $elevatorAvailable: Boolean\n    $toiletAvailable: Boolean\n    $pathExists: Boolean\n    $needCompanion: Boolean!\n    $coordinates: CoordinateInput\n  ) {\n    places(\n      before: $before\n      after: $after\n      first: $first\n      last: $last\n      categories: $categories\n      parkingAvailable: $parkingAvailable\n      wheelChairRentable: $wheelChairRentable\n      elevatorAvailable: $elevatorAvailable\n      toiletAvailable: $toiletAvailable\n      pathExists: $pathExists\n      needCompanion: $needCompanion\n      coordinates: $coordinates\n    ) {\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasNextPage\n      }\n      edges {\n        node {\n          id\n          name\n          address\n          thumbnails\n          parkingAvailable\n          parkingCount\n          wheelChairRentable\n          elevatorAvailable\n          toiletAvailable\n          pathExists\n          pathDescription\n          latitude\n          longitude\n          category\n          needCompanion\n          distance\n          tel\n        }\n        cursor\n      }\n      totalCount\n    }\n  }\n':
    types.GetSearchListDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment PlaceInfo on Place {\n    parkingAvailable\n    parkingCount\n    wheelChairRentable\n    elevatorAvailable\n    toiletAvailable\n    pathExists\n    pathDescription\n    latitude\n    longitude\n    etc\n    basicInfo\n    category\n    id\n  }\n',
): (typeof documents)['\n  fragment PlaceInfo on Place {\n    parkingAvailable\n    parkingCount\n    wheelChairRentable\n    elevatorAvailable\n    toiletAvailable\n    pathExists\n    pathDescription\n    latitude\n    longitude\n    etc\n    basicInfo\n    category\n    id\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetSearchList(\n    $before: String\n    $after: String\n    $first: Int\n    $last: Int\n    $categories: [String!]\n    $parkingAvailable: Boolean\n    $wheelChairRentable: Boolean\n    $elevatorAvailable: Boolean\n    $toiletAvailable: Boolean\n    $pathExists: Boolean\n    $needCompanion: Boolean!\n    $coordinates: CoordinateInput\n  ) {\n    places(\n      before: $before\n      after: $after\n      first: $first\n      last: $last\n      categories: $categories\n      parkingAvailable: $parkingAvailable\n      wheelChairRentable: $wheelChairRentable\n      elevatorAvailable: $elevatorAvailable\n      toiletAvailable: $toiletAvailable\n      pathExists: $pathExists\n      needCompanion: $needCompanion\n      coordinates: $coordinates\n    ) {\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasNextPage\n      }\n      edges {\n        node {\n          id\n          name\n          address\n          thumbnails\n          parkingAvailable\n          parkingCount\n          wheelChairRentable\n          elevatorAvailable\n          toiletAvailable\n          pathExists\n          pathDescription\n          latitude\n          longitude\n          category\n          needCompanion\n          distance\n          tel\n        }\n        cursor\n      }\n      totalCount\n    }\n  }\n',
): (typeof documents)['\n  query GetSearchList(\n    $before: String\n    $after: String\n    $first: Int\n    $last: Int\n    $categories: [String!]\n    $parkingAvailable: Boolean\n    $wheelChairRentable: Boolean\n    $elevatorAvailable: Boolean\n    $toiletAvailable: Boolean\n    $pathExists: Boolean\n    $needCompanion: Boolean!\n    $coordinates: CoordinateInput\n  ) {\n    places(\n      before: $before\n      after: $after\n      first: $first\n      last: $last\n      categories: $categories\n      parkingAvailable: $parkingAvailable\n      wheelChairRentable: $wheelChairRentable\n      elevatorAvailable: $elevatorAvailable\n      toiletAvailable: $toiletAvailable\n      pathExists: $pathExists\n      needCompanion: $needCompanion\n      coordinates: $coordinates\n    ) {\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasNextPage\n      }\n      edges {\n        node {\n          id\n          name\n          address\n          thumbnails\n          parkingAvailable\n          parkingCount\n          wheelChairRentable\n          elevatorAvailable\n          toiletAvailable\n          pathExists\n          pathDescription\n          latitude\n          longitude\n          category\n          needCompanion\n          distance\n          tel\n        }\n        cursor\n      }\n      totalCount\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
