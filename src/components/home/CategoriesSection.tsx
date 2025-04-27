
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, link }) => {
  return (
    <Link 
      to={link} 
      className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-campus-100 text-campus-600 mb-4">
        <span className="text-3xl" role="img" aria-label={title}>
          {icon}
        </span>
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
};

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      icon: "🎓",
      title: "Academic",
      description: "Lectures, workshops, and educational events",
      link: "/events?category=academic"
    },
    {
      icon: "🎭",
      title: "Cultural",
      description: "Performances, festivals, and cultural celebrations",
      link: "/events?category=cultural"
    },
    {
      icon: "💻",
      title: "Technical",
      description: "Tech symposiums, hackathons, and coding competitions",
      link: "/events?category=technical"
    },
    {
      icon: "🏆",
      title: "Sports",
      description: "Games, tournaments, and athletic activities",
      link: "/events?category=sports"
    },
    {
      icon: "🔬",
      title: "Workshop",
      description: "Hands-on learning sessions and skill development",
      link: "/events?category=workshop"
    },
    {
      icon: "🎤",
      title: "Seminar",
      description: "Knowledge sharing sessions and guest lectures",
      link: "/events?category=seminar"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
          Explore Events by Category
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-10">
          Discover events tailored to your interests and academic needs
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.title}
              icon={category.icon}
              title={category.title}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
