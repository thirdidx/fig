"use client";

import { useState } from "react";

// Define the type based on the schema
type MailchimpOptIn = {
  _type: "mailchimpOptIn";
  _key?: string;
  heading: string;
  subheading?: string;
  description?: string;
  formAction: string;
  listId: string;
  formId?: string;
  emailPlaceholder?: string;
  buttonText: string;
  successMessage?: string;
  errorMessage?: string;
  gdprCompliance?: string;
  requiredFields?: Array<{
    fieldName: string;
    fieldType: 'text' | 'email' | 'number' | 'tel';
    placeholder?: string;
    label: string;
    _key: string;
  }>;
  styling?: {
    layout?: 'inline' | 'stacked';
    size?: 'small' | 'medium' | 'large';
  };
};

type MailchimpOptInProps = {
  block: MailchimpOptIn;
  index: number;
  isInContainer?: boolean;
};

export default function MailchimpOptIn({ block, isInContainer = false }: MailchimpOptInProps) {
  const [email, setEmail] = useState('');
  const [additionalFields, setAdditionalFields] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const isInline = block.styling?.layout === 'inline';
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

  const handleAdditionalFieldChange = (fieldName: string, value: string) => {
    setAdditionalFields(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('b_' + block.listId + '_' + (block.formId || ''), '');
      
      // Add additional fields
      block.requiredFields?.forEach(field => {
        const value = additionalFields[field.fieldName] || '';
        formData.append(field.fieldName, value);
      });

      const response = await fetch(block.formAction, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Mailchimp requires no-cors
      });

      // Since we use no-cors, we can't read the response
      // We'll assume success and show success message
      setStatus('success');
      setMessage(block.successMessage || 'Thanks for subscribing!');
      setEmail('');
      setAdditionalFields({});
    } catch (error) {
      setStatus('error');
      setMessage(block.errorMessage || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className={isInContainer ? "w-full h-full" : "container mx-auto my-12"}>
      <div className={`bg-light ${isInContainer ? 'w-full h-full flex items-center justify-center' : 'rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto'}`}>
        <div className={`${isInContainer ? 'max-w-lg w-full' : ''} p-8`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
              {block.heading}
            </h2>
            {block.subheading && (
              <p className="text-lg text-gray-700 mb-2">
                {block.subheading}
              </p>
            )}
            {block.description && (
              <p className="text-gray-600 leading-relaxed">
                {block.description}
              </p>
            )}
          </div>

          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
              {message}
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
              {message}
            </div>
          )}

          {status !== 'success' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              {block.requiredFields?.map((field) => (
                <div key={field._key}>
                  <label 
                    htmlFor={field.fieldName} 
                    className="block text-sm font-medium text-dark mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.fieldType}
                    id={field.fieldName}
                    name={field.fieldName}
                    placeholder={field.placeholder}
                    value={additionalFields[field.fieldName] || ''}
                    onChange={(e) => handleAdditionalFieldChange(field.fieldName, e.target.value)}
                    className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-ochre transition-colors ${getSizeClasses()}`}
                    required
                  />
                </div>
              ))}

              <div className={isInline ? 'flex gap-4' : 'space-y-4'}>
                <div className={isInline ? 'flex-1' : 'w-full'}>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={block.emailPlaceholder || 'Enter your email address'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-ochre focus:border-ochre transition-colors ${getSizeClasses()}`}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`${isInline ? 'flex-shrink-0' : 'w-full'} bg-dark hover:bg-ochre text-light font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${getSizeClasses()}`}
                >
                  {status === 'loading' ? 'Subscribing...' : block.buttonText}
                </button>
              </div>

              {block.gdprCompliance && (
                <p className="text-xs text-gray-500 text-center mt-4">
                  {block.gdprCompliance}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}