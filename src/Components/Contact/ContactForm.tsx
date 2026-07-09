import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import sideImage from "../../assets/images/counselling-2.jpg";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  subject: "",
  message: "",
};

const inquirySubjects = [
  "General Inquiry",
  "Course & University Guidance",
  "Visa Assistance",
  "Scholarship Guidance",
  "Test Preparation (IELTS/PTE)",
  "Other",
];

const fieldClasses =
  "w-full rounded-lg border bg-white px-4 py-3.5 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

const labelClasses = "mb-1.5 block text-sm font-medium text-ink-soft";

const ContactForm = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.message.trim()) newErrors.message = "Please write a message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    // TODO: wire this up to the real backend/email API once it's available.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact-form" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 max-w-xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-500 uppercase">
            Need Help?
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink">
            Chat with our team
          </h2>
          <p className="mt-4 text-ink-soft">
            Need help? Stuck somewhere? Chat to our friendly team, we're
            here to help you.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-line bg-white shadow-sm lg:grid-cols-5">

          {/* Image */}
          <div className="relative hidden lg:col-span-2 lg:block">
            <img
              src={sideImage}
              alt="Our team is ready to help"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-display text-2xl italic">
                "With you, every step."
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 lg:col-span-3 lg:p-14">
            {submitted ? (
              <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                <FaCheckCircle className="mb-4 text-5xl text-brand-500" />
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Message Sent!
                </h3>
                <p className="mt-2 max-w-sm text-ink-soft">
                  Thanks for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className={`${fieldClasses} ${
                        errors.firstName ? "border-red-400" : "border-line"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClasses}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className={`${fieldClasses} ${
                        errors.lastName ? "border-red-400" : "border-line"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`${fieldClasses} ${
                        errors.email ? "border-red-400" : "border-line"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className={labelClasses}>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`${fieldClasses} ${
                        errors.phone ? "border-red-400" : "border-line"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClasses}>Current Location</label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className={`${fieldClasses} border-line`}
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>Inquiry Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`${fieldClasses} border-line text-ink-soft`}
                    >
                      <option value="">Select a subject</option>
                      {inquirySubjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${fieldClasses} ${
                      errors.message ? "border-red-400" : "border-line"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-full bg-brand-500 py-4 text-lg font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send"}
                </button>

                <p className="text-center text-sm text-ink-soft/70">
                  Your information is secure and will never be shared with
                  third parties.
                </p>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
