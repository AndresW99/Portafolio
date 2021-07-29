import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const portafolio   = './assets/Portafolio.jpeg';
const JournalApp   = './assets/CRUD.jpg';
const RickAndMorty = './assets/rickAndmorty.png';
const pokes        = './assets/pokes.png';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 325,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "CRUD React.js and Node.js",
    description: `Una aplicación en la cual se realizo un CRUD sobre una cafeteria, en ella se puede llevar el control
    de productos, proveedores y empleados. Se utilizo Redux para el manejo de los estados y Express para el backend. Por
    la parte del diseño se utilizo Bootstrap 5.
    Por ultimo como base de datos se utilizo Microsoft SQL Server.`,
    image: JournalApp,
    enlace: 'GitHub',
    link: 'https://github.com/AndresW99/Proyecto-BD-Front'
  },
  {
    name: "Portafolio",
    description: `Este es el portafolio con el cual mostrare mis proyectos así como la experiencia que tenga 
    en las diferentes tecnologias de front-end. Ademas de servir como medio de contacto. Es desarrollado utilizando
    React.js`,
    image: portafolio,
    enlace: 'Proyecto',
    link: 'https://andresw-portafolio.herokuapp.com/'
  },
  {
    name: "Rick and Morty API",
    description: `Una pequeña aplicación utilizando la API de Rick and Morty. Para el llamado a la API utilice Axios, luego para 
    el diseño de las cartas utilice Bootstrap 5 así como un poco de CSS. La aplicación fue creada con React.js con Hooks.`,
    image: RickAndMorty,
    enlace: 'Proyecto',
    link: 'https://rick-and-morty-aw99.herokuapp.com/'
  },
  {
    name: "Pokemon API",
    description: `Esta es una aplicación en la cual utilicé la API de pokemon, en la página principal podremos ver un saludo
    y luego en la segunda podremos observar una tabla con 5 pokemones, podremos avanzar el paginado por medio de botones asi como
    también utilizar un buscador. Al pulsar sobre un elemento de la tabla mostrara en una tarjeta más información del pokemon.`,
    image: pokes,
    enlace: 'Proyecto',
    link: 'https://pokeapi-aw99.netlify.app/'
  },

];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* { projects } */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="165"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={ project.link } target="_blank">
                  { project.enlace }
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;