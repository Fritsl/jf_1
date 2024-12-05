import React, { useState, useRef } from 'react';
import { JobMatch } from './JobMatch';
import { getMatchData } from '../utils/mockDataUtils';
import { UserType } from '../types/userTypes';

interface JobMatchListProps {
  userType?: UserType;
}

export function JobMatchList({ userType }: JobMatchListProps) {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  const matches = getMatchData(userType);

  const handleExpand = (index: number) => {
    const isExpanding = expandedJobId !== index;
    
    if (expandedJobId !== null && isExpanding) {
      setExpandedJobId(null);
      setTimeout(() => {
        setExpandedJobId(index);
        scrollToCompanyInfo(index);
      }, 100);
    } else {
      setExpandedJobId(isExpanding ? index : null);
      if (isExpanding) {
        scrollToCompanyInfo(index);
      }
    }
  };

  const scrollToCompanyInfo = (index: number) => {
    if (jobRefs.current[index]) {
      setTimeout(() => {
        const jobCard = jobRefs.current[index];
        if (jobCard) {
          const companyInfoSection = Array.from(jobCard.querySelectorAll('div')).find(
            el => el.textContent?.includes('Company Contact Information')
          );

          if (companyInfoSection) {
            const headerOffset = -400;
            const elementPosition = companyInfoSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 150);
    }
  };

  return (
    <div className="space-y-4">
      {matches.map((match, index) => (
        <div
          key={index}
          ref={el => jobRefs.current[index] = el}
        >
          <JobMatch
            {...match}
            isExpanded={expandedJobId === index}
            onToggleExpand={() => handleExpand(index)}
            userType={userType}
          />
        </div>
      ))}
    </div>
  );
}