import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { getPokemon } from '../../routes/Pokemon';

const Library = () => {
  const history = useHistory();
  const [pokemonData, setPokemonData] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
    const loadPokemon = async () => {
      for (let i = id; i <= 20; i++) {
        const pokemon = await getPokemon(i)
        setPokemonData(pokemonData => [...pokemonData, pokemon.data]);
        setId(i)
      }
    }

    loadPokemon();
  }, []);

  const loadPokemon = async (id) => {
    for (let i = id + 1; i <= id + 20; i++) {
      const pokemon = await getPokemon(i)
      setPokemonData(pokemonData => [...pokemonData, pokemon.data]);
    }
    setId(pokemonData.length + 20)
  }

  return (
    <>
      <Helmet><title>Pokemon Library</title></Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {pokemonData ? (
            pokemonData.map((pokemon) => (
              <Grid key={pokemon.name} item lg={3} md={4} sm={6} xs={12}>
                <Card variant="outlined">
                  <CardActionArea onClick={() => history.push(`/pokemon/${pokemon.id}`)}>
                    <CardMedia
                      component="img"
                      alt={pokemon.name}
                      image={`${pokemon.sprites.other.dream_world.front_default}`}
                      height={300}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography className="capitalize" color="primary" variant="h6">{pokemon.name}</Typography>
                    <Typography className="capitalize" color="textSecondary" variant="overline">TYPES: </Typography>
                    {pokemon.types.map((type, index) => (
                      <Typography key={index} className="capitalize" color="secondary" variant="overline">{type.type.name} </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : 'Sample loading animation...'}
          <>
            <Grid item md={12}>
              <Button variant="contained" color="primary" size="medium" onClick={() => loadPokemon(id)}>Load More</Button>
            </Grid>
          </>
        </Grid>
      </Container>
    </>
  );
}

export default Library;