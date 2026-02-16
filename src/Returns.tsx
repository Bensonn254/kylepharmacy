import React from 'react';
import LegalLayout from './LegalLayout';

const Returns = () => {
  return (
    <LegalLayout 
      title="Return and Refund Policy" 
      lastUpdated="20 October 2023"
    >
      <p>
        At KYLE PHARM K. LTD, our priority is your health and safety. Due to the sensitive nature of pharmaceutical products, our return policy differs from standard retail stores to comply with the regulations of the Pharmacy and Poisons Board (PPB) of Kenya.
      </p>
      <p>
        Please read this policy carefully before making a purchase or uploading a prescription.
      </p>

      <h2>1. Prescription and Non-Prescription Medication</h2>
      <p>
        <strong>For safety and hygiene reasons, we cannot accept returns on any medicines once they have been dispatched or left our pharmacy premises.</strong>
      </p>
      <p>
        Once medication leaves our control, we cannot guarantee that it has been stored at the correct temperature or handled correctly. Therefore, even if the package is unopened, we cannot resell it or accept it back.
      </p>

      <h2>2. When Returns ARE Accepted</h2>
      <p>
        We will only process returns and refunds under the following specific circumstances:
      </p>
      <ul>
        <li><strong>Pharmacy Error:</strong> We delivered the wrong medication (different from what was prescribed or ordered).</li>
        <li><strong>Defective Product:</strong> The product is damaged, broken, or the seal was tampered with upon arrival.</li>
        <li><strong>Expired Goods:</strong> In the unlikely event that you receive a product past its expiry date.</li>
        <li><strong>Recalled Products:</strong> If a manufacturer or the PPB issues a mandatory recall for a specific batch of medication.</li>
      </ul>
      <p>
        <em>Note: You must inspect your delivery immediately upon receipt while the rider is present or within 2 hours of delivery.</em>
      </p>

      <h2>3. Non-Medicinal Items (Toiletries, Cosmetics, Devices)</h2>
      <p>
        For items that are not medication (e.g., skincare, beauty products, medical devices like thermometers):
      </p>
      <ul>
        <li>We accept returns within 48 hours of purchase.</li>
        <li>The item must be unused, unopened, and in its original packaging with the seal intact.</li>
        <li>You must provide the original receipt or M-Pesa transaction confirmation.</li>
      </ul>

      <h2>4. How to Request a Return</h2>
      <p>
        If your order qualifies for a return based on Section 2:
      </p>
      <ol>
        <li>Do not use the item.</li>
        <li>Take a photo of the damaged or wrong item.</li>
        <li>Contact us immediately via WhatsApp at +254743052401 or email info@kylepharmacy.co.ke.</li>
        <li>Provide your Order Number and the M-Pesa transaction code.</li>
      </ol>

      <h2>5. Refund Process</h2>
      <ul>
        <li><strong>Verification:</strong> Once we receive the returned item and verify the error/defect, we will initiate a refund.</li>
        <li><strong>Method:</strong> Refunds are processed via M-Pesa or the original payment method used.</li>
        <li><strong>Timeline:</strong> M-Pesa refunds are typically processed within 24 hours. Bank card reversals may take 3-5 business days depending on your bank.</li>
        <li><strong>Delivery Fees:</strong> 
          <ul>
            <li>If the return is due to our error, we will refund the delivery fee and pay for the return shipping.</li>
            <li>If you are returning a non-medical item due to a change of mind, the delivery fee is non-refundable, and you are responsible for the return transport cost.</li>
          </ul>
        </li>
      </ul>

      <h2>6. Order Cancellations</h2>
      <ul>
        <li><strong>Before Dispatch:</strong> You may cancel your order at no cost if the rider has not yet been dispatched.</li>
        <li><strong>After Dispatch:</strong> If the rider is already on the way, you may cancel the order, but you will be liable for the delivery fee.</li>
      </ul>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions regarding a specific product return, please contact the pharmacist on duty:
      </p>
      <p>
        <strong>KYLE PHARM K. LTD</strong><br />
        Phone/WhatsApp: +254743052401<br />
        Email: info@kylepharmacy.co.ke<br />
        Location: Kitengela, Kenya.
      </p>
    </LegalLayout>
  );
};

export default Returns;
