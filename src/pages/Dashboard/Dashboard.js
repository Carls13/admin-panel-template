import React from 'react';

import { Title } from './styles';
import { AdminLayout } from './../../components/AdminLayout/AdminLayout';

import { connect } from 'react-redux';

const Dashboard = ({ authUser }) => {
	const { username } = authUser;
	return (
		<AdminLayout title="Dashboard">
			<Title>Bienvenido, {username}</Title>
		</AdminLayout>
	)
};

const mapStateToProps = ({ user: { authUser }}) => {
  return { authUser }
}

export default connect(mapStateToProps)(Dashboard);