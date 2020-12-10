import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { getPokemon } from '../../routes/Pokemon';

const Library = () => {
  const history = useHistory();
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    const loadPokemon = async () => {
      for (let i = 1; i <= 20; i++) {
        const pokemon = await getPokemon(i)
        setPokemonData(pokemonData => [...pokemonData, pokemon.data]);
      }
    }

    loadPokemon();
  }, []);

  return (
    <>
      <Helmet><title>Pokemon Library</title></Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {pokemonData ? (
            pokemonData.map((pokemon) => (
              <Grid key={pokemon.name} item md={3}>
                <Card variant="outlined">
                  <CardActionArea onClick={() => history.push(`/pokemon/${pokemon.id}`)}>
                    <CardMedia
                      component="img"
                      alt={pokemon.name}
                      image={`${pokemon.sprites.other.dream_world.front_default}`}
                      height={300}
                    />
                    <CardContent>
                      <Typography className="capitalize" color="primary" variant="h6">{pokemon.name}</Typography>
                      <Typography className="capitalize" color="textSecondary" variant="overline">TYPES: </Typography>
                      {pokemon.types.map((type) => (
                        <Typography key={type.slot} className="capitalize" color="secondary" variant="overline">{type.type.name} </Typography>
                      ))}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : null}
        </Grid>
      </Container>
    </>
  );
}

export default Library;