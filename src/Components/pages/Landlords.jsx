import React, { useState } from 'react';
import { 
  Building, 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Users, 
  CheckCircle, 
  Star,
  BarChart3,
  Clock,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Play,
  Award,
  Target
} from 'lucide-react';

const Landlords = () => {
  const [activeTab, setActiveTab] = useState('manage');

  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Maximize Earnings',
      description: 'Get 20-30% higher rental yields with our premium listing service',
      stat: '+30% ROI'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Protection',
      description: 'Comprehensive tenant screening and rental guarantee protection',
      stat: '99% Safe'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Saving',
      description: 'Save 15+ hours monthly with our full property management solution',
      stat: '15+ hrs saved'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Smart Analytics',
      description: 'Real-time performance insights and market comparison reports',
      stat: 'AI Powered'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Mohamed',
      property: '4 Apartments in Town Centre',
      rating: 5,
      comment: 'Garissa Rental increased my occupancy from 60% to 95% in just 3 months. Their professional approach is unmatched.',
      avatar: 'AM'
    },
    {
      name: 'Fatima Hassan',
      property: 'Villa in Garissa University',
      rating: 5,
      comment: 'The team handles everything from tenant screening to maintenance. I can focus on my business while they manage my properties.',
      avatar: 'FH'
    },
    {
      name: 'Omar Abdullahi',
      property: 'Commercial Complex',
      rating: 5,
      comment: 'Outstanding service! My rental income has grown by 40% since partnering with Garissa Rental.',
      avatar: 'OA'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Property Assessment',
      description: 'Free comprehensive evaluation of your property\'s rental potential',
      duration: '24 hours'
    },
    {
      step: '02',
      title: 'Premium Listing',
      description: 'Professional photography and strategic marketing across all platforms',
      duration: '48 hours'
    },
    {
      step: '03',
      title: 'Tenant Screening',
      description: 'Rigorous background checks and credit verification process',
      duration: '72 hours'
    },
    {
      step: '04',
      title: 'Move-In & Management',
      description: 'Seamless tenant onboarding and ongoing property management',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Garissa's #1 Property Management</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Maximize Your
                  <span className="block text-blue-300">Property Value</span>
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  Join 500+ successful landlords who trust Garissa Rental to maximize their 
                  rental income while enjoying complete peace of mind. Professional property 
                  management that delivers results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    Start Earning More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Success Story
                  </button>
                </div>

                <div className="flex items-center gap-8 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>500+ Landlords</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Calculate Your Earnings</h3>
                    <p className="text-blue-200">See how much more you could be earning</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-blue-100 text-sm mb-2">Property Type</label>
                      <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white">
                        <option>Apartment</option>
                        <option>Villa</option>
                        <option>Commercial</option>
                        <option>Office Space</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-blue-100 text-sm mb-2">Current Monthly Rent</label>
                      <input 
                        type="text" 
                        placeholder="KSh 25,000"
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200"
                      />
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
                      Calculate Potential Increase
                    </button>
                  </div>

                  <div className="mt-6 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                    <div className="text-green-300 text-sm">Estimated Increase</div>
                    <div className="text-2xl font-bold text-white">+ KSh 7,500/month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Landlords Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to maximize your returns and minimize your stress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                    {feature.stat}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Streamlined Process</h2>
            <p className="text-xl text-slate-600">From listing to management, we make it simple</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full">
                    <div className="text-3xl font-bold text-blue-600 mb-4">{step.step}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-300 transform -translate-y-1/2">
                      <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 border-r-2 border-b-2 border-slate-400 rotate-45"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Hear from landlords who transformed their rental business with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm">{testimonial.property}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-blue-100 leading-relaxed">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">Ready to Maximize Your Returns?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful landlords and let us handle the hard work while you enjoy the rewards.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Book Free Consultation
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Property Details
                </button>
              </div>

              <div className="mt-8 text-blue-200 text-sm">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    No upfront costs
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Free property assessment
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    30-day satisfaction guarantee
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

export default Landlords;