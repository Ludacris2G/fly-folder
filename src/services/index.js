import request, { gql } from 'graphql-request';

const hygraphToken = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const testing = async () => {
  const query = gql`
    query getTickets {
      tickets {
        createdAt
        from
        to
      }
    }
  `;

  try {
    const response = await request(hygraphToken, query);
    console.log('GQL response: ', response);
    return response;
  } catch (error) {
    console.log('hi');
    console.error(error);
  }
};
