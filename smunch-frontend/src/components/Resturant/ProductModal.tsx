import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Slide, TextField, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { forwardRef, useRef, useState } from "react";

const Transition = forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface ProductModalProps {
    handleClose: () => void;
    open: boolean;
}

function ProductModal(props: ProductModalProps): JSX.Element {
    const { handleClose, open } = props;

    const [reviews, setReviews] = useState([1, 2, 3, 4, 5]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <DialogTitle>
                <Grid container>
                    <Grid item xl={12}>
                        <Typography variant="h4">Item 1</Typography>
                    </Grid>
                    <Grid item xl={12}>
                        <Grid container justifyContent="space-between">
                            <Grid item xl={4}>
                                <Typography variant="body1">$ 120.00</Typography>
                            </Grid>
                            <Grid item xl={4} style={{ textAlign: "end" }}>
                                <Typography variant="body1">Rating: 4/5 (43)</Typography>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </Typography>
                </DialogContentText>

                <Typography variant='h5'>Reviews</Typography>

                <List>
                    {
                        reviews.map(review =>
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