'use client';
import { getPictureLink } from '@/services';
import { format } from 'date-fns';
import Image from 'next/image';

const TicketCard = ({ ticket }) => {
  const departureDate = new Date(ticket.departureTime);
  const arrivalDate = new Date(ticket.arrivalTime);
  const departureTime = ticket.departureTime && format(departureDate, 'HH:mm');
  const arrivalTime = ticket.departureTime && format(arrivalDate, 'HH:mm');

  return (
    <div className='bg-card rounded-[40px] p-4 m-2'>
      {ticket.node.destinationImg ? (
        <img
          src={ticket.node.destinationImg}
          alt={ticket.node.destination}
          className='w-full rounded-[30px]'
        />
      ) : (
        <p className='text-center'>Loading..</p>
      )}

      <div className='flex justify-between mt-2'>
        <div className='flex flex-col'>
          <p>{departureTime}</p>
          <p>{ticket.node.fromIataCode}</p>
          <p>{ticket.node.from}</p>
        </div>
        <div>
          <p>{ticket.node.flightTime}</p>
          <Image
            src={'/assets/plane-icon.png'}
            width={30}
            height={30}
            alt='Picture of the author'
            className='filter invert mt-3'
          />
        </div>
        <div>
          <p> {arrivalTime}</p>
          <p>{ticket.node.toIataCode}</p>
          <h1>{ticket.node.to}</h1>
        </div>
      </div>
      <p>Date: {format(new Date(ticket.node.date), 'dd MMM yyyy')}</p>
    </div>
  );
};

export default TicketCard;
