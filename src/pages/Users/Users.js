import React, { useState, useEffect, Fragment } from 'react';

import { connect } from 'react-redux';

import { Title, Scrollable } from './styles';

import { AdminLayout } from './../../components/AdminLayout/AdminLayout';
import { Spinner } from './../../components/Spinner/Spinner';
import { Table } from './../../components/Table/Table';
import { Pagination } from './../../components/Pagination/Pagination';
import { Filtering } from './../../components/Filtering/Filtering';
import { AddButton } from './../../components/AddButton/AddButton';

import { selectUsers } from './../../redux/users/users.selectors';

import { usePagination } from './../../hooks/usePagination';

import Detail from './../Detail/Detail';
import Edit from './../Edit/Edit';
import { Create } from './../Create/Create';

import { Router, useNavigate } from '@reach/router';

const USERS_PER_PAGE = 10;

const Users = ({ users, deleteUser, editUser, addUser, filterUsers, path }) => {
	const [loading, setLoading] = useState(true);
	const initialFilters = [
		{
			label: 'Usuario',
			param: 'username',
			value: ''
		},
		{
			label: 'Correo',
			param: 'email',
			value: ''
		}
	];

	const [ paginatedData, 
			setPaginatedData, 
			currentPage, 
			setCurrent, 
			handleChange, 
			handleClear,  
			filters] = usePagination(initialFilters, users, USERS_PER_PAGE);


	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);

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
					<Filtering filters={filters} handleChange={handleChange} handleClear={handleClear}/>
					<Scrollable>
						<Table 
							type="usuario"
							paramsToTable={paramsToTable} 
							data={paginatedData[currentPage - 1]}
							deleteAction={deleteAction}
							redirectTo={path}
							/>
					</Scrollable>
					<AddButton handleClick={() => navigate('/users/new')} />
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
  	users: selectUsers(state),

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