"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import styles from "./BookingModal.module.css";

interface FormState {
  fullName: string;
  workEmail: string;
  companyName: string;
  service: string;
  projectDetails: string;
  preferredDate: string;
  preferredTime: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export default function BookingModal() {
  const { isOpen, closeBookingModal } = useBooking();
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    workEmail: "",
    companyName: "",
    service: "",
    projectDetails: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBookingModal();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBookingModal]);

  // Reset form when modal closes/opens
  useEffect(() => {
    if (!isOpen) {
      // Small timeout to allow transition to finish
      const timer = setTimeout(() => {
        setFormData({
          fullName: "",
          workEmail: "",
          companyName: "",
          service: "",
          projectDetails: "",
          preferredDate: "",
          preferredTime: "",
        });
        setErrors({});
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a date";
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a time slot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeBookingModal();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className={styles.modal} ref={modalRef}>
        
        {/* Left Column: Info Column */}
        <div className={styles.leftCol}>
          <div className={styles.logoHeader}>
            <div className={styles.logoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <h3 className={styles.logoTitle}>Book a Call with</h3>
              <h2 className={styles.logoAgency}>Nexus Agency</h2>
            </div>
          </div>

          <p className={styles.leftDesc}>
            Let&apos;s discuss your project and explore how we can help your business grow online.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>30-Minute Call</h4>
                <p>A focused conversation about your goals and how we can help.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Expert Solutions</h4>
                <p>Get expert insights and tailored solutions for your business.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>No Commitment</h4>
                <p>It&apos;s completely free and there&apos;s no obligation.</p>
              </div>
            </div>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              <Image 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
                width={32} 
                height={32} 
                alt="Client" 
                className={styles.avatar} 
              />
              <Image 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" 
                width={32} 
                height={32} 
                alt="Client" 
                className={styles.avatar} 
              />
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                width={32} 
                height={32} 
                alt="Client" 
                className={styles.avatar} 
              />
              <div className={styles.avatarMore}>+50</div>
            </div>
            <div className={styles.socialProofText}>
              Trusted by 50+ businesses worldwide
            </div>
          </div>
        </div>

        {/* Right Column: Form Column */}
        <div className={styles.rightCol}>
          <button className={styles.closeBtn} onClick={closeBookingModal} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {!isSubmitted ? (
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Schedule Your Call</h2>
              <p className={styles.formSubtitle}>Fill out the form below and we&apos;ll get back to you to confirm.</p>

              <form onSubmit={handleSubmit} className={styles.form}>
                
                {/* Full Name */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="fullName" className={styles.label}>
                    Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                  />
                  {errors.fullName && <span className={styles.errorMsg}>{errors.fullName}</span>}
                </div>

                {/* Work Email */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="workEmail" className={styles.label}>
                    Work Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    className={`${styles.input} ${errors.workEmail ? styles.inputError : ""}`}
                  />
                  {errors.workEmail && <span className={styles.errorMsg}>{errors.workEmail}</span>}
                </div>

                {/* Company Name */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="companyName" className={styles.label}>Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className={styles.input}
                  />
                </div>

                {/* Help Dropdown */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="service" className={styles.label}>
                    What do you need help with? <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.selectWrapper}>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`${styles.select} ${errors.service ? styles.inputError : ""}`}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Consultation">General Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {errors.service && <span className={styles.errorMsg}>{errors.service}</span>}
                </div>

                {/* Project Details */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="projectDetails" className={styles.label}>Project Details</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={3}
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and any specific requirements."
                    className={styles.textarea}
                  />
                </div>

                {/* Preferred Date & Time Row */}
                <div className={styles.row}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="preferredDate" className={styles.label}>
                      Preferred Date <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.preferredDate ? styles.inputError : ""}`}
                    />
                    {errors.preferredDate && <span className={styles.errorMsg}>{errors.preferredDate}</span>}
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="preferredTime" className={styles.label}>
                      Preferred Time <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.selectWrapper}>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className={`${styles.select} ${errors.preferredTime ? styles.inputError : ""}`}
                      >
                        <option value="" disabled>Select time</option>
                        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                        <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                        <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>
                    {errors.preferredTime && <span className={styles.errorMsg}>{errors.preferredTime}</span>}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  {isSubmitting ? (
                    <span className={styles.spinnerWrapper}>
                      <svg className={styles.spinner} viewBox="0 0 24 24">
                        <circle className={styles.path} cx="12" cy="12" r="10" fill="none" strokeWidth="3"></circle>
                      </svg>
                      Scheduling...
                    </span>
                  ) : (
                    <>
                      Book My Call <span>→</span>
                    </>
                  )}
                </button>
              </form>

              <div className={styles.formFooter}>
                🔒 Your information is secure and will never be shared.
              </div>
            </div>
          ) : (
            <div className={styles.successContainer}>
              <div className={styles.successBadge}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className={styles.successTitle}>Booking Requested!</h2>
              <p className={styles.successSubtitle}>
                Thank you, <strong>{formData.fullName}</strong>. We have received your request to discuss <strong>{formData.service}</strong>.
              </p>
              <div className={styles.successCard}>
                <div className={styles.successCardRow}>
                  <span>Date:</span>
                  <strong>{new Date(formData.preferredDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                </div>
                <div className={styles.successCardRow}>
                  <span>Time Slot:</span>
                  <strong>{formData.preferredTime}</strong>
                </div>
                <div className={styles.successCardRow}>
                  <span>Email:</span>
                  <strong>{formData.workEmail}</strong>
                </div>
              </div>
              <p className={styles.successInstructions}>
                A calendar invitation and confirmation email have been sent. Our team will contact you shortly to confirm the Google Meet link.
              </p>
              <button className={styles.successCloseBtn} onClick={closeBookingModal}>
                Done
              </button>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
