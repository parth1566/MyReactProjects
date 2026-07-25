import { useState, createContext} from "react";
import LanguageButton from "./Day5/LanguageButton";
import Greeting from "./Day5/Greeting";
import './Day5/Language.css'


const LanguageContext = createContext();
function App() {
  const[language, setLanguage] = useState("eng");
  return(
    <div>
       <LanguageContext.Provider value={{language, setLanguage}}>
    <div className="lang-container">
        <Greeting />
        <LanguageButton />
    </div>
</LanguageContext.Provider>
    </div>
  )
  
}

export default App
export {LanguageContext} 
