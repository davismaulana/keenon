import React, { useState, useMemo, useEffect } from 'react';
import { useContent } from '../context/LanguageContext';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CostEfficiencyIcon, ProductivityIcon, MailIcon } from './icons/AdvantageIcons';
import { CalendarIcon } from './icons/CalculatorIcons';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { UsersIcon } from './icons/UsersIcon';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { createEmailHtml, createEmailTextBody } from '../utils/emailTemplate';

type Step = 'questionnaire' | 'selection' | 'results';

// Count-up animation component
const CountUpNumber: React.FC<{
    endValue: number;
    duration?: number;
    formatter?: (value: number) => string;
    className?: string;
}> = ({ endValue, duration = 1500, formatter, className }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let animationFrameId: number;
        const startTime = Date.now();

        const animate = () => {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // easeOutQuart
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.round(easedProgress * endValue);

            setCount(currentCount);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [endValue, duration]);

    const formattedValue = formatter ? formatter(count) : count.toLocaleString();

    return <span className={className}>{formattedValue}</span>;
};

export interface FormData {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    position: string;
    businessType: string;
    otherBusinessType: string;
    staffCount: number;
    operatingHours: number;
    operatingDays: number;
    avgSalary: number;
}

export interface Results {
    requiredRobots: number;
    monthlySavings: number;
    staffMadeEfficient: number;
    robotAnalysis: {
        id: string;
        name: string;
        price: number;
        totalInvestment: number;
        paybackPeriod: number;
    };
}

const StepIndicator: React.FC<{ current: Step, total: number, titles: { [key in Step]: string } }> = ({ current, total, titles }) => {
    const stepKeys = Object.keys(titles) as Step[];
    const currentIndex = stepKeys.indexOf(current);
    
    return (
        <div className="mb-6 text-center">
            <p className="text-sm font-semibold text-corporate-gold">
                Step {currentIndex + 1} of {total}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-100 mt-1">
                {titles[current]}
            </h2>
        </div>
    );
};

