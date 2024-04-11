import { SignupForm } from 'wasp/client/auth';
import { Link } from 'react-router-dom';
import { AuthWrapper } from './authWrapper';
import { AuthApperance } from '../../authAppearance';
import Logo from '../static/BANNER-LOGO.svg';


export function Signup() {
  return (
    <AuthWrapper>
      <SignupForm 
      appearance={AuthApperance}
      logo={Logo}
      />
      <br />
      <span className='text-sm font-medium text-gray-900'>
        Already have an account?&nbsp;
        <Link to='/login' className='font-bold underline'>
          Log in
        </Link>
        .
      </span>
      <br />
    </AuthWrapper>
  );
}
