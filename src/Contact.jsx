import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const name = e.target.name.value; // Get the name from the input
    const email = e.target.email.value; // Get the email from the input
    const message = e.target.message.value; // Get the message from the textarea

    // Construct the Gmail compose URL
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;
    const emailto = `https://mail.google.com/mail/?view=cm&fs=1&to=your-email@example.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail with the pre-filled message
    window.open(emailto, '_blank');
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-extrabold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
          Get in Touch
        </h3>
        <form className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" 
            rows="4"
            required
          />
          <button className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md transition-transform duration-300 hover:bg-green-600 hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
