import { useAuth, LoginForm } from 'wasp/client/auth';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthWrapper } from './authWrapper';
import { AuthApperance } from '../../authAppearance';
import Logo from '../static/BANNER-LOGO.svg';

export default function Login() {
  const history = useHistory();

  const { data: user } = useAuth();

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <AuthWrapper>
      <LoginForm 
        appearance={AuthApperance}
        logo={Logo}
      />
      <br />
      <span className='text-sm font-medium text-gray-900 dark:text-gray-900'>
        Don't have an account yet?{' '}
        <Link to='/signup' className='font-bold underline'>
          Signup
        </Link>
        .
      </span>
      <br />
      <span className='text-sm font-medium text-gray-900'>
        Forgot your password?{' '}
        <Link to='/request-password-reset' className='font-bold underline'>
          Reset it
        </Link>
        .
      </span>
    </AuthWrapper>
  );
}
