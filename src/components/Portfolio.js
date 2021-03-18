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

import JournalApp from "../images/JournalApp.jpeg";
import Portafolio from "../images/Portafolio.jpeg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Journal App",
    description: `Esta es una página con la cual podras hacer apuntes de tu día a día,
    en ella podras guardar una foto representativa. La página fue desarrollada utilizando
    React con hooks, Redux y redux thunk para el manejo del estado de la página, como base de datos
    se utilizo Firestore y para el diseño sass.`,
    image: JournalApp,
  },
  {
    name: "Portafolio",
    description: `Este es el portafolio con el cual mostrare mis proyectos así como la experiencia que tenga 
    en las diferentes tecnologias de front-end. Ademas de servir como medio de contacto. Es desarrollado utilizando
    React.js
    `,
    image: Portafolio,
  },

];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
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
                <Button size="small" color="primary" href={ 'https://github.com/AndresW99?tab=repositories' }>
                  GitHub Repository
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
