import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wand2, Users, Building2, Info } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Wand2 className="h-6 w-6" />
              JobFantastic
            </div>
            <p className="text-sm">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              {t('footer.jobSeekers')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">{t('footer.browseJobs')}</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">{t('footer.careerResources')}</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">{t('footer.resumeBuilder')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              {t('footer.employers')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">{t('footer.postJob')}</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">{t('footer.talentSearch')}</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">{t('footer.recruitment')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Info className="h-5 w-5" />
              {t('footer.siteInfo')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/gdpr" className="hover:text-white transition-colors">{t('footer.gdpr')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}