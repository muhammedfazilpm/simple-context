import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


const ThemedButton=()=>{
    const {theme}=useContext(ThemeContext)
    const style={
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        height:theme === 'dark' ? '100px' : '500px',
    }
    return <button style={style}>Themed Button</button>;
}
export default ThemedButton