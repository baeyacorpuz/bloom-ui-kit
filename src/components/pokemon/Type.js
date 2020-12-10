import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { getTypeByName } from '../../utils/helper';

const Type = () => {
	const [type, setType] = useState(null);
	const params = useParams();

	useEffect(() => {
		const loadInitialData = async () => {
			setType(await getTypeByName(params.name))
		}

		loadInitialData();
	}, [])

	console.log(type)

	return (
		<>
			<Helmet><title>Type</title></Helmet>
			<Container maxWidth="lg">
				{type ? (
					<Grid container spacing={1}>
						<Grid item md={5}>
							<Typography className="capitalize" color="primary" variant="h3">{params.name}</Typography>
							<Typography className="capitalize" gutterBottom variant="subtitle1" color="textSecondary">{type.move_damage_class.name}</Typography>
						</Grid>
						<Grid item md={7}>

						</Grid>
					</Grid>
				) : null}
			</Container>
		</>
	);
}

export default Type;