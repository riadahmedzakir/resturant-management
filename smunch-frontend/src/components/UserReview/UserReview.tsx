import { Avatar, Card, CardContent, CardHeader, CardMedia, CircularProgress, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Switch, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { isEqual } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme, setLightTheme, themeState } from '../../data/state/theme/theme.slice';
import './UserReview.css';
import { UserReviewResponse } from '../../constants/user-review.interface';
import { ReviewFacade } from '../../data/services/review/review.facade';
import { getUserId } from '../../data/util/util';
import EmptyReview from '../Resturant/EmptyReview';

function UserReview(): JSX.Element {
    const dispatch = useDispatch();
    const isDark = useSelector(themeState, isEqual);

    const [loading, setLoading] = useState<boolean>(true);
    const [reviews, setReviews] = useState<UserReviewResponse | undefined>();
    const [themState, setThemeState] = useState<boolean>(isDark);

    useEffect(() => {
        const userId = getUserId();
        ReviewFacade.getUserReviewHistoryApi(userId).then(response => {
            const userReviewHistory = response.data?.SuccessResponse;
            setReviews(userReviewHistory);
            setLoading(false);
        });
    }, []);

    const changeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        dispatch(isChecked ? setDarkTheme() : setLightTheme());
        setThemeState(isChecked);
    }

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
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent='center' style={{ display: "flex" }}>
                                <Typography variant='h5'>Riad Ahmed Zakir</Typography>
                            </Grid>
                        </Grid>
                        <Divider style={{ marginTop: '15px', marginBottom: '20px' }} variant="middle" />

                        <Grid container direction='row'>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={5}>
                                        <Typography variant='body1'>Sms Alert</Typography>
                                    </Grid>
                                    <Grid item xl={5} style={{ textAlign: "end" }}>
                                        <Switch checked color='primary' />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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

                        <Grid container direction='row'>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={5}>
                                        <Typography variant='body1'>Dark Mode</Typography>
                                    </Grid>
                                    <Grid item xl={5} style={{ textAlign: "end" }}>
                                        <Switch checked={themState} color='primary'
                                            onChange={changeTheme} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

            <Grid className='user-review-container' item xl={9}>
                <Paper variant='outlined' style={{ height: "100%" }}>
                    <Grid style={{ height: "100%", padding: '20px' }} container direction='column'>
                        <Grid style={{ height: "10%" }} item>
                            <Typography className="my-review-header" variant='h4'>My Reviews History</Typography>
                            <Divider style={{ marginTop: '15px' }} variant="middle" />
                        </Grid>

                        <Grid style={{ height: "45%" }} item>
                            <Typography className="my-review-sub-header" variant='h5'>Resturant Reviews</Typography>

                            {
                                loading ?
                                    <Grid item xl={12} justifyContent='center' style={{ display: "flex", height: "100%" }}>
                                        <CircularProgress style={{ margin: 'auto' }} size={100} />
                                    </Grid> :
                                    reviews?.ResturantReviews.length ?
                                        <List className='user-review-list'>
                                            {
                                                reviews?.ResturantReviews.map(review =>
                                                    <>
                                                        <ListItem alignItems="flex-start">
                                                            <ListItemAvatar>
                                                                <Avatar alt="Riad Zakir" />
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                primary={
                                                                    <Typography variant="body1" color="textPrimary">
                                                                        Resturant
                                                                    </Typography>
                                                                }
                                                                secondary={
                                                                    <>
                                                                        <Typography component="span" variant="body2" color="textPrimary">
                                                                            Lorem ipsum dolor
                                                                        </Typography>
                                                                        {` — ${review.Comment}`}
                                                                    </>
                                                                }
                                                            />
                                                        </ListItem>
                                                        <Divider variant="middle" />
                                                    </>
                                                )
                                            }
                                        </List>
                                        : <EmptyReview fontSize="50px" message="You have not reviewed any resturant" />
                            }
                        </Grid>

                        <Grid style={{ height: "45%" }} item>
                            <Typography className="my-review-sub-header" variant='h5'>Products Reviews</Typography>

                            {
                                loading ?
                                    <Grid item xl={12} justifyContent='center' style={{ display: "flex", height: "100%" }}>
                                        <CircularProgress style={{ margin: 'auto' }} size={100} />
                                    </Grid> :
                                    reviews?.ProductReviews.length ?
                                        <List className='user-review-list'>
                                            {
                                                reviews?.ProductReviews.map(review =>
                                                    <>
                                                        <ListItem alignItems="flex-start">
                                                            <ListItemAvatar>
                                                                <Avatar alt="Riad Zakir" />
                                                            </ListItemAvatar>
                                                            <ListItemText
                                                                primary={
                                                                    <Typography variant="body1" color="textPrimary">
                                                                        Product
                                                                    </Typography>
                                                                }
                                                                secondary={
                                                                    <>
                                                                        <Typography component="span" variant="body2" color="textPrimary">
                                                                            Lorem ipsum dolor
                                                                        </Typography>
                                                                        {` — ${review.Comment}`}
                                                                    </>
                                                                }
                                                            />
                                                        </ListItem>
                                                        <Divider variant="middle" />
                                                    </>
                                                )
                                            }
                                        </List>
                                        : <EmptyReview fontSize="50px" message="You have not reviewed any products" />
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid >
    );
}

export default UserReview;