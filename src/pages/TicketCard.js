'use client';

import { testing } from '@/services';
import { useEffect } from 'react';

const TicketCard = () => {
  
  useEffect(() => {
    testing();
  }, []);
  return (
    <div>
      <h3>Ticket Card</h3>
    </div>
  );
};

export default TicketCard;
