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

export type Metadata = {
  __typename?: 'Metadata';
  id: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String'];
  basicInfo: Scalars['String'];
  category: Scalars['String'];
  elevatorAvailable: Scalars['Boolean'];
  etc?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  metadata: Array<Metadata>;
  name: Scalars['String'];
  parkingAvailable: Scalars['Boolean'];
  parkingCount: Scalars['Float'];
  pathDescription?: Maybe<Scalars['String']>;
  pathExists: Scalars['Boolean'];
  thumbnails: Array<Scalars['String']>;
  toiletAvailable: Scalars['Boolean'];
  wheelChairRentable: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  places: Array<Place>;
};

export type PlaceInfoFragment = { __typename?: 'Place', parkingAvailable: boolean, parkingCount: number, wheelChairRentable: boolean, elevatorAvailable: boolean, toiletAvailable: boolean, pathExists: boolean, pathDescription?: string | null, latitude: number, longitude: number, etc?: string | null, basicInfo: string, category: string, id: string } & { ' $fragmentName'?: 'PlaceInfoFragment' };

export type GetPlaceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlaceQuery = { __typename?: 'Query', places: Array<(
    { __typename: 'Place' }
    & { ' $fragmentRefs'?: { 'PlaceInfoFragment': PlaceInfoFragment } }
  )> };

export const PlaceInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parkingAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"parkingCount"}},{"kind":"Field","name":{"kind":"Name","value":"wheelChairRentable"}},{"kind":"Field","name":{"kind":"Name","value":"elevatorAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"toiletAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pathExists"}},{"kind":"Field","name":{"kind":"Name","value":"pathDescription"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"etc"}},{"kind":"Field","name":{"kind":"Name","value":"basicInfo"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<PlaceInfoFragment, unknown>;
export const GetPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceInfo"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parkingAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"parkingCount"}},{"kind":"Field","name":{"kind":"Name","value":"wheelChairRentable"}},{"kind":"Field","name":{"kind":"Name","value":"elevatorAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"toiletAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"pathExists"}},{"kind":"Field","name":{"kind":"Name","value":"pathDescription"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"etc"}},{"kind":"Field","name":{"kind":"Name","value":"basicInfo"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetPlaceQuery, GetPlaceQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Metadata = {
  __typename?: 'Metadata';
  id: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  address: Scalars['String'];
  basicInfo: Scalars['String'];
  category: Scalars['String'];
  elevatorAvailable: Scalars['Boolean'];
  etc?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  metadata: Array<Metadata>;
  name: Scalars['String'];
  parkingAvailable: Scalars['Boolean'];
  parkingCount: Scalars['Float'];
  pathDescription?: Maybe<Scalars['String']>;
  pathExists: Scalars['Boolean'];
  thumbnails: Array<Scalars['String']>;
  toiletAvailable: Scalars['Boolean'];
  wheelChairRentable: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  places: Array<Place>;
};

export type PlaceInfoFragment = { __typename?: 'Place', parkingAvailable: boolean, parkingCount: number, wheelChairRentable: boolean, elevatorAvailable: boolean, toiletAvailable: boolean, pathExists: boolean, pathDescription?: string | null, latitude: number, longitude: number, etc?: string | null, basicInfo: string, category: string, id: string } & { ' $fragmentName'?: 'PlaceInfoFragment' };

export type GetPlaceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlaceQuery = { __typename?: 'Query', places: Array<(
    { __typename: 'Place' }
    & { ' $fragmentRefs'?: { 'PlaceInfoFragment': PlaceInfoFragment } }
  )> };

export type MetadataKeySpecifier = ('id' | 'key' | 'value' | MetadataKeySpecifier)[];
export type MetadataFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceKeySpecifier = ('address' | 'basicInfo' | 'category' | 'elevatorAvailable' | 'etc' | 'id' | 'images' | 'latitude' | 'longitude' | 'metadata' | 'name' | 'parkingAvailable' | 'parkingCount' | 'pathDescription' | 'pathExists' | 'thumbnails' | 'toiletAvailable' | 'wheelChairRentable' | PlaceKeySpecifier)[];
export type PlaceFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	basicInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	elevatorAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	etc?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	images?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parkingAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	parkingCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pathDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	pathExists?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnails?: FieldPolicy<any> | FieldReadFunction<any>,
	toiletAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	wheelChairRentable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('places' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	places?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Metadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataKeySpecifier | (() => undefined | MetadataKeySpecifier),
		fields?: MetadataFieldPolicy,
	},
	Place?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceKeySpecifier | (() => undefined | PlaceKeySpecifier),
		fields?: PlaceFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;