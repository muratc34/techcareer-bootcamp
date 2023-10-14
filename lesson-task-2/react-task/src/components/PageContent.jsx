import React from 'react'
import ProjectSection from './ProjectSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import LocationSection from './LocationSection'

const PageContent = () => {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
        <LocationSection/>
    </div>
  )
}

export default PageContent