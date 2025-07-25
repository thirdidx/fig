"use client";

import { useState } from "react";

// Define the type based on the schema
type ResendContactForm = {
  _type: "resendContactForm";
  _key?: string;
  heading: string;
  subheading?: string;
  description?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  subjectPlaceholder?: string;
  messagePlaceholder?: string;
  buttonText: string;
  successMessage?: string;
  errorMessage?: string;
  requiredFields?: {
    name?: boolean;
    email?: boolean;
    subject?: boolean;
    message?: boolean;
  };
  styling?: {
    layout?: 'single' | 'two-column';
    size?: 'small' | 'medium' | 'large';
  };
};

type ResendContactFormProps = {
  block: ResendContactForm;
  index: number;
  isInContainer?: boolean;
};

export default function ResendContactForm({ block, isInContainer = false }: ResendContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const isTwoColumn = block.styling?.layout === 'two-column';
  const size = block.styling?.size || 'medium';

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-sm py-2 px-4';
      case 'large':
        return 'text-lg py-4 px-6';
      case 'medium':
      default:
        return 'text-base py-3 px-5';
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setMessage(block.successMessage || 'Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setMessage(block.errorMessage || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className={isInContainer ? "w-full h-full" : "container mx-auto my-12"}>
      <div className={`bg-dark ${isInContainer ? 'w-full h-full flex justify-center' : 'shadow-layer border border-taupe max-w-2xl mx-auto'}`}>
        <div className={`${isInContainer ? 'max-w-lg w-full' : ''} p-8 md:p-12`}>
          <div className="text-center md:text-left mb-8">
            <h2 className="text-2xl text-white mb-3">
              {block.heading}
            </h2>
            {block.subheading && (
              <p className="text-lg text-gray-300 mb-2">
                {block.subheading}
              </p>
            )}
            {block.description && (
              <p className="text-gray-400 leading-relaxed">
                {block.description}
              </p>
            )}
          </div>

          {status === 'success' && (
            <div className="mb-6 p-4 bg-light border border-taupe text-maroon text-center">
              {message}
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-6 p-4 bg-maroon/10 border border-maroon text-maroon text-center">
              {message}
            </div>
          )}

          {status !== 'success' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className={isTwoColumn ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-5'}>
                {(block.requiredFields?.name ?? true) && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name {(block.requiredFields?.name ?? true) && '*'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder={block.namePlaceholder || 'Your Name'}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full bg-light text-dark border-2 border-taupe focus:border-ochre focus:outline-none transition-colors placeholder-taupe ${getSizeClasses()}`}
                      required={block.requiredFields?.name ?? true}
                    />
                  </div>
                )}

                {(block.requiredFields?.email ?? true) && (
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email {(block.requiredFields?.email ?? true) && '*'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={block.emailPlaceholder || 'Your Email Address'}
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full bg-light text-dark border-2 border-taupe focus:border-ochre focus:outline-none transition-colors placeholder-taupe ${getSizeClasses()}`}
                      required={block.requiredFields?.email ?? true}
                    />
                  </div>
                )}
              </div>

              {(block.requiredFields?.subject ?? true) && (
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject {(block.requiredFields?.subject ?? true) && '*'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={block.subjectPlaceholder || 'Subject'}
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={`w-full bg-light text-dark border-2 border-taupe focus:border-ochre focus:outline-none transition-colors placeholder-taupe ${getSizeClasses()}`}
                    required={block.requiredFields?.subject ?? true}
                  />
                </div>
              )}

              {(block.requiredFields?.message ?? true) && (
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message {(block.requiredFields?.message ?? true) && '*'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={block.messagePlaceholder || 'Your Message'}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full bg-light text-dark border-2 border-taupe focus:border-ochre focus:outline-none transition-colors placeholder-taupe resize-vertical ${getSizeClasses()}`}
                    required={block.requiredFields?.message ?? true}
                  />
                </div>
              )}
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full bg-maroon hover:bg-maroon/90 text-light font-accent uppercase transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${getSizeClasses()}`}
              >
                {status === 'loading' ? 'Sending...' : block.buttonText}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}