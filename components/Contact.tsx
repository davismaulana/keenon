import React, { useState } from 'react';
import Section from './Section';
import { useContent } from '../context/LanguageContext';
import { LocationMarkerIcon, ClockIcon } from './icons/ContactIcons';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/AdvantageIcons';
import { CheckCircleIcon } from './icons/CheckCircleIcon';


const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <input {...props} id={props.name} className="w-full px-4 py-3 bg-[var(--color-bg-input)] text-[var(--color-text-primary)] rounded-md border border-[var(--color-border-input)] focus:ring-2 focus:ring-[var(--color-border-input-focus)]/50 focus:border-[var(--color-border-input-focus)] transition"/>
    </div>
);

const TextAreaField: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <textarea {...props} id={props.name} rows={4} className="w-full px-4 py-3 bg-[var(--color-bg-input)] text-[var(--color-text-primary)] rounded-md border border-[var(--color-border-input)] focus:ring-2 focus:ring-[var(--color-border-input-focus)]/50 focus:border-[var(--color-border-input-focus)] transition"></textarea>
    </div>
);

const Contact: React.FC = () => {
    const { content } = useContent();
    const { contact, footer } = content;
    
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call for demo purposes
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        // Reset form after success message
        setTimeout(() => {
            setFormState({ name: '', email: '', subject: '', message: '' });
            setStatus('idle');
        }, 4000);
    };
    
    const mapFilterClass = 'grayscale(1) invert(0.9) contrast(0.9) brightness(0.9)';

    return (
        <Section id="contact">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] reveal">{contact.title}</h2>
                <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto font-light reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                   {contact.subtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-5 gap-12">
                {/* Left column: Info + Map */}
                <div className="md:col-span-2 reveal" style={{ '--delay': '300ms' } as React.CSSProperties}>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Our Office</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <LocationMarkerIcon className="h-7 w-7 text-[var(--color-accent)] mr-4 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-bold text-[var(--color-text-primary)]">Address</h4>
                                <p className="text-[var(--color-text-secondary)] whitespace-pre-line">{footer.contact_info.address}</p>
                            </div>
                        </div>
                        {footer.contact_info.businessHours && (
                            <div className="flex items-start">
                                <ClockIcon className="h-7 w-7 text-[var(--color-accent)] mr-4 mt-1 flex-shrink-0"/>
                                <div>
                                    <h4 className="font-bold text-[var(--color-text-primary)]">Business Hours</h4>
                                    <p className="text-[var(--color-text-secondary)]">{footer.contact_info.businessHours}</p>
                                </div>
                            </div>
                        )}
                        <div className="flex items-start">
                            <PhoneIcon className="h-7 w-7 text-[var(--color-accent)] mr-4 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-bold text-[var(--color-text-primary)]">Office Number</h4>
                                <a href={`tel:${footer.contact_info.phone.replace(/\s/g, '')}`} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent-hover)] transition-colors">
                                    {footer.contact_info.phone}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MailIcon className="h-7 w-7 text-[var(--color-accent)] mr-4 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-bold text-[var(--color-text-primary)]">Office Email</h4>
                                <a href={`mailto:${footer.contact_info.email}`} className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-accent-hover)] transition-colors">
                                    {footer.contact_info.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4637.7335754134965!2d112.71776727566699!3d-7.293890892713649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb895b3a5833%3A0x3525393062170718!2sSOHO%20SKYLOFT%20Ciputra%20World%20Surabaya!5e1!3m2!1sen!2sid!4v1754794604343!5m2!1sen!2sid"
                            className={`w-full h-64 border-0 filter transition-all duration-300 ${mapFilterClass}`}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map of PT Xinyi Trading Group's Surabaya office at Skyloft SOHO"
                        ></iframe>
                    </div>
                </div>

                {/* Right column: Form */}
                <div className="md:col-span-3 bg-[var(--color-bg-subtle)] p-6 sm:p-8 rounded-lg border border-[var(--color-border)] reveal" style={{ '--delay': '400ms' } as React.CSSProperties}>
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
                            <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
                            <h3 className="text-2xl font-bold text-gray-100">Message Sent!</h3>
                            <p className="text-medium-gray mt-2">{contact.form.success}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <InputField label={contact.form.name} name="name" value={formState.name} onChange={handleInputChange} required />
                            <InputField label={contact.form.email} name="email" type="email" value={formState.email} onChange={handleInputChange} required />
                            <InputField label={contact.form.subject} name="subject" value={formState.subject} onChange={handleInputChange} required />
                            <TextAreaField label={contact.form.message} name="message" value={formState.message} onChange={handleInputChange} required />
                            <div className="flex justify-end pt-2">
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full sm:w-auto px-8 py-3 bg-[var(--color-accent-cta-bg)] text-[var(--color-text-cta)] font-bold rounded-lg shadow-lg hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-wait"
                                >
                                    {status === 'sending' ? contact.form.sending : contact.form.send}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Contact;