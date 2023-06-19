/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, CircularProgress, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import RateReviewIcon from '@material-ui/icons/RateReview';
import Rating from "@material-ui/lab/Rating";
import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useLocation, useNavigation, useRevalidator } from "react-router-dom";
import { IProductDto } from "../../constants/product.interface";
import { IResturantDto } from "../../constants/resturant.interface";
import { IReviewDto } from "../../constants/review.interface";
import { SetProduct } from "../../data/state/application/application.actions";
import { getResturants } from "../../data/state/application/application.slice";
import { getRatingValue } from "../../data/util/util";
import EmptyReview from "./EmptyReview";
import ProductModal from "./ProductModal";
import ReviewModal from "./ReviewModal";

function Product(): JSX.Element {
    const { products, reviews } = useLoaderData() as { products: IProductDto[], reviews: IReviewDto[] };
    const location = useLocation();
    const dispatch = useDispatch();
    const revalidator = useRevalidator();
    const navigation = useNavigation();

    const resturants = useSelector(getResturants, isEqual);

    const [selectedResturant, setSelectedResturant] = useState<IResturantDto | undefined>();
    const [selectedProductId, setSelectedProductId] = useState<string>("");
    const [openProductModal, setOpenProductModal] = useState(false);

    const [openReviewModal, setOpenReviewModal] = useState(false);
    const [reviewModalType, setReviewModalType] = useState<'Product' | 'Resturant'>('Resturant');
    const [reviewModalData, setReviewModalData] = useState<IProductDto | IResturantDto | undefined>();

    useEffect(() => {
        const routes = location.pathname.split('/');
        const resturantId = routes[routes.length - 1];

        const selectedResturant = resturants.find(x => x._id === resturantId);
        setSelectedResturant(selectedResturant);
    }, [dispatch, location, resturants]);


    useEffect(() => {
        dispatch(SetProduct(products));
    }, [products]);

    const handleProductOpen = (productId: string) => {
        setSelectedProductId(productId);
        setOpenProductModal(true);
    };

    const handleProductClose = () => {
        setOpenProductModal(false);
    };

    const handleReviewOpen = (type: 'Product' | 'Resturant', data: IProductDto | IResturantDto | undefined) => {
        setReviewModalType(type);
        setReviewModalData(data);
        setOpenReviewModal(true);
    };

    const handleReviewClose = (type: string) => {
        if (type !== '') {
            revalidator.revalidate();
        }

        setOpenReviewModal(false);
    };

    return (
        <Grid className="resturant-container" container justifyContent="space-between" direction="row">

            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} alignItems="center" style={{ display: "flex" }}>
                <Card variant="outlined" style={{ height: '85vh', width: '100%' }}>
                    <CardHeader style={{ padding: '12px' }}
                        title={
                            <Typography style={{ width: "98%" }} className='text-elipsis' variant='h5'>
                                {selectedResturant?.Name}
                            </Typography>
                        }
                        subheader={
                            <Typography style={{ width: "98%" }} className='text-elipsis' variant='subtitle2'>
                                {selectedResturant?.Cuisine.join(', ')}
                            </Typography>
                        } />

                    <CardMedia style={{ height: 0, paddingTop: '40%' }}
                        image="https://fakeimg.pl/600x400/b57070/909090"
                        title="Image" />
                    <CardContent>
                        <Grid container direction='row'>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography style={{ marginBottom: '20px' }} variant='subtitle2'>
                                    {selectedResturant?.Description}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item xl={5}>
                                        <Rating name="read-only" value={getRatingValue(selectedResturant?.Rating ?? "")} readOnly />
                                    </Grid>
                                    <Grid item xl={3} style={{ textAlign: "end" }}>
                                        <p style={{ margin: "3px" }}>{selectedResturant?.Rating ? selectedResturant.Rating : "N/A"}</p>
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
                                }).format(new Date(selectedResturant?.OpeningTime ?? "1970-01-01T00:00:00.000Z"))}
                                &nbsp;-&nbsp;
                                {new Intl.DateTimeFormat("en-GB", {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true
                                }).format(new Date(selectedResturant?.ClosingTime ?? "1970-01-01T00:00:00.000Z"))}
                            </Grid>
                        </Grid>
                        <Divider style={{ marginTop: '15px', marginBottom: '20px' }} variant="middle" />

                        <Grid container justifyContent="space-between">
                            <Grid item xl={4}>
                                <Typography variant='h5'>Reviews</Typography>
                            </Grid>
                            <Grid item xl={4} justifyContent="flex-end" style={{ display: "flex" }}>
                                <IconButton color="primary" aria-label="review" onClick={() => { handleReviewOpen("Resturant", selectedResturant) }}>
                                    <RateReviewIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        {
                            navigation.state === 'loading' ?
                                <Grid item xl={12} justifyContent='center' style={{ display: "flex", height: "100%" }}>
                                    <CircularProgress style={{ margin: 'auto' }} size={50} />
                                </Grid>
                                : reviews?.length ?
                                    <List>
                                        {
                                            reviews?.map(review =>
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
                                    : <EmptyReview fontSize="50px" message="No review Available" />
                        }
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={9} lg={9} xl={9} className="product-item-container">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    {
                        navigation.state === 'loading' ?
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent='center' style={{ display: "flex", height: "100%" }}>
                                <CircularProgress style={{ margin: 'auto' }} size={100} />
                            </Grid> :
                            products?.map(product =>
                                <Grid key={product._id} item xl={3}>
                                    <Card variant="outlined">
                                        <CardHeader style={{ padding: '12px' }}
                                            title={
                                                <Typography style={{ width: "98%" }} className='text-elipsis' variant='h5'>
                                                    {product.Name}
                                                </Typography>
                                            }
                                            subheader={
                                                <Typography style={{ width: "98%" }} className='text-elipsis' variant='subtitle2'>
                                                    $ {product.Price}
                                                </Typography>
                                            } />

                                        <CardMedia style={{ height: 0, paddingTop: '45%' }}
                                            image="https://fakeimg.pl/600x400/b57070/909090"
                                            title="Image" />

                                        <CardContent>
                                            <Grid container direction='row'>
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                    <Grid container justifyContent='space-between'>
                                                        <Grid item xl={5}>
                                                            <Rating name="read-only" value={getRatingValue(product.Rating)} readOnly />
                                                        </Grid>
                                                        <Grid item xl={4} style={{ textAlign: "end" }}>
                                                            <p style={{ margin: "3px" }}>{product.Rating ? product.Rating : 'N/A'}</p>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '20px' }}>
                                                    <Button fullWidth variant="contained" color="primary" onClick={() => handleProductOpen(product._id)}>
                                                        Check Out
                                                    </Button>
                                                    <Button style={{ marginTop: '10px' }} fullWidth variant="outlined" color="primary" onClick={() => { handleReviewOpen("Product", product) }}>
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

            <ProductModal open={openProductModal} handleClose={handleProductClose} productId={selectedProductId} />

            <ReviewModal open={openReviewModal} handleClose={handleReviewClose} type={reviewModalType} data={reviewModalData} />
        </Grid>
    )
}

export default Product;