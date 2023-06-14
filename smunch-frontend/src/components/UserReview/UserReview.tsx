import { Avatar, Card, CardContent, CardHeader, CardMedia, Divider, FormControlLabel, Grid, Hidden, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Switch, Typography } from '@material-ui/core';
import './UserReview.css'
import { Rating } from '@material-ui/lab';
import EditIcon from '@material-ui/icons/Edit';
import { useState } from 'react';

function UserReview(): JSX.Element {
    const [reviews, setReviews] = useState([1, 2, 3, 4, 5]);

    return (
        <Grid className="resturant-container" container justifyContent="space-between" direction="row">

            <Grid item xl={3} alignItems="center" style={{ display: "flex" }}>
                <Card variant="outlined" style={{ height: '85vh', width: '100%' }}>
                    <CardHeader style={{ padding: '12px' }} title="My Profile"
                        action={
                            <IconButton aria-label="settings">
                                <EditIcon />
                            </IconButton>
                        } />

                    <CardMedia style={{ height: 0, paddingTop: '40%' }}
                        image="https://fakeimg.pl/600x400/b57070/909090"
                        title="Image" />
                    <CardContent>
                        <Grid container direction='row'>
                            <Grid item xl={12} justifyContent='center' style={{ display: "flex" }}>
                                <Typography variant='h5'>Riad Ahmed Zakir</Typography>
                            </Grid>
                        </Grid>
                        <Divider style={{ marginTop: '15px', marginBottom: '20px' }} variant="middle" />

                        <Grid container direction='row'>
                            <Grid item xl={12}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={3}>
                                        <Typography variant='body1'>Email</Typography>
                                    </Grid>
                                    <Grid item xl={5} style={{ textAlign: "end" }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>zakir.riad@gmail.com</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={3}>
                                        <Typography variant='body2'>Mobile</Typography>
                                    </Grid>
                                    <Grid item xl={5} style={{ textAlign: "end" }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>+880 1733558934</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={3}>
                                        <Typography variant='body2'>Country</Typography>
                                    </Grid>
                                    <Grid item xl={5} style={{ textAlign: "end" }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Bangladesh</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={3}>
                                        <Typography variant='body2'>Nationality</Typography>
                                    </Grid>
                                    <Grid item xl={5} style={{ textAlign: "end" }}>
                                        <Typography variant='body2' style={{ fontWeight: 'bold' }}>Bangladeshi</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Divider style={{ marginTop: '15px', marginBottom: '20px' }} variant="middle" />

                        <Grid container direction='row'>
                            <Grid item xl={12}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={5}>
                                        <Typography variant='body1'>Sms Alert</Typography>
                                    </Grid>
                                    <Grid item xl={5} style={{ textAlign: "end" }}>
                                        <Switch checked color='primary' />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xl={12}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={5}>
                                        <Typography variant='body1'>2FA Authentication</Typography>
                                    </Grid>
                                    <Grid item xl={5} style={{ textAlign: "end" }}>
                                        <Switch checked color='primary' />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider style={{ marginTop: '15px', marginBottom: '20px' }} variant="middle" />
                    </CardContent>
                </Card>
            </Grid>

            <Grid className='user-review-container' item xl={9}>
                <Paper variant='outlined' style={{ height: "100%" }}>
                    <Grid style={{ height: "100%", padding: '20px' }} container direction='column'>
                        <Grid style={{ height: "10%" }} item>
                            <Typography variant='h4'>My Reviews History</Typography>
                            <Divider style={{ marginTop: '15px' }} variant="middle" />
                        </Grid>

                        <Grid style={{ height: "45%" }} item>
                            <Typography variant='h5'>Resturant Reviews</Typography>

                            <List className='user-review-list'>
                                {
                                    reviews.map(review =>
                                        <>
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Avatar alt="Riad Zakir" />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="body1" color="textPrimary">
                                                            Resturant {review}
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <>
                                                            <Typography component="span" variant="body2" color="textPrimary">
                                                                Lorem ipsum dolor
                                                            </Typography>
                                                            {" — Lorem ipsum dolor sit amet, consectetur adipiscing elit…"}
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                            <Divider variant="middle" />
                                        </>
                                    )
                                }
                            </List>
                        </Grid>

                        <Grid style={{ height: "45%" }} item>
                            <Typography variant='h5'>Products Reviews</Typography>

                            <List className='user-review-list'>
                                {
                                    reviews.map(review =>
                                        <>
                                            <ListItem alignItems="flex-start">
                                                <ListItemAvatar>
                                                    <Avatar alt="Riad Zakir" />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={
                                                        <Typography variant="body1" color="textPrimary">
                                                            Product {review}
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <>
                                                            <Typography component="span" variant="body2" color="textPrimary">
                                                                Lorem ipsum dolor
                                                            </Typography>
                                                            {" — Lorem ipsum dolor sit amet, consectetur adipiscing elit…"}
                                                        </>
                                                    }
                                                />
                                            </ListItem>
                                            <Divider variant="middle" />
                                        </>
                                    )
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid >
    );
}

export default UserReview;