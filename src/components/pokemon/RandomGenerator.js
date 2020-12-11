import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getPokemonByResource } from '../../utils/helper';

const RandomPokemon = () => {
	const [pokemonId, setPokemonId] = useState(null)
	const [randomPokemon, setRandomPokemon] = useState(null)

	const handleGenerate = () => {
		const min = Math.ceil(1);
		const max = Math.floor(1118);
		const random = Math.floor(Math.random() * max) + min;
		setPokemonId(random)
	}

	useEffect(() => {
		if (pokemonId) {
			const loadInitialData = async () => {
				const pokemon = await getPokemonByResource(pokemonId);
				setRandomPokemon(pokemon[0])
			}

			loadInitialData();
		}
	}, [pokemonId])

	return (
		<>
			<Container maxWidth="lg">
				<Grid container spacing={1}>
					<Grid item md={12}>
						<Typography gutterBottom variant="h3" color="primary">Generate your Pokemon</Typography>

					</Grid>
					{randomPokemon ? (
						<>
							<Grid item md={12}>
								<Card variant="outlined">
									<CardActionArea>
										<CardMedia
											component="img"
											alt={randomPokemon.name}
											image={`${randomPokemon.sprites.other.dream_world.front_default}`}
											height={300}
										/>
										<CardContent>
											<Typography className="capitalize" color="primary" variant="h6">{randomPokemon.name}</Typography>
											<Typography className="capitalize" color="textSecondary" variant="overline">TYPES: </Typography>
											{randomPokemon.types.map((type, index) => (
												<Typography key={index} className="capitalize" color="secondary" variant="overline">{type.type.name} </Typography>
											))}
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						</>
					) : (
							null
						)}
					<Grid item md={12}>
						<Button color="primary" onClick={handleGenerate} variant="outlined">Generate</Button>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default RandomPokemon;