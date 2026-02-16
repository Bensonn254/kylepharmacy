import React from 'react';
import LegalLayout from './LegalLayout';

const Privacy = () => {
  return (
    <LegalLayout 
      title="Privacy Policy" 
      lastUpdated="20 October 2023"
    >
      <p>
        KYLE PHARM K. LTD ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our prescription upload and delivery services.
      </p>

      <p>
        By using our Service, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2>1. Compliance with Kenyan Law</h2>
      <p>
        We process your personal data in accordance with the Data Protection Act, 2019 of Kenya. We are committed to lawful, fair, and transparent processing of your personal data.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We collect information to provide pharmaceutical services, process prescriptions, and deliver medication. This includes:
      </p>
      <ul>
        <li><strong>Personal Identification:</strong> Name, phone number, and email address.</li>
        <li><strong>Health Information:</strong> Images of medical prescriptions, details about your medication needs, and insurance information (if applicable).</li>
        <li><strong>Delivery Data:</strong> Physical address or location pins for delivery.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, and device information collected automatically to ensure our website functions correctly.</li>
      </ul>

      <h2>3. How We Collect Information</h2>
      <ul>
        <li><strong>Directly from you:</strong> When you fill out our "Upload Prescription" form, contact us via WhatsApp, or call us.</li>
        <li><strong>Automatically:</strong> Through cookies and server logs when you browse our website.</li>
      </ul>

      <h2>4. How We Use Your Information</h2>
      <p>
        We use your data strictly for the following purposes:
      </p>
      <ul>
        <li><strong>Fulfilling Orders:</strong> To dispense medication based on the prescriptions you upload.</li>
        <li><strong>Communication:</strong> To contact you regarding the cost, availability, or delivery of your medication.</li>
        <li><strong>Delivery:</strong> To direct our delivery riders to your location.</li>
        <li><strong>Legal Compliance:</strong> To maintain records required by the Pharmacy and Poisons Board (PPB) of Kenya.</li>
      </ul>
      <p>
        <strong>We do NOT sell your personal data to advertisers or third parties.</strong>
      </p>

      <h2>5. Third-Party Service Providers</h2>
      <p>
        Since our website is built on modern technology, we use trusted third-party providers to handle data securely. By using our Service, you acknowledge that your data may be processed by:
      </p>
      <ul>
        <li><strong>Hosting:</strong> GitHub Pages (hosts the website infrastructure).</li>
        <li><strong>Form Processing:</strong> JotForm / Cognito Forms (securely collects your prescription uploads).</li>
        <li><strong>Communication:</strong> WhatsApp (if you choose to chat with us).</li>
      </ul>
      <p>
        These providers are selected based on their commitment to security, but we encourage you to review their respective privacy policies.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We take the security of your health data seriously.
      </p>
      <ul>
        <li>Our website uses HTTPS (SSL) encryption to ensure data transferred between your browser and our site is secure.</li>
        <li>Access to prescription data is restricted to licensed pharmacists and authorized staff only.</li>
      </ul>
      <p>
        However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
      </p>

      <h2>7. Retention of Data</h2>
      <p>
        We retain your personal and health information only for as long as is necessary to fulfill the purposes set out in this Privacy Policy and to comply with Kenyan pharmaceutical regulations regarding prescription record-keeping.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Under the Data Protection Act of Kenya, you have the right to:
      </p>
      <ul>
        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Rectification:</strong> Request correction of false or misleading data.</li>
        <li><strong>Erasure:</strong> Request that we delete your personal data (subject to legal requirements for pharmacy records).</li>
        <li><strong>Object:</strong> Object to the processing of your personal data for specific purposes.</li>
      </ul>
      <p>
        To exercise these rights, please contact us at our official email address.
      </p>

      <h2>9. Use by Minors</h2>
      <p>
        Our Service is intended for adults. If you are under 18, you may use the Service only with the involvement of a parent or guardian. We do not knowingly collect personal information from children without parental consent.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data practices, please contact us:
      </p>
      <p>
        <strong>KYLE PHARM K. LTD</strong><br />
        Email: info@kylepharmacy.co.ke<br />
        Phone: +254743052401<br />
        Location: Kitengela, Kenya.
      </p>

      <h2>11. Lodging a Complaint</h2>
      <p>
        If you believe your rights have been infringed, you have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) in Kenya.
      </p>
    </LegalLayout>
  );
};

export default Privacy;
