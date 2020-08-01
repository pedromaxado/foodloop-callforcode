import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardMedia, CardContent, Typography, Container } from '@material-ui/core';
import image1 from './../../assets/img/img1.png';
import image2 from './../../assets/img/img2.png';
import image3 from './../../assets/img/img3.png';
import './style.scss';

// Link a style sheet with a function component using the hook pattern.
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    media: {
        height: 0,
        paddingTop: '65.25%', // 16:9
    },
    heroContent: {
        height: 500,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 6, 12, 6),
        marginBottom: 50,
    },
    
}));

export default function OurProposal(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.heroContent} style={{ backgroundColor: '#fff' }}>    
            <Typography component="h4" variant="inherit" align="center" color="initial" paragraph>
                OUR PROPOSAL
            </Typography>
            <Grid container spacing={3} justify="center">
                <Grid item xs={6} sm={3}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={image1}
                        />
                        <CardContent>
                            <Typography align="justify" variant="inherit" color="initial" component="p">
                                Small farmers produce food sustainably to their community, and receive 
                                suggestions based on the local demand.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={image2}
                        />
                        <CardContent>
                            <Typography align="justify" variant="inherit" color="initial" component="p">
                                Our boxes are individually created, optimized for your diet, with the food 
                                from your neighbour producers.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={image3}
                        />
                        <CardContent>
                            <Typography align="justify" variant="inherit" color="initial" component="p">
                                Community-supported small farmers is an option to reduce the 
                                effects of the actual system have in climatic change.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
}

