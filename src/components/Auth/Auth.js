import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const newUser = false;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='bg-sky-300 h-screen flex justify-center items-center gap-x-5'>
      {newUser ? (
        <Register
          username={username}
          handleUsername={setUsername}
          password={password}
          handlePassword={setPassword}
        />
      ) : (
        <Login
          username={username}
          handleUsername={setUsername}
          password={password}
          handlePassword={setPassword}
        />
      )}
    </div>
  );
};

export default Auth;
