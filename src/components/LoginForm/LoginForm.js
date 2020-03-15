import React, { useState } from 'react';

import { connect } from 'react-redux';

import { Title, Form, Input, ErrorSpan } from './styles';
import { useNavigate } from "@reach/router"

import { Button } from './../../components/Button/Button';

const LoginForm = ({ userLogin }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState({
		username: '',
		password: ''
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const { username, password } = data;

		if (username === '' || password === '') {
			setError('Por favor, rellene todos los campos.')
			return;
		}

		setLoading(true);

		setTimeout(function(){
			setLoading(false)
			if (username !== 'Carls13' || password !== '12345678') {
				setError('Credenciales incorrectas.');
				return;
			} else {
				userLogin(data);
				navigate('/dashboard')
			}
		}, 2000);

	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		}) 
	}

	const { username, password } = data;

	return (
	    <Form onSubmit={handleSubmit}>
			<Title>Inicia sesión</Title>
		    <Input
		    	disabled={loading}
		    	type="text"
		    	name="username"
		    	value={username}
		    	onChange={handleChange}
		    	placeholder="Usuario" />
	    	<Input
	    		disabled={loading}
		    	type="password"
		    	name="password"
		    	value={password}
		    	onChange={handleChange}
		    	placeholder="Contraseña" />

		    {
		    	error && <ErrorSpan>{error}</ErrorSpan>
		    }
		    <Button type="submit" disabled={loading} text="Iniciar sesión"/>
	    </Form>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (authUser) => dispatch({
      type: 'USER_LOGIN',
      authUser
    }),
  }
};

export default connect(null, mapDispatchToProps)(LoginForm);