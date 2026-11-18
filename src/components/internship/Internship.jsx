
import React, { useState } from "react";
import { Link } from "react-router-dom";
import internshipData from "./internshipData";
import "./Internship.css";


const categories = [
    "All",
    "Development",
    "Cloud & DevOps",
    "Automation"
];

const Internship = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredInternships = internshipData.filter((item) => {
        const searchText = search.toLowerCase();

        const matchesSearch =
            item.title.toLowerCase().includes(searchText) ||
            item.company.toLowerCase().includes(searchText) ||
            item.skills.some(skill =>
                skill.toLowerCase().includes(searchText)
            );

        const matchesCategory =
            category === "All" || item.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="internship-section" id="internships">


            {/* Hero */}
            <div className="internship-hero">

                <div className="internship-hero-content">

                    <span className="internship-label">
                        CAREER & INTERNSHIP OPPORTUNITIES
                    </span>

                    <h1>
                        Find Your Next
                        <br />
                        <span>Internship Opportunity.</span>
                    </h1>

                    <p>
                        Discover internship opportunities from participating
                        organizations. Explore different roles, showcase your
                        skills and submit your application through Kshatreeya
                        Tech Solutions.
                    </p>

                    <div className="internship-hero-points">
                        <span>✓ Multiple Organizations</span>
                        <span>✓ Resume Submission</span>
                        <span>✓ Career Opportunities</span>
                    </div>

                </div>

            </div>


            {/* Internship listings */}
            <div className="internship-container">

                <div className="internship-heading">

                    <div>
                        <span>EXPLORE OPPORTUNITIES</span>
                        <h2>Available Internships</h2>
                        <p>
                            Find an opportunity that matches your interests
                            and technical skills.
                        </p>
                    </div>

                    <div className="internship-count">
                        {filteredInternships.length} Opportunities
                    </div>

                </div>


                {/* Search */}
                <div className="internship-filters">

                    <div className="internship-search">
                        <span>⌕</span>

                        <input
                            type="text"
                            placeholder="Search role, company or skill..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="internship-categories">

                        {categories.map((item) => (
                            <button
                                key={item}
                                className={
                                    category === item ? "active" : ""
                                }
                                onClick={() => setCategory(item)}
                            >
                                {item}
                            </button>
                        ))}

                    </div>

                </div>


                {/* Cards */}
                {filteredInternships.length > 0 ? (

                    <div className="internship-grid">

                        {filteredInternships.map((item) => (

                            <article
                                className="internship-card"
                                key={item.id}
                            >

                                <div className="internship-card-top">

                                    <div className="company-logo">
                                        {item.companyInitial}
                                    </div>

                                    <div className="internship-card-company">
                                        <h4>{item.company}</h4>
                                        <span>{item.employmentType}</span>
                                    </div>

                                    <span className="internship-status">
                                        {item.status}
                                    </span>

                                </div>


                                <div className="internship-responsibilities">
                                    <strong>Key Responsibilities</strong>

                                    <ul>
                                        {item.responsibilities.map((task, index) => (
                                            <li key={index}>{task}</li>
                                        ))}
                                    </ul>
                                </div>


                                <div className="internship-card-footer">

                                    <span>
                                        {item.lastDate}
                                    </span>

                                    <Link
                                        to={`/internships/apply/${item.slug}`}
                                        className="internship-apply-btn"
                                    >
                                        Apply Now <span>→</span>
                                    </Link>

                                </div>

                            </article>

                        ))}

                    </div>

                ) : (

                    <div className="internship-empty">
                        <h3>No internships found</h3>
                        <p>
                            Try another search term or select a different category.
                        </p>

                        <button
                            onClick={() => {
                                setSearch("");
                                setCategory("All");
                            }}
                        >
                            Clear Filters
                        </button>
                    </div>

                )}

            </div>


            {/* Bottom CTA */}
            <div className="internship-bottom">

                <h2>
                    Your Next Opportunity Could Start Here.
                </h2>

                <p>
                    Create your profile, prepare your resume and explore
                    internship opportunities from participating companies.
                </p>

            </div>

        </section>
    );
};

export default Internship;
