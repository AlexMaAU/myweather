import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Register = ({
  username,
  handleUsername,
  password,
  handlePassword,
  handleNewUser,
}) => {

  const navigate = useNavigate();

  // const [token, setToken] = useState(() => {
  //   const storedToken = localStorage.getItem('token');
  //   return storedToken || '';
  // });
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  return (
    <div>
      <form className='flex flex-col gap-y-5'>
        <input
          type='text'
          value={username}
          placeholder='enter username here...'
          className='w-80 h-10 indent-3.5 rounded-xl outline-0'
          onChange={(e) => {
            handleUsername(e.target.value);
          }}
        />
        <input
          type='password'
          value={password}
          placeholder='enter password here...'
          className='w-80 h-10 indent-3.5 rounded-xl outline-0'
          onChange={(e) => {
            handlePassword(e.target.value);
          }}
        />
        <button
          type='submit'
          className='w-40 h-10 bg-violet-600 m-auto text-white rounded-xl hover:bg-violet-900'
          onClick={(e) => {
            e.preventDefault();
            axios
              .post(
                'https://myweatherbackend-g23m-dev.fl0.io/api/v1/auth/register',
                {
                  username: username,
                  password: password,
                },
                { headers: headers }
              )
              .then((res) => {
                console.log(res.data); //res.data includes username and token
                handleNewUser(false);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Register
        </button>
      </form>
      <div className='mt-10 text-center text-white'>
        Already have an account?{' '}
        <a
          href='#/'
          className='text-violet-200 font-bold cursor-pointer hover:text-violet-900'
          onClick={() => {
            handleNewUser(false);
          }}
        >
          Login here
        </a>
      </div>
    </div>
  );
};

export default Register;
