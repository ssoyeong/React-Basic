import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {

    const {isDark, setIsDark} = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <header
            className="footer"
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
            }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </header>
    );
};

export default Footer;