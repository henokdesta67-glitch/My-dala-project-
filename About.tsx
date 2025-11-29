import { Users, BookOpen, Target } from 'lucide-react';

const stats = [
  { icon: <Users size={40} className="text-yellow-500" />, value: '10,000+', label: 'Students' },
  { icon: <BookOpen size={40} className="text-yellow-500" />, value: '50+', label: 'Programs' },
  { icon: <Target size={40} className="text-yellow-500" />, value: '95%', label: 'Graduate Employment' },
];

const About = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/28a4aa9e-ec22-4afe-9a86-9ca66e460a17/elimu-students-collaborating-5vdixc0-1764315927593.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold">About Henery University</h1>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">To provide a world-class education that is accessible, innovative, and relevant to the needs of Africa. We are committed to fostering a community of critical thinkers, problem solvers, and ethical leaders who will drive progress and create a positive impact across the continent and the world.</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">To be a leading center of academic excellence in Africa, recognized for our transformative research, commitment to community engagement, and the exceptional quality of our graduates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map(stat => (
              <div key={stat.label} className="p-6">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-xl text-yellow-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our History</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">Founded in 2010, Henery University was established with a bold vision: to create a beacon of higher learning in the heart of Africa. From our humble beginnings with just two faculties, we have grown into a comprehensive university known for its commitment to excellence and innovation.</p>
            <p className="text-lg text-gray-700 leading-relaxed">Over the years, we have expanded our academic offerings, built state-of-the-art facilities, and fostered a vibrant and diverse community of scholars and students. Our journey is one of resilience, growth, and an unwavering dedication to shaping a brighter future for Africa.</p>
        </div>
      </section>
    </div>
  );
};

export default About;