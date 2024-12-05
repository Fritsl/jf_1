import React, { useState } from 'react';
import { Download, Mail, Globe, FileText, UserCheck, FileSpreadsheet } from 'lucide-react';
import { Slider } from './Slider';
import { RichTextEditor } from './RichTextEditor';
import { CandidateAssessment } from './CandidateAssessment';
import { UserType } from '../types/userTypes';
import { useTranslation } from 'react-i18next';

interface DocumentGeneratorProps {
  type: 'coverLetter' | 'cv' | 'viewCV' | 'candidateReport';
  jobTitle: string;
  company: string;
  userType?: UserType;
}

export function DocumentGenerator({ type, jobTitle, company, userType }: DocumentGeneratorProps) {
  const [formality, setFormality] = useState(50);
  const [length, setLength] = useState(50);
  const isHiring = userType === 'hiring';
  const { t } = useTranslation();

  const emailAddress = `jobs@${company.toLowerCase().replace(/\s+/g, '')}.dk`;
  const companyWebsite = `https://www.${company.toLowerCase().replace(/\s+/g, '')}.dk`;
  const jobPostingUrl = `${companyWebsite}/careers/${jobTitle.toLowerCase().replace(/\s+/g, '-')}`;

  const renderControls = () => {
    if (type === 'candidateReport' || type === 'viewCV') return null;

    return (
      <>
        <Slider
          label="Formal"
          leftLabel="Casual"
          rightLabel="Professional"
          value={formality}
          onChange={setFormality}
        />
        <Slider
          label="Length"
          leftLabel="Concise"
          rightLabel="Detailed"
          value={length}
          onChange={setLength}
        />
      </>
    );
  };

  const renderActions = () => {
    const actions = [];

    if (!isHiring) {
      actions.push(
        <a
          key="email"
          href={`mailto:${emailAddress}`}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>Send email</span>
        </a>,
        <a
          key="website"
          href={companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span>Company website</span>
        </a>,
        <a
          key="posting"
          href={jobPostingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>Job posting</span>
        </a>
      );
    }

    actions.push(
      <button
        key="download"
        onClick={() => {}} // Would trigger PDF download in production
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>Download as PDF</span>
      </button>
    );

    return actions;
  };

  const getCandidateCV = () => {
    return (
      <div className="space-y-8">
        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">John Developer</h1>
              <p className="text-lg text-gray-600">Senior Full Stack Developer</p>
              <div className="mt-4 text-sm text-gray-500">
                Greater Copenhagen Area • Available in 3 months
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Professional Summary</h2>
              <p className="text-gray-700">
                Senior Full Stack Developer with 8+ years of experience in developing and maintaining complex web applications. 
                Proven track record in leading development teams and implementing scalable solutions using modern technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Frontend</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• React & React Native</li>
                    <li>• TypeScript</li>
                    <li>• Modern CSS (Tailwind, Styled Components)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Backend</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Node.js</li>
                    <li>• Python</li>
                    <li>• Java</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">Lead Developer</h3>
                      <div className="text-gray-600">TechCorp International</div>
                    </div>
                    <div className="text-sm text-gray-500">2020 - Present</div>
                  </div>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Led development of enterprise e-commerce platform</li>
                    <li>• Managed team of 6 developers</li>
                    <li>• Implemented microservices architecture</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">Senior Developer</h3>
                      <div className="text-gray-600">Innovation Labs</div>
                    </div>
                    <div className="text-sm text-gray-500">2018 - 2020</div>
                  </div>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Developed cloud-native applications</li>
                    <li>• Mentored junior developers</li>
                    <li>• Improved deployment processes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Education</h2>
              <div>
                <h3 className="font-medium text-gray-900">Master's in Computer Science</h3>
                <div className="text-gray-600">Technical University of Denmark</div>
                <div className="text-sm text-gray-500">2015 - 2017</div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Certifications</h2>
              <ul className="space-y-1 text-gray-600">
                <li>• AWS Certified Solutions Architect</li>
                <li>• Certified Scrum Master</li>
                <li>• Google Cloud Professional Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getContent = () => {
    if (type === 'viewCV') {
      return getCandidateCV();
    }

    if (type === 'candidateReport') {
      return (
        <div className="space-y-8">
          <CandidateAssessment {...mockAssessmentData} />
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t('candidateReport.detailedProfile')}
            </h2>
            <div className="whitespace-pre-wrap text-gray-700">
              {`CANDIDATE PROFILE
${jobTitle}
Location: Greater Copenhagen Area
Availability: 3 months notice

PROFESSIONAL ASSESSMENT
Experience Level: Senior (8+ years)
Technical Skills: Excellent
Communication: Strong
Leadership: Proven track record

KEY STRENGTHS
• Extensive experience in full-stack development
• Strong leadership and team management skills
• Excellent problem-solving abilities
• Proven track record in enterprise projects

TECHNICAL EXPERTISE
• Frontend: React, TypeScript, Modern CSS
• Backend: Node.js, Python, Java
• Cloud: AWS, Azure
• Tools: Git, Docker, Kubernetes

PROJECT HIGHLIGHTS
• Led development of large-scale e-commerce platform
• Implemented microservices architecture
• Reduced deployment time by 60%
• Mentored junior developers

EDUCATION & CERTIFICATIONS
• Master's in Computer Science
• AWS Certified Solutions Architect
• Certified Scrum Master

SALARY EXPECTATIONS
• Range: 65,000-75,000 DKK/month
• Benefits: Standard package expected
• Work arrangement: Hybrid preferred`}
            </div>
          </div>
        </div>
      );
    }

    if (type === 'coverLetter') {
      return `Dear Hiring Manager,

I am writing to express my strong interest in the ${jobTitle} position at ${company}...

[This is a demo cover letter that would be generated based on the candidate's profile and the job description, taking into account the formality (${formality}%) and length (${length}%) settings.]

Best regards,
[Your name]`;
    }

    return `CURRICULUM VITAE

[This is a demo CV that would be generated based on the candidate's profile, taking into account the formality (${formality}%) and length (${length}%) settings.]

EXPERIENCE
• Senior Developer at Previous Company
• Lead Developer at Another Company
• Full Stack Developer at First Company

EDUCATION
• Master's in Computer Science
• Bachelor's in Software Engineering`;
  };

  const mockAssessmentData = {
    skills: [
      {
        name: t('assessment.technicalSkills'),
        rating: 5,
        comment: 'Exceptional technical expertise across full stack development.'
      },
      {
        name: t('assessment.experience'),
        rating: 4,
        comment: '8+ years of relevant industry experience.'
      },
      {
        name: t('assessment.leadership'),
        rating: 4,
        comment: 'Proven track record of leading development teams.'
      },
      {
        name: t('assessment.communication'),
        rating: 5,
        comment: 'Excellent communication and documentation skills.'
      },
      {
        name: t('assessment.cultural'),
        rating: 4,
        comment: 'Strong alignment with company values and culture.'
      }
    ],
    overallRating: 4,
    recommendation: 'Highly recommended for senior positions. Strong technical background combined with leadership experience makes this candidate an excellent fit for technical lead roles.',
    concerns: [
      'Current notice period is 3 months',
      'Salary expectations at the higher end of the range',
      'May require relocation assistance'
    ]
  };

  const content = getContent();

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {renderControls()}
      </div>

      {typeof content === 'string' ? (
        <RichTextEditor
          value={content}
          onChange={() => {}} // Read-only in this demo
        />
      ) : (
        content
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t pt-4">
        {renderActions()}
      </div>
    </div>
  );
}