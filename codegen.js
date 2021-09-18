require('dotenv').config()

module.exports = {
  schema: [
      {
        [process.env.GRAPHQL_ENDPOINT]: {
              headers: {
                // Authorization: 'Bearer ' + process.env.HASURA_ADMIN_SECRET,
                'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
              },
          },
      },
  ],
  documents: ['graphql/**/*.ts'],
  overwrite: true,
  generates: {
      './types/graphql/schema.d.ts': {
          plugins: [
              'typescript',
          ],
      },
      // './graphql.schema.json': {
      //     plugins: ['introspection'],
      // },
  },
};