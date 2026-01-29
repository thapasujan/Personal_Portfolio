import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark border-t border-light/10 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-light/60">
          © {currentYear} Sujan Thapa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;