'use client';

import { useState, useEffect } from 'react';

export default function SectionsPage() {
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


      {/* Section 4: 1/2 Left Text Right Image - Black Background */}
      <div className="bg-black text-white min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[75vh]">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                1/2 Left Text Right Image
              </h1>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                <span className="text-gray-600 text-4xl lg:text-5xl xl:text-6xl font-light">1024 × 768</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: 1/2 Left Image Right Text - Gray Background */}
      <div className="bg-gray-100 text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[75vh]">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                <span className="text-gray-600 text-4xl lg:text-5xl xl:text-6xl font-light">1024 × 768</span>
              </div>
            </div>
            <div className="space-y-6 lg:space-y-8">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                1/2 Left Image Right Text
              </h2>
              <p className="text-black/80 text-lg lg:text-xl leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: 2/3 Left Text 1/3 Right Image - Black Background */}
    <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight">
                2/3 Left Text 1/3 Right Image
              </h2>
              <div className="text-white/80 text-lg lg:text-xl leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm w-full max-w-lg mx-auto">
                <span className="text-gray-600 text-4xl lg:text-5xl font-light">500 × 500</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: 1/3 Left Image 2/3 Right Text - White Background */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-1">
              <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm w-full max-w-lg mx-auto">
                <span className="text-gray-600 text-3xl lg:text-4xl font-light">500 × 500</span>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight">
                1/3 Left Image 2/3 Right Text
              </h2>
              <div className="text-black/80 text-lg lg:text-xl leading-relaxed">
                <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8: Two Column Text with Images - Light Gray Background */}
      <div className="bg-gray-100 text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-8 lg:space-y-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight text-center">
              Two Column Text with Images
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-3xl lg:text-4xl font-light">800 × 600</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                  </p>
                  <p>
                    Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-3xl lg:text-4xl font-light">800 × 600</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <p>
                    Ad litora torquent per conubia nostra inceptos himenaeos. Mauris blandit aliquet elit eget tincidunt nibh pulvinar. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                  </p>
                  <p>
                    Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porttitor lectus nibh cras ultricies ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 9: Three Column Text with Images - White Background */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-8 lg:space-y-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight text-center">
              Three Column Text with Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-2xl lg:text-3xl font-light">600 × 450</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                  </p>
                  <p>
                    Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-2xl lg:text-3xl font-light">600 × 450</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <p>
                    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                  </p>
                  <p>
                    Mauris blandit aliquet elit eget tincidunt nibh pulvinar. Vestibulum ac diam sit amet quam vehicula elementum.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-2xl lg:text-3xl font-light">600 × 450</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <p>
                    Sed sit amet dui curabitur arcu erat accumsan id imperdiet et porttitor at sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
                  </p>
                  <p>
                    Ac turpis egestas sed porttitor lectus nibh cras ultricies ligula sed magna dictum porta donec rutrum congue leo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 10: Hero Section with Centered Text - Black Background */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-40 lg:py-48">
          <div className="text-center space-y-8 lg:space-y-12">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-tight">
              Hero Section
            </h1>
            <p className="text-white/80 text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
            </p>
            <div className="pt-8">
              <button className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm">
                Call to Action
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 11: Full Width Image with Overlay Text - Dark Overlay */}
      <div className="relative bg-gray-400 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center text-white">
          <div className="space-y-8 lg:space-y-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
              Full Width Image with Overlay
            </h2>
            <p className="text-white/90 text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-8xl font-light pointer-events-none">
          1920 × 1080
        </div>
      </div>

      {/* Section 12: Four Column Grid - Light Gray Background */}
      <div className="bg-gray-100 text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-8 lg:space-y-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight text-center">
              Four Column Grid
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="space-y-6">
                <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-xl font-light">400 × 400</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <h3 className="text-xl font-semibold text-black">Column One</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-xl font-light">400 × 400</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <h3 className="text-xl font-semibold text-black">Column Two</h3>
                  <p>Vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-xl font-light">400 × 400</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <h3 className="text-xl font-semibold text-black">Column Three</h3>
                  <p>Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square bg-gray-200 flex items-center justify-center rounded-sm">
                  <span className="text-gray-600 text-xl font-light">400 × 400</span>
                </div>
                <div className="space-y-4 text-black/80 text-lg leading-relaxed">
                  <h3 className="text-xl font-semibold text-black">Column Four</h3>
                  <p>Nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 13: Alternating Content Blocks - White Background */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-24 lg:space-y-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight">
                Alternating Content Blocks
              </h2>
            </div>
            
            {/* Block 1: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                <span className="text-gray-600 text-3xl lg:text-4xl font-light">800 × 600</span>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight">First Block</h3>
                <p className="text-black/80 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                </p>
              </div>
            </div>

            {/* Block 2: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6 lg:order-1">
                <h3 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight">Second Block</h3>
                <p className="text-black/80 text-lg leading-relaxed">
                  Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
                </p>
              </div>
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm lg:order-2">
                <span className="text-gray-600 text-3xl lg:text-4xl font-light">800 × 600</span>
              </div>
            </div>

            {/* Block 3: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center rounded-sm">
                <span className="text-gray-600 text-3xl lg:text-4xl font-light">800 × 600</span>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-normal leading-tight tracking-tight">Third Block</h3>
                <p className="text-black/80 text-lg leading-relaxed">
                  Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Mauris blandit aliquet elit eget tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 14: Stats/Numbers Section - Black Background */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16 lg:space-y-20">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight">
                Stats & Numbers
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              <div className="text-center space-y-4">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white">250+</div>
                <div className="text-white/80 text-lg lg:text-xl">Projects Completed</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white">15</div>
                <div className="text-white/80 text-lg lg:text-xl">Years Experience</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white">100%</div>
                <div className="text-white/80 text-lg lg:text-xl">Client Satisfaction</div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl lg:text-5xl xl:text-6xl font-light text-white">24/7</div>
                <div className="text-white/80 text-lg lg:text-xl">Support Available</div>
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
