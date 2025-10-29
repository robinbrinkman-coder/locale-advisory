import { useState } from 'react';
import { Button } from '../components/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requirement: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We\'ll be in touch soon!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] text-center">
        <h1 className="mb-6">Let's talk spaces.</h1>
        <p className="text-lg opacity-70 max-w-2xl mx-auto">
          Whether you're renewing, relocating, or exploring what's next — we can help.
        </p>
      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-12 lg:px-[120px] pb-16 md:pb-24 lg:pb-[120px]">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label htmlFor="name" className="block mb-3 opacity-70">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#FAF9F7] border border-[#4A372A]/20 rounded focus:outline-none focus:border-[#E6B450] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-3 opacity-70">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#FAF9F7] border border-[#4A372A]/20 rounded focus:outline-none focus:border-[#E6B450] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block mb-3 opacity-70">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#FAF9F7] border border-[#4A372A]/20 rounded focus:outline-none focus:border-[#E6B450] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="requirement" className="block mb-3 opacity-70">
                Requirement
              </label>
              <select
                id="requirement"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                required
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#FAF9F7] border border-[#4A372A]/20 rounded focus:outline-none focus:border-[#E6B450] transition-colors"
              >
                <option value="">Select a service</option>
                <option value="tenant-representation">Tenant Representation</option>
                <option value="lease-renewal">Lease Renewal</option>
                <option value="workplace-strategy">Workplace Strategy</option>
                <option value="market-insights">AI Market Insights</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-3 opacity-70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#FAF9F7] border border-[#4A372A]/20 rounded focus:outline-none focus:border-[#E6B450] transition-colors resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <Button type="submit">Start your brief</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-6 md:px-12 lg:px-[120px] py-16 md:py-24 lg:py-[120px] bg-[#FAF9F7]">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="mb-6">Get in touch</h3>
          <p className="opacity-70 mb-4">
            <a href="mailto:hello@localeadvisory.com.au" className="hover:text-[#E6B450] transition-colors">
              hello@localeadvisory.com.au
            </a>
          </p>
          <p className="opacity-70">
            Sydney, Australia
          </p>
        </div>
      </section>
    </div>
  );
}
