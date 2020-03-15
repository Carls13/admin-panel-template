import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

// import { Container } from './styles.js';

import { AdminLayout } from './../../components/AdminLayout/AdminLayout';
import { Spinner } from './../../components/Spinner/Spinner';

export const Images = ({ props }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, [])

	return (
		<AdminLayout title="Imágenes">
			{
				loading ? <Spinner/> : <h1>Imágenes</h1>
			}
		</AdminLayout>
	)
};

// const mapStateToProps = ({state}) => {
// 	return {Container}
// };

// export default connect(mapStateToProps)(Categories);