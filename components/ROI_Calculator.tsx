import React, { useState, useMemo } from 'react';
import Section from './Section';
import { useContent } from '../context/LanguageContext';
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

const ROI_Calculator: React.FC = () => {
    const { content } = useContent();
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState<FormData>({
        name: '', email: '', phone: '', companyName: '', jobTitle: '',
        businessType: 'Restaurant', companySize: '1', operatingHours: 8,
        operatingDays: 26, avgSalary: 5000000, staffCount: 10,
    });
    const [selectedRobots, setSelectedRobots] = useState<{ [id: string]: number }>({});
    const [results, setResults] = useState<Results | null>(null);

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name.includes('Hours') || name.includes('Days') || name.includes('Salary') || name.includes('Count') ? Number(value) : value }));
    };

    const handleRobotQuantityChange = (id: string, delta: number) => {
        setSelectedRobots(prev => {
            const newCount = (prev[id] || 0) + delta;
            const newSelected = { ...prev };
            if (newCount > 0) {
                newSelected[id] = newCount;
            } else {
                delete newSelected[id];
            }
            return newSelected;
        });
    };
    
    const calculateROI = () => {
        const totalInvestment = content.products_showcase.products.reduce((acc, product) => {
            const quantity = selectedRobots[product.id] || 0;
            return acc + (quantity * (product.price || 0));
        }, 0);

        const totalStaffReplaced = content.products_showcase.products.reduce((acc, product) => {
            const quantity = selectedRobots[product.id] || 0;
            return acc + (quantity * (product.staffReplacementValue || 0));
        }, 0);
        
        const monthlySavings = totalStaffReplaced * formData.avgSalary;
        const breakEvenMonths = totalInvestment > 0 && monthlySavings > 0 ? totalInvestment / monthlySavings : 0;
        
        const annualSavings = monthlySavings * 12;
        const threeYearNetProfit = (annualSavings * 3) - totalInvestment;
        const threeYearROI = totalInvestment > 0 ? (threeYearNetProfit / totalInvestment) * 100 : 0;

        setResults({ totalInvestment, monthlySavings, breakEvenMonths, threeYearROI });
        setStep(3);
    };

    // FIX: Explicitly typed the arguments of the reduce function to resolve a TypeScript error where the '+' operator could not be applied to 'unknown' types. This ensures that 'sum' and 'count' are correctly inferred as numbers.
    const totalSelectedRobots = useMemo(() => Object.values(selectedRobots).reduce((sum: number, count: number) => sum + count, 0), [selectedRobots]);

    const currencyFormatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });

    const renderStep = () => {
        switch (step) {
            case 1:
                return <QuestionnaireStep formData={formData} onChange={handleFormChange} onNext={() => setStep(2)} />;
            case 2:
                return <RobotSelectionStep products={content.products_showcase.products} selected={selectedRobots} onChange={handleRobotQuantityChange} onBack={() => setStep(1)} onNext={calculateROI} totalSelected={totalSelectedRobots} formatter={currencyFormatter}/>;
            case 3:
                if (!results) return null;
                return <ResultsStep results={results} formData={formData} onReset={() => { setStep(1); setSelectedRobots({}); setResults(null); }} formatter={currencyFormatter} />;
            default:
                return null;
        }
    };
    
    return (
        <div className="pt-20">
            <Section id="roi-calculator">
                <div className="max-w-4xl mx-auto bg-light-gray p-6 sm:p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl">
                    {renderStep()}
                </div>
            </Section>
        </div>
    );
};

const QuestionnaireStep: React.FC<{ formData: FormData; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; onNext: () => void }> = ({ formData, onChange, onNext }) => (
    <div className="animate-fade-in">
        <h2 className="text-3xl font-bold font-display text-center text-gray-100 mb-2">ROI Calculator</h2>
        <p className="text-center text-medium-gray mb-8">Fill in your business details to get started.</p>
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Nama" name="name" value={formData.name} onChange={onChange} required />
                <InputField label="Email" name="email" type="email" value={formData.email} onChange={onChange} required />
                <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={onChange} required />
                <InputField label="Nama Perusahaan" name="companyName" value={formData.companyName} onChange={onChange} required />
                <InputField label="Jabatan" name="jobTitle" value={formData.jobTitle} onChange={onChange} required />
                <SelectField label="Jenis Usaha Anda" name="businessType" value={formData.businessType} onChange={onChange}>
                    <option>Restaurant</option><option>Hotel</option><option>Retail</option><option>Healthcare</option><option>Office</option><option>Manufacturing</option><option>Other</option>
                </SelectField>
            </div>
            <div className="pt-4 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Operational & Cost Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Jam Operasional per Hari" name="operatingHours" type="number" min="1" value={String(formData.operatingHours)} onChange={onChange} required />
                    <InputField label="Hari Operasional per Bulan" name="operatingDays" type="number" min="1" value={String(formData.operatingDays)} onChange={onChange} required />
                    <InputField label="Gaji Rata-rata per Staf (IDR)" name="avgSalary" type="number" min="0" value={String(formData.avgSalary)} onChange={onChange} required />
                    <InputField label="Jumlah Staff" name="staffCount" type="number" min="1" value={String(formData.staffCount)} onChange={onChange} required />
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

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <input {...props} id={props.name} className="w-full px-4 py-3 bg-[var(--color-bg-input)] text-[var(--color-text-primary)] rounded-md border border-[var(--color-border-input)] focus:ring-2 focus:ring-[var(--color-border-input-focus)]/50 focus:border-[var(--color-border-input-focus)] transition"/>
    </div>
);

const SelectField: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }> = ({ label, children, ...props }) => (
     <div>
        <label htmlFor={props.name} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
        <select {...props} id={props.name} className="w-full px-4 py-3 bg-[var(--color-bg-input)] text-[var(--color-text-primary)] rounded-md border border-[var(--color-border-input)] focus:ring-2 focus:ring-[var(--color-border-input-focus)]/50 focus:border-[var(--color-border-input-focus)] transition">
            {children}
        </select>
    </div>
);


export default ROI_Calculator;
