import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type Props = {
    projectName: string;
    innerText: string;
    image: string;
    projectURL?: string;
    sourceCodeURL?: string;
};

const useStyles = makeStyles({
  root: {
    width: 345,
  },
});
// Retirado do exemplo da documentação.
export default function ImgMediaCard({innerText, projectName, image, projectURL, sourceCodeURL} : Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`Imagem do Projeto - ${projectName}`}
          height="100"
          image={image}
          title={`Imagem do Projeto - ${projectName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {innerText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {projectURL &&
            <Button size="small" color="primary" 
            href={`${projectURL}`} 
            target = "_blank" 
            rel = "noopener noreferrer">
            Abrir Projeto
            </Button>
        }
        { sourceCodeURL && 
            <Button size="small" color="primary" 
            href={`${projectURL}`} 
            target = "_blank" 
            rel = "noopener noreferrer">
            Abrir Código fonte
            </Button>
        }
      </CardActions>
    </Card>
  );
}
