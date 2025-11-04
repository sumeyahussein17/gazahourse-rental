import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  Shield, 
  Star, 
  CheckCircle, 
  MapPin, 
  Calendar,
  Heart,
  Filter,
  Play,
  Users,
  Award,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  Eye,
  Lock,
  Zap,
  TrendingUp
} from 'lucide-react';

const Tenants = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Verified Properties',
      description: 'Every listing is personally verified by our team for quality and accuracy',
      stat: '100% Verified'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure Process',
      description: 'End-to-end encrypted transactions and secure document handling',
      stat: 'Bank-Level Security'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Alerts',
      description: 'Get notified immediately when new properties matching your criteria are listed',
      stat: 'Real-Time Updates'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Smart Matching',
      description: 'AI-powered recommendations based on your preferences and behavior',
      stat: 'AI Powered'
    }
  ];

  const propertyTypes = [
    {
      type: 'apartment',
      name: 'Apartments',
      count: '245',
      image: '🏢',
      description: 'Modern apartments with amenities'
    },
    {
      type: 'villa',
      name: 'Villas',
      count: '89',
      image: '🏡',
      description: 'Spacious standalone homes'
    },
    {
      type: 'studio',
      name: 'Studios',
      count: '112',
      image: '🏠',
      description: 'Compact efficient living spaces'
    },
    {
      type: 'commercial',
      name: 'Commercial',
      count: '67',
      image: '🏪',
      description: 'Office and retail spaces'
    }
  ];

  const testimonials = [
    {
      name: 'Aisha Mohamed',
      location: 'Garissa University Student',
      rating: 5,
      comment: 'Found my perfect studio near campus in just 2 days! The verification process gave me peace of mind.',
      image: 'AM',
      moveIn: '3 months ago'
    },
    {
      name: 'David Kimani',
      location: 'Working Professional',
      rating: 5,
      comment: 'The virtual tours saved me so much time. Moved into a beautiful 2-bedroom apartment without any stress.',
      image: 'DK',
      moveIn: '1 month ago'
    },
    {
      name: 'Halima Abdi',
      location: 'Family with Kids',
      rating: 5,
      comment: 'We found a safe, family-friendly villa with great schools nearby. The process was incredibly smooth.',
      image: 'HA',
      moveIn: '6 months ago'
    }
  ];

  const popularSearches = [
    'Near Garissa University',
    '2 Bedroom Apartments',
    'Pet Friendly',
    'With Parking',
    'Furnished',
    'Under KSh 20,000',
    'Near Hospitals',
    'Gated Community'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Garissa's Most Trusted Rental Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-blue-300">Home in Garissa</span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Discover verified rental properties matched to your lifestyle. 
              From cozy studios to family villas - your dream home awaits.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-4xl mx-auto mb-8">
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-4 py-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="What are you looking for? (e.g., 2 bedroom apartment near university)"
                    className="flex-1 text-gray-800 placeholder-gray-500 outline-none"
                  />
                </div>
                
                <div className="flex items-center gap-2 px-4 py-3 border-l border-gray-200">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <select className="text-gray-800 outline-none">
                    <option>All Locations</option>
                    <option>Garissa Town Centre</option>
                    <option>Near University</option>
                    <option>Hospital Area</option>
                    <option>Central Business District</option>
                  </select>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {popularSearches.map((search, index) => (
                <button 
                  key={index}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>500+ Verified Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2,000+ Happy Tenants</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Find Your Perfect Space</h2>
            <p className="text-xl text-slate-600">Browse by property type</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {propertyTypes.map((type, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-4xl mb-4">{type.image}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{type.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">{type.count} properties</span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Rent With Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the difference with our tenant-focused approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="text-sm font-semibold text-green-600">{feature.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple Rental Process</h2>
            <p className="text-xl text-slate-600">From search to move-in, we've got you covered</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Search & Filter</h3>
                <p className="text-slate-600 text-sm">
                  Use smart filters to find properties that match your budget and preferences
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Virtual Tour</h3>
                <p className="text-slate-600 text-sm">
                  Take virtual tours and schedule viewings for your favorite properties
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Secure Application</h3>
                <p className="text-slate-600 text-sm">
                  Apply securely online with document verification and background checks
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Move In</h3>
                <p className="text-slate-600 text-sm">
                  Sign digital lease and move into your new home with full support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Happy Tenants Stories</h2>
            <p className="text-xl text-slate-600">See what our community is saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">"{testimonial.comment}"</p>
                
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  Moved in {testimonial.moveIn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Find Your New Home?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of happy tenants who found their perfect home through Garissa Rental
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" />
                Browse Properties
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat with Agent
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Properties</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24h</div>
                <div className="text-blue-200 text-sm">Average Move-in</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-blue-200 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get the Mobile App</h2>
                <p className="text-xl text-slate-300 mb-6">
                  Search for properties, get instant notifications, and communicate with landlords - all from your phone.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Download on App Store
                  </button>
                  <button className="border border-slate-600 hover:bg-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Get on Google Play
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">Featured Property Alert</div>
                    <p className="text-slate-300 mb-4">Get notified about premium listings first</p>
                    <div className="flex gap-2">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400"
                      />
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tenants;