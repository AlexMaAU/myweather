import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const [newUser, setNewUser] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 h-screen flex justify-center items-center gap-x-5'>
      {newUser ? (
        <Register
          username={username}
          handleUsername={setUsername}
          password={password}
          handlePassword={setPassword}
          handleNewUser={setNewUser}
        />
      ) : (
        <Login
          username={username}
          handleUsername={setUsername}
          password={password}
          handlePassword={setPassword}
          handleNewUser={setNewUser}
        />
      )}
    </div>
  );
};

export default Auth;
