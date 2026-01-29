import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (connect to backend or email service)
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-dark/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Let's work together!</h3>
            <p className="text-light/70 mb-6">
              I'm currently open to freelance work, or just a friendly chat about tech.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <a href="mailto:your.email@example.com" className="text-primary hover:underline">
                  thapasujan1025@gmail.com
                </a>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Location</h4>
                <p className="text-light/70">Kathmandu, Nepal</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Whatsapp</h4>
                <p className="text-light/70">+977 9869013576</p>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-light/20 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-light/20 rounded-lg focus:outline-none focus:border-primary transition"
                  placeholder="example@gmail.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-dark border border-light/20 rounded-lg focus:outline-none focus:border-primary transition resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;