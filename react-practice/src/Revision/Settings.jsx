import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const Settings = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="panel">
            <h3>⚙️ Settings</h3>
            <button className="ctx-btn" onClick={toggleTheme}>
                {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
            </button>
            <p>Current: {theme}</p>
        </div>
    );
};

export default Settings;