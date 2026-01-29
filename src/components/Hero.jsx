import { FaCheckCircle, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import sujanPhoto from '../assets/sujan thapa.jpg';
const HeroSimple = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-900 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <p className="text-blue-400 font-medium mb-4">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                HI, I'M <span className="text-blue-400">SUJAN</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
                A Passionate Software Developer
              </h2>
            </div>

            <p className="text-gray-300 text-lg mb-10 max-w-xl leading-relaxed">
              I develop modern, reliable web and software applications with a
              focus on clean code, performance, and user-friendly experiences.
            </p>

            {/* CTA Button */}
            <div className="mb-12">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 group"
              >
                <span>GOT A PROJECT?</span>
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <FaCheckCircle className="text-blue-400 text-2xl" />
                </div>
                <div>
                  <p className="text-gray-400">Projects worked on</p>
                  <h3 className="text-3xl font-bold text-white">7+</h3>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <FaCalendarAlt className="text-green-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Available</h3>
                  <p className="text-gray-400">for freelancing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Profile Graphic */}
          <div className="relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"></div>

              {/* Inner content */}
              <div className="absolute inset-8 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <img
                    src={sujanPhoto}
                    alt="Sujan"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <p className="text-gray-300"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
