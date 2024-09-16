import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PuenteRomanoLogo from '../assets/images/Puente_Romano_Beach_Resort_Logo.jpeg';
import AlssystTouristLogo from '../assets/images/assyst-tourist-logo.png';
import Man from '../assets/images/john.png';
import Women from '../assets/images/mandy.png';

const HomePage = () => {
  const [selectedHelper, setSelectedHelper] = useState(null);
  const navigate = useNavigate();

  const handleHelperClick = (helper) => {
    setSelectedHelper(helper);
  };

  const handleContinue = () => {
    if (selectedHelper) {
      navigate('/chatbot', { state: { helper: selectedHelper } });
    }
  };

  const selectedHelperStyles = 'bg-orange-100 border-orange-600';

  // New animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const hoverScale = {
    whileHover: { scale: 1.1, rotate: 5, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' },
    whileTap: { scale: 0.95, rotate: -5 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Header Section */}
      <motion.header
        className="rounded-lg bg-orange-500 text-white p-4 shadow-xl w-full mb-6 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-center">
          <img
            src={PuenteRomanoLogo}
            alt="Puente Romano Beach Resort Logo"
            className="w-16 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36" // Responsive sizes for different platforms
          />
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center flex-grow px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          CHOOSE YOUR HELPER
        </motion.h1>

        {/* Helper Selection */}
        <motion.div
          className="flex flex-col items-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* John */}
          <motion.div
            className={`border-2 ${selectedHelper === 'john' ? selectedHelperStyles : 'border-orange-500'} p-2 cursor-pointer mb-4 sm:mb-6 md:mb-8`}
            onClick={() => handleHelperClick('john')}
            {...hoverScale}
          >
            <motion.img
              src={Man}
              alt="John's photo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mb-2"
              whileHover={{ rotate: 5 }}
            />
            <motion.span className="text-sm sm:text-base flex-1 text-center md:text-lg">
              john
            </motion.span>
          </motion.div>

          {/* Mandy */}
          <motion.div
            className={`border-2 ${selectedHelper === 'mandy' ? selectedHelperStyles : 'border-orange-500'} p-2 cursor-pointer`}
            onClick={() => handleHelperClick('mandy')}
            {...hoverScale}
          >
            <motion.img
              src={Women}
              alt="Mandy's photo"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mb-2"
              whileHover={{ rotate: -5 }}
            />
            <motion.span className="text-sm item-center sm:text-base md:text-lg">
              mandy
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Buttons Container */}
        <motion.div
          className="flex items-center mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link to="/" className="flex items-center text-gray-700 hover:text-gray-900">
            <motion.div
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500 rounded-full"
              whileHover={{ scale: 1.1, boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span className="text-lg sm:text-xl text-white">
                &#x2190;
              </motion.span>
            </motion.div>
          </Link>

          {/* Continue Button */}
          <motion.button
            className="ml-4 bg-orange-500 text-white hover:bg-orange-600 py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-lg md:text-xl rounded-full"
            onClick={handleContinue}
            disabled={!selectedHelper}
            whileHover={{ scale: 1.1, boxShadow: '0px 4px 8px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            CONTINUE
          </motion.button>
        </motion.div>

        {/* Footer Section */}
        <motion.div
          className="flex items-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src={AlssystTouristLogo}
            alt="Alssyst Tourist Logo"
            className="w-4 h-4 sm:w-6 sm:h-6 mr-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span className="text-xs sm:text-sm md:text-base text-gray-500">
            Powered by Alssyst
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
