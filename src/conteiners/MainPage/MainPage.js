// Импорт библиотек
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Импорт компонентов Material-UI
import {
  Container,
  Grid,
} from '@material-ui/core';

// Импорт компонентов
import Header from '../../components/Header/Header';
import BlockOne from '../../components/BlockOne/BlockOne';
import BlockTwo from '../../components/BlockTwo/BlockTwo';
import BlockThree from '../../components/BlockThree/BlockThree';
import BlockFour from '../../components/BlockFour/BlockFour';

// Локальная таблица стилей
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));


// Функция-компонент
function MainPage() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Header />
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={6}>
          <BlockOne />
        </Grid>
        <Grid item xs={6}>
          <BlockTwo />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={6}>
          <BlockThree/>
        </Grid>
        <Grid item xs={6}>
          <BlockFour />
        </Grid>
      </Grid>
    </Container>
  );
}


export default MainPage;