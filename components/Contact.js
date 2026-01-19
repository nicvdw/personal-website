'use client';

import { useState } from 'react';
import { Mail, User, MessageSquare, Send, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_b0bi7am',      // Replace with your Service ID
        'template_xk1mtfv',     // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'naocEQESFjQYcHH73'       // Replace with your Public Key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Column – Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Thank you for reaching out
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m always open to discussing trading ideas, quantitative research,
              development projects, or general opportunities. Whether you have a
              specific project in mind or just want to connect, feel free to reach out.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I typically respond within 24-48 hours. For urgent inquiries, feel free 
              to reach out directly via email or LinkedIn.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-4">
              <a 
                href="mailto:waltnic7@gmail.com"
                className="flex items-center gap-4 bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-medium">waltnic7@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/nicolaas-van-der-walt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                  <Linkedin className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">LinkedIn</div>
                  <div className="font-medium">nicolaas-van-der-walt</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column – Form */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Success Message */}
              {status === 'success' && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-green-400 text-sm">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Name
                </label>
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-3 top-4 text-gray-500"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your idea or project..."
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-br from-blue-600 to-blue-800 transition-all duration-300 ease-out hover:from-blue-500 hover:to-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}