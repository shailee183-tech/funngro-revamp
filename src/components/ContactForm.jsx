import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Button from './Button';
import { brandServices } from '../data/brandContent';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    companyName: '',
    serviceCategory: '',
    projectDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Email regex validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email address is required.';
    } else if (!isValidEmail(formData.businessEmail)) {
      errs.businessEmail = 'Please provide a valid email format (e.g. name@company.com).';
    }
    if (!formData.companyName.trim()) {
      errs.companyName = 'Company / Brand name is required.';
    }
    if (!formData.serviceCategory) {
      errs.serviceCategory = 'Please select a campaign service category.';
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project brief or campaign goals.';
    } else if (formData.projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please provide at least 15 characters describing what you need.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async submission without network lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      companyName: '',
      serviceCategory: '',
      projectDescription: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-form-card" id="contact-form">
      {isSubmitted ? (
        <div className="form-alert-success" role="alert" aria-live="polite">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <CheckCircle2 size={24} color="var(--emerald-light)" />
            <h4>Brief Received Successfully</h4>
          </div>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Thank you, <strong style={{ color: 'var(--text-main)' }}>{formData.fullName}</strong>. Your campaign inquiry for <strong style={{ color: 'var(--text-main)' }}>{formData.companyName}</strong> regarding <strong style={{ color: 'var(--emerald-light)' }}>{formData.serviceCategory}</strong> has been logged in demo review.
          </p>
          <div style={{ backgroundColor: 'rgba(7, 21, 13, 0.5)', padding: '0.85rem', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            <strong>Assessment Notice:</strong> This website operates in demonstration mode. No data has been saved to an external database, and no automated emails were dispatched.
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <Button variant="outline" size="sm" onClick={handleReset}>
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="form-label-required" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
              className={`form-input ${errors.fullName ? 'has-error' : ''}`}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              required
            />
            {errors.fullName && (
              <span id="fullName-error" className="form-error-msg" role="alert">
                <AlertCircle size={14} /> {errors.fullName}
              </span>
            )}
          </div>

          {/* Business Email */}
          <div className="form-group">
            <label htmlFor="businessEmail" className="form-label">
              Business Email <span className="form-label-required" aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder="priya@company.com"
              className={`form-input ${errors.businessEmail ? 'has-error' : ''}`}
              aria-invalid={Boolean(errors.businessEmail)}
              aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
              required
            />
            {errors.businessEmail && (
              <span id="businessEmail-error" className="form-error-msg" role="alert">
                <AlertCircle size={14} /> {errors.businessEmail}
              </span>
            )}
          </div>

          {/* Company Name */}
          <div className="form-group">
            <label htmlFor="companyName" className="form-label">
              Company / Brand Name <span className="form-label-required" aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Acme Consumer Goods"
              className={`form-input ${errors.companyName ? 'has-error' : ''}`}
              aria-invalid={Boolean(errors.companyName)}
              aria-describedby={errors.companyName ? 'companyName-error' : undefined}
              required
            />
            {errors.companyName && (
              <span id="companyName-error" className="form-error-msg" role="alert">
                <AlertCircle size={14} /> {errors.companyName}
              </span>
            )}
          </div>

          {/* Service Category */}
          <div className="form-group">
            <label htmlFor="serviceCategory" className="form-label">
              Service Category <span className="form-label-required" aria-hidden="true">*</span>
            </label>
            <select
              id="serviceCategory"
              name="serviceCategory"
              value={formData.serviceCategory}
              onChange={handleChange}
              className={`form-select ${errors.serviceCategory ? 'has-error' : ''}`}
              aria-invalid={Boolean(errors.serviceCategory)}
              aria-describedby={errors.serviceCategory ? 'serviceCategory-error' : undefined}
              required
            >
              <option value="">Select a service category...</option>
              {brandServices.map((srv) => (
                <option key={srv.id} value={srv.name}>
                  {srv.number}. {srv.name} ({srv.categoryLabel})
                </option>
              ))}
            </select>
            {errors.serviceCategory && (
              <span id="serviceCategory-error" className="form-error-msg" role="alert">
                <AlertCircle size={14} /> {errors.serviceCategory}
              </span>
            )}
          </div>

          {/* Project Description */}
          <div className="form-group">
            <label htmlFor="projectDescription" className="form-label">
              Project Description & Goals <span className="form-label-required" aria-hidden="true">*</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows={4}
              value={formData.projectDescription}
              onChange={handleChange}
              placeholder="Tell us what you're trying to achieve (e.g. 50 campus ambassador activations across Bangalore colleges or 100 UGC reels for our product launch)..."
              className={`form-textarea ${errors.projectDescription ? 'has-error' : ''}`}
              aria-invalid={Boolean(errors.projectDescription)}
              aria-describedby={errors.projectDescription ? 'projectDescription-error' : undefined}
              required
            />
            {errors.projectDescription && (
              <span id="projectDescription-error" className="form-error-msg" role="alert">
                <AlertCircle size={14} /> {errors.projectDescription}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            className="btn-full"
            disabled={isSubmitting}
            ariaLabel="Submit brand project brief"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Processing Brief...</span>
              </>
            ) : (
              <>
                <span>Submit Campaign Brief</span>
                <Send size={16} />
              </>
            )}
          </Button>

          <p className="form-disclaimer">
            No spam. We respect your enterprise privacy. All inquiries are reviewed in accordance with verified Funngro brand terms.
          </p>
        </form>
      )}
    </div>
  );
}
