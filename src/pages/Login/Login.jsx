import HeaderNav from "../../components/Other/HeaderNav";
import { PageLayout } from "../../layout/PageLayout";
import LoginComponent from "../../components/Login/Login"

const Login = () => {
  return (
    <>
      <PageLayout>
        <HeaderNav />
        <LoginComponent />
      </PageLayout>
    </>
  );
};

export default Login;
