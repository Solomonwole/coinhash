import DashboardLayout from '../../layout/DashboardLayout';
import DashboardPage from '../../components/UserDashboard/DashboardPage';
import { useEffect } from 'react';

const UserDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <DashboardLayout>
       <DashboardPage />
       
      </DashboardLayout>
    </>
  );
};

export default UserDashboard;
