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

						</Grid>
						<Grid item md={7}>
							<Typography className="capitalize" gutterBottom color="primary" variant="h3">{params.name}</Typography>
							<Typography className="capitalize" color="textSecondary" variant="overline">Move Damage Class: </Typography>
							<Typography className="capitalize" color="secondary" variant="overline">{type.move_damage_class.name}</Typography>

							<Grid container>
								<Grid item md={6}>
									<Typography variant="body1" color="textPrimary">Double Damage (From): </Typography>
									{type.damage_relations.double_damage_from.map((damage) => (
										<Typography className="capitalize" variant="body1" color="textSecondary" key={damage.name}>{damage.name}</Typography>
									))}
								</Grid>

								<Grid item md={6}>
									<Typography variant="body1" color="textPrimary">Double Damage (To): </Typography>
									{type.damage_relations.double_damage_to.map((damage) => (
										<Typography className="capitalize" variant="body1" color="textSecondary" key={damage.name}>{damage.name}</Typography>
									))}
								</Grid>

								<Grid item md={6}>
									<Typography variant="body1" color="textPrimary">Half Damage (From): </Typography>
									{type.damage_relations.half_damage_from.map((damage) => (
										<Typography className="capitalize" variant="body1" color="textSecondary" key={damage.name}>{damage.name}</Typography>
									))}
								</Grid>

								<Grid item md={6}>
									<Typography variant="body1" color="textPrimary">Half Damage (To): </Typography>
									{type.damage_relations.half_damage_to.map((damage) => (
										<Typography className="capitalize" variant="body1" color="textSecondary" key={damage.name}>{damage.name}</Typography>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				) : null}
			</Container>
		</>
	);
}

export default Type;