const ROICalculator: React.FC = () => {
    const { content } = useContent();
    const [step, setStep] = useState<Step>('questionnaire');
    const initialFormData: FormData = {
        name: '', email: '', phone: '', companyName: '', position: '',
        businessType: 'FnB/Restaurant', otherBusinessType: '', staffCount: 10,
        operatingHours: 8, operatingDays: 26, avgSalary: 5000000,
    };
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [selectedRobotId, setSelectedRobotId] = useState<string | null>(null);
    const [results, setResults] = useState<Results | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'error'>('idle');

    const calculableRobots = useMemo(() => {
        return content.products_showcase.products.filter(p => p.price && p.maxStaffEfficiency);
    }, [content.products_showcase.products]);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const isNumber = ['staffCount', 'operatingHours', 'operatingDays', 'avgSalary'].includes(name);
        setFormData(prev => ({ ...prev, [name]: isNumber ? Number(value) : value }));
    };
    
    const handleRobotSelectionChange = (id: string) => {
        setSelectedRobotId(id);
    };

    const handleCalculate = () => {
        if (!selectedRobotId) return;

        const selectedRobot = calculableRobots.find(robot => robot.id === selectedRobotId);
        if (!selectedRobot) return;
        
        const cutEfficiency = selectedRobot.cutEfficiency || 0.3;
        const staffMadeEfficient = formData.staffCount * cutEfficiency;

        // Per user request, update the formula for Max Staff Efficiency.
        const maxStaffEfficiency = 4;

        // Calculate the number of robots needed based on how many staff can be made more efficient.
        const requiredRobots = Math.round(staffMadeEfficient / maxStaffEfficiency) || 1;
        
        const monthlySavings = staffMadeEfficient * formData.avgSalary;
        
        const totalInvestment = requiredRobots * (selectedRobot.price || 0);
        const paybackPeriod = totalInvestment > 0 && monthlySavings > 0 ? totalInvestment / monthlySavings : 0;
        
        const robotAnalysis = {
            id: selectedRobot.id,
            name: selectedRobot.name,
            price: selectedRobot.price || 0,
            totalInvestment,
            paybackPeriod
        };
            
        setResults({ requiredRobots, monthlySavings, staffMadeEfficient, robotAnalysis });
        setStep('results');
    };

    const handleContactSales = async () => {
        if (!results || !formData) return;
        setIsSubmitting(true);
        setSubmissionStatus('idle');

        const emailData = { formData, results };
        const emailHtml = createEmailHtml(emailData);

        const payload = {
            contact: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                companyName: formData.companyName,
                position: formData.position,
            },
            businessProfile: {
                businessType: formData.businessType,
                otherBusinessType: formData.otherBusinessType,
                staffCount: formData.staffCount,
                operatingHours: formData.operatingHours,
                operatingDays: formData.operatingDays,
                avgSalary: formData.avgSalary,
            },
            roiAnalysis: {
                requiredRobots: results.requiredRobots,
                staffMadeEfficient: results.staffMadeEfficient,
                monthlySavings: results.monthlySavings,
                robotAnalysis: {
                    id: results.robotAnalysis.id,
                    name: results.robotAnalysis.name,
                    totalInvestment: results.robotAnalysis.totalInvestment,
                    paybackPeriod: results.robotAnalysis.paybackPeriod,
                }
            },
            emailDetails: {
                to: 'davis@sixzenith.com',
                subject: `New ROI Calculator Inquiry: ${formData.companyName}`,
                html: emailHtml
            }
        };

        try {
            const response = await fetch('https://xinyi-backend.vercel.app/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error('Network response was not ok.');
            
            // After successful direct send, also trigger mailto
            const emailTextBody = createEmailTextBody(emailData);
            const mailtoSubject = `New ROI Calculator Inquiry: ${formData.companyName}`;
            const mailtoLink = `mailto:davis@sixzenith.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(emailTextBody)}`;
            window.location.href = mailtoLink;

        } catch (error) {
            console.error('Submission failed:', error);
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleReset = () => {
        setFormData(initialFormData);
        setSelectedRobotId(null);
        setResults(null);
        setStep('questionnaire');
        setIsSubmitting(false);
        setSubmissionStatus('idle');
    };
    
    const totalSelectedRobots = useMemo(() => (selectedRobotId ? 1 : 0), [selectedRobotId]);
    const currencyFormatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });

    const stepTitles: { [key in Step]: string } = {
        questionnaire: 'Business Details',
        selection: 'Select Your Robot',
        results: 'Your ROI Analysis'
    };

    const renderStep = () => {
        switch (step) {
            case 'questionnaire':
                return <QuestionnaireStep formData={formData} onChange={handleFormChange} onNext={() => setStep('selection')} />;
            case 'selection':
                 return <RobotSelectionStep products={calculableRobots} selectedId={selectedRobotId} onSelect={handleRobotSelectionChange} onBack={() => setStep('questionnaire')} onNext={handleCalculate} totalSelected={totalSelectedRobots} />;
            case 'results':
                if (!results) return null;
                return <ResultsStep 
                    results={results} 
                    onReset={handleReset} 
                    formatter={currencyFormatter} 
                    isSubmitting={isSubmitting}
                    submissionStatus={submissionStatus}
                    onContactSales={handleContactSales}
                />;
            default: return null;
        }
    }
    
    return (
        <div className="h-full flex flex-col">
            <StepIndicator current={step} total={3} titles={stepTitles} />
            <div className="flex-grow min-h-0">
                {renderStep()}
            </div>
        </div>
    );
};

