
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const CreateEventPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: '',
    time: '',
    location: '',
    description: '',
    capacity: '',
    imageUrl: '',
  });

  const categories = [
    { label: 'Academic', value: 'academic' },
    { label: 'Social', value: 'social' },
    { label: 'Career', value: 'career' },
    { label: 'Sports', value: 'sports' },
    { label: 'Arts & Culture', value: 'arts' },
    { label: 'Club Activities', value: 'club' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send this data to your backend
      console.log('Event data:', formData);
      
      toast({
        title: "Event created successfully",
        description: "Your event has been published.",
      });
      
      // Redirect to the events page
      navigate('/events');
    } catch (error) {
      console.error('Event creation error:', error);
      toast({
        variant: "destructive",
        title: "Event creation failed",
        description: "There was a problem creating your event. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <PageContainer>
      <div className="bg-campus-700 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">
            Create a New Event
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter event title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Event Category</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => handleSelectChange('category', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Event Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Event Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Enter location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  name="capacity"
                  type="number"
                  placeholder="Maximum number of attendees"
                  value={formData.capacity}
                  onChange={handleChange}
                  required
                  min="1"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Event Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                placeholder="Enter image URL for your event"
                value={formData.imageUrl}
                onChange={handleChange}
              />
              <p className="text-xs text-gray-500">
                Enter a URL for an image that represents your event
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your event"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
              />
            </div>
            
            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={() => navigate('/events')}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-campus-600 hover:bg-campus-700"
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Event'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default CreateEventPage;
