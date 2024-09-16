import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PaperAirplaneIcon, MicrophoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import PuenteRomanoLogo from '../assets/images/Puente_Romano_Beach_Resort_Logo.jpeg';
import AlssystTouristLogo from '../assets/images/assyst-tourist-logo.png';

const ChatbotPage = () => {
  const location = useLocation();
  const { helper } = location.state || { helper: 'john' }; // Default to 'john' if helper is undefined

  const helperDetails = {
    john: {
      message: "Hello, I'm John. Welcome to Puente Romano Beach Resort. How may I assist you today?",
      avatar: 'https://placehold.co/150x150',
    },
    mandy: {
      message: "Hello, I'm Mandy. Welcome to Puente Romano Beach Resort. How may I assist you today?",
      avatar: 'https://placehold.co/150x150',
    },
  };

  const selectedHelper = helperDetails[helper] || helperDetails['john'];

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Header Section */}
      <motion.header
        className="bg-orange-500 text-white p-3 shadow-md w-full max-w-6xl mx-auto m-0 rounded-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="flex justify-center"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <img
            src={PuenteRomanoLogo}
            alt="Puente Romano Beach Resort Logo"
            className="w-16 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36" // Responsive sizes for different platforms
          />
        </motion.div>
      </motion.header>

      {/* Back Arrow Button */}
      <motion.div
        className="flex justify-start w-full px-5 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Link to="/helper" className="text-black hover:text-red-500 text-xl sm:text-2xl lg:text-3xl">
          <span className="text-2xl sm:text-3xl lg:text-4xl">&#x2190;</span> {/* Responsive arrow symbol */}
        </Link>
      </motion.div>

      {/* Main Content with Card Style */}
      <motion.main
        className="flex flex-col flex-grow w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="bg-cream p-3 sm:p-4 md:p-5 rounded-lg shadow-md w-full flex flex-col flex-grow relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Helper's Message */}
          <motion.div
            className="flex items-start mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={PuenteRomanoLogo}
              alt="Puente Romano Beach Resort Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full mb-1"
            />
          </motion.div>
          <motion.div
            className="bg-green-50 p-2 sm:p-3 rounded-lg max-w-[90%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex justify-between items-end">
              <motion.p
                className="text-gray-700 flex-grow text-sm sm:text-base md:text-lg lg:text-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {selectedHelper.message}
              </motion.p>
              <span className="text-xs sm:text-sm md:text-base text-gray-500 ml-4">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
              </span>
            </div>
          </motion.div>

          {/* Input Container at the Bottom */}
          <motion.div
            className="absolute bottom-6 left-0 w-full px-3 py-4 bg-cream flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow p-1.5 sm:p-2 md:p-2.5 border border-gray-350 rounded-lg max-w-[90%] mr-2"
            />
            <div className="flex items-center space-x-1">
              <motion.button
                className="p-2 sm:p-3 md:p-3.5 rounded-lg bg-green-50 hover:bg-gray-300 transition-transform transform"
                whileHover={{ scale: 1.1, boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <PaperAirplaneIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-700" />
              </motion.button>
              <motion.button
                className="p-2 sm:p-3 md:p-3.5 rounded-lg bg-green-50 hover:bg-gray-300 transition-transform transform"
                whileHover={{ scale: 1.1, boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <MicrophoneIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-700" />
              </motion.button>
            </div>
          </motion.div>

          {/* Powered by Alssyst - Positioned right below the input container */}
          <motion.div
            className="absolute bottom-0 left-0 w-full px-3 py-1 bg-cream flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img
              src={AlssystTouristLogo}
              alt="Alssyst Tourist Logo"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            />
            <p className="ml-2 text-gray-500 text-xs sm:text-sm md:text-base">
              Powered by Alssyst
            </p>
          </motion.div>
        </motion.div>
      </motion.main>
    </motion.div>
  );
};

export default ChatbotPage;
