'use client';
import { useEffect, useState } from 'react';
import TicketCard from '../components/TicketCard';
import { getTickets } from '../services';

export default function Home() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const tickets = await getTickets();

    if (tickets) {
      setTickets(tickets.tickets);
    }
  };

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 min-h-screen flex-col items-center justify-between xl:p-24 p-2'>
      {tickets.length ? (
        <>
          <p className='text-center lg:col-span-3 md:col-span-3 grid-span-1'>
            Total Flights: {tickets.length}
          </p>
          {tickets.map((ticket) => (
            <div className='flex' key={ticket.date}>
              <TicketCard ticket={ticket} />
            </div>
          ))}
        </>
      ) : (
        <p className='text-center md:col-span-3'>Loading tickets...</p>
      )}
    </div>
  );
}
