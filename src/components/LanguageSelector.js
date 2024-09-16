import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PuenteRomanoLogo from '../assets/images/Puente_Romano_Beach_Resort_Logo.jpeg';
import AlssystTouristLogo from '../assets/images/assyst-tourist-logo.png';
import English from '../assets/images/uk.png';
import France from '../assets/images/france.png';
import Spain from '../assets/images/spain.png';
import Italy from '../assets/images/italy.png';
import China from '../assets/images/china.png';
import Saudi from '../assets/images/saudi.png';
import Germany from '../assets/images/germany.jpg';
import Poland from '../assets/images/poland.png';

// Shared Tailwind CSS classes
const buttonStyles = 'w-full p-3 rounded-lg flex items-center space-x-4 transition-transform transform'; 
const lavenderButtonStyles = 'bg-pink-100';
const alternateButtonStyles = 'bg-blue-100';
const selectedButtonStyles = 'bg-orange-500 shadow-lg';
const selectedTextStyles = 'text-white';
const defaultTextStyles = 'text-black';

// Logos (Example URLs, replace with actual paths or URLs)
const logos = {
  ENGLISH: English,
  FRANÇAIS: France,
  ESPAÑOL: Spain,
  ITALIANO: Italy,
  عربي: Saudi,
  中文: China,
  DEUTSCH: Germany,
  POLSKI: Poland,
};

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);
  const navigate = useNavigate();

  // Function to handle the continue button click
  const handleContinue = () => {
    navigate('/helper', { state: { language: selectedLanguage } });
  };

  const getButtonStyles = (index, language) => {
    const baseStyle = index % 2 === 0 ? alternateButtonStyles : lavenderButtonStyles;
    return `${buttonStyles} ${
      selectedLanguage === language ? selectedButtonStyles : baseStyle
    }`;
  };

  const getTextStyles = (language) => {
    return selectedLanguage === language ? selectedTextStyles : defaultTextStyles;
  };

  // Handle load complete
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 300); // Faster slide-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-background p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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

      <motion.h1
        className="text-3xl font-bold text-primary mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        CHOOSE YOUR LANGUAGE
      </motion.h1>

      {/* Language Buttons List */}
      <motion.div
        className="mt-4 space-y-3 w-full max-w-md mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {Object.entries(logos).map(([language, logoUrl], index) => (
          <motion.div
            key={language}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: hasLoaded ? 0 : (index % 2 === 0 ? -50 : 50) }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }} // Faster slide-in effect
          >
            <motion.button
              className={getButtonStyles(index, language)}
              onClick={() => setSelectedLanguage(language)}
              whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img src={logoUrl} alt={`${language} flag`} className="w-8 h-8" />
              <span className={`text-lg font-semibold ${getTextStyles(language)}`}>
                {language}
              </span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Continue Button */}
      <motion.button
        className="bg-orange-500 text-white hover:bg-orange-600 py-3 px-8 text-lg rounded-full shadow-xl transition-transform transform"
        onClick={handleContinue}
        disabled={!selectedLanguage}
        whileHover={{ scale: 1.1, boxShadow: "0px 15px 30px rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        CONTINUE
      </motion.button>

      {/* Powered by Alssyst */}
      <motion.div
        className="flex items-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <img
          src={AlssystTouristLogo}
          alt="Alssyst Tourist Logo"
          className="w-5 h-5 mr-2"
        />
        <span className="text-muted-foreground text-xs">Powered by Alssyst</span>
      </motion.div>
    </motion.div>
  );
};

export default LanguageSelector;
