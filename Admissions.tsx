import { Link } from 'react-router-dom';
import { FileText, UserCheck, CalendarDays } from 'lucide-react';
import { toast } from 'sonner';

const steps = [
  { icon: <FileText size={40} className="text-yellow-500" />, title: 'Submit Application', description: 'Complete our online application form with your academic and personal details.' },
  { icon: <UserCheck size={40} className="text-yellow-500" />, title: 'Application Review', description: 'Our admissions team will carefully review your application and supporting documents.' },
  { icon: <CalendarDays size={40} className="text-yellow-500" />, title: 'Admission Decision', description: 'You will be notified of our decision within 4-6 weeks. Best of luck!' },
];

const Admissions = () => {

  const handleDownload = () => {
    toast.success('Downloading application form...');
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/28a4aa9e-ec22-4afe-9a86-9ca66e460a17/elimu-admissions-s6mhrfd-1764315942162.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold">Admissions</h1>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {steps.map((step, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105">Start Your Application</Link>
          </div>
        </div>
      </section>

      {/* Key Dates & Deadlines */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-10">Key Dates & Deadlines</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex justify-between items-center bg-blue-800 p-4 rounded-lg"><span>Early Application Deadline:</span> <span className="font-bold text-yellow-400">August 1, 2025</span></li>
            <li className="flex justify-between items-center bg-blue-800 p-4 rounded-lg"><span>Regular Application Deadline:</span> <span className="font-bold text-yellow-400">December 15, 2025</span></li>
            <li className="flex justify-between items-center bg-blue-800 p-4 rounded-lg"><span>Scholarship Application Deadline:</span> <span className="font-bold text-yellow-400">January 31, 2026</span></li>
            <li className="flex justify-between items-center bg-blue-800 p-4 rounded-lg"><span>Fall Semester Begins:</span> <span className="font-bold text-yellow-400">September 1, 2026</span></li>
          </ul>
        </div>
      </section>

      {/* Download Brochure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Want to learn more?</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">Download our detailed brochure to explore all programs, campus facilities, and student life at Henery University.</p>
          <button onClick={handleDownload} className="bg-gray-800 hover:bg-black text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">Download Brochure</button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;