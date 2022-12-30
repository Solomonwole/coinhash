import { PageLayout } from '../../layout/PageLayout';
import HeaderNav from '../../components/Other/HeaderNav';
import ResetPassword from '../../components/ForgotPassword/ResetPass';

const ForgotPassword = () => {
  return (
    <>
      <PageLayout>
        <HeaderNav />
        <ResetPassword />
      </PageLayout>
    </>
  );
};

export default ForgotPassword;
