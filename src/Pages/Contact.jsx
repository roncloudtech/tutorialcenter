import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have a question, suggestion, or need help? Fill out the form below and our team will get back to you as soon as possible.
          </p>
          {submitted ? (
            <div className="text-green-600 text-lg font-semibold mt-8">
              Thank you for reaching out! We have received your message.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r from-[#09314F] to-[#E83831] hover:bg-green-800 text-white transition-colors flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          )}
          <div className="mt-10 border-t pt-6 text-gray-700 space-y-2 text-sm">
            <div>
              <span className="font-semibold">Email:</span> support@tutorialcenter.com
            </div>
            <div>
              <span className="font-semibold">Phone:</span> +234-812-345-6789
            </div>
            {/* <div>
              <span className="font-semibold">Address:</span> 23b, Ogunlade Street, Alaba-Oro, Amukoko, Lagos, Nigeria
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}