import {createApi} from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import {BASE_URL} from "../utils/constants";

export const api = createApi({
	reducerPath: "api",
	baseQuery: graphqlRequestBaseQuery({
		url: BASE_URL
	}),
	endpoints: (build) => ({
		getCharacters: build.query<any, any>({
			query: () => ({
				url: 'character',
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
			}),
			transformResponse: (response: any) => response.results
		}),

	})
})

export const {useGetCharactersQuery} = api