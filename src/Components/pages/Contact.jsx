import React from 'react';
import { Phone, MessageCircle, Video, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call',
      description: '021 123 145 14',
      buttonText: 'Call now',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Chat',
      description: '021 123 145 14',
      buttonText: 'Chat now',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Call',
      description: '021 123 145 14',
      buttonText: 'Video Call now',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Message',
      description: '021 123 145 14',
      buttonText: 'Message now',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Contact Us</h1>
          <div className="max-w-2xl mx-auto">
            {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6">Easy to contact us</h2> */}
            <p className="text-lg text-gray-600 leading-relaxed">
              We always ready to help by providing the best services for you. We believe a
              good place to live can make your life better.
            </p>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="p-3 rounded-full bg-gray-100 text-gray-600 mb-4">
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow">{method.description}</p>
                  
                  <button className={`w-full text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${method.buttonColor}`}>
                    {method.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Location & Info */}
            <div className="space-y-6">
              {/* Office Address */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Office</h4>
                    <p className="text-gray-600">
                      Garissa Town Centre<br />
                      Garissa, Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-green-100 text-green-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Emergency Contact</h4>
                <p className="text-gray-600 mb-3">
                  For urgent matters outside business hours
                </p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-yellow-600" />
                  <span className="font-semibold text-gray-900">021 123 145 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;