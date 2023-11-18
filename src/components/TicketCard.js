'use client';
import { format } from 'date-fns';

const TicketCard = ({ ticket }) => {
  return (
    <div className='bg-white'>
      <p>From: {ticket.from}</p>
      <h1>To: {ticket.to}</h1>
      <p>Date: {format(new Date(ticket.date), 'dd MMM yyyy')}</p>
    </div>
  );
};

export default TicketCard;
