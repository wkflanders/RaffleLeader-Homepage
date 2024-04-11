import { ResetPasswordForm } from 'wasp/client/auth';
import { Link } from 'react-router-dom';
import { AuthWrapper } from './authWrapper';
import { AuthApperance } from '../../authAppearance';
import Logo from '../static/BANNER-LOGO.svg';

export function PasswordReset() {
  return (
    <AuthWrapper>
      <ResetPasswordForm />
      <br />
      <span className='text-sm font-medium text-gray-900'>
        If everything is okay, <Link to='/login'>go to login</Link>
      </span>
    </AuthWrapper>
  );
}
