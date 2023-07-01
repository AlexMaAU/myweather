const Register = ({ username, handleUsername, password, handlePassword }) => {
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
          className='w-40 h-10 bg-sky-500 m-auto text-white rounded-xl'
        >
          Register
        </button>
      </form>
      <div className='mt-10 text-center text-white'>
        Already have an account?{' '}
        <a href='#' className='text-sky-500 font-bold'>
          Login here
        </a>
      </div>
    </div>
  );
};

export default Register;
