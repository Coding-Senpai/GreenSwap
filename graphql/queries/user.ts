import gql from 'graphql-tag'
import { FRAGMENT_wholeUser } from '~graphql/fragments'

export const PROFILE_BY_USERNAME = gql`
  ${FRAGMENT_wholeUser}

  query client($username: String!) {
    client(username: $username) {
      otherField
      ...wholeUserObject
    }
  }
`
