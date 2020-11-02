import gql from 'graphql-tag'
import { FRAGMENT_wholeUser } from '~graphql/fragments'

export const UPDATE_PROFILE = gql`
  ${FRAGMENT_wholeUser}

  mutation updateUser($newName: String) {
    updateUser(newName: $newName) {
      ...wholeUserObject
    }
  }
`

export const UPDATE_AVATAR = gql`
  mutation updateAvatar($newAvatar: String!) {
    updateAvatar(newAvatar: $newAvatar) {
      avatar
    }
  }
`
