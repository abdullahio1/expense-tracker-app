import {auth, provider} from "../../config/firebase-config.js";
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
export const Auth = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async() => {
       const results = await signInWithPopup(auth, provider);
       const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
       };
       localStorage.setItem("auth", JSON.stringify(authInfo));
       console.log(results);
       navigate("/expense-tracker");
    };
    return(
        <div className="login-page">
            <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                {""}
                Sign In With Google
            </button>
        </div>
    );
};