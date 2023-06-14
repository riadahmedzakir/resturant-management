import { Avatar, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Slide, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { isEqual } from "lodash";
import { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IProductDto } from "../../constants/product.interface";
import { IReviewDto } from "../../constants/review.interface";
import { ReviewFacade } from "../../data/services/review/review.facade";
import { getProducts } from "../../data/state/application/application.slice";

const Transition = forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface ProductModalProps {
    handleClose: () => void;
    open: boolean;
    productId: string;
}

function ProductModal(props: ProductModalProps): JSX.Element {
    const { handleClose, open, productId } = props;

    const products = useSelector(getProducts, isEqual);

    const [loading, setLoading] = useState<boolean>(true);
    const [selectedProduct, setSelectedProduct] = useState<IProductDto | undefined>();
    const [reviews, setReviews] = useState<IReviewDto[] | undefined>();

    useEffect(() => {
        const selectedResturant = products.find(x => x._id === productId);
        setSelectedProduct(selectedResturant);

        ReviewFacade.getProductReviewListApi(productId).then(response => {
            const reviews = response.data?.SuccessResponse;
            setReviews(reviews);
            setLoading(false);
        })

    }, [products, productId]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <DialogTitle>
                <Grid container>
                    <Grid item xl={12}>
                        <Typography variant="h4">{selectedProduct?.Name}</Typography>
                    </Grid>
                    <Grid item xl={12}>
                        <Grid container justifyContent="space-between">
                            <Grid item xl={4}>
                                <Typography variant="body1">$ {selectedProduct?.Price}</Typography>
                            </Grid>
                            <Grid item xl={4} style={{ textAlign: "end" }}>
                                <Typography variant="body1">{selectedProduct?.Rating ? selectedProduct.Rating : 'N/A'}</Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent className="product-modal-body">
                <DialogContentText id="alert-dialog-description">
                    <img style={{ width: "100%", height: '200px' }} src={`${process.env.PUBLIC_URL}/placeholder.png`} alt="Burger" />
                    <Typography style={{ textAlign: "justify" }} variant="body1">
                        {selectedProduct?.Description}
                    </Typography>
                </DialogContentText>

                <Typography variant='h5'>Reviews</Typography>

                {
                    loading ?
                        <Grid item xl={12} justifyContent='center' style={{ display: "flex", height: "100%" }}>
                            <CircularProgress style={{ margin: 'auto' }} size={50} />
                        </Grid> :
                        <List>
                            {
                                reviews?.map(review =>
                                    <>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <Avatar alt="Riad Zakir" />
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
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProductModal;