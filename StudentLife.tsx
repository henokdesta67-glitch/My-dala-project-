import { Paintbrush, Dumbbell, Music, Users } from 'lucide-react';

const clubs = [
  { icon: <Paintbrush size={32} className="text-blue-900" />, name: 'Art & Culture Club', description: 'Explore your creativity through painting, sculpture, and cultural events.' },
  { icon: <Dumbbell size={32} className="text-blue-900" />, name: 'Sports & Recreation', description: 'Join one of our many sports teams or enjoy our state-of-the-art fitness facilities.' },
  { icon: <Music size={32} className="text-blue-900" />, name: 'Music & Performing Arts', description: 'From choir to theatre, express yourself on stage.' },
  { icon: <Users size={32} className="text-blue-900" />, name: 'Student Leadership Council', description: 'Make your voice heard and contribute to university governance.' },
];

const StudentLife = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/28a4aa9e-ec22-4afe-9a86-9ca66e460a17/elimu-student-life-cm7nob1-1764315949363.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold">Student Life</h1>
        </div>
      </section>

      {/* Campus Life Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">A Vibrant & Inclusive Community</h2>
          <p className="text-lg text-gray-700 leading-relaxed">At Henery University, your experience extends far beyond academics. We offer a rich and diverse campus life, providing countless opportunities for personal growth, leadership development, and lifelong friendships. Discover your passion, get involved, and make the most of your university years.</p>
        </div>
      </section>

      {/* Clubs & Organizations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Clubs & Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clubs.map(club => (
              <div key={club.name} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <div className="flex justify-center mb-4">{club.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{club.name}</h3>
                <p className="text-gray-600">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing & Dining */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Housing & Dining</h2>
              <p className="text-gray-700 leading-relaxed">Our modern and comfortable residence halls provide a home away from home. With a variety of dining options offering delicious and nutritious meals, you'll be well-fueled for your studies and activities.</p>
            </div>
            <div>
              <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/28a4aa9e-ec22-4afe-9a86-9ca66e460a17/elimu-campus-7exuu21-1764315920547.webp" alt="Campus Housing" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StudentLife;