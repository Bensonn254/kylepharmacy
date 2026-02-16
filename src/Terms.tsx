import React from 'react';
import LegalLayout from './LegalLayout';

const Terms = () => {
  return (
    <LegalLayout 
      title="Terms and Conditions" 
      lastUpdated="20 October 2023"
    >
      <p>
        Welcome to KYLE PHARM K. LTD (kyle.co.ke). These Terms and Conditions ("Terms") govern your use of our website and our services, including prescription uploads, medication ordering, and delivery.
      </p>
      <p>
        By accessing this website, you agree to comply with these Terms. If you do not agree with any part of these terms, you must not use our website.
      </p>

      <h2>1. General Information</h2>
      <ul>
        <li><strong>The Operator:</strong> This website is operated by KYLE PHARM K. LTD, a registered pharmaceutical retail outlet in Kenya.</li>
        <li><strong>Compliance:</strong> We operate in strict adherence to the Pharmacy and Poisons Act (Cap 244) and regulations set by the Pharmacy and Poisons Board (PPB) of Kenya.</li>
        <li><strong>Eligibility:</strong> You must be at least 18 years old to use this website. By using this site, you warrant that you possess the legal authority to enter into this agreement.</li>
      </ul>

      <h2>2. Prescription Medication Policy</h2>
      <p>
        This is the most critical part of our service. Please read carefully:
      </p>
      <ul>
        <li><strong>Verification:</strong> Uploading an image of a prescription does not guarantee the dispensing of medication. All prescriptions are subject to review by a licensed pharmacist.</li>
        <li><strong>Original Script:</strong> For certain controlled substances or specific prescription-only medicines (POM), you may be required to present the original physical prescription to our delivery rider or at the counter upon collection.</li>
        <li><strong>Rejection:</strong> We reserve the right to reject any prescription that appears altered, illegible, expired, or fraudulent.</li>
        <li><strong>Generic Substitution:</strong> In accordance with Kenyan pharmacy practice, we may offer you a generic equivalent of a branded medication (which is cheaper but equally effective) unless your doctor has explicitly written "Do Not Substitute."</li>
      </ul>

      <h2>3. Ordering and Pricing</h2>
      <ul>
        <li><strong>Prices:</strong> All prices are quoted in Kenya Shillings (KES). While we aim for accuracy, prices for medication can fluctuate based on supplier costs. We will confirm the final price with you before dispatch.</li>
        <li><strong>Availability:</strong> All products are subject to availability. If an item is out of stock, we will notify you immediately and offer a substitute or a refund if payment was made.</li>
        <li><strong>Order Confirmation:</strong> Your submission of an order (via web form or WhatsApp) is an offer to buy. The contract is only formed when we confirm the order and dispatch the goods.</li>
      </ul>

      <h2>4. Payments</h2>
      <ul>
        <li><strong>Accepted Methods:</strong> We accept Cash, M-Pesa, and Insurance cards (subject to prior verification).</li>
        <li><strong>M-Pesa:</strong> If paying via M-Pesa, please ensure you pay to the official Paybill/Till number provided by our staff. We are not liable for funds sent to the wrong number.</li>
      </ul>

      <h2>5. Delivery Policy</h2>
      <ul>
        <li><strong>Locations:</strong> We deliver primarily within Kitengela and surrounding areas.</li>
        <li><strong>Timelines:</strong> Delivery times are estimates. We are not liable for delays caused by traffic, weather, or unforeseen circumstances.</li>
        <li><strong>Recipient:</strong> Medicines must be received by an adult. Our riders reserve the right to request ID verification upon delivery.</li>
      </ul>

      <h2>6. Returns and Refunds</h2>
      <p>
        Due to the sensitive nature of pharmaceutical products and safety regulations:
      </p>
      <p>
        <strong>No Returns on Medicine:</strong> Once medication has left the pharmacy premises, we cannot accept returns or exchanges for safety and hygiene reasons.
      </p>
      <p>
        <strong>Exceptions:</strong> We will only accept returns if:
      </p>
      <ul>
        <li>The wrong medication was delivered.</li>
        <li>The product is damaged or defective upon arrival.</li>
        <li>The product is expired upon arrival.</li>
      </ul>
      <p>
        You must report any errors to us immediately upon delivery.
      </p>

      <h2>7. Medical Disclaimer</h2>
      <ul>
        <li><strong>Not Medical Advice:</strong> The content on this website is for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.</li>
        <li><strong>Consult a Doctor:</strong> Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</li>
        <li><strong>Emergencies:</strong> If you think you have a medical emergency, call your doctor or emergency services immediately.</li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by Kenyan law:
      </p>
      <ul>
        <li>KYLE PHARM K. LTD shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website.</li>
        <li>We are not responsible for technical issues, including the failure of third-party services that may delay your order.</li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <p>
        The content of this website, including text, graphics, logos, and images, is the property of KYLE PHARM K. LTD and is protected by copyright laws.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the Laws of Kenya. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Kenyan courts.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us:
      </p>
      <p>
        <strong>KYLE PHARM K. LTD</strong><br />
        Location: Kitengela, Kenya.<br />
        Phone: +254743052401<br />
        Email: info@kylepharmacy.co.ke
      </p>
    </LegalLayout>
  );
};

export default Terms;
