// @flow

import cuid from 'cuid';

import type { TDeviceType } from '@nangu/sdk';

type TConfiguration = {
    CLIENT_VERSION: string,
    DEVICE_ID: string,
    DEVICE_TYPE: TDeviceType,
    OAUTH_CONFIG: {
        clientId: string,
        clientSecret: string,
    },
    GRAPHQL_URI: string,
};

type TLogin = {
    username: string,
    password: string,
};

export const CONFIGURATION: TConfiguration = {
    CLIENT_VERSION: 'TO_FILL',
    DEVICE_ID: cuid(),
    DEVICE_TYPE: 'TO_FILL',
    OAUTH_CONFIG: {
        clientId: 'TO_FILL',
        clientSecret: 'TO_FILL',
    },
    GRAPHQL_URI: 'TO_FILL',
};

export const LOGIN: TLogin = {
    username: 'TO_FILL',
    password: 'TO_FILL',
};
