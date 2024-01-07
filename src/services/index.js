import request, { gql } from 'graphql-request';
import { createClient } from 'pexels';

const hygraphToken = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
const pexelsKey = process.env.NEXT_PUBLIC_PEXELS_KEY;
const client = createClient(pexelsKey);

export const getTickets = async () => {
  const query = gql`
    query getTickets {
      tickets {
        date
        from
        to
        company {
          name
        }
        departureTime
        fromIataCode
        toIataCode
        arrivalTime
        flightTime
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

export const getPictureLink = async (place) => {
  try {
    const query = place;
    const response = await client.photos.search({ query, per_page: 1 });
    if (response) return response.photos[0].src.landscape;
  } catch (err) {
    console.log(err);
  }
};
