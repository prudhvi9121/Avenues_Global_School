import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import ContactInformation from '@/components/contact/ContactInformation';
import LocationMap from '@/components/contact/LocationMap';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { YouTube } from '@mui/icons-material';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - Avenues The Global School</title>
        <meta name="description" content="Get in touch with Avenues The Global School. Contact us for admissions, inquiries, or to schedule a visit." />
        <meta name="keywords" content="contact school, school admissions, school location, school inquiry, visit campus" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Avenues The Global School" />
        <meta property="og:description" content="Reach out to us for admissions and general inquiries." />
        <meta property="og:image" content="https://avenuesglobalschool.in/contact-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:title" content="Contact Avenues The Global School" />
        <meta name="twitter:description" content="Reach out to us for admissions and general inquiries." />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Avenues The Global School",
              "description": "Get in touch with Avenues The Global School for admissions and general inquiries.",
              "mainEntity": {
                "@type": "EducationalOrganization",
                "name": "Avenues The Global School",
                "telephone": "+91 7997043399",
                "email": "avenuesglobalschool@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rajahmundry",
                  "addressLocality": "Rajahmundry",
                  "addressRegion": "Andhra Pradesh",
                  "postalCode": "533101",
                  "addressCountry": "IN"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-56 md:h-72 bg-gradient-to-r from-purple-800 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-purple-300 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Connect with us banner */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 border-b border-purple-700">
        <div className="container mx-auto py-6 sm:py-8 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6">
            <p className="text-purple-100 text-sm sm:text-base text-center sm:text-left font-medium">Get in touch with us through any of these channels:</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
              <a href="mailto:avenuesglobalschool@gmail.com" className="flex items-center text-purple-100 hover:text-white transition-colors text-sm sm:text-base group">
                <Mail className="h-5 w-5 mr-2 group-hover:text-purple-200 transition-colors" /> avenuesglobalschool@gmail.com
              </a>
              <a href="tel:+917997043399" className="flex items-center text-purple-100 hover:text-white transition-colors text-sm sm:text-base group">
                <Phone className="h-5 w-5 mr-2 group-hover:text-purple-200 transition-colors" /> +91 7997043399
              </a>
              <div className="flex items-center space-x-6">
                <a href="https://www.facebook.com/avenuestheglobalschool/" className="text-purple-100 hover:text-white transition-colors transform hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/avenuesschool/" className="text-purple-100 hover:text-white transition-colors transform hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCJLi0Pqd8SxZnr5YXXucKYA" className="text-purple-100 hover:text-white transition-colors transform hover:scale-110">
                  <YouTube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="py-8 sm:py-12 md:py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl text-gray-600">
              We'd love to hear from you. Get in touch with us for any inquiries or to schedule a visit to our campus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-2">
              <ContactInformation />
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3">
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-center mb-6 sm:mb-8">Find Us</h2>
              <div className="h-[300px] sm:h-[400px] md:h-[500px]">
                <LocationMap />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
