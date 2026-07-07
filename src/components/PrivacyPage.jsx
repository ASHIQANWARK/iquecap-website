import React from 'react'
import './PrivacyPage.css'

const PrivacyPage = ({ navigateTo }) => {
  return (
    <>
      <div className="privacy-hero">
        <div>
          <div className="section-label">Legal</div>
          <h1 className="privacy-hero-title">Privacy <em>Policy</em></h1>
        </div>
      </div>
      <div className="privacy-content">
        <p className="privacy-intro">At iQue CAP, we respect your privacy and are committed to protecting the personal information you share with us through our website, forms, communications, and other digital channels.</p>

        <h2>1. Information We Collect</h2>
        <p>When you visit our website or submit an enquiry, we may collect: Name, Email address, Mobile number, City / location, Investment interest or enquiry details, Startup/business-related information where applicable, and any other information voluntarily submitted through our website forms or communication channels. We may also collect basic technical information such as browser type, device details, IP address, pages visited, and cookies to improve website performance and user experience.</p>

        <h2>2. How We Use Your Information</h2>
        <p>The information collected may be used to respond to your enquiry, contact you regarding your interest in iQue CAP, share relevant information about our platform, services, events, or updates, understand user requirements and improve our services, maintain internal records, improve website functionality and user experience, and comply with applicable legal or regulatory requirements.</p>

        <h2>3. Data Sharing and Consent</h2>
        <p>iQue CAP values your trust. We do not sell, rent, trade, or disclose your personal information to any third party for marketing or commercial purposes without your consent. Your personal information may be shared only when you have given clear consent, when sharing is required to respond to your enquiry or provide requested services, with trusted service providers under confidentiality obligations, or when required by law.</p>

        <h2>4. Data Protection and Security</h2>
        <p>We take reasonable technical, administrative, and operational measures to protect your personal information from unauthorized access, misuse, loss, alteration, or disclosure. While no digital system can be guaranteed completely secure, we continuously work to maintain responsible data protection practices.</p>

        <h2>5. Cookies and Website Tracking</h2>
        <p>Our website may use cookies or similar technologies to improve browsing experience, analyze website traffic, and understand visitor engagement. You may choose to disable cookies through your browser settings, however some website features may not function properly if cookies are disabled.</p>

        <h2>6. Communication Consent</h2>
        <p>By submitting your details on our website, you consent to being contacted by iQue CAP through phone, email, SMS, or other communication channels regarding your enquiry, platform information, or service updates. You may request to stop receiving communication from us at any time by contacting us at <a href="mailto:support@iquecap.com">support@iquecap.com</a></p>

        <h2>7. Data Retention</h2>
        <p>We retain your personal information only for as long as necessary to fulfill the purpose for which it was collected, support business communication, maintain records, resolve disputes, or comply with applicable legal requirements.</p>

        <h2>8. User Rights</h2>
        <p>You may contact us to access the personal information we hold about you, request correction or updating of your information, request deletion of your information subject to applicable legal requirements, withdraw consent for future communication, or raise any privacy-related concerns.</p>

        <h2>9. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites or platforms. iQue CAP is not responsible for the privacy practices, content, or security of such external websites. Users are encouraged to review the privacy policies of third-party websites before submitting any information.</p>

        <h2>10. Policy Updates</h2>
        <p>iQue CAP may update this Privacy Policy from time to time to reflect changes in our practices, services, legal requirements, or website functionality. The updated version will be posted on this page with the revised effective date.</p>

        <h2>11. Contact Us</h2>
        <p>For any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:support@iquecap.com">support@iquecap.com</a></p>

        <p className="privacy-footer">Thank you for trusting iQue CAP.</p>
      </div>
    </>
  )
}

export default PrivacyPage