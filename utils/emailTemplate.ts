import type { Results, FormData } from '../components/ROICalculator';

interface EmailData {
    formData: FormData;
    results: Results;
}

export const createEmailHtml = (data: EmailData): string => {
    const { formData, results } = data;
    const currencyFormatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
    const numberFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });

    const styles = {
        body: `font-family: 'Inter', sans-serif; background-color: #121212; color: #E5E7EB; margin: 0; padding: 20px;`,
        container: `max-width: 600px; margin: 0 auto; background-color: #000000; border: 1px solid #374151; border-radius: 8px; overflow: hidden;`,
        header: `background-color: #121212; padding: 20px; text-align: center; border-bottom: 1px solid #374151;`,
        logo: `height: 40px; width: auto;`,
        content: `padding: 20px 30px;`,
        h1: `color: #B9975B; font-family: 'Lora', serif; font-size: 24px; margin: 0 0 10px 0;`,
        h2: `color: #B9975B; font-family: 'Lora', serif; font-size: 20px; border-bottom: 1px solid #374151; padding-bottom: 10px; margin-top: 30px; margin-bottom: 15px;`,
        p: `line-height: 1.6; margin: 0 0 10px 0; color: #A0A0A0;`,
        table: `width: 100%; border-collapse: collapse;`,
        td: `padding: 8px 0; vertical-align: top; border-bottom: 1px solid #262626;`,
        tdLabel: `width: 40%; color: #A0A0A0;`,
        tdValue: `font-weight: bold; color: #E5E7EB;`,
        resultCard: `background-color: #121212; border: 1px solid #374151; border-radius: 6px; padding: 15px; text-align: center; margin-bottom: 15px;`,
        resultValue: `font-size: 28px; font-weight: bold; color: #B9975B; margin: 5px 0; font-family: 'Lora', serif;`,
        resultLabel: `font-size: 14px; color: #A0A0A0; text-transform: uppercase; letter-spacing: 0.5px;`,
        footer: `text-align: center; padding: 20px; font-size: 12px; color: #8892b0; border-top: 1px solid #374151;`
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lora:wght@600;700&display=swap" rel="stylesheet">
        <title>New ROI Calculator Inquiry</title>
    </head>
    <body style="${styles.body}">
        <div style="${styles.container}">
            <div style="${styles.header}">
                <img src="https://iili.io/FQiLFzQ.png" alt="Xinyi Trading Group Logo" style="${styles.logo}" />
            </div>
            <div style="${styles.content}">
                <h1 style="${styles.h1}">New Inquiry from ROI Calculator</h1>
                <p style="${styles.p}">A new potential client has submitted their details through the ROI calculator on the website.</p>
                
                <div style="display: flex; gap: 15px; margin: 20px 0;">
                    <div style="flex: 1; ${styles.resultCard}">
                        <p style="${styles.resultLabel}">Est. Monthly Savings</p>
                        <p style="${styles.resultValue}">${currencyFormatter.format(results.monthlySavings)}</p>
                    </div>
                     <div style="flex: 1; ${styles.resultCard}">
                        <p style="${styles.resultLabel}">Payback Period</p>
                        <p style="${styles.resultValue}">${numberFormatter.format(results.robotAnalysis.paybackPeriod)} mo.</p>
                    </div>
                </div>

                <h2 style="${styles.h2}">Contact Information</h2>
                <table style="${styles.table}">
                    <tr><td style="${styles.td} ${styles.tdLabel}">Name:</td><td style="${styles.td} ${styles.tdValue}">${formData.name}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Company:</td><td style="${styles.td} ${styles.tdValue}">${formData.companyName}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Position:</td><td style="${styles.td} ${styles.tdValue}">${formData.position}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Email:</td><td style="${styles.td} ${styles.tdValue}"><a href="mailto:${formData.email}" style="color: #CDA45E; text-decoration: none;">${formData.email}</a></td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Phone:</td><td style="${styles.td} ${styles.tdValue}"><a href="tel:${formData.phone}" style="color: #CDA45E; text-decoration: none;">${formData.phone}</a></td></tr>
                </table>

                <h2 style="${styles.h2}">Business Profile</h2>
                 <table style="${styles.table}">
                    <tr><td style="${styles.td} ${styles.tdLabel}">Business Type:</td><td style="${styles.td} ${styles.tdValue}">${formData.businessType}${formData.businessType === 'Others' ? ` (${formData.otherBusinessType})` : ''}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Staff Count:</td><td style="${styles.td} ${styles.tdValue}">${formData.staffCount}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Avg. Salary:</td><td style="${styles.td} ${styles.tdValue}">${currencyFormatter.format(formData.avgSalary)}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Operating Hours:</td><td style="${styles.td} ${styles.tdValue}">${formData.operatingHours} / day</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Operating Days:</td><td style="${styles.td} ${styles.tdValue}">${formData.operatingDays} / month</td></tr>
                </table>

                <h2 style="${styles.h2}">ROI Analysis Details</h2>
                 <table style="${styles.table}">
                    <tr><td style="${styles.td} ${styles.tdLabel}">Selected Robot:</td><td style="${styles.td} ${styles.tdValue}">${results.robotAnalysis.name}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Robots Required:</td><td style="${styles.td} ${styles.tdValue}">${results.requiredRobots}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Staff Made Efficient:</td><td style="${styles.td} ${styles.tdValue}">${numberFormatter.format(results.staffMadeEfficient)}</td></tr>
                    <tr><td style="${styles.td} ${styles.tdLabel}">Total Investment:</td><td style="${styles.td} ${styles.tdValue}">${currencyFormatter.format(results.robotAnalysis.totalInvestment)}</td></tr>
                </table>
            </div>
            <div style="${styles.footer}">
                This is an automated notification from the Xinyi Trading Group website.
            </div>
        </div>
    </body>
    </html>
    `;
};

export const createEmailTextBody = (data: EmailData): string => {
    const { formData, results } = data;
    const currencyFormatter = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
    const numberFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });

    const sections = [
        "New Inquiry from ROI Calculator",
        "A new potential client has submitted their details through the ROI calculator on the website.",
        "",
        "--- ROI SUMMARY ---",
        `Est. Monthly Savings: ${currencyFormatter.format(results.monthlySavings)}`,
        `Payback Period: ${numberFormatter.format(results.robotAnalysis.paybackPeriod)} mo.`,
        "",
        "--- CONTACT INFORMATION ---",
        `Name: ${formData.name}`,
        `Company: ${formData.companyName}`,
        `Position: ${formData.position}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        "",
        "--- BUSINESS PROFILE ---",
        `Business Type: ${formData.businessType}${formData.businessType === 'Others' ? ` (${formData.otherBusinessType})` : ''}`,
        `Staff Count: ${formData.staffCount}`,
        `Avg. Salary: ${currencyFormatter.format(formData.avgSalary)}`,
        `Operating Hours: ${formData.operatingHours} / day`,
        `Operating Days: ${formData.operatingDays} / month`,
        "",
        "--- ROI ANALYSIS DETAILS ---",
        `Selected Robot: ${results.robotAnalysis.name}`,
        `Robots Required: ${results.requiredRobots}`,
        `Staff Made Efficient: ${numberFormatter.format(results.staffMadeEfficient)}`,
        `Total Investment: ${currencyFormatter.format(results.robotAnalysis.totalInvestment)}`
    ];

    return sections.join('\r\n');
};