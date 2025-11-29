import { MapPin, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    toast.success('Your message has been sent successfully!');
    reset();
  };

  return (
    <div className="animate-fadeIn">
       {/* Hero Section */}
       <section className="relative h-[400px] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/28a4aa9e-ec22-4afe-9a86-9ca66e460a17/elimu-contact-uu13t21-1764316136750.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" {...register('name')} className={`mt-1 block w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" {...register('email')} className={`mt-1 block w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
                  <input type="text" id="subject" {...register('subject')} className={`mt-1 block w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`} />
                  {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                  <textarea id="message" {...register('message')} rows={5} className={`mt-1 block w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>
                <div>
                  <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg text-lg transition-colors">Submit</button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-start">
                  <MapPin size={24} className="text-blue-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Our Address</h3>
                    <p className="text-gray-700">Mekelle, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="text-blue-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-700">+251930695142</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="text-blue-800 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-700">henokdesta67@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;