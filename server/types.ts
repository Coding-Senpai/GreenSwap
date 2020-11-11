export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  IsoDate: any
}

export type Query = {
  clients?: Maybe<Array<Maybe<Client>>>
  client?: Maybe<Client>
}

export type QueryClientArgs = {
  id: Scalars['ID']
}

export type Mutation = {
  updateUser?: Maybe<Client>
}

export type MutationUpdateUserArgs = {
  newName?: Maybe<Scalars['String']>
}

export type Client = {
  id: Scalars['ID']
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['IsoDate']>
}

export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

import { ObjectID } from 'mongodb'
export type ClientDbObject = {
  _id: ObjectID
  username?: Maybe<string>
  email?: Maybe<string>
  name?: Maybe<string>
  bio?: Maybe<string>
  avatar?: Maybe<string>
  createdAt?: Maybe<any>
}
