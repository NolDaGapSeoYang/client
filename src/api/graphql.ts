/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CoordinateInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Metadata = {
  __typename?: 'Metadata';
  id: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String'];
  basicInfo: Scalars['String'];
  category: Scalars['String'];
  distance: Scalars['Float'];
  elevatorAvailable: Scalars['Boolean'];
  etc?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  metadata: Array<Metadata>;
  name: Scalars['String'];
  needCompanion: Scalars['Boolean'];
  parkingAvailable: Scalars['Boolean'];
  parkingCount: Scalars['Float'];
  pathDescription?: Maybe<Scalars['String']>;
  pathExists: Scalars['Boolean'];
  tel?: Maybe<Scalars['String']>;
  thumbnails: Array<Scalars['String']>;
  toiletAvailable: Scalars['Boolean'];
  wheelChairRentable: Scalars['Boolean'];
};

export type PlaceCountInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  elevatorAvailable?: InputMaybe<Scalars['Boolean']>;
  needCompanion: Scalars['Boolean'];
  parkingAvailable?: InputMaybe<Scalars['Boolean']>;
  pathExists?: InputMaybe<Scalars['Boolean']>;
  toiletAvailable?: InputMaybe<Scalars['Boolean']>;
  wheelChairRentable?: InputMaybe<Scalars['Boolean']>;
};

export type PlaceEdge = {
  __typename?: 'PlaceEdge';
  cursor: Scalars['String'];
  node: Place;
};

export type PlacesConnection = {
  __typename?: 'PlacesConnection';
  edges: Array<PlaceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  place?: Maybe<Place>;
  placeCount: Scalars['Float'];
  places: PlacesConnection;
};


export type QueryPlaceArgs = {
  id: Scalars['String'];
};


export type QueryPlaceCountArgs = {
  input: PlaceCountInput;
};


export type QueryPlacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  coordinates?: InputMaybe<CoordinateInput>;
  elevatorAvailable?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  needCompanion: Scalars['Boolean'];
  parkingAvailable?: InputMaybe<Scalars['Boolean']>;
  pathExists?: InputMaybe<Scalars['Boolean']>;
  toiletAvailable?: InputMaybe<Scalars['Boolean']>;
  wheelChairRentable?: InputMaybe<Scalars['Boolean']>;
};

export type PlaceInfoFragment = { __typename?: 'Place', parkingAvailable: boolean, parkingCount: number, wheelChairRentable: boolean, elevatorAvailable: boolean, toiletAvailable: boolean, pathExists: boolean, pathDescription?: string | null, latitude: number, longitude: number, etc?: string | null, basicInfo: string, category: string, id: string } & { ' $fragmentName'?: 'PlaceInfoFragment' };

export type GetSearchListQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  categories?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  parkingAvailable?: InputMaybe<Scalars['Boolean']>;
  wheelChairRentable?: InputMaybe<Scalars['Boolean']>;
  elevatorAvailable?: InputMaybe<Scalars['Boolean']>;
  toiletAvailable?: InputMaybe<Scalars['Boolean']>;
  pathExists?: InputMaybe<Scalars['Boolean']>;
  needCompanion: Scalars['Boolean'];
  coordinates?: InputMaybe<CoordinateInput>;
}>;


export type GetSearchListQuery = { __typename?: 'Query', places: { __typename?: 'PlacesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'PlaceEdge', cursor: string, node: { __typename?: 'Place', id: string, name: string, address: string, thumbnails: Array<string>, parkingAvailable: boolean, parkingCount: number, wheelChairRentable: boolean, elevatorAvailable: boolean, toiletAvailable: boolean, pathExists: boolean, pathDescription?: string | null, latitude: number, longitude: number, category: string, needCompanion: boolean, distance: number, tel?: string | null } }> } };

export const PlaceInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parkingAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"parkingCount"}},{"kind":"Field","name":{"kind":"Name","value":"wheelChairRentable"}},{"kind":"Field","name":{"kind":"Name","value":"elevatorAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"toiletAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pathExists"}},{"kind":"Field","name":{"kind":"Name","value":"pathDescription"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"etc"}},{"kind":"Field","name":{"kind":"Name","value":"basicInfo"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<PlaceInfoFragment, unknown>;
export const GetSearchListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearchList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parkingAvailable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wheelChairRentable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"elevatorAvailable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"toiletAvailable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pathExists"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"needCompanion"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coordinates"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CoordinateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"categories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}},{"kind":"Argument","name":{"kind":"Name","value":"parkingAvailable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parkingAvailable"}}},{"kind":"Argument","name":{"kind":"Name","value":"wheelChairRentable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wheelChairRentable"}}},{"kind":"Argument","name":{"kind":"Name","value":"elevatorAvailable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"elevatorAvailable"}}},{"kind":"Argument","name":{"kind":"Name","value":"toiletAvailable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"toiletAvailable"}}},{"kind":"Argument","name":{"kind":"Name","value":"pathExists"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pathExists"}}},{"kind":"Argument","name":{"kind":"Name","value":"needCompanion"},"value":{"kind":"Variable","name":{"kind":"Name","value":"needCompanion"}}},{"kind":"Argument","name":{"kind":"Name","value":"coordinates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coordinates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"}},{"kind":"Field","name":{"kind":"Name","value":"parkingAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"parkingCount"}},{"kind":"Field","name":{"kind":"Name","value":"wheelChairRentable"}},{"kind":"Field","name":{"kind":"Name","value":"elevatorAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"toiletAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pathExists"}},{"kind":"Field","name":{"kind":"Name","value":"pathDescription"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"needCompanion"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}},{"kind":"Field","name":{"kind":"Name","value":"tel"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetSearchListQuery, GetSearchListQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CoordinateInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Metadata = {
  __typename?: 'Metadata';
  id: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String'];
  basicInfo: Scalars['String'];
  category: Scalars['String'];
  distance: Scalars['Float'];
  elevatorAvailable: Scalars['Boolean'];
  etc?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  metadata: Array<Metadata>;
  name: Scalars['String'];
  needCompanion: Scalars['Boolean'];
  parkingAvailable: Scalars['Boolean'];
  parkingCount: Scalars['Float'];
  pathDescription?: Maybe<Scalars['String']>;
  pathExists: Scalars['Boolean'];
  tel?: Maybe<Scalars['String']>;
  thumbnails: Array<Scalars['String']>;
  toiletAvailable: Scalars['Boolean'];
  wheelChairRentable: Scalars['Boolean'];
};

export type PlaceCountInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  elevatorAvailable?: InputMaybe<Scalars['Boolean']>;
  needCompanion: Scalars['Boolean'];
  parkingAvailable?: InputMaybe<Scalars['Boolean']>;
  pathExists?: InputMaybe<Scalars['Boolean']>;
  toiletAvailable?: InputMaybe<Scalars['Boolean']>;
  wheelChairRentable?: InputMaybe<Scalars['Boolean']>;
};

export type PlaceEdge = {
  __typename?: 'PlaceEdge';
  cursor: Scalars['String'];
  node: Place;
};

export type PlacesConnection = {
  __typename?: 'PlacesConnection';
  edges: Array<PlaceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  place?: Maybe<Place>;
  placeCount: Scalars['Float'];
  places: PlacesConnection;
};


export type QueryPlaceArgs = {
  id: Scalars['String'];
};


export type QueryPlaceCountArgs = {
  input: PlaceCountInput;
};


export type QueryPlacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['String']>>;
  coordinates?: InputMaybe<CoordinateInput>;
  elevatorAvailable?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  needCompanion: Scalars['Boolean'];
  parkingAvailable?: InputMaybe<Scalars['Boolean']>;
  pathExists?: InputMaybe<Scalars['Boolean']>;
  toiletAvailable?: InputMaybe<Scalars['Boolean']>;
  wheelChairRentable?: InputMaybe<Scalars['Boolean']>;
};

