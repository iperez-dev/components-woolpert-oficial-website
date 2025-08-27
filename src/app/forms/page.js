'use client';

import { useState } from 'react';

export default function FormsPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [consultationForm, setConsultationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [careerForm, setCareerForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    portfolio: '',
    coverLetter: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Handle form submission
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation form submitted:', consultationForm);
    // Handle form submission
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    console.log('Career form submitted:', careerForm);
    // Handle form submission
    setIsModalOpen(false);
    // Reset form
    setCareerForm({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      education: '',
      portfolio: '',
      coverLetter: ''
    });
  };

  return (
    <div>
      {/* Form 1: Contact Form - White Background */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                Get In Touch
              </h1>
              <p className="text-black/80 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                Ready to start your next project? Contact our team of experts to discuss your infrastructure needs and discover how we can help bring your vision to life.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-black">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-black">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-black">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-black">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-black">
                  Service Interest *
                </label>
                <select
                  id="service"
                  required
                  value={contactForm.service}
                  onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="aviation">Aviation Infrastructure</option>
                  <option value="geospatial">Geospatial Solutions</option>
                  <option value="environmental">Environmental Engineering</option>
                  <option value="infrastructure">Infrastructure Design</option>
                  <option value="water">Water Resources Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-black">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 text-base font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Form 2: Project Consultation Form - Black Background - Multi-Step Layout */}
      <div className="bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                Schedule Consultation
              </h2>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
                Book a free consultation with our engineering experts. We'll analyze your project requirements and provide strategic recommendations.
              </p>
            </div>

            {/* Horizontal Progress Steps */}
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                  currentStep >= 1 ? 'bg-white text-black' : 'bg-white/20 text-white/60'
                }`}>
                  1
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${currentStep >= 1 ? 'text-white' : 'text-white/60'}`}>
                    Personal Info
                  </div>
                </div>
              </div>
              
              <div className={`w-12 h-0.5 ${currentStep > 1 ? 'bg-white' : 'bg-white/20'} transition-colors duration-200`}></div>
              
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                  currentStep >= 2 ? 'bg-white text-black' : 'bg-white/20 text-white/60'
                }`}>
                  2
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${currentStep >= 2 ? 'text-white' : 'text-white/60'}`}>
                    Project Details
                  </div>
                </div>
              </div>
              
              <div className={`w-12 h-0.5 ${currentStep > 2 ? 'bg-white' : 'bg-white/20'} transition-colors duration-200`}></div>
              
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                  currentStep >= 3 ? 'bg-white text-black' : 'bg-white/20 text-white/60'
                }`}>
                  3
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${currentStep >= 3 ? 'text-white' : 'text-white/60'}`}>
                    Requirements
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleConsultationSubmit} className="space-y-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="bg-white/5 p-8 rounded-sm space-y-6">
                  <h3 className="text-xl font-medium text-white border-b border-white/20 pb-3">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-white">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={consultationForm.firstName}
                        onChange={(e) => setConsultationForm({...consultationForm, firstName: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-sm focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200"
                        placeholder="First name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-white">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={consultationForm.lastName}
                        onChange={(e) => setConsultationForm({...consultationForm, lastName: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-sm focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="consultationEmail" className="block text-sm font-medium text-white">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="consultationEmail"
                        required
                        value={consultationForm.email}
                        onChange={(e) => setConsultationForm({...consultationForm, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-sm focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="consultationPhone" className="block text-sm font-medium text-white">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="consultationPhone"
                        required
                        value={consultationForm.phone}
                        onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-sm focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="bg-white/5 p-8 rounded-sm space-y-6">
                  <h3 className="text-xl font-medium text-white border-b border-white/20 pb-3">Project Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="block text-sm font-medium text-white">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        required
                        value={consultationForm.projectType}
                        onChange={(e) => setConsultationForm({...consultationForm, projectType: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-sm focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select project type</option>
                        <option value="airport">Airport Development</option>
                        <option value="infrastructure">Infrastructure Design</option>
                        <option value="environmental">Environmental Assessment</option>
                        <option value="water">Water Management</option>
                        <option value="surveying">Geospatial Surveying</option>
                        <option value="planning">Master Planning</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-sm font-medium text-white">
                        Project Budget Range
                      </label>
                      <select
                        id="budget"
                        value={consultationForm.budget}
                        onChange={(e) => setConsultationForm({...consultationForm, budget: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-sm focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-100k">Under $100K</option>
                        <option value="100k-500k">$100K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="over-5m">Over $5M</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="block text-sm font-medium text-white">
                      Preferred Timeline *
                    </label>
                    <select
                      id="timeline"
                      required
                      value={consultationForm.timeline}
                      onChange={(e) => setConsultationForm({...consultationForm, timeline: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-sm focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (Within 1 month)</option>
                      <option value="short">Short-term (1-3 months)</option>
                      <option value="medium">Medium-term (3-6 months)</option>
                      <option value="long">Long-term (6+ months)</option>
                      <option value="planning">Planning phase</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="bg-white/5 p-8 rounded-sm space-y-6">
                  <h3 className="text-xl font-medium text-white border-b border-white/20 pb-3">Project Requirements</h3>
                  <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-white">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      required
                      rows={5}
                      value={consultationForm.description}
                      onChange={(e) => setConsultationForm({...consultationForm, description: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-sm focus:ring-2 focus:ring-white focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Describe your project scope, objectives, and any specific requirements or challenges..."
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className={`px-6 py-3 text-base font-medium rounded-sm transition-colors duration-300 ${
                    currentStep === 1 
                      ? 'bg-white/10 text-white/40 cursor-not-allowed' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                    className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-white text-black px-8 py-3 text-base font-medium hover:bg-gray-100 transition-colors duration-300 rounded-sm"
                  >
                    Schedule Free Consultation
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Form 3: Pop-up Form - Simple Layout */}
      <div className="bg-white text-black">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="text-center space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight">
                Pop-up Form
              </h2>
              <p className="text-black/70 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                Experience our streamlined modal interface designed for efficient data collection and seamless user engagement.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-12 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300 rounded-sm"
              >
                Open Modal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Career Application Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center">
              <h3 className="text-2xl font-medium text-black">Career Application</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-black transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <form onSubmit={handleCareerSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-black border-b border-gray-200 pb-2">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="modalFullName" className="block text-sm font-medium text-black">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="modalFullName"
                        required
                        value={careerForm.fullName}
                        onChange={(e) => setCareerForm({...careerForm, fullName: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="modalCareerEmail" className="block text-sm font-medium text-black">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="modalCareerEmail"
                        required
                        value={careerForm.email}
                        onChange={(e) => setCareerForm({...careerForm, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@domain.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="modalCareerPhone" className="block text-sm font-medium text-black">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="modalCareerPhone"
                        required
                        value={careerForm.phone}
                        onChange={(e) => setCareerForm({...careerForm, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="modalPosition" className="block text-sm font-medium text-black">
                        Position of Interest *
                      </label>
                      <select
                        id="modalPosition"
                        required
                        value={careerForm.position}
                        onChange={(e) => setCareerForm({...careerForm, position: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select a position</option>
                        <option value="civil-engineer">Civil Engineer</option>
                        <option value="environmental-engineer">Environmental Engineer</option>
                        <option value="project-manager">Project Manager</option>
                        <option value="surveyor">Geospatial Surveyor</option>
                        <option value="aviation-planner">Aviation Planner</option>
                        <option value="water-engineer">Water Resources Engineer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Professional Background */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-black border-b border-gray-200 pb-2">Professional Background</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="modalExperience" className="block text-sm font-medium text-black">
                        Years of Experience *
                      </label>
                      <select
                        id="modalExperience"
                        required
                        value={careerForm.experience}
                        onChange={(e) => setCareerForm({...careerForm, experience: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select experience level</option>
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="mid">Mid Level (3-5 years)</option>
                        <option value="senior">Senior Level (6-10 years)</option>
                        <option value="lead">Lead/Principal (10+ years)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="modalEducation" className="block text-sm font-medium text-black">
                        Education Background *
                      </label>
                      <input
                        type="text"
                        id="modalEducation"
                        required
                        value={careerForm.education}
                        onChange={(e) => setCareerForm({...careerForm, education: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                        placeholder="e.g., Bachelor's in Civil Engineering"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="modalPortfolio" className="block text-sm font-medium text-black">
                      Portfolio/LinkedIn URL
                    </label>
                    <input
                      type="url"
                      id="modalPortfolio"
                      value={careerForm.portfolio}
                      onChange={(e) => setCareerForm({...careerForm, portfolio: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-black border-b border-gray-200 pb-2">Tell Us About Yourself</h4>
                  <div className="space-y-2">
                    <label htmlFor="modalCoverLetter" className="block text-sm font-medium text-black">
                      Cover Letter *
                    </label>
                    <textarea
                      id="modalCoverLetter"
                      required
                      rows={6}
                      value={careerForm.coverLetter}
                      onChange={(e) => setCareerForm({...careerForm, coverLetter: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us about your background, relevant experience, and why you're interested in joining our team..."
                    />
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-3 text-black bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300 rounded-sm"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
