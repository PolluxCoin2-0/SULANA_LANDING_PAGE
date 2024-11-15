"use client";
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Page: React.FC = () => {
  // State to manage the email input
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Function to handle email submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
  
      // Define the recipient email and subject
      const recipientEmail = 'priyanshu@poxscan.io'; // Replace with your email
      const subject = 'New Subscription Request';
      const body = `User with email: ${email} has subscribed to the mailing list.`;
  
      // Create Gmail compose URL
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
      // Redirect to Gmail compose
      window.location.href = gmailComposeUrl;
  
      // Reset the email input
      setEmail('');
      setIsSubmitting(false);
    } else {
      alert('Please enter a valid email address.');
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-10 rounded-lg bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-100 shadow-xl space-y-6 mt-0 md:mt-12">
      {/* Heading */}
      <p className="text-3xl font-semibold text-gray-800 text-center">
        Stay updated.
        <br />
        Join us on the journey to <span className="text-[#4D2AA7]">SULAANA</span>.
      </p>

      {/* Input and Button */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center w-full max-w-md space-y-4 sm:space-y-0 sm:space-x-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4D2AA7] focus:ring-1 focus:ring-[#4D2AA7] transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] rounded-lg font-semibold hover:from-[#3A1E85] hover:to-[#5A2385] transition shadow-md hover:shadow-lg transform hover:scale-105 duration-200 mt-4 sm:mt-0"
          disabled={isSubmitting} // Disable button while submitting
        >
          <span>{isSubmitting ? 'Submitting...' : 'Notify me'}</span>
          <FaPaperPlane className="ml-2" />
        </button>
      </form>

      {/* Small Text */}
      <p className="text-gray-500 text-sm text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Page;
