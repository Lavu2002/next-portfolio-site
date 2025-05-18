// src/pages/contact.tsx
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Here you would typically send the form data to your backend
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-center">Get In Touch</h1>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Contact Form */}
              <motion.div
                className="lg:w-7/12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                      Thank you for your message! I'll get back to you as soon as possible.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                          {error}
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                className="lg:w-5/12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-white rounded-lg shadow-md p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <FaEnvelope size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1">Email</h3>
                        <a href="mailto:lavanyapatial@gmail.com" className="text-primary hover:underline">
                          lavanyapatial@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <FaPhone size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1">Phone</h3>
                        <a href="tel:+918847383941" className="text-primary hover:underline">
                          +91 8847383941
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <FaMapMarkerAlt size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1">Location</h3>
                        <p className="text-gray-600">Chandigarh, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <FaLinkedin size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1">LinkedIn</h3>
                        <a 
                          href="https://www.linkedin.com/in/lavanya-patial-57a08a215" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline"
                        >
                          linkedin.com/in/lavanya-patial
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-primary">
                        <FaGithub size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700 mb-1">GitHub</h3>
                        <a 
                          href="https://github.com/yourusername" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:underline"
                        >
                          github.com/yourusername
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-700 mb-3">Availability</h3>
                    <p className="text-gray-600">
                      I'm currently open to freelance projects and new opportunities. Feel free to reach out if you'd like to discuss a potential collaboration.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;