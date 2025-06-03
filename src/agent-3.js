
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
    { year: 2015, achievement: "Expanded to international markets" },
    { year: 2020, achievement: "Launched groundbreaking product line" },
    // Add more milestones as needed
  ];

  return (
    <main className="about-us">
      <h1>About Us</h1>
      
      <section aria-labelledby="company-overview">
        <h2 id="company-overview">Company Overview</h2>
        <p>Mission: {companyOverview.mission}</p>
        <p>Vision: {companyOverview.vision}</p>
        <h3>Our Values</h3>
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

      <section aria-labelledby="history-milestones">
        <h2 id="history-milestones">History and Milestones</h2>
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
