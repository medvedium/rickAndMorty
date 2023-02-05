import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query allCharacters($page: Int) {
    characters(page: $page) {
      results {
        name
        image
        id
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;

export const CHARACTER = gql`
  query character ($id: ID!) {
    character(id: $id) {
      name
      image
      gender
      id
      status
      species
      type
      created
      episode {
        name
        episode
        air_date
      }
    }
  }
`