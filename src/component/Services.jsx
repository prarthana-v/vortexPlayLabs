import React from 'react'
import '../Styles/services.css'


const Services = () => {
  const services = [
    {
      title: "Immersive Worlds",
      description: "Explore dynamic landscapes with stunning visuals.",
      icon: "fas fa-globe",
    },
    {
      title: "Live Streaming",
      description: "Share your epic moments with the world in real-time.",
      icon: "fas fa-video",
    },
    {
      title: "Tournaments",
      description: "Join competitive battles and prove your skills.",
      icon: "fas fa-gamepad",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500 text-center mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative service-card p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-xl shadow-lg hover:shadow-neon hover:-translate-y-3 transform transition-all duration-300 group"
          >
            <div className=""></div>
            {/* Neon Border */}
            <div className="absolute inset-0 rounded-xl rounded-b-none border-2 border-bottom-0 border-transparent group-hover:border-indigo-200 transition-colors duration-300"></div>

            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-300 rounded-full shadow-lg mb-4 text-3xl text-white group-hover:scale-110 transform transition-transform duration-300">
              <i className={service.icon}></i>
            </div>
            <div className="">
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
