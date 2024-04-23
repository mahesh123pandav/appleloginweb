import { useEffect } from 'react';

import './index.css';

const clientId = 'com.eo.meet.web';
const scope = 'name email';
const redirectURI = 'https://appleloginweb.vercel.app';
const state = 'origin:web';

export default function App() {
  useEffect(() => {
    window.AppleID.auth.init({
      clientId,
      scope,
      redirectURI,
      state,
      usePopup: false
    });

    document.addEventListener('AppleIDSignInOnSuccess', (event) => {
      // Handle successful response.
      console.log('Success ', event);
    });

    document.addEventListener('AppleIDSignInOnFailure', (event) => {
      console.log('Error ', event);
    });
  }, []);

  return (
    <div className="App">
      <div
        id="appleid-signin"
        className="signin-button"
        data-color="black"
        data-border="true"
        data-type="sign-in"
      ></div>
    </div>
  );
}
