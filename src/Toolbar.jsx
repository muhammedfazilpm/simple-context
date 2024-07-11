import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemedButton from "./ThemedButton";


const Toolbar=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext)
    return(
        <>
       <h1>Current Theme: - {theme}</h1> 
       <ThemedButton/>
       <button onClick={toggleTheme}>
       Toggle
       </button>
        
        </>
    )
}

export default Toolbar