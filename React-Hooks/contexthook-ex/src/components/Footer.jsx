import React from 'react';

const Footer = ({isDark, setIsDark}) => {

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