
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  // Company overview data
  const companyOverview = {
    mission: "To revolutionize the industry through innovative solutions.",
    vision: "Becoming the global leader in our field by 2030.",
    values: ["Integrity", "Innovation", "Collaboration", "Excellence"]
  };

  // Team member data
  const teamMembers = [
    { name: "Jane Doe", role: "CEO", photo: "jane-doe.jpg", bio: "20+ years of industry experience" },
    { name: "John Smith", role: "CTO", photo: "john-smith.jpg", bio: "Tech visionary and innovator" },
    // Add more team members as needed
  ];

  // Company milestones
  const milestones = [
    { year: 2010, achievement: "Company founded" },
    { year: 2015, achievement: "Launched flagship product" },
    { year: 2020, achievement: "Expanded to international markets" },
    // Add more milestones as needed
  ];

  return (
    <main className="about-us">
      <section aria-labelledby="company-overview">
        <h1 id="company-overview">About Us</h1>
        <p>Mission: {companyOverview.mission}</p>
        <p>Vision: {companyOverview.vision}</p>
        <h2>Our Values</h2>
        <ul>
          {companyOverview.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="our-team">
        <h2 id="our-team">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article key={index} className="team-member">
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="company-history">
        <h2 id="company-history">Our History</h2>
        <ul className="timeline">
          {milestones.map((milestone, index) => (
            <li key={index}>
              <strong>{milestone.year}:</strong> {milestone.achievement}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default AboutUs;
