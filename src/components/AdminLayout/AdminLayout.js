import React from 'react';

import { DashboardContainer, MainContent, PageContainer, PageTitle, ContentContainer } from './styles';
import SideNavBar from './../SideNavBar/SideNavBar';

export const AdminLayout = ({ children, title }) => {
	return (
		<DashboardContainer>
			<SideNavBar/>
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