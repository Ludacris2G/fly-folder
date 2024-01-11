'use client';
import React, { useEffect, useState } from 'react';
import TicketCard from '../components/TicketCard';
import { getPictureLink, getTickets } from '../services';

export default function Home() {
  const [tickets, setTickets] = useState([]);
  const [flightsThisYear, setFlightsThisYear] = useState(0);

  useEffect(() => {
    fetchTickets();
  }, []);

  // statistics calculator
  useEffect(() => {
    let flightsThisYearCount = 0;

    tickets.forEach((ticket) => {
      if (
        new Date().getFullYear() === new Date(ticket.node.date).getFullYear()
      ) {
        flightsThisYearCount += 1;
      }
    });

    setFlightsThisYear(flightsThisYearCount);
  }, [tickets]);

  const fetchTickets = async () => {
    let allTickets = [];

    // recursive function
    const fetchPage = async (after) => {
      const response = await getTickets(after);
      if (response && response.ticketsConnection.edges.length > 0) {
        const ticketPromises = response.ticketsConnection.edges.map(
          async (ticket) => {
            const link = await getPictureLink(ticket.node.to);
            ticket.node.destinationImg = link;
            return ticket;
          }
        );

        const ticketsData = await Promise.all(ticketPromises);
        allTickets = [...allTickets, ...ticketsData];
        if (response.ticketsConnection.pageInfo.hasNextPage) {
          await fetchPage(response.ticketsConnection.pageInfo.endCursor);
        } else {
          setTickets(allTickets);
        }
      }
    };

    await fetchPage(null);
  };

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 min-h-screen flex-col items-center justify-between xl:p-24 xl:pt-2 p-2 bg-background'>
      {tickets.length ? (
        <>
          <p className='text-center lg:col-span-3 md:col-span-3 grid-span-1'>
            Total Flights: {tickets.length}
          </p>
          <p className='text-center lg:col-span-3 md:col-span-3 grid-span-1'>
            Flights this year: {flightsThisYear}
          </p>
          {tickets.map((ticket) => (
            <React.Fragment key={ticket.node.date}>
              <div className='flex'>
                <TicketCard ticket={ticket} />
              </div>
            </React.Fragment>
          ))}
        </>
      ) : (
        <p className='text-center md:col-span-3'>Loading tickets...</p>
      )}
    </div>
  );
}
