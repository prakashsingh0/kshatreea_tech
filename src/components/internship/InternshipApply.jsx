
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./InternshipApply.css";

const API_URL = "https://kshateeya-tech-server.vercel.app"

function InternshipApply() {
    const { slug } = useParams();
    const [form, setForm] = useState({
        full_name: "",
        email: "",
        phone: "",
        city: "",
        college: "",
        degree: "",
        graduation_year: "",
        technical_skills: "",
        linkedin: "",
        github: "",
        availability: "",
        motivation: "",
        consent: false,
    });

    const [resume, setResume] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

   const handleResumeChange = async (event) => {
    const file = event.target.files?.[0];

    if (!file) {
        setResume(null);
        return;
    }

    // Check extension
    if (!file.name.toLowerCase().endsWith(".pdf")) {
        setResume(null);
        event.target.value = "";
        setMessage("Only PDF resumes are accepted.");
        setMessageType("error");
        return;
    }

    // Check MIME type
    if (file.type !== "application/pdf") {
        setResume(null);
        event.target.value = "";
        setMessage("Please upload a valid PDF resume.");
        setMessageType("error");
        return;
    }

    // Check maximum size: 5 MB
    if (file.size > 5 * 1024 * 1024) {
        setResume(null);
        event.target.value = "";
        setMessage("Resume must not exceed 5 MB.");
        setMessageType("error");
        return;
    }

    // Check PDF signature
    const header = await file.slice(0, 5).text();

    if (header !== "%PDF-") {
        setResume(null);
        event.target.value = "";
        setMessage("The uploaded file is not a valid PDF.");
        setMessageType("error");
        return;
    }

    setResume(file);
    setMessage("");
    setMessageType("");
};

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        if (!slug) {
            setMessage("Invalid internship application link.");
            setMessageType("error");
            return;
        }

        if (!resume) {
            setMessage("Please upload your resume in PDF format.");
            setMessageType("error");
            return;
        }

        if (!form.consent) {
            setMessage("Please provide consent before submitting.");
            setMessageType("error");
            return;
        }

        const formData = new FormData();

        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, String(value));
        });

        formData.append("resume", resume);

        try {
            setLoading(true);

            const response = await fetch(
                `${API_URL}/api/internships/apply/${encodeURIComponent(slug)}`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    result.detail ||
                    result.message ||
                    "Unable to submit your application."
                );
            }

            setMessage(
                result.message ||
                "Your application has been submitted successfully."
            );

            setMessageType("success");

            setForm({
                full_name: "",
                email: "",
                phone: "",
                city: "",
                college: "",
                degree: "",
                graduation_year: "",
                technical_skills: "",
                linkedin: "",
                github: "",
                availability: "",
                motivation: "",
                consent: false,
            });

            setResume(null);
            event.target.reset();

        } catch (error) {
            setMessage(
                error.message || "Something went wrong. Please try again."
            );

            setMessageType("error");

        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="internship-apply-page">
            <section className="apply-hero">
                <span className="apply-eyebrow">INTERNSHIP APPLICATION</span>
                <h1>Apply for IT Support Intern</h1>
                <p>
                    Take the next step towards gaining practical experience in
                    enterprise IT infrastructure and technical support.
                </p>
            </section>

            <section className="apply-job-summary">
                <div>
                    <span>Hiring Company</span>
                    <h2>Accel IT Services</h2>
                </div>
                <div>
                    <span>Work Location</span>
                    <h3>Client Site, Mumbai</h3>
                </div>
                <div>
                    <span>Duration</span>
                    <h3>1 Year</h3>
                </div>
                <div>
                    <span>Stipend</span>
                    <h3>Up to ₹16,000 / month*</h3>
                </div>
            </section>

            <form className="apply-form" onSubmit={handleSubmit}>
                <div className="apply-section-heading">
                    <span>01</span>
                    <div>
                        <h2>Personal Information</h2>
                        <p>Enter your contact details.</p>
                    </div>
                </div>

                <div className="apply-grid">
                    <label>
                        Full Name *
                        <input
                            name="full_name"
                            value={form.full_name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                        />
                    </label>

                    <label>
                        Email Address *
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                        />
                    </label>

                    <label>
                        Mobile Number *
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            pattern="[6-9][0-9]{9}"
                            maxLength="10"
                            required
                        />
                    </label>

                    <label>
                        City *
                        <input
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            placeholder="Your current city"
                            required
                        />
                    </label>
                </div>

                <div className="apply-section-heading">
                    <span>02</span>
                    <div>
                        <h2>Education Details</h2>
                        <p>Tell us about your academic background.</p>
                    </div>
                </div>

                <div className="apply-grid">
                    <label>
                        College / University *
                        <input
                            name="college"
                            value={form.college}
                            onChange={handleChange}
                            placeholder="Institution name"
                            required
                        />
                    </label>

                    <label>
                        Degree / Qualification *
                        <input
                            name="degree"
                            value={form.degree}
                            onChange={handleChange}
                            placeholder="e.g. BCA, BSc IT, BE, Diploma"
                            required
                        />
                    </label>

                    <label>
                        Graduation Year *
                        <input
                            type="number"
                            name="graduation_year"
                            value={form.graduation_year}
                            onChange={handleChange}
                            placeholder="e.g. 2027"
                            min="2000"
                            max="2100"
                            required
                        />
                    </label>

                    <label>
                        Technical Skills *
                        <input
                            name="technical_skills"
                            value={form.technical_skills}
                            onChange={handleChange}
                            placeholder="e.g. Windows, Linux, Networking"
                            required
                        />
                    </label>
                </div>

                <div className="apply-section-heading">
                    <span>03</span>
                    <div>
                        <h2>Professional Details</h2>
                        <p>Share your profile and availability.</p>
                    </div>
                </div>

                <div className="apply-grid">
                    <label>
                        LinkedIn Profile
                        <input
                            type="url"
                            name="linkedin"
                            value={form.linkedin}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/..."
                        />
                    </label>

                    <label>
                        GitHub Profile
                        <input
                            type="url"
                            name="github"
                            value={form.github}
                            onChange={handleChange}
                            placeholder="https://github.com/..."
                        />
                    </label>

                    <label className="apply-full-width">
                        Availability *
                        <select
                            name="availability"
                            value={form.availability}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select your availability</option>
                            <option value="Immediately">Immediately</option>
                            <option value="Within 15 days">Within 15 days</option>
                            <option value="Within 30 days">Within 30 days</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>

                    <label className="apply-full-width">
                        Why are you interested in this internship?
                        <textarea
                            name="motivation"
                            value={form.motivation}
                            onChange={handleChange}
                            placeholder="Briefly introduce yourself and explain your interest..."
                            rows="4"
                        />
                    </label>
                </div>

                <div className="apply-section-heading">
                    <span>04</span>
                    <div>
                        <h2>Upload Resume</h2>
                        <p>Upload your latest resume in PDF format (maximum 5 MB).</p>
                    </div>
                </div>

                <label className="resume-upload">
                    <span className="resume-upload-icon">↑</span>
                    <strong>{resume ? resume.name : "Choose your resume"}</strong>
                    <small>
                        {resume
                            ? "PDF selected"
                            : "PDF format only · Maximum file size 5 MB"}
                    </small>
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,application/pdf"
                        onChange={handleResumeChange}
                        required
                    />
                </label>

                <div className="apply-consent">
                    <label>
                        <input
                            type="checkbox"
                            name="consent"
                            checked={form.consent}
                            onChange={handleChange}
                            required
                        />
                        <span>
                            I consent to Kshatreeya Tech Solutions collecting my application
                            details and sharing my resume and relevant information with
                            Accel IT Services for this internship opportunity. I understand
                            that Accel IT Services is responsible for the interview and
                            final selection decision.
                        </span>
                    </label>
                </div>

                <p className="apply-disclaimer">
                    *The stipend is up to ₹16,000 per month and depends on interview
                    performance. Applying does not guarantee an interview or selection.
                    Kshatreeya Tech Solutions facilitates the application process and
                    is not the hiring company for this role.
                </p>

                {message && (
                    <div className={`apply-message ${messageType}`} role="status">
                        {message}
                    </div>
                )}

                <button className="apply-submit-btn" type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Application"}
                </button>
            </form>
        </main>
    );
}

export default InternshipApply;
