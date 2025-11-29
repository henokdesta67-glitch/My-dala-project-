import { FlaskConical, BookCopy, Leaf } from 'lucide-react';

const researchAreas = [
  { icon: <FlaskConical size={32} className="text-blue-900" />, name: 'Biomedical Research', description: 'Developing new treatments for diseases affecting the continent.' },
  { icon: <BookCopy size={32} className="text-blue-900" />, name: 'African Studies & History', description: 'Preserving and promoting the rich history and cultural heritage of Africa.' },
  { icon: <Leaf size={32} className="text-blue-900" />, name: 'Sustainable Agriculture', description: 'Innovating for food security and sustainable farming practices.' },
];

const Research = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/28a4aa9e-ec22-4afe-9a86-9ca66e460a17/elimu-research-3ku1lfn-1764316129177.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold">Research & Innovation</h1>
        </div>
      </section>

      {/* Research Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Driving Discovery & Impact</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Research is at the heart of Henery University's mission. We are dedicated to pushing the boundaries of knowledge and finding innovative solutions to local and global challenges. Our world-class faculty and state-of-the-art facilities create a dynamic environment for groundbreaking discovery.</p>
        </div>
      </section>

      {/* Key Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Key Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {researchAreas.map(area => (
              <div key={area.name} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                 <div className="flex justify-center mb-4">{area.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">{area.name}</h3>
                <p className="text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Publications */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Recent Publications</h2>
            <ul className="space-y-4">
                <li className="border p-4 rounded-lg"><strong>Journal of African Health:</strong> "A new approach to Malaria prevention in rural communities."</li>
                <li className="border p-4 rounded-lg"><strong>Tech Innovations Journal:</strong> "The role of AI in improving crop yields in East Africa."</li>
                <li className="border p-4 rounded-lg"><strong>Cultural Heritage Quarterly:</strong> "Digital preservation of ancient manuscripts in Timbuktu."</li>
            </ul>
        </div>
      </section>

    </div>
  );
};

export default Research;