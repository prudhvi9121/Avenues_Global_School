import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Sparkles, User, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import AdmissionFAQs from '@/components/AdmissionFAQs';

interface FormData {
  studentName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  grade: string;
  address: string;
}

interface FormErrors {
  studentName?: string;
  email?: string;
  phone?: string;
  dob?: string;
  gender?: string;
  grade?: string;
  address?: string;
}

const Admissions: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    grade: '',
    address: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'studentName':
        if (!value.trim()) return 'Student name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name should only contain letters and spaces';
        break;

      case 'email':
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!value) return 'Phone number is required';
        if (!/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
          return 'Please enter a valid 10-digit phone number';
        }
        break;

      case 'dob':
        if (!value) return 'Date of birth is required';
        const age = calculateAge(value);
        if (age < 3) return 'Student must be at least 3 years old';
        if (age > 18) return 'Student must be under 18 years old';
        break;

      case 'gender':
        if (!value) return 'Please select a gender';
        break;

      case 'grade':
        if (!value) return 'Please select a grade';
        break;

      case 'address':
        if (value && value.trim().length < 10) {
          return 'Please enter a complete address (minimum 10 characters)';
        }
        break;
    }
    return undefined;
  };

  const calculateAge = (dob: string): number => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate field on change if it has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name as keyof FormData]);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);

    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setSubmitting(true);
    try {
      // Add the application to Firestore
      const docRef = await addDoc(collection(db, 'admissions'), {
        ...formData,
        status: 'pending',
        timestamp: Timestamp.now(),
      });

      console.log('Application submitted with ID:', docRef.id);
      toast.success('Application submitted successfully! We will review your application and contact you soon.');
      
      // Reset form
      setFormData({
        studentName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        grade: '',
        address: '',
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative py-6 md:py-12 overflow-hidden">
        <div className="relative container mx-auto px-3 text-center">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Admissions open for {new Date().getFullYear()}
          </motion.h1>
          
          {/* <motion.p 
            className="text-lg md:text-xl text-center text-gray-600 mb-8 md:mb-16 max-w-2xl md:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
              Join our community of learners, innovators, and future leaders at Avenues The Global School
          </motion.p> */}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pb-12 md:pb-16 -mt-4 md:-mt-6">
        <div className="max-w-[95rem] mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Left Content */}
              <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="mb-6 md:mb-8">
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4 md:mb-6"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                    Welcome to <span className="text-purple-600">Avenues</span>
                  </h2>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start space-x-3 md:space-x-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 md:mb-2">Excellence in Education</h3>
                      <p className="text-sm md:text-base text-gray-700">
                        We provide an enriched continuum of learning for pre-primary through Class 10, fostering academic excellence and personal growth.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 md:mb-2">Collaborative Community</h3>
                      <p className="text-sm md:text-base text-gray-700">
                        Our dedicated faculty, staff, and administration partner with families to provide an extraordinary learning experience for every child.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 md:mb-2">Holistic Development</h3>
                      <p className="text-sm md:text-base text-gray-700">
                        Students are empowered to become open-minded, principled citizens who actively engage with our ever-changing world.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 md:space-x-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 md:mb-2">Extraordinary Experience</h3>
                      <p className="text-sm md:text-base text-purple-600 font-medium">
                        We're excited to share our love of Avenues with you and help you choose the ideal educational path for your child.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl md:rounded-2xl">
                  <h4 className="font-semibold text-purple-800 mb-1 md:mb-2">Ready to Learn More?</h4>
                  <p className="text-sm text-purple-700">
                    Schedule a meeting to experience firsthand what makes Avenues such an extraordinary place for children to learn and grow.
                  </p>
                </div>
              </div>

              {/* Right Form */}
              <div className="p-6 md:p-8 lg:p-12 bg-white">
                <div className="mb-6 md:mb-8 text-center">
                  <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
                    <span className="text-sm md:text-base text-orange-700 font-medium">📝 Application Form</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 md:mb-3">
                    Admission Application
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">Take the first step towards your child's bright future</p>
                  <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mt-3 md:mt-4"></div>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="group">
                    <label className="block mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-gray-700 group-focus-within:text-purple-600 transition-colors">
                      Student's Full Name<span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full border-2 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 pl-10 md:pl-12 text-sm md:text-base transition-all duration-300 focus:ring-4 focus:outline-none hover:border-gray-300 bg-gray-50/50 ${
                          errors.studentName && touched.studentName
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-purple-500 focus:ring-purple-500/20'
                        }`}
                        placeholder="Enter student's full name"
                      />
                      <User className={`absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 ${
                        errors.studentName && touched.studentName ? 'text-red-500' : 'text-gray-400 group-focus-within:text-purple-500'
                      }`} />
                    </div>
                    {errors.studentName && touched.studentName && (
                      <div className="mt-1 flex items-center text-red-500 text-xs md:text-sm">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="error-message">{errors.studentName}</span>
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="block mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-gray-700 group-focus-within:text-purple-600 transition-colors">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full border-2 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 pl-10 md:pl-12 text-sm md:text-base transition-all duration-300 focus:ring-4 focus:outline-none hover:border-gray-300 bg-gray-50/50 ${
                          errors.email && touched.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-purple-500 focus:ring-purple-500/20'
                        }`}
                        placeholder="Enter email address"
                      />
                      <Mail className={`absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 ${
                        errors.email && touched.email ? 'text-red-500' : 'text-gray-400 group-focus-within:text-purple-500'
                      }`} />
                    </div>
                    {errors.email && touched.email && (
                      <div className="mt-1 flex items-center text-red-500 text-xs md:text-sm">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="error-message">{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="block mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-gray-700 group-focus-within:text-purple-600 transition-colors">
                      Phone Number<span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full border-2 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 pl-10 md:pl-12 text-sm md:text-base transition-all duration-300 focus:ring-4 focus:outline-none hover:border-gray-300 bg-gray-50/50 ${
                          errors.phone && touched.phone
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-purple-500 focus:ring-purple-500/20'
                        }`}
                        placeholder="Enter 10-digit phone number"
                      />
                      <Phone className={`absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 ${
                        errors.phone && touched.phone ? 'text-red-500' : 'text-gray-400 group-focus-within:text-purple-500'
                      }`} />
                    </div>
                    {errors.phone && touched.phone && (
                      <div className="mt-1 flex items-center text-red-500 text-xs md:text-sm">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="error-message">{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-gray-700 group-focus-within:text-purple-600 transition-colors">
                        Date of Birth<span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full border-2 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 transition-all duration-300 focus:ring-4 focus:outline-none hover:border-gray-300 bg-gray-50/50 ${
                          errors.dob && touched.dob
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-purple-500 focus:ring-purple-500/20'
                        }`}
                      />
                      {errors.dob && touched.dob && (
                        <div className="mt-1 flex items-center text-red-500 text-xs md:text-sm">
                          <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          <span className="error-message">{errors.dob}</span>
                        </div>
                      )}
                    </div>

                    <div className="group">
                      <label className="block mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-gray-700 group-focus-within:text-purple-600 transition-colors">
                        Gender<span className="text-red-500 ml-1">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full border-2 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 transition-all duration-300 focus:ring-4 focus:outline-none hover:border-gray-300 bg-gray-50/50 ${
                          errors.gender && touched.gender
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-purple-500 focus:ring-purple-500/20'
                        }`}
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errors.gender && touched.gender && (
                        <div className="mt-1 flex items-center text-red-500 text-xs md:text-sm">
                          <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          <span className="error-message">{errors.gender}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="group">
                    <label className="block mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-gray-700 group-focus-within:text-purple-600 transition-colors">
                      Grade Applying For<span className="text-red-500 ml-1">*</span>
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full border-2 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 transition-all duration-300 focus:ring-4 focus:outline-none hover:border-gray-300 bg-gray-50/50 ${
                        errors.grade && touched.grade
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : 'border-gray-200 focus:border-purple-500 focus:ring-purple-500/20'
                      }`}
                    >
                      <option value="">Select grade</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={`Grade ${i + 1}`}>
                          Grade {i + 1}
                        </option>
                      ))}
                    </select>
                    {errors.grade && touched.grade && (
                      <div className="mt-1 flex items-center text-red-500 text-xs md:text-sm">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="error-message">{errors.grade}</span>
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="block mb-1.5 md:mb-2 text-sm md:text-base font-semibold text-gray-700 group-focus-within:text-purple-600 transition-colors">
                      Complete Address
                    </label>
                    <div className="relative">
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={3}
                        className={`w-full border-2 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 pl-10 md:pl-12 text-sm md:text-base transition-all duration-300 focus:ring-4 focus:outline-none hover:border-gray-300 bg-gray-50/50 resize-none ${
                          errors.address && touched.address
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-purple-500 focus:ring-purple-500/20'
                        }`}
                        placeholder="Enter complete address"
                      />
                      <MapPin className={`absolute left-3 md:left-4 top-4 w-4 h-4 md:w-5 md:h-5 ${
                        errors.address && touched.address ? 'text-red-500' : 'text-gray-400 group-focus-within:text-purple-500'
                      }`} />
                    </div>
                    {errors.address && touched.address && (
                      <div className="mt-1 flex items-center text-red-500 text-xs md:text-sm">
                        <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        <span className="error-message">{errors.address}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 md:py-4 text-sm md:text-base rounded-lg md:rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Application...
                      </span>
                    ) : (
                      '🚀 Submit Application'
                    )}
                  </button>
                </div>

                <div className="mt-4 md:mt-6 text-center text-xs md:text-sm text-gray-500">
                  <p>By submitting this form, you agree to our terms and conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="max-w-[95rem] mx-auto">
          <AdmissionFAQs />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admissions;