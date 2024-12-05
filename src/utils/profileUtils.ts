import { UserType } from '../types/userTypes';

export const getProfileTitle = (userType?: UserType): string => {
  return userType === 'hiring' ? 'jobDescription' : 'profile';
};

export const getProfileSummary = (userType?: UserType): string => {
  if (userType === 'hiring') {
    return `# Job Description
A challenging position for a skilled professional who will contribute to our team's success.

## Key Requirements
• Strong technical background
• Excellent communication skills
• Team player mindset

## What We Offer
• Competitive compensation
• Professional development opportunities
• Modern work environment

## Role Description
We are looking for a dedicated professional to join our growing team.`;
  }

  return `# Professional Profile
An experienced professional with a strong track record of success.

## Key Competencies
• Extensive experience in the field
• Strong leadership abilities
• Results-driven approach

## Professional Background
Demonstrated success in delivering high-impact results.

## Career Goals
Seeking opportunities to:
• Contribute expertise to innovative projects
• Continue professional growth
• Work with cutting-edge technologies

## Personal Approach
Characterized by analytical thinking and solution-oriented methodology.`;
};