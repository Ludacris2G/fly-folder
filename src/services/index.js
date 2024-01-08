import request, { gql } from 'graphql-request';
import { createClient } from 'pexels';

const hygraphToken = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
const pexelsKey = process.env.NEXT_PUBLIC_PEXELS_KEY;
const client = createClient(pexelsKey);

export const getTickets = async () => {
  const query = gql`
    query getTickets {
      ticketsConnection(first: 100, orderBy: date_DESC) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
          pageSize
        }
        edges {
          node {
            from
            fromIataCode
            flightTime
            date
            departureTime
            arrivalTime
            to
            toIataCode
          }
        }
      }
    }
  `;

  try {
    const response = await request(hygraphToken, query);
    // console.log(response.ticketsConnection.edges);
    return response.ticketsConnection.edges;
  } catch (error) {
    console.error(error);
  }
};

export const getPictureLink = async (place) => {
  try {
    const query = place;
    const response = await client.photos.search({ query, per_page: 1 });
    if (response) return response.photos[0].src.landscape;
  } catch (err) {
    console.log(err);
  }
};
