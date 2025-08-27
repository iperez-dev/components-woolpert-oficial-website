'use client';

import { useState, useEffect } from 'react';

export default function ComplexSectionsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {/* Section 1: Aviation Hero - White Background */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                Aviation
              </h1>
              <p className="text-black/80 text-lg lg:text-xl leading-relaxed max-w-lg">
                We provide innovative, intelligent and cost-effective solutions for aviation infrastructure and environmental challenges.
              </p>
              
              {/* Stats */}
              <div className="flex space-x-8 pt-4">
                <div>
                  <div className="text-4xl lg:text-5xl font-light text-black">500+</div>
                  <div className="text-black/60 text-sm lg:text-base">Projects</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-light text-black">95%</div>
                  <div className="text-black/60 text-sm lg:text-base">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-light text-black">Global</div>
                  <div className="text-black/60 text-sm lg:text-base">Reach</div>
                </div>
              </div>

              <button className="bg-black text-white px-8 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm">
                Learn About Our Team
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                <span className="text-gray-600 text-2xl lg:text-3xl font-light">Aviation Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Geospatial Solutions - Black Background - Centered Layout */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="text-center space-y-16">
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                Geospatial Solutions
              </h1>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                Advanced mapping and surveying technologies that provide precise data for infrastructure planning and environmental analysis.
              </p>
            </div>

            {/* Highlighted Stats - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-light text-white mb-4">1M+</div>
                <div className="text-white/60 text-base lg:text-lg font-medium">Acres Mapped</div>
                <div className="text-white/50 text-sm mt-2">Across North America</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-light text-white mb-4">99.9%</div>
                <div className="text-white/60 text-base lg:text-lg font-medium">Accuracy Rate</div>
                <div className="text-white/50 text-sm mt-2">Industry Leading Precision</div>
              </div>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-light text-white mb-4">24/7</div>
                <div className="text-white/60 text-base lg:text-lg font-medium">Data Access</div>
                <div className="text-white/50 text-sm mt-2">Real-time Monitoring</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm">
                Explore Our Technology
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Environmental Engineering - White Background - Split Layout */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-20">
            {/* Top Section - Image and Title */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-2xl lg:text-3xl font-light">Environmental Solutions</span>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                  Environmental Engineering
                </h1>
                <p className="text-black/80 text-lg lg:text-xl leading-relaxed">
                  Sustainable solutions that protect natural resources while enabling responsible development and infrastructure growth.
                </p>
              </div>
            </div>

            {/* Bottom Section - Stats Grid */}
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-2xl lg:text-3xl font-normal text-black/90 mb-4">Our Environmental Impact</h3>
                <div className="w-24 h-1 bg-black mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="bg-gray-50 p-8 rounded-sm text-center space-y-4">
                  <div className="text-5xl lg:text-6xl font-light text-black">85%</div>
                  <div className="text-black/70 text-base lg:text-lg font-medium">Carbon Reduction</div>
                  <p className="text-black/60 text-sm">Achieved across all projects through innovative sustainable practices</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-sm text-center space-y-4">
                  <div className="text-5xl lg:text-6xl font-light text-black">300+</div>
                  <div className="text-black/70 text-base lg:text-lg font-medium">Sites Restored</div>
                  <p className="text-black/60 text-sm">Environmental remediation projects completed successfully</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-sm text-center space-y-4">
                  <div className="text-5xl lg:text-6xl font-light text-black">Zero</div>
                  <div className="text-black/70 text-base lg:text-lg font-medium">Waste Goal</div>
                  <p className="text-black/60 text-sm">Commitment to zero-waste construction by 2030</p>
                </div>
              </div>

              <div className="text-center pt-8">
                <button className="bg-black text-white px-8 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm">
                  Learn About Sustainability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Infrastructure Design - Black Background - Vertical Stats Layout */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Left Column - Title and Description */}
            <div className="lg:col-span-1 space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                Infrastructure Design
              </h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Comprehensive infrastructure solutions that connect communities and drive economic growth through innovative design and engineering excellence.
              </p>
              <button className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm">
                View Our Projects
              </button>
            </div>

            {/* Right Columns - Vertical Stats */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8">
                <div className="border-l-4 border-white pl-6">
                  <div className="text-6xl lg:text-7xl font-light text-white mb-2">15K+</div>
                  <div className="text-white/70 text-lg font-medium mb-2">Miles of Roads</div>
                  <p className="text-white/60 text-sm">Designed and constructed across multiple states</p>
                </div>
                <div className="border-l-4 border-white pl-6">
                  <div className="text-6xl lg:text-7xl font-light text-white mb-2">200+</div>
                  <div className="text-white/70 text-lg font-medium mb-2">Bridge Projects</div>
                  <p className="text-white/60 text-sm">From concept to completion with zero safety incidents</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="border-l-4 border-white pl-6">
                  <div className="text-6xl lg:text-7xl font-light text-white mb-2">50+</div>
                  <div className="text-white/70 text-lg font-medium mb-2">Cities Served</div>
                  <p className="text-white/60 text-sm">Urban planning and infrastructure development</p>
                </div>
                <div className="border-l-4 border-white pl-6">
                  <div className="text-6xl lg:text-7xl font-light text-white mb-2">100%</div>
                  <div className="text-white/70 text-lg font-medium mb-2">On-Time Delivery</div>
                  <p className="text-white/60 text-sm">Consistent project completion within schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Water Resources - White Background - Hero Stats Layout */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-20">
            {/* Hero Stats - Large Numbers First */}
            <div className="text-center space-y-16">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                  Water Resources Management
                </h1>
                <p className="text-black/80 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                  Protecting and managing our most precious resource through innovative water treatment, distribution, and conservation solutions.
                </p>
              </div>

              {/* Large Hero Number */}
              <div className="space-y-4">
                <div className="text-8xl lg:text-9xl font-light text-black">2.5B</div>
                <div className="text-black/70 text-xl lg:text-2xl font-medium">Gallons Treated Daily</div>
                <div className="text-black/60 text-base">Serving over 3 million people across the region</div>
              </div>
            </div>

            {/* Supporting Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-black/10">
              <div className="text-center space-y-3">
                <div className="text-3xl lg:text-4xl font-light text-black">450+</div>
                <div className="text-black/70 text-sm lg:text-base">Treatment Plants</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl lg:text-4xl font-light text-black">98%</div>
                <div className="text-black/70 text-sm lg:text-base">Purity Rate</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl lg:text-4xl font-light text-black">25</div>
                <div className="text-black/70 text-sm lg:text-base">States Served</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-3xl lg:text-4xl font-light text-black">24/7</div>
                <div className="text-black/70 text-sm lg:text-base">Monitoring</div>
              </div>
            </div>

            {/* Image and CTA */}
            <div className="space-y-8 text-center">
              <div className="w-full max-w-4xl mx-auto aspect-[21/9] bg-gray-200 flex items-center justify-center rounded-sm">
                <span className="text-gray-600 text-2xl lg:text-3xl font-light">Water Treatment Facility</span>
              </div>
              <button className="bg-black text-white px-8 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm">
                Discover Water Solutions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Featured Projects - Black Background */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-4">
                Featured Projects
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Discover how we are solving complex aviation challenges around the world.
              </p>
            </div>

            {/* Main Featured Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                <span className="text-gray-600 text-2xl lg:text-3xl font-light">Project Image</span>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight">
                  Cincinnati/Northern Kentucky International Airport Modernization
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Working with the Cincinnati/Northern Kentucky International Airport (CVG) Authority, we provided comprehensive planning and design services for a major terminal modernization project that enhanced passenger experience and operational efficiency.
                </p>
                <a href="#" className="text-white font-medium hover:text-gray-300 text-base">
                  View Case Study
                </a>
              </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-16">
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">Project 1</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Denver International Airport Runway</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Comprehensive runway design and construction management for one of the busiest airports in North America.
                  </p>
                  <a href="#" className="text-white font-medium hover:text-gray-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">Project 2</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Frederick & Miller Drone Tower</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Innovative air traffic control solutions for unmanned aircraft systems integration.
                  </p>
                  <a href="#" className="text-white font-medium hover:text-gray-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">Project 3</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">International Cargo Hub Modernization</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Complete infrastructure overhaul for enhanced cargo operations and logistics efficiency.
                  </p>
                  <a href="#" className="text-white font-medium hover:text-gray-300 text-sm">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <button className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Aviation Markets - White Background */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-4">
                Aviation Markets
              </h2>
              <p className="text-black/80 text-lg max-w-2xl mx-auto">
                Specialized expertise across diverse aviation sectors and infrastructure needs.
              </p>
            </div>

            {/* Markets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Row 1 */}
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">Commercial Aviation</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Commercial Aviation</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Passenger terminals, cargo facilities, and supporting infrastructure for commercial operations.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">Military & Defense</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Military & Defense</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Secure facilities and specialized infrastructure for military aviation operations.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">General Aviation</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">General Aviation</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Private and corporate aviation facilities with flexible design solutions.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">Cargo & Logistics</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Cargo & Logistics</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Efficient cargo handling facilities and logistics infrastructure design.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">Emerging Markets</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Emerging Markets</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Urban air mobility and drone operations infrastructure for future aviation.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-lg font-light">Sustainable Aviation</span>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Sustainable Aviation</h4>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Green infrastructure and sustainable design for environmentally conscious aviation.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-black/20">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-black mb-2">50+</div>
                <div className="text-black/80 text-sm lg:text-base">Airports Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-black mb-2">25+</div>
                <div className="text-black/80 text-sm lg:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-black mb-2">100+</div>
                <div className="text-black/80 text-sm lg:text-base">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-black mb-2">15+</div>
                <div className="text-black/80 text-sm lg:text-base">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Trends in Aviation - Black Background */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-4">
                Trends in Aviation
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Stay informed about the latest developments shaping the future of aviation infrastructure.
              </p>
            </div>

            {/* Featured Article */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Aviation Insights</span>
                  <h3 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight">
                    Woolpert Continues Embracing the Renaissance of Outdoor Solutions in Airports Across the Nation
                  </h3>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  As airports nationwide continue to evolve and adapt to changing passenger expectations and operational demands, outdoor solutions are becoming increasingly important for creating welcoming, efficient, and sustainable aviation environments.
                </p>
                <a href="#" className="text-white font-medium hover:text-gray-300 text-base">
                  Read Article
                </a>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md lg:max-w-lg aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-xl font-light">Featured Article Image</span>
                </div>
              </div>
            </div>

            {/* Related Insights */}
            <div className="space-y-8">
              <h4 className="text-xl lg:text-2xl font-medium text-white text-center">Related Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="space-y-6">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                    <span className="text-gray-600 text-lg font-light">Insight 1</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Sustainability</span>
                      <span className="text-xs text-white/40">March 2024</span>
                    </div>
                    <h5 className="text-lg font-semibold">Sustainable Aviation Infrastructure</h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Exploring green building practices and renewable energy integration in modern airport design.
                    </p>
                    <a href="#" className="text-white font-medium hover:text-gray-300 text-sm">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                    <span className="text-gray-600 text-lg font-light">Insight 2</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Technology</span>
                      <span className="text-xs text-white/40">February 2024</span>
                    </div>
                    <h5 className="text-lg font-semibold">Smart Airport Technology</h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      How IoT and AI are revolutionizing airport operations and passenger experiences.
                    </p>
                    <a href="#" className="text-white font-medium hover:text-gray-300 text-sm">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                    <span className="text-gray-600 text-lg font-light">Insight 3</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Innovation</span>
                      <span className="text-xs text-white/40">January 2024</span>
                    </div>
                    <h5 className="text-lg font-semibold">Future of Airport Design</h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Innovative approaches to terminal design that prioritize efficiency and passenger comfort.
                    </p>
                    <a href="#" className="text-white font-medium hover:text-gray-300 text-sm">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Meet Our Leadership - White Background */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-4">
                Meet Our Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="space-y-6 text-center">
                <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm mx-auto max-w-xs">
                  <span className="text-gray-600 text-lg font-light">Leadership Photo</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Greg Bauer</h4>
                  <p className="text-black/70 text-sm">Vice President, Aviation</p>
                  <p className="text-black/60 text-xs">
                    Leading aviation infrastructure projects with over 20 years of experience in airport design and planning.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-center">
                <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm mx-auto max-w-xs">
                  <span className="text-gray-600 text-lg font-light">Leadership Photo</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Lisa Johnson</h4>
                  <p className="text-black/70 text-sm">Director, Airport Planning</p>
                  <p className="text-black/60 text-xs">
                    Specializing in master planning and environmental compliance for major aviation infrastructure projects.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-center">
                <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm mx-auto max-w-xs">
                  <span className="text-gray-600 text-lg font-light">Leadership Photo</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">Mike Rodriguez</h4>
                  <p className="text-black/70 text-sm">Senior Project Manager</p>
                  <p className="text-black/60 text-xs">
                    Managing complex aviation projects from conception through completion with focus on innovation and efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <button className="bg-black text-white px-8 py-3 text-base font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: CTA - Black Background */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight">
              Ready to Transform Your Aviation Infrastructure?
            </h2>
            <p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto">
              Partner with our experienced team to design and build the aviation facilities of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-3 text-base font-medium hover:bg-white hover:text-black transition-colors duration-300 rounded-sm">
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
