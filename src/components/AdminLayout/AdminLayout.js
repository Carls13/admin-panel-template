import React, { useState } from 'react';

import { MdMenu } from 'react-icons/md';

import { DashboardContainer, MenuIcon, MainContent, PageContainer, PageTitle, ContentContainer } from './styles';
import SideNavBar from './../SideNavBar/SideNavBar';

export const AdminLayout = ({ children, title }) => {
	const [showMenu, toggleMenu] = useState(false);
	return (
		<DashboardContainer>
			<MenuIcon onClick={() => toggleMenu(!showMenu)}>
				<MdMenu size="50px"/>
			</MenuIcon>
			<SideNavBar showMenu={showMenu}/>
			<MainContent>
				<PageContainer>
		            <PageTitle>{title}</PageTitle>
		        </PageContainer>
		        <ContentContainer>
					{children}
				</ContentContainer>
			</MainContent>
		</DashboardContainer>
	)
};