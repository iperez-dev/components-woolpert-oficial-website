'use client';

import { useState, useEffect } from 'react';

export default function ElementsPage() {
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
      {/* Typography Section */}
      <div className="bg-gray-50 text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-4">
                Typography
              </h2>
              <p className="text-black/70 text-lg max-w-2xl mx-auto">
                Consistent typography scale using Geist Sans for optimal readability and visual hierarchy.
              </p>
            </div>

            {/* Headings */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Headings</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                      Heading 1 - Hero Title
                    </h1>
                    <p className="text-black/60 text-sm mt-2">text-4xl lg:text-5xl xl:text-6xl font-normal</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight">
                      Heading 2 - Section Title
                    </h2>
                    <p className="text-black/60 text-sm mt-2">text-3xl lg:text-4xl xl:text-5xl font-normal</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight">
                      Heading 3 - Subsection
                    </h3>
                    <p className="text-black/60 text-sm mt-2">text-2xl lg:text-3xl font-normal</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-xl lg:text-2xl font-medium text-black">
                      Heading 4 - Component Title
                    </h4>
                    <p className="text-black/60 text-sm mt-2">text-xl lg:text-2xl font-medium</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h5 className="text-lg font-semibold">
                      Heading 5 - Card Title
                    </h5>
                    <p className="text-black/60 text-sm mt-2">text-lg font-semibold</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h6 className="text-base font-medium">
                      Heading 6 - Small Title
                    </h6>
                    <p className="text-black/60 text-sm mt-2">text-base font-medium</p>
                  </div>
                </div>
              </div>

              {/* Body Text */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Body Text</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <p className="text-lg lg:text-xl leading-relaxed text-black/80">
                      Large body text - Used for hero descriptions and important content. This provides excellent readability and draws attention to key messaging.
                    </p>
                    <p className="text-black/60 text-sm mt-2">text-lg lg:text-xl leading-relaxed text-black/80</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <p className="text-base lg:text-lg leading-relaxed text-black/80">
                      Regular body text - Standard paragraph text used throughout the website for general content and descriptions.
                    </p>
                    <p className="text-black/60 text-sm mt-2">text-base lg:text-lg leading-relaxed text-black/80</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm lg:text-base text-black/70">
                      Small body text - Used for captions, labels, and secondary information.
                    </p>
                    <p className="text-black/60 text-sm mt-2">text-sm lg:text-base text-black/70</p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <p className="text-xs lg:text-sm text-black/60">
                      Caption text - Used for image captions, form labels, and metadata.
                    </p>
                    <p className="text-black/60 text-sm mt-2">text-xs lg:text-sm text-black/60</p>
                  </div>
                </div>
              </div>

              {/* Highlight Numbers */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Highlight Numbers</h3>
                <div className="space-y-8">
                  <div className="border-b border-gray-200 pb-8">
                    <div className="flex items-center space-x-12">
                      <div>
                        <div className="text-5xl lg:text-6xl xl:text-7xl font-light text-black">500+</div>
                        <div className="text-black/60 text-base lg:text-lg">Extra Large Stats</div>
                      </div>
                      <div>
                        <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-black">200+</div>
                        <div className="text-black/60 text-base lg:text-lg">Large Stats</div>
                      </div>
                      <div>
                        <div className="text-3xl lg:text-4xl font-light text-black">95%</div>
                        <div className="text-black/60 text-sm lg:text-base">Medium Stats</div>
                      </div>
                    </div>
                    <p className="text-black/60 text-sm mt-4">Various sizes for statistical highlights and key metrics</p>
                  </div>
                </div>
              </div>

              {/* One Column Text */}
              <div className="border-b border-gray-200 pb-12">
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">One Column Text</h3>
                <div className="space-y-6 text-black/80 text-lg lg:text-xl leading-relaxed max-w-4xl">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                  </p>
                  <p>
                    Mauris blandit aliquet elit eget tincidunt nibh pulvinar. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat accumsan id imperdiet et porttitor at sem.
                  </p>
                </div>
              </div>

              {/* Two Column Text */}
              <div className="border-b border-gray-200 pb-12">
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Two Column Text</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  <div className="space-y-6 text-black/80 text-lg lg:text-xl leading-relaxed">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                    </p>
                    <p>
                      Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                  </div>
                  <div className="space-y-6 text-black/80 text-lg lg:text-xl leading-relaxed">
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
                    </p>
                    <p>
                      Sed porttitor lectus nibh cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.
                    </p>
                  </div>
                </div>
              </div>

              {/* Three Column Text */}
              <div className="pb-4">
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Three Column Text</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="space-y-6 text-black/80 text-lg leading-relaxed">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                    </p>
                    <p>
                      Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                    </p>
                  </div>
                  <div className="space-y-6 text-black/80 text-lg leading-relaxed">
                    <p>
                      Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Mauris blandit aliquet elit eget tincidunt nibh pulvinar.
                    </p>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    </p>
                  </div>
                  <div className="space-y-6 text-black/80 text-lg leading-relaxed">
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porttitor lectus nibh cras ultricies ligula sed magna dictum porta.
                    </p>
                    <p>
                      Donec rutrum congue leo eget malesuada. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-4">
                Buttons
              </h2>
              <p className="text-black/70 text-lg max-w-2xl mx-auto">
                Consistent button styles with hover effects and proper accessibility.
              </p>
            </div>

            <div className="space-y-12">
              {/* Primary Buttons */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Primary Buttons</h3>
                <div className="flex flex-wrap items-center gap-6">
                  <button className="bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm">
                    Large Primary
                  </button>
                  <button className="bg-black text-white px-6 py-2 text-base font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm">
                    Medium Primary
                  </button>
                  <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm">
                    Small Primary
                  </button>
                </div>
                <p className="text-black/60 text-sm mt-4">bg-black text-white hover:bg-gray-800</p>
              </div>

              {/* Secondary Buttons */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Secondary Buttons</h3>
                <div className="flex flex-wrap items-center gap-6">
                  <button className="border border-black text-black px-8 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300 rounded-sm">
                    Large Secondary
                  </button>
                  <button className="border border-black text-black px-6 py-2 text-base font-medium hover:bg-black hover:text-white transition-colors duration-300 rounded-sm">
                    Medium Secondary
                  </button>
                  <button className="border border-black text-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 rounded-sm">
                    Small Secondary
                  </button>
                </div>
                <p className="text-black/60 text-sm mt-4">border border-black text-black hover:bg-black hover:text-white</p>
              </div>

              {/* White Buttons (for dark backgrounds) */}
              <div className="bg-black p-8 rounded-sm">
                <h3 className="text-xl lg:text-2xl font-medium text-white mb-8">White Buttons (Dark Background)</h3>
                <div className="flex flex-wrap items-center gap-6">
                  <button className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm">
                    Large White
                  </button>
                  <button className="border border-white text-white px-8 py-3 text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300 rounded-sm">
                    Large Outline
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-4">bg-white text-black hover:bg-gray-100</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards & Components */}
      <div className="bg-gray-50 text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-4">
                Cards & Components
              </h2>
              <p className="text-black/70 text-lg max-w-2xl mx-auto">
                Reusable components and card layouts used throughout the design system.
              </p>
            </div>

            <div className="space-y-12">
              {/* Stats Cards */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Stats Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                    <div className="text-3xl lg:text-4xl font-light text-black mb-2">500+</div>
                    <div className="text-black/60 text-sm lg:text-base">Active Projects</div>
                  </div>
                  <div className="bg-black text-white p-6 rounded-sm">
                    <div className="text-3xl lg:text-4xl font-light mb-2">95%</div>
                    <div className="text-white/80 text-sm lg:text-base">Client Satisfaction</div>
                  </div>
                  <div className="bg-black/10 backdrop-blur-sm border border-black/20 p-6 rounded-sm">
                    <div className="text-3xl lg:text-4xl font-light text-black mb-2">85%</div>
                    <div className="text-black/60 text-sm lg:text-base">Carbon Reduction</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm bg-gray-800 text-white">
                    <div className="text-3xl lg:text-4xl font-light mb-2">24/7</div>
                    <div className="text-white/80 text-sm lg:text-base">Support Available</div>
                  </div>
                </div>
              </div>

              {/* Content Cards */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Content Cards</h3>
                
                {/* Content Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 space-y-4">
                    <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                      <span className="text-gray-600 text-xl font-light">400 × 300</span>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold">Standard Image Card</h4>
                      <p className="text-black/70 text-sm leading-relaxed">
                        Classic card layout with image, title, and description. Perfect for showcasing projects or services.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 space-y-4">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold">Text-Only Card</h4>
                      <p className="text-black/70 text-sm leading-relaxed">
                        Simple card layout without image, focusing on text content and clear typography hierarchy.
                      </p>
                      <a href="#" className="text-black font-medium hover:text-black/80 text-sm">
                        Learn More →
                      </a>
                    </div>
                  </div>

                  <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
                    <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 text-xl font-light">400 × 300</span>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-black/60 uppercase tracking-wider">Aviation</span>
                        <span className="text-xs text-black/40">March 2024</span>
                      </div>
                      <h4 className="text-lg font-semibold">Full-Width Image Card</h4>
                      <p className="text-black/70 text-sm leading-relaxed">
                        Card with full-width image and metadata. Great for blog posts or project showcases.
                      </p>
                      <div className="pt-2">
                        <a href="#" className="text-black font-medium hover:text-black/80 text-sm">
                          Read More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Services Cards */}
                <div className="space-y-12">
                  <h4 className="text-xl lg:text-2xl font-medium text-black text-center">Related Services Layout</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 shadow-sm space-y-6 hover:bg-white hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                      <h5 className="text-xl font-semibold text-black group-hover:text-black transition-colors duration-300">Advanced Air Mobility</h5>
                      <p className="text-black/70 text-base leading-relaxed">
                        Design solutions for emerging aviation technologies including urban air mobility and drone operations.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 shadow-sm space-y-6 hover:bg-white hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                      <h5 className="text-xl font-semibold text-black group-hover:text-black transition-colors duration-300">Geospatial Surveying</h5>
                      <p className="text-black/70 text-base leading-relaxed">
                        Precision surveying and mapping services critical for airport design and construction.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 shadow-sm space-y-6 hover:bg-white hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                      <h5 className="text-xl font-semibold text-black group-hover:text-black transition-colors duration-300">Environmental Engineering</h5>
                      <p className="text-black/70 text-base leading-relaxed">
                        Environmental compliance, assessments, and sustainable design integration for airport projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colors & Spacing */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-4">
                Colors & Spacing
              </h2>
              <p className="text-black/70 text-lg max-w-2xl mx-auto">
                Color palette and spacing system used throughout the design.
              </p>
            </div>

            <div className="space-y-12">
              {/* Colors */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Color Palette</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  <div className="space-y-3">
                    <div className="w-full h-20 bg-black rounded-sm"></div>
                    <div className="text-sm">
                      <div className="font-medium">Black</div>
                      <div className="text-black/60">#000000</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-20 bg-white border border-gray-200 rounded-sm"></div>
                    <div className="text-sm">
                      <div className="font-medium">White</div>
                      <div className="text-black/60">#FFFFFF</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-20 bg-gray-800 rounded-sm"></div>
                    <div className="text-sm">
                      <div className="font-medium">Gray 800</div>
                      <div className="text-black/60">Hover State</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-20 bg-gray-200 rounded-sm"></div>
                    <div className="text-sm">
                      <div className="font-medium">Gray 200</div>
                      <div className="text-black/60">Image Placeholder</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-20 bg-gray-100 rounded-sm"></div>
                    <div className="text-sm">
                      <div className="font-medium">Gray 100</div>
                      <div className="text-black/60">Light Background</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full h-20 bg-gray-50 rounded-sm"></div>
                    <div className="text-sm">
                      <div className="font-medium">Gray 50</div>
                      <div className="text-black/60">Section Background</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacing */}
              <div>
                <h3 className="text-xl lg:text-2xl font-medium text-black mb-8">Spacing System</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-32 text-sm font-medium">py-32 lg:py-40</div>
                    <div className="flex-1 bg-gray-200 h-2"></div>
                    <div className="text-sm text-black/60">Section Padding</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 text-sm font-medium">gap-12 lg:gap-20</div>
                    <div className="flex-1 bg-gray-200 h-2"></div>
                    <div className="text-sm text-black/60">Grid Gaps</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 text-sm font-medium">space-y-8</div>
                    <div className="flex-1 bg-gray-200 h-2"></div>
                    <div className="text-sm text-black/60">Content Spacing</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 text-sm font-medium">px-6 lg:px-8</div>
                    <div className="flex-1 bg-gray-200 h-2"></div>
                    <div className="text-sm text-black/60">Container Padding</div>
                  </div>
                </div>
              </div>
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


