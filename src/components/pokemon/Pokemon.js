import { Card, CardMedia, Container, makeStyles, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getPokemon } from '../../routes/Pokemon';

const useStyles = makeStyles((theme) => ({
  spacing2: {
    '& .MuiGrid-item': {
      padding: theme.spacing(2)
    }
  }
}))

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const params = useParams();
  const style = useStyles();

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemon = await getPokemon(params.id);
      setPokemon(pokemon.data);
    }

    loadPokemon();
  }, [params.id]);

  const formatId = (id) => {
    if (id < 100 && id < 10) {
      return '#00' + id
    } else if (id < 100 && id > 10) {
      return '#0' + id
    } else {
      return '#' + id
    }
  }

  return (
    <>
      <Helmet><title>Pokemon</title></Helmet>
      <Container maxWidth="lg">
        {pokemon ? (
          <Grid container spacing={1}>
            <Grid item md={5}>
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  alt={pokemon.name}
                  image={`${pokemon.sprites.other.dream_world.front_default}`}
                  height={500}
                />
              </Card>
            </Grid>
            <Grid item md={7}>
              <Typography variant="h6" color="textSecondary">{formatId(pokemon.id)}</Typography>
              <Typography gutterBottom color="primary" className="capitalize" variant="h3">{pokemon.name}</Typography>
              <Typography className="capitalize" color="textSecondary" variant="overline">TYPES: </Typography>
              {pokemon.types.map((type) => (
                <Typography key={type.slot} gutterBottom className="capitalize" color="secondary" variant="overline">{type.type.name} </Typography>
              ))}
              <Grid container>
                <Grid item md={6}>
                  <Typography variant="body1" color="textPrimary">Height</Typography>
                  <Typography gutterBottom variant="body1" color="textSecondary">{pokemon.height}</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography variant="body1" color="textPrimary">Weight</Typography>
                  <Typography gutterBottom variant="body1" color="textSecondary">{pokemon.weight}</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography variant="body1" color="textPrimary">Abilities</Typography>
                  {pokemon.abilities.map((ability) => (
                    ability.is_hidden ? '' : <Typography key={ability.slot} className="capitalize" variant="body1" color="textSecondary">{ability.ability.name}</Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Link to={`/pokemon/${pokemon.id + 1}`}>
                <Typography variant="overline">Next</Typography>
              </Link>
            </Grid>
          </Grid>
        ) : ''}
      </Container>
    </>
  );
}

export default Pokemon;