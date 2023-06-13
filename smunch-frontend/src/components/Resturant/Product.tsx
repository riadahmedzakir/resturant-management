import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Divider, Grid, Icon, IconButton, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from "@material-ui/core"
import Rating from "@material-ui/lab/Rating";
import { useRef, useState } from "react";
import ProductModal from "./ProductModal";

import RateReviewIcon from '@material-ui/icons/RateReview';
import ReviewModal from "./ReviewModal";

function Product(): JSX.Element {
    const [reviews, setReviews] = useState([1, 2, 3, 4, 5]);
    const [products, setProducts] = useState([1, 2, 3, 4, 5]);
    const [openProductModal, setOpenProductModal] = useState(false);

    const [openReviewModal, setOpenReviewModal] = useState(false);
    const [reviewModalType, setReviewModalType] = useState<'Product' | 'Resturant'>('Resturant');
    const [reviewModalData, setReviewModalData] = useState("");

    const handleProductOpen = () => {
        setOpenProductModal(true);
    };

    const handleProductClose = () => {
        setOpenProductModal(false);
    };

    const handleReviewOpen = (type: 'Product' | 'Resturant', data: any) => {
        setReviewModalType(type);
        setReviewModalData(data);
        setOpenReviewModal(true);
    };

    const handleReviewClose = () => {
        setOpenReviewModal(false);
    };


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
                                    <Grid item xl={5}>
                                        <Rating name="read-only" value={1} readOnly />
                                    </Grid>
                                    <Grid item xl={3} style={{ textAlign: "end" }}>
                                        <p style={{ margin: "3px" }}>1/5 (42)</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid style={{ marginTop: '15px' }} container justifyContent="space-between">
                            <Grid item xl={3}>Operation Time</Grid>
                            <Grid item xl={5} style={{ textAlign: "end" }}>
                                {new Intl.DateTimeFormat("en-GB", {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true
                                }).format(new Date())}
                                &nbsp;-&nbsp;
                                {new Intl.DateTimeFormat("en-GB", {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true
                                }).format(new Date())}
                            </Grid>
                        </Grid>
                        <Divider style={{ marginTop: '15px', marginBottom: '20px' }} variant="middle" />

                        <Grid container justifyContent="space-between">
                            <Grid item xl={4}>
                                <Typography variant='h5'>Reviews</Typography>
                            </Grid>
                            <Grid item xl={4} justifyContent="flex-end" style={{ display: "flex" }}>
                                <IconButton color="primary" aria-label="review" onClick={() => { handleReviewOpen("Resturant", "Test") }}>
                                    <RateReviewIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

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
                                        subheader="$ 125.00" />

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
                                                <Button fullWidth variant="contained" color="primary" onClick={handleProductOpen}>
                                                    Check Out
                                                </Button>
                                                <Button style={{ marginTop: '10px' }} fullWidth variant="outlined" color="primary" onClick={() => { handleReviewOpen("Product", "Test") }}>
                                                    Review Product
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

            <ProductModal open={openProductModal} handleClose={handleProductClose} />

            <ReviewModal open={openReviewModal} handleClose={handleReviewClose} type={reviewModalType} data={reviewModalData} />
        </Grid>
    )
}

export default Product;