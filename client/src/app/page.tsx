"use client";

import Hero from "@/components/index/hero";
const features = [
  {
    title: "Discover Your New Home",
    description: "Find and explore detailed information about countries around the world to make your relocation decision easier.",
    icon: "🌍",
  },
  {
    title: "Tailored Information",
    description: "Get tailored insights about each country’s lifestyle, cost of living, and more to fit your needs.",
    icon: "🔎",
  },
  {
    title: "Reliable Sources",
    description: "Access data and advice from trusted sources to ensure you have the most accurate and up-to-date information.",
    icon: "✔️",
  },
];

const testimonials = [
  {
    name: "Alice Johnson",
    feedback: "This service made relocating so much easier! The detailed country information helped me make an informed decision.",
    location: "Toronto, Canada",
  },
  {
    name: "Carlos Martinez",
    feedback: "I was able to find all the information I needed about living in Mexico. Great resource for anyone considering a move!",
    location: "Mexico City, Mexico",
  },
  {
    name: "Sophia Lee",
    feedback: "The insights provided are invaluable. It helped me understand the cultural and economic aspects of moving to the UK.",
    location: "London, United Kingdom",
  },
];

const partners = [
  "https://example.com/logo1.png",
  "https://example.com/logo2.png",
  "https://example.com/logo3.png",
];

const faqs = [
  {
    question: "How accurate is the information provided?",
    answer: "We source our data from reputable and trusted sources to ensure accuracy and reliability.",
  },
  {
    question: "Can I suggest a new country to be added?",
    answer: "Yes! We welcome suggestions. Please contact us through our support page.",
  },
  {
    question: "Is there a subscription fee?",
    answer: "No, our service is free to use. We aim to provide valuable information to assist with your relocation plans.",
  },
];

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Overseas. All rights reserved.</p>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div>
      <Hero />

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-background shadow-md rounded-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row md:justify-around">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-100 mx-2 shadow-md rounded-lg mb-8 md:mb-0 md:w-1/3">
                <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <section className="py-12 bg-background ">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;