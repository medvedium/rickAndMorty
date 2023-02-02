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
