import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/UserDashboard/Sidebar';
import WebNav from '../components/UserDashboard/WebNav';

const DashboardLayout = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <DashboardLayouts>
      <Sidebar 
			className={`${openMenu ? 'open' : ''}`}
			closeMenuHandler={() => setOpenMenu(false)}
			/>
			<WebNav openMenuHandler={() => setOpenMenu(true)} />
        <StyledDashboardContainer>{children}</StyledDashboardContainer>
      </DashboardLayouts>
    </>
  );
};

// Styling
const DashboardLayouts = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 280px auto;

	grid-template-areas:
		'sidebar nav'
		'sidebar main';

	@media (max-width: 1140px) {
		grid-template-areas:
			'nav nav'
			'main main';
	}
`;

export const StyledDashboardContainer = styled.div`
	grid-area: main;
	padding: 3rem;
	overflow-x: hidden;
    
    

	@media (max-width: 820px) {
		padding-left: 21px;
		padding-right: 21px;
	}
`;

export default DashboardLayout;