export type PlaceInfoFragment = { __typename?: 'Place', parkingAvailable: boolean, parkingCount: number, wheelChairRentable: boolean, elevatorAvailable: boolean, toiletAvailable: boolean, pathExists: boolean, pathDescription?: string | null, latitude: number, longitude: number, etc?: string | null, basicInfo: string, category: string, id: string } & { ' $fragmentName'?: 'PlaceInfoFragment' };

export type GetSearchListQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  categories?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  parkingAvailable?: InputMaybe<Scalars['Boolean']>;
  wheelChairRentable?: InputMaybe<Scalars['Boolean']>;
  elevatorAvailable?: InputMaybe<Scalars['Boolean']>;
  toiletAvailable?: InputMaybe<Scalars['Boolean']>;
  pathExists?: InputMaybe<Scalars['Boolean']>;
  needCompanion: Scalars['Boolean'];
  coordinates?: InputMaybe<CoordinateInput>;
}>;


export type GetSearchListQuery = { __typename?: 'Query', places: { __typename?: 'PlacesConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean }, edges: Array<{ __typename?: 'PlaceEdge', cursor: string, node: { __typename?: 'Place', id: string, name: string, address: string, thumbnails: Array<string>, parkingAvailable: boolean, parkingCount: number, wheelChairRentable: boolean, elevatorAvailable: boolean, toiletAvailable: boolean, pathExists: boolean, pathDescription?: string | null, latitude: number, longitude: number, category: string, needCompanion: boolean, distance: number, tel?: string | null } }> } };

export type MetadataKeySpecifier = ('id' | 'key' | 'value' | MetadataKeySpecifier)[];
export type MetadataFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceKeySpecifier = ('address' | 'basicInfo' | 'category' | 'distance' | 'elevatorAvailable' | 'etc' | 'id' | 'images' | 'latitude' | 'longitude' | 'metadata' | 'name' | 'needCompanion' | 'parkingAvailable' | 'parkingCount' | 'pathDescription' | 'pathExists' | 'tel' | 'thumbnails' | 'toiletAvailable' | 'wheelChairRentable' | PlaceKeySpecifier)[];
export type PlaceFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	basicInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	distance?: FieldPolicy<any> | FieldReadFunction<any>,
	elevatorAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	etc?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	needCompanion?: FieldPolicy<any> | FieldReadFunction<any>,
	parkingAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	parkingCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pathDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	pathExists?: FieldPolicy<any> | FieldReadFunction<any>,
	tel?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnails?: FieldPolicy<any> | FieldReadFunction<any>,
	toiletAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	wheelChairRentable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceEdgeKeySpecifier = ('cursor' | 'node' | PlaceEdgeKeySpecifier)[];
export type PlaceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlacesConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | PlacesConnectionKeySpecifier)[];
export type PlacesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('place' | 'placeCount' | 'places' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	placeCount?: FieldPolicy<any> | FieldReadFunction<any>,
	places?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Metadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataKeySpecifier | (() => undefined | MetadataKeySpecifier),
		fields?: MetadataFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Place?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceKeySpecifier | (() => undefined | PlaceKeySpecifier),
		fields?: PlaceFieldPolicy,
	},
	PlaceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceEdgeKeySpecifier | (() => undefined | PlaceEdgeKeySpecifier),
		fields?: PlaceEdgeFieldPolicy,
	},
	PlacesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlacesConnectionKeySpecifier | (() => undefined | PlacesConnectionKeySpecifier),
		fields?: PlacesConnectionFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;