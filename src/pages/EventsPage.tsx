import React, { useState, useEffect } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import EventsList from '@/components/event/EventsList';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const EventsPage = () => {
  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'Academic', value: 'academic' },
    { label: 'Cultural', value: 'cultural' },
    { label: 'Technical', value: 'technical' },
    { label: 'Sports', value: 'sports' },
    { label: 'Workshop', value: 'workshop' },
    { label: 'Seminar', value: 'seminar' },
  ];

  const allEvents = [
    {
      id: "1",
      title: "Anna University Technical Symposium 2025",
      date: "May 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Anna University, Chennai",
      category: "Technical",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1461749280684-dccba630e2f6')}?q=80&w=300&h=200&auto=format&fit=crop`,
      isPopular: true,
      spotsLeft: 100
    },
    {
      id: "2",
      title: "PSG Tech Leadership Summit",
      date: "May 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "PSG College of Technology, Coimbatore",
      category: "Workshop",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1519389950473-47ba0277781c')}?q=80&w=300&h=200&auto=format&fit=crop`,
      spotsLeft: 50
    },
    {
      id: "3",
      title: "Madras Cultural Festival",
      date: "June 5, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "Madras Institute of Technology, Chennai",
      category: "Cultural",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1605810230434-7631ac76ec81')}?q=80&w=300&h=200&auto=format&fit=crop`,
      isPopular: true,
      spotsLeft: 200
    },
    {
      id: "4",
      title: "VIT Sports Championship",
      date: "June 12, 2025",
      time: "8:00 AM - 6:00 PM",
      location: "VIT University, Vellore",
      category: "Sports",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1526374965328-7f61d4dc18c5')}?q=80&w=300&h=200&auto=format&fit=crop`,
      spotsLeft: 150
    },
    {
      id: "5",
      title: "Bharathiar University AI Conference",
      date: "June 18-19, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Bharathiar University, Coimbatore",
      category: "Academic",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1487058792275-0ad4aaf24ca7')}?q=80&w=300&h=200&auto=format&fit=crop`,
      isPopular: true,
      spotsLeft: 75
    },
    {
      id: "6",
      title: "SRM Engineering Expo",
      date: "July 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "SRM University, Kattankulathur",
      category: "Technical",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1581091226825-a6a2a5aee158')}?q=80&w=300&h=200&auto=format&fit=crop`,
      spotsLeft: 120
    },
    {
      id: "7",
      title: "Madurai Kamaraj University Arts Festival",
      date: "July 10-15, 2025",
      time: "11:00 AM - 8:00 PM",
      location: "Madurai Kamaraj University, Madurai",
      category: "Cultural",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1649972904349-6e44c42644a7')}?q=80&w=300&h=200&auto=format&fit=crop`,
      spotsLeft: 0
    },
    {
      id: "8",
      title: "NIT Trichy Research Seminar",
      date: "July 20, 2025",
      time: "9:00 AM - 1:00 PM",
      location: "National Institute of Technology, Tiruchirappalli",
      category: "Seminar",
      image: `https://images.unsplash.com/photo-${encodeURIComponent('1518770660439-4636190af475')}?q=80&w=300&h=200&auto=format&fit=crop`,
      spotsLeft: 40
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(urlCategory || 'all');
  
  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [urlCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageContainer>
      <div className="bg-campus-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6">
            Find Campus Events
          </h1>
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events by name or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="bg-campus-600 hover:bg-campus-700">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Events' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Events`}
            </h2>
            <p className="text-gray-600">
              {filteredEvents.length} events found
            </p>
          </div>
          
          {selectedCategory !== 'all' && (
            <Badge 
              className="flex items-center gap-1 bg-campus-600 hover:bg-campus-700 cursor-pointer"
              onClick={() => handleCategoryChange('all')}
            >
              {selectedCategory}
              <span className="ml-1">✕</span>
            </Badge>
          )}
        </div>

        <EventsList events={filteredEvents} />
      </div>
    </PageContainer>
  );
};

export default EventsPage;
