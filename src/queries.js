// @flow

import { queriesHoc } from '@nangu/sdk';

const MOVIES_QUERY = `
    id
    name
`;

const MOVIES_OPTIONS = {
    options: {
        variables: {
            type: 'MOVIE',
            first: 10,
        },
    }
};

export const withMovies = queriesHoc.getSearch(MOVIES_OPTIONS, MOVIES_QUERY);
