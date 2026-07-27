import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';

const Navbar = () => {
    const { user, login, logout } = useContext(AuthContext);
    const [nameInput, setNameInput] = useState("");

    return (
        <div className="panel">
            <h3>🧭 Navbar</h3>
            {user ? (
                <div>
                    <span>Hello, {user} 👋 </span>
                    <button className="ctx-btn" onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <input
                        className="ctx-input"
                        type="text"
                        placeholder="Enter your name"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <button className="ctx-btn" onClick={() => { login(nameInput); setNameInput(""); }}>
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;