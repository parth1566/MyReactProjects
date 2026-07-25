import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../App'    // ← is this line there? Braces? '../App' path?
import LanguageButton from './LanguageButton';
 
const Greeting = () => {
    const{language, setLanguage} = useContext(LanguageContext);
  return (
    <div className='lang-greeting'>
      {language === "eng" ? <h1>Hello, Friend! 👋</h1> : <h1>Namaste, Dost! 🙏</h1>}
    </div>
  )
}

export default Greeting
