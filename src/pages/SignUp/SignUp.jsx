import HeaderNav from "../../components/Other/HeaderNav";
import SignupComponent from "../../components/SignUp/Signup";
import { PageLayout } from "../../layout/PageLayout";

const SignUp = () => {
  return (
    <>
      <PageLayout>
        <HeaderNav />
        <SignupComponent />
      </PageLayout>
    </>
  );
};

export default SignUp;
