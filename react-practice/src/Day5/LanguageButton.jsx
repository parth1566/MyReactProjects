import React from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../App'



const LanguageButton = () => {
    const{language, setLanguage} = useContext(LanguageContext);

    function handleClick() {
        setLanguage(language === "eng" ? "hin" : "eng")
    }

  return (
    <div >
      <button onClick={handleClick} className='lang-btn'>
            Switch to {language === "eng" ? "hindi" : "English"}
      </button>
    </div>
  )
}

export default LanguageButton
