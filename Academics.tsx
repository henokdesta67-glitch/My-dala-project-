import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const faculties = [
  {
    name: 'Faculty of Science & Technology',
    programs: ['Computer Science', 'Data Science', 'Engineering', 'Environmental Science'],
    icon: '🔬',
  },
  {
    name: 'Faculty of Business & Economics',
    programs: ['Business Administration', 'Finance & Accounting', 'Marketing', 'Economics'],
    icon: '💼',
  },
  {
    name: 'Faculty of Arts & Social Sciences',
    programs: ['International Relations', 'Journalism & Media', 'Development Studies', 'Fine Arts'],
    icon: '🎨',
  },
  {
    name: 'Faculty of Health Sciences',
    programs: ['Public Health', 'Nursing', 'Pharmacy', 'Biomedical Sciences'],
    icon: '❤️',
  },
];

const Academics = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/28a4aa9e-ec22-4afe-9a86-9ca66e460a17/elimu-academics-fv1yz94-1764315935152.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold">Academics</h1>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Academic Philosophy</h2>
          <p className="text-lg text-gray-700 leading-relaxed">At Henery University, we believe in an education that transcends the classroom. Our approach is grounded in inquiry-based learning, interdisciplinary collaboration, and a commitment to solving real-world challenges. We empower our students to be active participants in their own learning journey, equipping them with the skills and knowledge to thrive in a rapidly changing world.</p>
        </div>
      </section>

      {/* Faculties and Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Faculties & Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {faculties.map((faculty) => (
              <div key={faculty.name} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{faculty.icon}</span>
                  <h3 className="text-2xl font-semibold text-blue-900">{faculty.name}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {faculty.programs.map((program) => (
                    <li key={program} className="flex items-center text-gray-700">
                      <ChevronRight size={20} className="text-yellow-500 mr-2 flex-shrink-0" />
                      <span>{program}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/admissions" className="text-blue-600 hover:text-yellow-500 font-semibold">Admission Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;