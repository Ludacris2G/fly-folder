const { graphql, buildSchema } = require('graphql');

const hygraphToken = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN;

export const testing = () => {
  console.log('runs');
};
