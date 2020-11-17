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
  users?: Maybe<Array<Maybe<User>>>
  user?: Maybe<User>
}

export type QueryUserArgs = {
  id: Scalars['ID']
}

export type RegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  confirmPassword: Scalars['String']
}

export type Mutation = {
  updateUser?: Maybe<User>
  registerUser?: Maybe<User>
}

export type MutationUpdateUserArgs = {
  newName?: Maybe<Scalars['String']>
}

export type MutationRegisterUserArgs = {
  registerInput?: Maybe<RegisterInput>
}

export type User = {
  id: Scalars['ID']
  username?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  avatar?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['IsoDate']>
  token: Scalars['String']
}
