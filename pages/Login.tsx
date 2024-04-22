import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setError } from '@/Store/Slice/Auth';
import { RootState } from '@/Store/Slice/Store';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const error = useSelector((state: RootState) => state.auth.error);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            dispatch(login());
            router.push('/Todo')

        } else {
            dispatch(setError('Invalid username or password'));
        }
    };
      return ( <>
        <div>
          <h1>Login Page</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
        </>
      );
    

  
  
};

export default LoginPage;
