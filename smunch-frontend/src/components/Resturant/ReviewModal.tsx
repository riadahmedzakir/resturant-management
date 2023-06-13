import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Slide, TextField, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { forwardRef, useState } from "react";
import { IProductDto } from "../../constants/product.interface";
import { IResturantDto } from "../../constants/resturant.interface";
import { Rating } from "@material-ui/lab";

const Transition = forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface ReviewModalProps {
    handleClose: () => void;
    open: boolean;
    type: 'Product' | 'Resturant';
    data: any; //IProductDto | IResturantDto
}

function ReviewModal(props: ReviewModalProps): JSX.Element {
    const { handleClose, open, type, data } = props;

    const [ratingValue, setRatingValue] = useState<number | null>(2);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <DialogTitle>
                <Typography variant="h4">{type}</Typography>
            </DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <img style={{ width: "100%", height: '200px' }} src={`${process.env.PUBLIC_URL}/placeholder.png`} alt="Burger" />
                    <Typography style={{ textAlign: "justify" }} variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </Typography>
                </DialogContentText>

                <Grid container justifyContent="space-between" style={{ paddingBottom: '10px' }}>
                    <Grid item xl={4}>
                        <Typography component="legend">Rating</Typography>
                    </Grid>
                    <Grid item xl={4} justifyContent="flex-end" style={{ display: "flex" }}>
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                        />
                    </Grid>
                </Grid>

                <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Write review"
                    multiline
                    minRows={4}
                    variant="outlined"
                />
            </DialogContent>

            <DialogActions>
                <Button variant="contained" onClick={handleClose} color="primary">
                    Submit Review
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ReviewModal;