import React, { useState, useEffect, Fragment } from 'react';

import { connect } from 'react-redux';

import { Title } from './styles';

import { AdminLayout } from './../../components/AdminLayout/AdminLayout';
import { Spinner } from './../../components/Spinner/Spinner';
import { Table } from './../../components/Table/Table';
import { Pagination } from './../../components/Pagination/Pagination';

import { selectPaginatedUsers, selectUsersLength } from './../../redux/users/users.selectors';

import { usePagination } from './../../hooks/usePagination';

const USERS_PER_PAGE = 10;

const Users = ({ users, deleteUser, usersLength }) => {
	const [loading, setLoading] = useState(true);

	const [paginatedData, setPaginatedData, currentPage, setCurrent] = usePagination();

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
		setPaginatedData(users);
	}, [users]);

	const deleteAction = {
		reduxFunction: (userId) => deleteUser(userId),
		endpoint: ''
	};

	const paramsToTable = [
		'ID',
		'Usuario',
		'Correo',
		'Rol',
		'Opciones',
	];

	return (
		<AdminLayout title="Usuarios">
			{
				loading ? <Spinner/> :
					<Fragment>
						<Title>Usuarios</Title>
						<Table 
							type="usuario"
							paramsToTable={paramsToTable} 
							data={paginatedData[currentPage - 1]}
							deleteAction={deleteAction}
							/>
						<Pagination 
							currentPage={currentPage} 
							data={paginatedData} 
							setPage={setCurrent}
							recordsPerPage={USERS_PER_PAGE}
							/>
					</Fragment>
			}
		</AdminLayout>
	)
};

const mapStateToProps = (state) => ({
  	users: selectPaginatedUsers(USERS_PER_PAGE)(state),	
  	usersLength: selectUsersLength(state),	
});

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (userId) => dispatch({
      type: 'USER_DELETE',
      userId
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);