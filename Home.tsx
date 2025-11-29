import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredPrograms = [
  { name: 'Computer Science', description: 'Cutting-edge curriculum with a focus on AI and software development.' },
  { name: 'Business Administration', description: 'Developing the next generation of African business leaders.' },
  { name: 'Public Health', description: 'Addressing community health challenges with innovative solutions.' },
];

const newsAndEvents = [
  { title: 'Annual Innovation Fair', date: 'October 15, 2025', description: 'Showcasing groundbreaking student projects.' },
  { title: 'Guest Lecture: Dr. Adebayo', date: 'November 5, 2025', description: 'On the future of renewable energy in Africa.' },
  { title: 'Cultural Week Festival', date: 'December 1-5, 2025', description: 'A celebration of diverse African cultures.' },
];

const Home = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/28a4aa9e-ec22-4afe-9a86-9ca66e460a17/elimu-campus-7exuu21-1764315920547.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">Welcome to Henery University</h1>
              <p className="text-xl md:text-2xl mb-8">Nurturing Leaders, Driving Innovation.</p>
              <div className="flex space-x-4">
                <Link to="/admissions" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 flex items-center">Apply Now <ArrowRight className="ml-2" /></Link>
                <Link to="/academics" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-full text-lg transition-colors">Explore Programs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredPrograms.map(program => (
              <div key={program.name} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">{program.name}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <Link to="/academics" className="text-blue-600 hover:text-yellow-500 font-semibold flex items-center">Learn More <ArrowRight size={20} className="ml-1" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsAndEvents.map(item => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href="#" className="text-blue-600 hover:text-yellow-500 font-semibold">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;