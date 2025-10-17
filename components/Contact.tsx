import React, { useState } from 'react';
import Section from './Section';
import { useContent } from '../context/LanguageContext';
import { LocationMarkerIcon, ClockIcon } from './icons/ContactIcons';
import { PhoneIcon } from './icons/PhoneIcon';
import { MailIcon } from './icons/AdvantageIcons';
import { CheckCircleIcon } from './icons/CheckCircleIcon';


/*
// ROI Calculator Components and Types - Commented out as requested

import { Product } from '../data/content';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CostEfficiencyIcon, ProductivityIcon, ScalabilityIcon } from './icons/AdvantageIcons';
import { CalendarIcon } from './icons/CalculatorIcons';

type Step = 1 | 2 | 3;

interface FormData {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    jobTitle: string;
    businessType: string;
    companySize: string;
    operatingHours: number;
    operatingDays: number;
    avgSalary: number;
    staffCount: number;
}

interface Results {
    totalInvestment: number;
    monthlySavings: number;
    breakEvenMonths: number;
    threeYearROI: number;
}

const QuestionnaireStep: React.FC<{ formData: FormData; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; onNext: () => void }> = ({ formData, onChange, onNext }) => (
    <div className="animate-fade-in">
        <h2 className="text-3xl font-bold font-display text-center text-gray-100 mb-2">ROI Calculator</h2>
        <p className="text-center text-medium-gray mb-8">Fill in your business details to get started.</p>
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Name" name="name" value={formData.name} onChange={onChange} required />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={onChange} required />
                <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={onChange} required />
                <InputField label="Company Name" name="companyName" value={formData.companyName} onChange={onChange} required />
                <InputField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={onChange} required />
                <SelectField label="Business Type" name="businessType" value={formData.businessType} onChange={onChange}>
                    <option>Restaurant</option><option>Hotel</option><option>Retail</option><option>Healthcare</option><option>Office</option><option>Manufacturing</option><option>Other</option>
                </SelectField>
            </div>
            <div className="pt-4 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Operational & Cost Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Operating Hours per Day" name="operatingHours" type="number" min="1" value={String(formData.operatingHours)} onChange={onChange} required />
                    <InputField label="Operating Days per Month" name="operatingDays" type="number" min="1" value={String(formData.operatingDays)} onChange={onChange} required />
                    <InputField label="Average Salary per Staff (IDR)" name="avgSalary" type="number" min="0" value={String(formData.avgSalary)} onChange={onChange} required />
                    <InputField label="Number of Staff" name="staffCount" type="number" min="1" value={String(formData.staffCount)} onChange={onChange} required />
                </div>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-corporate-gold text-white font-bold rounded-lg shadow-lg hover:bg-corporate-gold/80 transition-all duration-300 transform hover:scale-105">
                    Next: Select Robots <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </form>
    </div>
);

const RobotSelectionStep: React.FC<{ products: Product[], selected: { [id: string]: number }, onChange: (id: string, delta: number) => void, onBack: () => void, onNext: () => void, totalSelected: number, formatter: Intl.NumberFormat }> = ({ products, selected, onChange, onBack, onNext, totalSelected, formatter }) => (
    <div className="animate-fade-in">
        <h2 className="text-3xl font-bold font-display text-center text-gray-100 mb-2">Select Your Robots</h2>
        <p className="text-center text-medium-gray mb-8">Choose the models and quantities you're interested in.</p>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {products.filter(p => p.price).map(product => (
                <div key={product.id} className="bg-trust-navy p-4 rounded-lg flex items-center justify-between gap-4 border border-gray-700">
                    <div className="flex items-center gap-4">
                        <img src={product.image} alt={product.name} className="w-20 h-20 object-contain rounded-md bg-white p-1" />
                        <div>
                            <p className="font-bold text-gray-100">{product.name}</p>
                            <p className="text-sm text-corporate-gold">{formatter.format(product.price!)}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => onChange(product.id, -1)} className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 text-white font-bold text-xl flex items-center justify-center transition">-</button>
                        <span className="w-10 text-center font-bold text-lg">{selected[product.id] || 0}</span>
                        <button onClick={() => onChange(product.id, 1)} className="w-8 h-8 rounded-full bg-corporate-gold hover:bg-corporate-gold/80 text-white font-bold text-xl flex items-center justify-center transition">+</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-700">
            <button onClick={onBack} className="px-6 py-3 text-sm font-bold text-gray-200 rounded-md hover:bg-gray-700 transition-colors">Back</button>
            <button onClick={onNext} disabled={totalSelected === 0} className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-corporate-gold text-white font-bold rounded-lg shadow-lg hover:bg-corporate-gold/80 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100">
                Calculate ROI <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
        </div>
    </div>
);

const ResultsStep: React.FC<{ results: Results, formData: FormData, onReset: () => void, formatter: Intl.NumberFormat }> = ({ results, formData, onReset, formatter }) => (
    <div className="animate-fade-in text-center">
        <h2 className="text-3xl font-bold font-display text-gray-100 mb-2">Your Estimated ROI Analysis</h2>
        <p className="text-medium-gray mb-8">Based on the information provided for <span className="font-bold text-gray-200">{formData.companyName}</span>.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <ResultCard icon={<CostEfficiencyIcon className="w-8 h-8 text-corporate-gold" />} title="Total Investment" value={formatter.format(results.totalInvestment)} />
            <ResultCard icon={<ProductivityIcon className="w-8 h-8 text-corporate-gold" />} title="Est. Monthly Savings" value={`${formatter.format(results.monthlySavings)}`} />
            <ResultCard icon={<CalendarIcon className="w-8 h-8 text-corporate-gold" />} title="Break-Even Point" value={`${results.breakEvenMonths.toFixed(1)} months`} />
            <ResultCard icon={<ScalabilityIcon className="w-8 h-8 text-corporate-gold" />} title="Est. 3-Year ROI" value={`${results.threeYearROI.toFixed(0)}%`} />
        </div>
        <p className="text-xs text-gray-500 mb-8">* This is an estimate based on your inputs and our standardized calculation model. Actual results may vary.</p>
        <button onClick={onReset} className="px-8 py-3 bg-transparent text-gray-200 font-bold rounded-lg border-2 border-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300">Start Over</button>
    </div>
);

const ResultCard: React.FC<{ icon: React.ReactNode, title: string, value: string }> = ({ icon, title, value }) => (
    <div className="bg-trust-navy p-6 rounded-lg border border-gray-700 text-center pop-in">
        <div className="flex justify-center mb-3">{icon}</div>
        <p className="text-sm font-semibold text-medium-gray uppercase tracking-wider">{title}</p>
        <p className="text-3xl font-bold font-display text-white mt-2">{value}</p>
    </div>
);
*/

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
