
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  isPopular?: boolean;
  spotsLeft?: number;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  category,
  image,
  isPopular,
  spotsLeft
}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-campus-600">{category}</Badge>
          {isPopular && <Badge variant="secondary" className="bg-orange-500 text-white">Popular</Badge>}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 h-14">
          {title}
        </h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
        
        <div className="pt-3 flex items-center justify-between">
          {spotsLeft !== undefined && (
            <span className={cn(
              "text-xs font-medium",
              spotsLeft <= 5 ? "text-red-600" : "text-gray-600"
            )}>
              {spotsLeft === 0 ? "Sold out" : `${spotsLeft} spots left`}
            </span>
          )}
          <Button asChild className="ml-auto bg-campus-600 hover:bg-campus-700">
            <Link to={`/events/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
