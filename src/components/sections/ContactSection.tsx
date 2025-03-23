import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_pfrsz6g",  
        "template_pcraffd", 
        formData,           // Send form data
        "DoLiutcrvjgWZ-h-f"   
      )
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.log("Error sending message:", error);
          setStatus("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg">
            I'd love to hear from you! If you have any questions or just want to get in touch, feel free to send me a message.
          </p>
        </div>

        <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            onChange={handleChange}
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={5}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div className="mt-4 text-center text-lg">
            <p className="text-gray-800 dark:text-white">{status}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
