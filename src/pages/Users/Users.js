import React, { useState, useEffect, Fragment } from 'react';

import { connect } from 'react-redux';

import { Title, ButtonContainer, Scrollable } from './styles';

import { AdminLayout } from './../../components/AdminLayout/AdminLayout';
import { Spinner } from './../../components/Spinner/Spinner';
import { Table } from './../../components/Table/Table';
import { Pagination } from './../../components/Pagination/Pagination';
import { Button } from './../../components/Button/Button';

import { selectPaginatedUsers } from './../../redux/users/users.selectors';

import { usePagination } from './../../hooks/usePagination';

import Detail from './../Detail/Detail';
import Edit from './../Edit/Edit';
import { Create } from './../Create/Create';

import { FaPlus } from 'react-icons/fa'

import { Router, useNavigate } from '@reach/router';

const USERS_PER_PAGE = 10;

const Users = ({ users, deleteUser, editUser, addUser, path }) => {
	const [loading, setLoading] = useState(true);
	const [paginatedData, setPaginatedData, currentPage, setCurrent] = usePagination();

	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
		setPaginatedData(users);
	}, [users]);

	const deleteAction = {
		reduxFunction: (userId) => deleteUser(userId),
		endpoint: ''
	};

	const editAction = {
		reduxFunction: (userId) => editUser(userId),
		endpoint: ''
	};

	const createAction = {
		reduxFunction: (user) => addUser(user),
		endpoint: ''
	};

	const paramsToTable = [
		'ID',
		'Usuario',
		'Correo',
		'Rol',
		'Opciones',
	];

	const params = {
		'id': '',
		'username': '',
		'email': '',
		'role': '',
	};

	return (
		<AdminLayout title="Usuarios">
			{
				loading ? <Spinner/> :
				<Fragment>
					<Router>
    					<Detail path=":dataID/detail" type="Usuario" deleteAction={deleteAction} redirectTo={path} editUri={`/users`}/>
    					<Edit path=":dataID/edit" type="Usuario" editAction={editAction} redirectTo={path}/>
    					<Create path="new" type="Usuario" createAction={createAction} redirectTo={path} params={params}/>
    				</Router>
					<Title>Usuarios</Title>
					<Scrollable>
						<Table 
							type="usuario"
							paramsToTable={paramsToTable} 
							data={paginatedData[currentPage - 1]}
							deleteAction={deleteAction}
							redirectTo={path}
							/>
					</Scrollable>
					<ButtonContainer>
						<Button special="confirm" handleClick={() => navigate('/users/new')}>
							<FaPlus size="32px"/>
							 &nbsp; Nuevo
						</Button>
					</ButtonContainer>
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
  	users: selectPaginatedUsers(USERS_PER_PAGE)(state)
});

const mapDispatchToProps = (dispatch) => ({
    deleteUser: (userId) => dispatch({
      type: 'USER_DELETE',
      userId
    }),
    editUser: (user) => dispatch({
      type: 'USER_EDIT',
      user
    }),
    addUser: (user) => dispatch({
      type: 'USER_ADD',
      user
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);