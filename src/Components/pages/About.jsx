import React from 'react';
import { 
  Building, 
  Shield, 
  Users, 
  Target, 
  Phone, 
  Mail, 
  MapPin, 
  Award,
  TrendingUp,
  HeartHandshake
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Properties Listed' },
    { number: '1,200+', label: 'Happy Tenants' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity First',
      description: 'We maintain unwavering honesty and transparency in all our dealings.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Centric',
      description: 'Your needs and satisfaction are at the heart of everything we do.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We deliver exceptional quality and service in every interaction.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Continuously evolving to provide cutting-edge rental solutions.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Community',
      description: 'Building stronger communities through quality housing solutions.'
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Quality',
      description: 'Curating only the finest properties that meet our strict standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Garissa's Premier Rental Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Redefining Rental
              <span className="block text-blue-300">Experiences</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              At Garissa Rental, we blend innovative technology with personalized service 
              to create seamless property rental experiences. Trusted by thousands, 
              we're committed to excellence in every transaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Explore Properties
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Guiding Principles</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Driving innovation in Garissa's rental market through clear vision and purposeful mission
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                  <Target className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To transform Garissa's rental landscape through innovative digital solutions, 
                  transparent processes, and unwavering commitment to quality. We empower 
                  tenants and property owners with tools and services that simplify rental 
                  experiences while fostering community growth.
                </p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-xl mb-6">
                  <Building className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  To establish Garissa Rental as the region's most trusted property platform, 
                  recognized for technological innovation, community impact, and exceptional 
                  service standards. We envision a future where finding quality rental 
                  properties in Garissa is effortless and rewarding for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The fundamental beliefs that shape our culture and drive our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 group-hover:bg-blue-600/30 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
              <p className="text-xl text-slate-600">Pioneering excellence in Garissa's rental market</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="prose prose-lg prose-slate max-w-none">
                  <p className="text-lg leading-relaxed mb-6 text-slate-700">
                    Established in 2018, Garissa Rental was born from a simple yet powerful 
                    observation: the rental market in Garissa deserved better. We recognized 
                    the need for a platform that combined modern technology with local 
                    expertise to create meaningful connections between property owners 
                    and tenants.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-slate-700">
                    Our founders, with decades of combined experience in real estate and 
                    technology, set out to build more than just a listing platform. We 
                    created an ecosystem that prioritizes verification, quality assurance, 
                    and customer satisfaction above all else.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-700">
                    Today, as Garissa's leading rental platform, we continue to innovate 
                    while staying true to our core values. Our commitment to excellence 
                    has earned us the trust of thousands of clients and established us 
                    as the benchmark for quality in the region's rental industry.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl p-8 text-white">
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold mb-2">2018</div>
                      <div className="text-blue-100">Company Founded</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">1,000+</div>
                      <div className="text-blue-100">Successful Matches</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">4.9/5</div>
                      <div className="text-blue-100">Customer Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Space?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Let's start your journey to finding the ideal rental property in Garissa
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Call Us</h3>
                <p className="text-blue-100">+254 700 123 456</p>
                <p className="text-sm text-blue-200/80 mt-1">Mon-Sun, 8AM-8PM</p>
              </div>
              
              <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-lg mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Email Us</h3>
                <p className="text-blue-100">hello@garissarental.co.ke</p>
                <p className="text-sm text-blue-200/80 mt-1">Response within 2 hours</p>
              </div>
              
              <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Visit Us</h3>
                <p className="text-blue-100">Garissa Town Centre</p>
                <p className="text-sm text-blue-200/80 mt-1">Garissa, Kenya</p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-blue-200">
                © 2024 Garissa Rental. All rights reserved. | Transforming Rental Experiences in Garissa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;