import gql from 'graphql-tag'

export const FRAGMENT_wholeUser= gql`
  fragment wholeUserObject on User {
    _id
    username
    email
    name
    bio
    avatar
    createdAt
  }
`
