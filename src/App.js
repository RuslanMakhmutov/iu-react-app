import {useTranslation } from "react-i18next";
import {useSpring, animated, easings} from "@react-spring/web";
import uniqueId from 'lodash/uniqueId.js'

function App() {
  const {t, i18n} = useTranslation()
  const [spring, api] = useSpring(() => ({
    x: 0,
    config: {
      duration: 2000,
    }
  }))

  const changeLanguageHandler = (e) => {
    i18n.changeLanguage(e.target.value)

    api.set({
      x: 0
    })

    api.start({
      x: 100
    })
  }

  return (<>
    <header className={uniqueId('header_')}>
      <nav className={uniqueId('menu_')}>
        <a className={uniqueId('link_')} href="#">{t('linkToHome')}</a>
        <a className={uniqueId('link_')} href="#">{t('linkToContacts')}</a>
      </nav>

      <select name="language" onChange={changeLanguageHandler} value={i18n.language} className={uniqueId('select_')}>
        {Object.keys(i18n.options.resources).map((lang) => {
          return <option value={lang} key={`lang_${lang}`} className={uniqueId('option_')}>{lang}</option>
        })}
      </select>
    </header>
    <main className={uniqueId('main_')}>
      <animated.h1 style={{...spring}} className={uniqueId('heading_')}>{t('localizationTitle')}</animated.h1>
      <div className={uniqueId('div_')}>{t('localizationText')}</div>
    </main>
  </>);
}

export default App;
