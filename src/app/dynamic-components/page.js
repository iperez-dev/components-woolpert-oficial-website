'use client';

import { useState, useEffect } from 'react';

export default function DynamicComponentsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Accordion Component Section */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-normal">Accordion Component</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Expandable content sections with smooth animations and intuitive user interactions.
              </p>
            </div>
            
            <AccordionComponent />
          </div>
        </div>
      </div>

      {/* Modern Accordion with Image */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-normal">Modern Accordion Layout</h2>
              <p className="text-black/70 text-lg max-w-2xl mx-auto">
                A contemporary design combining visual elements with interactive content sections.
              </p>
            </div>
            
            <ModernAccordionComponent />
          </div>
        </div>
      </div>

      {/* Image Carousel Section 1 - Simple Carousel */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-normal">Project Gallery</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Explore our portfolio of completed projects and engineering solutions.
              </p>
            </div>
            
            <SimpleCarouselComponent />
          </div>
        </div>
      </div>

      {/* Image Carousel Section 2 - Thumbnail Carousel */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-normal">Featured Work</h2>
              <p className="text-black/70 text-lg max-w-2xl mx-auto">
                Detailed view of our engineering expertise across multiple disciplines.
              </p>
            </div>
            
            <ThumbnailCarouselComponent />
          </div>
        </div>
      </div>

      {/* Interactive Gallery Section */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-normal">Interactive Gallery</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Browse through our comprehensive project portfolio with detailed information.
              </p>
            </div>
            
            <InteractiveGalleryComponent />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

// Accordion Component
function AccordionComponent() {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const items = [
    {
      title: 'Engineering Services',
      content: 'Comprehensive engineering solutions including civil, structural, and environmental engineering. Our team delivers innovative designs that meet the highest standards of safety, sustainability, and efficiency for projects of all scales.'
    },
    {
      title: 'Geospatial Technology',
      content: 'Advanced geospatial services utilizing cutting-edge technology for surveying, mapping, and spatial analysis. We provide accurate data collection and analysis to support informed decision-making for infrastructure and development projects.'
    },
    {
      title: 'Aviation Planning',
      content: 'Specialized aviation consulting services including airport master planning, airspace analysis, and aviation infrastructure development. Our expertise ensures compliance with FAA regulations and industry best practices.'
    },
    {
      title: 'Environmental Solutions',
      content: 'Environmental consulting and remediation services focused on sustainable development and regulatory compliance. We help clients navigate complex environmental challenges while minimizing ecological impact.'
    },
    {
      title: 'Water Resources',
      content: 'Water resource management and hydraulic engineering services including flood modeling, stormwater management, and water quality assessment. Our solutions promote sustainable water use and environmental protection.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/5 rounded-sm overflow-hidden">
        {items.map((item, index) => (
          <div key={index} className="border-b border-white/10 last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-200 group"
            >
              <span className="text-white font-medium text-lg pr-4">{item.title}</span>
              <svg 
                className={`w-6 h-6 text-white/60 transition-transform duration-300 flex-shrink-0 group-hover:text-white ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-6 pt-0 text-white/80 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

// Modern Accordion with Image Component
function ModernAccordionComponent() {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const items = [
    {
      title: 'Engineering Solutions',
      content: 'Comprehensive engineering services combining expertise with innovative technology for optimal project outcomes.'
    },
    {
      title: 'Infrastructure Development',
      content: 'Smart infrastructure solutions incorporating modern technology and sustainable design practices.'
    },
    {
      title: 'Environmental Services',
      content: 'Sustainable practices that balance development goals with environmental stewardship.'
    },
    {
      title: 'Digital Solutions',
      content: 'Modern digital tools that enhance efficiency and improve decision-making capabilities.'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      {/* Left Side - Simple Image */}
      <div className="aspect-[3/2] bg-gray-100 rounded-sm"></div>

      {/* Right Side - Minimalist Accordion */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              className="w-full py-6 text-left flex items-center justify-between group"
            >
              <h3 className="text-lg font-normal text-black">
                {item.title}
              </h3>
              
              <div className={`transition-transform duration-300 ${
                openItems.has(index) ? 'rotate-180' : ''
              }`}>
                <svg className="w-4 h-4 text-black/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openItems.has(index) ? 'max-h-32 pb-6' : 'max-h-0'
            }`}>
              <p className="text-black/60 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Simple Carousel Component
function SimpleCarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, title: 'Airport Infrastructure', description: 'Modern terminal design and runway optimization' },
    { id: 2, title: 'Bridge Engineering', description: 'Structural analysis and sustainable construction' },
    { id: 3, title: 'Water Management', description: 'Advanced hydraulic systems and flood control' },
    { id: 4, title: 'Urban Planning', description: 'Smart city development and transportation networks' },
    { id: 5, title: 'Environmental Solutions', description: 'Sustainable practices and ecosystem protection' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Carousel */}
      <div className="relative aspect-[16/9] bg-white/10 rounded-sm overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div>
              <h3 className="text-xl font-medium text-white mb-2">{slides[currentSlide].title}</h3>
              <p className="text-white/80 text-sm">{slides[currentSlide].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentSlide === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Thumbnail Carousel Component
function ThumbnailCarouselComponent() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    { id: 1, title: 'Geospatial Mapping', category: 'Technology' },
    { id: 2, title: 'Structural Analysis', category: 'Engineering' },
    { id: 3, title: 'Environmental Assessment', category: 'Sustainability' },
    { id: 4, title: 'Aviation Planning', category: 'Infrastructure' },
    { id: 5, title: 'Water Systems', category: 'Resources' },
    { id: 6, title: 'Urban Development', category: 'Planning' }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Main Image Display */}
      <div className="aspect-[16/9] bg-gray-100 rounded-sm relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div>
              <div className="text-xs text-black/40 uppercase tracking-wide mb-1">
                {images[activeImage].category}
              </div>
              <h3 className="text-xl font-medium text-black">{images[activeImage].title}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`aspect-square bg-gray-100 rounded-sm transition-all duration-200 ${
              activeImage === index 
                ? 'ring-2 ring-black opacity-100' 
                : 'opacity-60 hover:opacity-80'
            }`}
          ></button>
        ))}
      </div>

      {/* Image Info */}
      <div className="text-center space-y-2">
        <div className="text-sm text-black/60">
          {activeImage + 1} of {images.length}
        </div>
        <div className="text-black/80">
          {images[activeImage].category} • {images[activeImage].title}
        </div>
      </div>
    </div>
  );
}

// Interactive Gallery Component
function InteractiveGalleryComponent() {
  const [selectedItem, setSelectedItem] = useState(0);

  const galleryItems = [
    { id: 1, title: 'Lorem Ipsum' },
    { id: 2, title: 'Lorem Ipsum' },
    { id: 3, title: 'Lorem Ipsum' },
    { id: 4, title: 'Lorem Ipsum' }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-0">
      {/* Main Display Area - Horizontal */}
      <div className="aspect-[16/9] bg-gray-200 relative border border-gray-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl lg:text-8xl font-light text-gray-400">
            {galleryItems[selectedItem].id}024 × 768
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-4 gap-0">
        {galleryItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedItem(index)}
            className={`bg-black text-white p-6 lg:p-8 text-left border-r border-white/10 last:border-r-0 transition-all duration-200 ${
              selectedItem === index ? 'bg-gray-900' : 'hover:bg-gray-900'
            }`}
          >
            <div className="space-y-4">
              <div className="text-lg font-medium text-white">
                {item.title}
              </div>
              <div className="text-base text-white/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                Quisque faucibus ex sapien vitae pellentesque sem placerat.
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}