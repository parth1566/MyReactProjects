import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { ThemeContext } from './ThemeProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className="panel">
            <h3>👤 Profile</h3>
            {user ? (
                <div>
                    <h4>{user}'s Profile</h4>
                    <p>React learner 🚀</p>
                    <p>Viewing in {theme} mode</p>
                </div>
            ) : (
                <p>Please log in to see your profile 🔒</p>
            )}
        </div>
    );
};

export default Profile;