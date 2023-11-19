'use client';
import { format, differenceInHours } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const TicketCard = ({ ticket }) => {
  const departureDate = new Date(ticket.departureTime);
  const arrivalDate = new Date(ticket.arrivalTime);
  const departureTime = ticket.departureTime && format(departureDate, 'HH:mm');
  const arrivalTime = ticket.departureTime && format(arrivalDate, 'HH:mm');

  return (
    <div className='bg-blue-300 rounded-xl p-2'>
      <img
        src='https://previews.123rf.com/images/rrraven/rrraven1807/rrraven180700010/105130784-jet-plane-icon.jpg'
        alt=''
        className='w-full rounded-xl'
      />
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <p>{departureTime}</p>
          <p>{ticket.fromIataCode}</p>
          <p>{ticket.from}</p>
        </div>
        <div>
          <p>{ticket.flightTime}</p> plane icon
        </div>
        <div>
          <p> {arrivalTime}</p>
          <p>{ticket.toIataCode}</p>
          <h1>{ticket.to}</h1>
        </div>
      </div>
      <p>Date: {format(new Date(ticket.date), 'dd MMM yyyy')}</p>
    </div>
  );
};

export default TicketCard;