const QuestionnaireStep: React.FC<{ formData: FormData; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; onNext: () => void }> = ({ formData, onChange, onNext }) => (
    <div className="animate-fade-in h-full">
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="space-y-6 h-full flex flex-col">
            <div className="flex-grow overflow-y-auto no-scrollbar pr-4 -mr-4 space-y-8">
                <fieldset>
                    <legend className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-700 pb-2">Business & Contact Info</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        <InputField label="Employee Name" name="name" value={formData.name} onChange={onChange} required />
                        <InputField label="Position" name="position" value={formData.position} onChange={onChange} required />
                        <InputField label="Email" name="email" type="email" value={formData.email} onChange={onChange} required />
                        <InputField label="Phone Number" name="phone" value={formData.phone} onChange={onChange} required />
                        <InputField label="Company Name" name="companyName" value={formData.companyName} onChange={onChange} required className="sm:col-span-2" />
                        <InputField label="Number of Staff" name="staffCount" type="number" min="1" value={String(formData.staffCount)} onChange={onChange} required />
                        <SelectField label="Type of Business" name="businessType" value={formData.businessType} onChange={onChange}>
                            <option value="FnB/Restaurant">FnB/Restaurant</option><option value="Hotel">Hotel</option><option value="Industrial & Manufacturing">Industrial & Manufacturing</option><option value="Healthcare">Healthcare</option><option value="Retails">Retails</option><option value="Others">Others</option>
                        </SelectField>
                        {formData.businessType === 'Others' && (
                            <InputField label="Please Specify" name="otherBusinessType" value={formData.otherBusinessType} onChange={onChange} required className="sm:col-span-2" />
                        )}
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend className="text-lg font-semibold text-gray-200 mb-4 border-b border-gray-700 pb-2">Operational Details</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        <SelectField label="Working Hours per Day" name="operatingHours" value={String(formData.operatingHours)} onChange={onChange}>
                            <option value="6">6</option><option value="8">8</option><option value="10">10</option><option value="12">12</option>
                        </SelectField>
                        <InputField label="Operational Days per Month" name="operatingDays" type="number" min="1" max="31" value={String(formData.operatingDays)} onChange={onChange} required />
                        <InputField label="Average Salary (IDR)" name="avgSalary" type="number" min="0" step="100000" value={String(formData.avgSalary)} onChange={onChange} required className="sm:col-span-2"/>
                    </div>
                </fieldset>
            </div>
            <div className="flex justify-end pt-4 mt-4 border-t border-gray-700">
                <button type="submit" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-corporate-gold text-white font-bold rounded-lg shadow-lg hover:bg-corporate-gold/80 transition-all duration-300 transform hover:scale-105">
                    Next <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
            </div>
        </form>
    </div>
);

