import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query allCharacters($page: Int) {
    characters(page: $page) {
      results {
        name
        status
        image
        species
        id
        gender
        location {
          name
          residents {
            name
            created
          }
        }
        origin {
          id
          name
          residents {
            image
            created
          }
        }
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
