import React from "react" 
import resume from '../resume.pdf'

export const Resume = () => {
  return <div className="resume-section">
    <embed src={resume} type='application/pdf' />
  </div>
}