// @flow

import React from 'react';
import idx from 'idx';

import { withDetail } from '../queries.js';
import MovieDetailStyle from './MovieDetail.style';

import type { TSearchResult }  from '@nangu/sdk';

type TProps = {
    data: {
        ... TSearchResult,
        loading: boolean,
    },
    onClose: () => void,
};

function MovieDetail(props: TProps) {
    if (props.data.loading) {
        return null;
    }

    const node = idx(props.data, _ => _.search.edges[0].node);

    if (!node) {
        return null;
    }

    let image;
    let imageUrl;

    if (node.media) {
        if (node.media.landscape) {
            imageUrl = node.media.landscape;
        } else if (node.media.screenshots && node.media.screenshots[0]) {
            imageUrl = node.media.screenshots[0];
        }

        if (imageUrl) {
            const name = node.name || '';

            image = (
                <div style={MovieDetailStyle.imageContainerStyle}>
                    <img src={imageUrl} alt={`${name} detail cover`} style={MovieDetailStyle.imageStyle} />
                </div>
            );
        }
    }

    return (
        <div style={MovieDetailStyle.wrapperStyle}>
            <div style={MovieDetailStyle.containerStyle}>
                <div onClick={props.onClose} style={MovieDetailStyle.closeButtonContainerStyle}>
                    <span style={MovieDetailStyle.closeButtonStyle}>X</span>
                </div>
                {image}
                <span style={MovieDetailStyle.titleStyle}>{node.name}</span>
                <span style={MovieDetailStyle.descriptionStyle}>{node.description}</span>
            </div>
        </div>
    );
}

export default withDetail(MovieDetail);
