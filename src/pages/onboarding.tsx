// Import FirebaseAuth and firebase.
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';

function SignInScreen() {
  const [session, loading] = useSession();
  const handleSignin = (event) => {
    event.preventDefault()
    signIn()
  }

  const handleSignout = (event) => {
    event.preventDefault()
    signOut()
  }
  return (
    <div>
      <h1>My App</h1>
       {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  }
       {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  }
    </div>
  );
}

export default SignInScreen
