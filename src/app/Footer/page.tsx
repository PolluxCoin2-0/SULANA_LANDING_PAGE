import React from 'react';
import Image from 'next/image'; // If you're using Next.js for image optimization
import { FaTwitter, FaTelegram } from 'react-icons/fa'; // Importing icons from react-icons

// Social media links with icons
const socialLinks = [
  { href: 'https://x.com/SulaanaDao', icon: <FaTwitter />, ariaLabel: 'Twitter' },
  { href: 'https://t.me/SulaanaDao', icon: <FaTelegram />, ariaLabel: 'Telegram' },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-16 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo and Brand Name */}
        <div className="flex flex-col items-center md:items-start mb-0 md:mb-0">
          <div className="flex flex-row items-center space-x-4 cursor-pointer">
            <Image
              src="/logo.svg" // Replace with your logo path
              alt="Logo"
              width={0}
              height={0} // Adjust size as needed
              className="w-[15%] md:w-[10%]" // Adjust size for smaller screens
            />
            <p className="font-bold text-black text-xl">SULAANA</p>
          </div>
          <p className="text-sm text-opacity-80 mt-2 text-center md:text-left">Building the future with you.</p>
        </div>

        {/* Footer Text Section */}
        <div className="text-center text-sm text-opacity-80 mt-8 md:mt-0">
          <p>&copy; {new Date().getFullYear()} SULAANA. All Rights Reserved.</p>
          <div className="space-x-6 mt-4">
            <a
              href="/privacy-policy"
              className="hover:text-purple-500 transition-all duration-300"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-service"
              className="hover:text-purple-500 transition-all duration-300"
            >
              Terms of Service
            </a>
            <span>|</span>
            {/* Whitepaper Link */}
            <a
              href="./SulaanaWhitepaper.pdf" // Update with the actual link to your whitepaper
              className="hover:text-purple-500 transition-all duration-300"
            >
              Whitepaper
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center md:justify-start space-x-8 mt-6 md:mt-0">
          {socialLinks.map((link) => (
            <a
              key={link.ariaLabel}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-4xl text-[#4D2AA7] hover:text-[#8D32B6] transition-all duration-300 transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
