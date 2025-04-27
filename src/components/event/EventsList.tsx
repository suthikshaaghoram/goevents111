
import React from 'react';
import EventCard, { EventCardProps } from './EventCard';

interface EventsListProps {
  events: EventCardProps[];
  title?: string;
}

const EventsList: React.FC<EventsListProps> = ({ events, title }) => {
  return (
    <div className="py-6">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      
      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No events found.</p>
        </div>
      )}
    </div>
  );
};

export default EventsList;
