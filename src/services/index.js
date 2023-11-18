import request, { gql } from 'graphql-request';

const hygraphToken = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;

export const getTickets = async () => {
  const query = gql`
    query getTickets {
      tickets {
        date
        from
        to
      }
    }
  `;

  try {
    const response = await request(hygraphToken, query);
    return response;
  } catch (error) {
    console.error(error);
  }
};
