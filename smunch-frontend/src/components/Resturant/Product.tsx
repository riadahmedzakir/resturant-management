import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from "@material-ui/core"
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";

function Product(): JSX.Element {
    const [reviews, setReviews] = useState([1, 2, 3, 4, 5]);
    const [products, setProducts] = useState([1, 2, 3, 4, 5]);
    return (
        <Grid className="resturant-container" container justifyContent="space-between" direction="row">

            <Grid item xl={3} alignItems="center" style={{ display: "flex" }}>
                <Card variant="outlined" style={{ height: '85vh', width: '100%' }}>
                    <CardHeader style={{ padding: '12px' }} title="Resturant"
                        subheader='1234' />

                    <CardMedia style={{ height: 0, paddingTop: '40%' }}
                        image="https://fakeimg.pl/600x400/b57070/909090"
                        title="Image" />
                    <CardContent>
                        <Grid container direction='row'>
                            <Grid item xl={12}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={5} style={{ display: "flex" }}>
                                        <Rating name="read-only" value={1} readOnly />
                                    </Grid>
                                    <Grid item xl={3} style={{ display: "flex" }}>
                                        <p style={{ margin: "3px" }}>1/5 (42)</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider style={{ marginTop: '20px', marginBottom: '20px' }} variant="middle" />
                        <Typography variant='h5'>Reviews</Typography>

                        <List>
                            {
                                reviews.map(review =>
                                    <>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" />
                                            </ListItemAvatar>
                                            <ListItemText
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
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xl={9} style={{ padding: "0px 20px 0px 20px" }}>
                <Grid container spacing={2}>
                    {
                        products.map(product =>
                            <Grid key={product} item xl={3}>
                                <Card variant="outlined">
                                    <CardHeader style={{ padding: '12px' }} title="Item"
                                        subheader={product} />

                                    <CardMedia style={{ height: 0, paddingTop: '40%' }}
                                        image="https://fakeimg.pl/600x400/b57070/909090"
                                        title="Image" />
                                    <CardContent>
                                        <Grid container direction='row'>
                                            <Grid item xl={12}>
                                                <Grid container justifyContent='space-between'>
                                                    <Grid item xl={5} style={{ display: "flex" }}>
                                                        <Rating name="read-only" value={1} readOnly />
                                                    </Grid>
                                                    <Grid item xl={3} style={{ display: "flex" }}>
                                                        <p style={{ margin: "3px" }}>1/5 (42)</p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xl={12} style={{ marginTop: '20px' }}>
                                                <Button fullWidth variant="outlined" color="primary">
                                                    Check Out
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Product;