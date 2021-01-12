import { GraphQLClient } from 'graphql-request'

export default (_, inject) => {
  //inject('graphcms', new GraphQLClient(process.env.graphcmsEndpoint))
  // This should be coming from an environment variable rather than being hardcoded e.g. in AWS etc.
  inject('graphcms', new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckjsorjlwykf801wkby13c2h0/master'))
}
