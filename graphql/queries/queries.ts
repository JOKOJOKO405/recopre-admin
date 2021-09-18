import { gql } from '@apollo/client'

export const getUser = gql`
  query getUser {
    user {
      name
      id
      password
    }
  }
`
