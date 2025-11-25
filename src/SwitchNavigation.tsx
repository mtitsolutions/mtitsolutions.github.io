import React, { useState } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

import './SwitchNavigation.css';
import { Russian } from './russian';
import { Croatian } from './croatian';
import type { Language } from './language';

const languages = [new Russian(), new Croatian()];

function SwitchNavigation() {
  const { i18n } = useTranslation();
  const [selectedLanguage, selectLanguage] = useState<string>(i18n.language);

  const handleClick = async (lang: Language) => {
    await i18n.changeLanguage(lang.toIETF());
    selectLanguage(lang.toIETF());
  };

  return (
    <ul className="switch-navigation_ul">
      {languages.map(lan => 
        <li key={lan.toIETF()}>
          <button
            aria-label={'switch-button_' + lan.toIETF()}
            className={`${lan.isSelectedLanguage(selectedLanguage) ? 'switch-button_bold' : ''}`}
            onClick={() => handleClick(lan)}
          >
            {lan.toButtonText()}
          </button>
      </li>
      )}
    </ul>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SwitchNavigationWithTranslation: React.ComponentType<any> =
  withTranslation()(SwitchNavigation);

export default SwitchNavigationWithTranslation;
