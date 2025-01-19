import React, { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is a digital visiting card?",
      answer:
        "A digital visiting card is an electronic version of a traditional business card that can be shared online or through mobile devices. It contains your contact details, business information, and links to social profiles.",
    },
    {
      question: "How can I share my digital visiting card?",
      answer:
        "You can share your digital visiting card via email, WhatsApp, QR code, or by simply sharing its unique link.",
    },
    {
      question: "Do I need any special app to create or use a digital visiting card?",
      answer:
        "No, digital visiting cards are accessible through a web browser and can be created or used without the need for a special app.",
    },
    {
      question: "Can I update my digital visiting card information?",
      answer:
        "Yes, you can easily update your digital visiting card's information in real-time without the need to reprint or redistribute anything.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes, your information is stored securely, and you have full control over what you share and with whom you share it.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center items-center">
        <div className="w-full max-w-[1200px] flex justify-center items-center flex-col mt-20 p-6">
      <h2 className="text-4xl font-bold mb-20 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4 w-[80%]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" border rounded-lg p-4 bg-white shadow-sm"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold ">
                {faq.question}
              </h3>
              <span className="text-2xl text-gray-600">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700 w-full">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
