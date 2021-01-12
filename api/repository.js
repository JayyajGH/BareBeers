import { gql } from 'graphql-request'

export default $graphcms => ({
  async getListOfWines() {
    return await $graphcms.request(
      gql`
      {
        products {
          name,
          brewery,
          price,
          image {
            url
          }
        }
      }
      `
    )
  }
})
