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
    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 min-h-screen flex-col items-center justify-between p-24'>
      {tickets.map((ticket) => (
        <div className='flex' key={ticket.date}>
          <TicketCard ticket={ticket} />
        </div>
      ))}
    </div>
  );
}
