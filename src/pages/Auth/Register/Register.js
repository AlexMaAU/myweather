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
          className='w-40 h-10 bg-sky-500 m-auto text-white rounded-xl hover:bg-sky-700'
          onClick={(e) => {
            e.preventDefault();
            axios
              .post(
                'http://127.0.0.1:4000/api/v1/auth/register',
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
          className='text-sky-500 font-bold cursor-pointer hover:text-sky-700'
          onClick={() => {
            navigate('/auth/login')
          }}
        >
          Login here
        </a>
      </div>
    </div>
  );
};

export default Register;
