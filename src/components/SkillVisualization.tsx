import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  experience: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillVisualizationProps {
  categories: SkillCategory[];
}

export function SkillVisualization({ categories }: SkillVisualizationProps) {
  const { t } = useTranslation();

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 75) return 'bg-green-400';
    if (level >= 60) return 'bg-yellow-400';
    if (level >= 40) return 'bg-orange-400';
    return 'bg-red-400';
  };

  return (
    <div className="space-y-8">
      {categories.map((category, index) => (
        <div key={index} className="bg-white rounded-lg p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
          </div>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">
                    {skill.experience}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${getSkillLevelColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}