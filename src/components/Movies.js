// @flow

import React, { PureComponent } from 'react';
import idx from 'idx';

import { withMovies } from '../queries.js';
import MovieDetail from './MovieDetail.js';
import MoviesStyle from './Movies.style.js';

import type { TAggregation, TSearchResult }  from '@nangu/sdk';

type TProps = {
    data: {
        ... TSearchResult,
        loading: boolean,
    },
};

type TState = {
    movieId: ?string,
};

class Movies extends PureComponent<TProps, TState> {
    _openMovieDetail = (movieId) => {
        this.setState({ movieId });
    };

    _onMovieDetailClose = () => {
        this.setState({ movieId: null });
    };

    _renderMovie(movie: TAggregation) {
        const name = movie.name || '';
        const source = movie.media && movie.media.portrait;

        return (
            <div key={movie.id} style={MoviesStyle.movieWrapperStyle}>
                <div style={MoviesStyle.movieContainerStyle} onClick={() => this._openMovieDetail(movie.id)}>
                    <img src={source} alt={`${name} movie cover`} style={MoviesStyle.imageSize} />
                    <span style={MoviesStyle.titleStyle}>{movie.name}</span>
                </div>
            </div>
        );
    }

    render() {
        const {props} = this;
        let content;
        let movieDetail;

        if (this.state && this.state.movieId != null) {
            movieDetail = <MovieDetail movieId={this.state.movieId} onClose={this._onMovieDetailClose} />;
        }

        if (props.data.loading) {
            content = <span style={MoviesStyle.loadingStyle}>Loading...</span>;
        } else {

            const edges = idx(props.data, _ => _.search.edges);

            content = edges && edges.map((edge) => {
                return edge && edge.node && this._renderMovie(edge.node);
            });
        }

        return (
            <div style={MoviesStyle.containerStyle}>
                {content}
                {movieDetail}
            </div>
        );
    }
}

export default withMovies(Movies);