const RobotSelectionStep: React.FC<{ products: any[], selectedId: string | null, onSelect: (id: string) => void, onBack: () => void, onNext: () => void, totalSelected: number }> = ({ products, selectedId, onSelect, onBack, onNext, totalSelected }) => (
    <div className="animate-fade-in h-full flex flex-col">
        <div className="flex-grow overflow-y-auto no-scrollbar pr-4 -mr-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map(product => (
                    <label key={product.id} className={`bg-trust-navy p-4 rounded-lg flex items-center gap-4 border-2 transition-all duration-200 cursor-pointer hover:border-corporate-gold/50 ${selectedId === product.id ? 'border-corporate-gold ring-2 ring-corporate-gold/30' : 'border-gray-700'}`}>
                        <input type="radio" name="robot-selection" checked={selectedId === product.id} onChange={() => onSelect(product.id)} className="sr-only" />
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-contain rounded-md bg-white p-1 flex-shrink-0" />
                        <div className="flex-grow">
                            <p className="font-bold text-gray-100">{product.name}</p>
                            <p className="text-sm text-medium-gray">{product.category}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${selectedId === product.id ? 'bg-corporate-gold border-corporate-gold' : 'bg-gray-800 border-gray-600'}`}>
                            {selectedId === product.id && <div className="w-3 h-3 bg-white rounded-full"></div>}
                        </div>
                    </label>
                ))}
            </div>
        </div>
        <div className="flex justify-between items-center pt-4 mt-4 border-t border-gray-700">
            <button type="button" onClick={onBack} className="group inline-flex items-center px-6 py-3 text-sm font-bold text-gray-200 rounded-md hover:bg-gray-700 transition-colors">
                <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" /> Back
            </button>
            <button type="button" onClick={onNext} disabled={totalSelected === 0} className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-corporate-gold text-white font-bold rounded-lg shadow-lg hover:bg-corporate-gold/80 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100">
                Calculate ROI <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
        </div>
    </div>
);

const ResultsStep: React.FC<{ 
    results: Results, 
    onReset: () => void, 
    formatter: Intl.NumberFormat,
    isSubmitting: boolean,
    submissionStatus: 'idle' | 'error',
    onContactSales: () => void
}> = ({ results, onReset, formatter, isSubmitting, submissionStatus, onContactSales }) => {
    return (
        <div className="animate-fade-in text-center flex flex-col h-full">
            <div>
                <p className="text-medium-gray mb-6">Here is your estimated potential for the <span className="font-semibold text-corporate-gold">{results.robotAnalysis.name}</span>.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <ResultCard icon={<CostEfficiencyIcon className="w-7 h-7 text-corporate-gold"/>} title="Robots Needed" value={results.requiredRobots} />
                <ResultCard icon={<UsersIcon className="w-7 h-7 text-corporate-gold"/>} title="Total Staff Efficiency" value={Math.round(results.staffMadeEfficient)} suffix=" Staff" />
            </div>

            <div className="text-left bg-trust-navy p-4 rounded-lg border border-gray-700">
                 <h3 className="text-lg font-semibold text-gray-200 mb-3">Investment Breakdown</h3>
                <div className="space-y-3">
                     <div className="flex justify-between items-baseline">
                        <span className="text-sm text-medium-gray flex items-center"><ProductivityIcon className="w-4 h-4 mr-2"/> Monthly Savings:</span>
                        <span className="font-bold text-green-400 text-lg">
                            <CountUpNumber endValue={results.monthlySavings} formatter={formatter.format} />
                        </span>
                    </div>
                    <div>
                        <div className="text-sm space-y-1 text-gray-300">
                            <div className="flex justify-between font-mono">
                                <span>Robot Price</span>
                                <span>{formatter.format(results.robotAnalysis.price)}</span>
                            </div>
                            <div className="flex justify-between font-mono">
                                <span>Robots Needed</span>
                                <span>x {results.requiredRobots}</span>
                            </div>
                        </div>
                        <hr className="my-2 border-gray-600 border-dashed"/>
                        <div className="flex justify-between items-baseline">
                            <span className="text-sm text-medium-gray flex items-center"><CostEfficiencyIcon className="w-4 h-4 mr-2"/>Total Investment</span>
                            <span className="font-bold text-gray-100 text-lg">
                                <CountUpNumber endValue={results.robotAnalysis.totalInvestment} formatter={formatter.format} />
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <span className="text-sm text-medium-gray flex items-center"><CalendarIcon className="w-4 h-4 mr-2"/> Payback Period:</span>
                        <span className="font-bold text-gray-100 text-lg">
                            <CountUpNumber endValue={Math.round(results.robotAnalysis.paybackPeriod)} />
                            {' '}Months
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex-grow"></div>

            <p className="text-xs text-gray-500 mt-6 px-4">* These figures are estimates based on your inputs and our standardized models. Actual results may vary.</p>
            
            {submissionStatus === 'error' && (
                <p className="text-sm text-red-400 mt-4">Could not send inquiry. Please try again.</p>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={onReset} disabled={isSubmitting} className="w-full sm:w-auto px-8 py-3 bg-transparent text-gray-200 font-bold rounded-lg border-2 border-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    Calculate Again
                </button>
                <button onClick={onContactSales} disabled={isSubmitting} className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-corporate-gold text-white font-bold rounded-lg shadow-lg hover:bg-corporate-gold/80 transition-all duration-300 transform hover:scale-105 disabled:bg-corporate-gold/70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                        <>
                            <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <MailIcon className="w-5 h-5 mr-2" />
                            Contact Sales
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

const ResultCard: React.FC<{ icon: React.ReactNode, title: string, value: number, suffix?: string, formatter?: (num: number) => string }> = ({ icon, title, value, suffix = '', formatter }) => (
    <div className="bg-trust-navy p-4 rounded-lg border border-gray-700 text-center flex flex-col items-center justify-center pop-in">
        <div className="flex items-center justify-center gap-2 mb-2">
             {icon}
            <p className="text-sm font-semibold text-medium-gray uppercase tracking-wider">{title}</p>
        </div>
        <p className="text-3xl font-bold font-display text-white">
            <CountUpNumber endValue={value} formatter={formatter} />{suffix}
        </p>
    </div>
);

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, className, ...props }) => (
    <div className={className}>
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>
        <input {...props} id={props.name} className="w-full px-4 py-2.5 bg-[var(--color-bg-input)] text-[var(--color-text-primary)] rounded-md border border-[var(--color-border-input)] focus:ring-2 focus:ring-[var(--color-border-input-focus)]/50 focus:border-[var(--color-border-input-focus)] transition"/>
    </div>
);

const SelectField: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }> = ({ label, children, ...props }) => (
     <div>
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>
        <select {...props} id={props.name} className="w-full px-4 py-2.5 bg-[var(--color-bg-input)] text-[var(--color-text-primary)] rounded-md border border-[var(--color-border-input)] focus:ring-2 focus:ring-[var(--color-border-input-focus)]/50 focus:border-[var(--color-border-input-focus)] transition appearance-none bg-no-repeat bg-right pr-8" style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em'}}>
            {children}
        </select>
    </div>
);

export default ROICalculator;