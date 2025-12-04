import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AdmissionFAQs = () => {
  const faqs = [
    {
      question: "What is the admission process at Avenues?",
      answer: "The admission process at Avenues involves several steps: 1) Submission of the application form with required documents, 2) Assessment of the student's academic records, 3) Interaction with parents and student, 4) Final selection based on merit and availability of seats. We ensure a transparent and fair admission process for all applicants."
    },
    {
      question: "What documents are required for admission?",
      answer: "Required documents include: Birth Certificate, Previous school records/Report cards, Transfer Certificate (if applicable), Aadhar Card, Passport size photographs, Address proof, and any other relevant certificates. All documents should be submitted in original along with photocopies."
    },
    {
      question: "What is the age criteria for different grades?",
      answer: "For Pre-Primary (Nursery): 3-4 years, LKG: 4-5 years, UKG: 5-6 years, Class I: 6-7 years, and so on. The age should be calculated as of 31st March of the academic year. We follow the age criteria as per the CISCE guidelines."
    },
    {
      question: "Is there an entrance test for admission?",
      answer: "Yes, we conduct an assessment for students seeking admission to Classes I and above. The assessment evaluates the student's understanding of core subjects and their overall aptitude. For Pre-Primary and Primary classes, we have a more interactive assessment process that focuses on the child's readiness for school."
    },
    {
      question: "What are the school timings and academic calendar?",
      answer: "The school operates from Monday to Friday, with classes starting at 8:30 AM and ending at 3:30 PM. The academic year typically begins in April and ends in March, with regular breaks for summer, winter, and other holidays. Detailed academic calendar is provided upon admission."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
    >
      <h2 className="text-purple-600 text-2xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-gray-800 font-medium hover:text-purple-600">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default AdmissionFAQs; 