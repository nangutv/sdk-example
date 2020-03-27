// @flow

import { ApolloProvider } from 'react-apollo';
import React, { PureComponent } from 'react';
import sdk from '@nangu/sdk';

import Movies from './Movies';
import { CONFIGURATION, LOGIN } from './configuration.js';

import type { TGraphqlError, TNetworkError, TOperation } from '@nangu/sdk';

function getTokenInfo(): Promise<string> {
    console.warn('getTokenInfo is not implemented, returning an empty string...');

    return Promise.resolve('');
}

function storeTokenInfo(tokenInfoString: string): Promise<any> {
    console.warn(`storeTokenInfo is not implemented, "${tokenInfoString}" was not saved.`);

    return Promise.resolve();
}

function graphqlErrorHandler(
    graphqlError: TGraphqlError,
    fromExternalClient: boolean,
    operation: TOperation,
) {
    console.error('GraphQL error:', graphqlError);
}

function networkErrorHandler(
    networkError: TNetworkError,
    fromExternalClient: boolean,
    operation: TOperation,
) {
    console.error('Network error:', networkError);
}

type TState = {
    loggedIn: boolean,
};

class App extends PureComponent<{}, TState> {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount() {
        sdk.graphql.init({
            clientVersion: CONFIGURATION.CLIENT_VERSION,
            deviceId: CONFIGURATION.DEVICE_ID,
            deviceType: CONFIGURATION.DEVICE_TYPE,
            getTokenInfo,
            graphqlErrorHandler,
            graphqlUri: CONFIGURATION.GRAPHQL_URI,
            networkErrorHandler,
            oAuthConfig: CONFIGURATION.OAUTH_CONFIG,
            storeTokenInfo,
        }).then((initResponse) => {
            console.info('SDK init successful.');

            if (initResponse.loggedIn) {
                console.info('Already logged in.');
            } else {
                console.info('Going to log in...');

                return sdk.graphql.login(LOGIN.username, LOGIN.password)
            }
        }).then(() => {
            console.info('Log in successful.');

            this.setState({ loggedIn: true });
        }).catch((error) => {
            console.error('SDK init/login error:', error);
        });
    }

    render() {
        if (!this.state.loggedIn) {
            return (
                <h1>nangu.TV SDK demo app - initializing...</h1>
            );
        }

        return (
            <ApolloProvider client={sdk.graphql.getDefaultApolloClientInstance()}>
                <Movies />
            </ApolloProvider>
        );
    }
}

export default App;
