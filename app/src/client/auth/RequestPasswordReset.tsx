import { ForgotPasswordForm } from 'wasp/client/auth';
import { AuthWrapper } from './authWrapper';
import { AuthApperance } from '../../authAppearance';
import Logo from '../static/BANNER-LOGO.svg';

export function RequestPasswordReset() {
  return (
    <AuthWrapper>
      <ForgotPasswordForm 
      appearance={AuthApperance}
      logo={Logo}
      />
    </AuthWrapper>
  );
}
