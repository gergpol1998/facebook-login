import React from 'react';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';
import { auth } from './firebase';

function App() {
  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // Send the Facebook token to your Express server for verification
      const response = await fetch('http://localhost:3000/verifyToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: result.user.accessToken }),
      });

      // // Handle the response from the server
      // const data = await response.json();
      // console.log('Server response:', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={signInWithFacebook}>Sign In With Facebook</button>
    </div>
  );
}

export default App;
