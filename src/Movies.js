// @flow

import React, { PureComponent } from 'react';

import { withMovies } from './queries.js';

import type { TSearchResult }  from '@nangu/sdk';

type TProps = {
    data: {
        ... TSearchResult,
        loading: boolean,
    },
};

class Movies extends PureComponent<TProps> {
    _renderMovie(movie) {
        return (
            <div key={movie.id}>{movie.name}</div>
        );
    }

    render() {
        const {props} = this;
        let content;

        if (props.data.loading) {
            content = <div>Loading...</div>;
        } else {
            const { edges } = props.data.search;

            content = edges.map((edge) => {
                return this._renderMovie(edge.node);
            });
        }

        return content;
    }
}

export default withMovies(Movies);
