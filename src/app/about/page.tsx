import React, { CSSProperties } from "react"; // Import CSSProperties
import { person, about, social } from "@/app/resources/content";

// --- START: Static Metadata Fix ---
export const metadata = {
  title: about.title,
  description: about.description,
};
// --- END: Static Metadata Fix ---

// FIX: Assert the type of the entire styles object as a Record of CSSProperties.
// This ensures all properties like 'textAlign' are correctly validated against React's type definitions.
const styles: Record<string, CSSProperties> = {
    pageContainer: { maxWidth: '1000px', margin: '0 auto', padding: '0 20px' },
    
    // Text styles - properties like 'textAlign' are now correctly validated as literal strings
    headerText: { 
        fontSize: '40px', 
        fontWeight: '800', 
        marginBottom: '16px', 
        textAlign: 'center' // This literal string is now correctly assigned
    },
    subHeader: { fontSize: '24px', fontWeight: '600', marginBottom: '8px' },
    bodyText: { fontSize: '16px', lineHeight: 1.5 },
    sectionTitle: { fontSize: '32px', fontWeight: '800', margin: '32px 0 16px 0' },
    listItem: { marginBottom: '8px' },

    // Pre-merged style for the main wrapper
    mainWrapper: { 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '20px' 
    },

    // Pre-merged style for the avatar container
    avatarContainer: { 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        flex: 3,
        minWidth: '160px',
        padding: '20px',
        textAlign: 'center', // This literal string is now correctly assigned
        alignSelf: 'flex-start' 
    },
    
    // Content area styles
    contentArea: { flex: 9, maxWidth: '800px', padding: '20px' },

    // Pre-merged style for the intro section
    introSection: { 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        marginBottom: '32px',
        paddingTop: '32px',
        alignItems: 'center' // This literal string is now correctly assigned
    }
};

export default function About() {
  // ... (rest of your component body remains the same)
  return (
    <div style={styles.pageContainer}>
      
      <div style={styles.mainWrapper}>
        
        {/* --- Avatar / Sidebar Section --- */}
        {about.avatar.display && (
          <div style={styles.avatarContainer}>
            
            <img 
              src={person.avatar} 
              alt={person.name} 
              style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto' }} 
            />
            
            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', gap: '4px' }}>
              <span style={{ fontSize: '19.2px' }}>🌎</span> {person.location} 
            </div>
            
            {/* Languages */}
            {person.languages.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px', marginBottom: '8px', gap: '8px' }}>
                {person.languages.map((language, index) => (
                  <span key={language} style={{ background: '#eee', padding: '4px 8px', borderRadius: '4px', fontSize: '12.8px' }}>
                    {language}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- Main Content Block --- */}
        <div style={styles.contentArea}>
          
          {/* --- Intro Section --- */}
          <div style={styles.introSection}>
            
            <h1 style={styles.headerText}>
              {person.name}
            </h1>
            
            <p style={{ ...styles.bodyText, fontSize: '19.2px', color: '#666', textAlign: 'center' }}>
              {person.role}
            </p>
            
            {/* Social links */}
            {social.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px', marginBottom: '8px', gap: '8px' }}>
                {social.map((item) => item.link && (
                  <a 
                    key={item.name} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none', color: '#333', display: 'inline-flex', alignItems: 'center' }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* --- Introduction Description --- */}
          {about.intro.display && (
            <div style={{ ...styles.bodyText, marginBottom: '32px' }}>
              {about.intro.description}
            </div>
          )}

          {/* --- Work Experience --- */}
          {about.work.display && (
            <div style={{ marginBottom: '32px' }}>
              <h2 id={about.work.title} style={styles.sectionTitle}>
                {about.work.title}
              </h2>
              
              {about.work.experiences.map((experience, index) => (
                <div key={index} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #eee' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4px' }}>
                    <h3 id={experience.company} style={styles.subHeader}>
                      {experience.company}
                    </h3>
                    <span style={{ fontSize: '12.8px', color: '#999' }}>
                      {experience.timeframe}
                    </span>
                  </div>
                  
                  <p style={{ fontSize: '14.4px', color: '#999', marginBottom: '16px' }}>
                    {experience.role}
                  </p>
                  
                  <ul style={{ paddingLeft: '20px' }}>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} style={styles.listItem}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* --- Education/Studies --- */}
          {about.studies.display && (
            <div style={{ marginBottom: '32px' }}>
              <h2 id={about.studies.title} style={styles.sectionTitle}>
                {about.studies.title}
              </h2>
              {about.studies.institutions.map((institution, index) => (
                <div key={index} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #eee' }}>
                  <h3 id={institution.name} style={styles.subHeader}>
                    {institution.name}
                  </h3>
                  <p style={{ fontSize: '14.4px', color: '#999' }}>
                    {institution.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* --- Technical Skills --- */}
          {about.technical.display && (
            <div style={{ marginBottom: '32px' }}>
              <h2 id={about.technical.title} style={styles.sectionTitle}>
                {about.technical.title}
              </h2>
              {about.technical.skills.map((skill, index) => (
                <div key={index} style={{ marginBottom: '24px' }}>
                  <h3 style={styles.subHeader}>{skill.title}</h3>
                  <p style={{ fontSize: '14.4px', color: '#666' }}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}