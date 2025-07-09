import React from "react" 
import resume from '../artifacts/resume.pdf'

export const Resume = () => {
  return <div className="resume-section">
    <embed src={resume} type='application/pdf' />
  </div>
}