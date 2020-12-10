import { Card, CardActionArea, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { getTypesList } from '../../utils/helper';

const Types = () => {
	const history = useHistory();
	const [types, setTypes] = useState([]);

	useEffect(() => {
		const loadList = async () => {
			// const list = await getTypesList();
			// setTyes(list)
			setTypes(await getTypesList())
		}

		loadList();
	}, []);

	return (
		<>
			<Helmet><title>Pokemon Library</title></Helmet>
			<Container maxWidth="lg">
				<Grid container spacing={1}>
					{types ? (
						types.map((type) => (
							<Grid item md={3} key={type.name}>
								<Card variant="outlined">
									<CardActionArea onClick={() => history.push(`/pokemon/type/${type.name}`)}>
										<CardContent>
											<Typography className="capitalize" color="primary" variant="h6">{type.name}</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))
					) : (
							null
						)}
				</Grid>
			</Container>
		</>
	);
}

export default Types;