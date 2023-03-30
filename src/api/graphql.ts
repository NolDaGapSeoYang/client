/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', places: Array<{ __typename?: 'Place', address: string }> };


export const TestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<TestQuery, TestQueryVariables>;
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

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = { __typename?: 'Query', places: Array<{ __typename?: 'Place', address: string }> };
