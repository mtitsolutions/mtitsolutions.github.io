import { SwitchNavigationWithTranslation } from './SwitchNavigation'
import { useTranslation } from 'react-i18next';

import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const { t } = useTranslation();
  return (
    <>
      <SwitchNavigationWithTranslation />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>MT - IT SOLUTIONS</h1>
      <h2>{t('home.header')}</h2>
      <ul className="functions">
        <li>{t('home.option1')}</li>
        <li>{t('home.option2')}</li>
        <li>{t('home.option3')}</li>
        <li>{t('home.option4')}</li>
        <li>{t('home.option5')}</li>
      </ul>
      <h2>{t('home.footer')}<a href="https://www.linkedin.com/in/maria-treier/">https://www.linkedin.com/in/maria-treier/</a></h2>
    </>
  )
}

export default App
