// @flow

import { queriesHoc } from '@nangu/sdk';

const DETAIL_QUERY = `
    id
    description
    name
    media {
        landscape(width: 400, height: 300)
        screenshots(width: 400, height: 300)
    }
`;

const MOVIES_QUERY = `
    id
    name
    media {
        portrait(width: 105, height: 157)
    }
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
export const withDetail = queriesHoc.getSearch(
    {
        options: (ownProps: { movieId: string }): Object => {
            return {
                variables: {
                    id: ownProps.movieId
                },
            };
        },
    },
    DETAIL_QUERY,
);
