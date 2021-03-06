import Amplify, { API } from 'aws-amplify'

import awsconfig from '../../aws-exports'

const graphqlRequest = (operation, parameters) =>
    API.graphql({
        query: operation,
        variables: parameters,
        authMode: 'API_KEY'
    })

export const setupAmplify = () =>
    Amplify.configure(awsconfig)