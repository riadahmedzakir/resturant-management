import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Slide, TextField, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { Rating } from "@material-ui/lab";
import { forwardRef, useState } from "react";
import { IProductDto } from "../../constants/product.interface";
import { IResturantDto } from "../../constants/resturant.interface";
import { ReviewFacade } from "../../data/services/review/review.facade";
import { SubmitReview } from "../../data/models/api-request/submit-review.request";
import { getUserId } from "../../data/util/util";

const Transition = forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface ReviewModalProps {
    handleClose: (type: string) => void;
    open: boolean;
    type: 'Product' | 'Resturant';
    data: IProductDto | IResturantDto | undefined;
}

function ReviewModal(props: ReviewModalProps): JSX.Element {
    const { handleClose, open, type, data } = props;

    const [loading, setLoading] = useState<boolean>(false);
    const [ratingValue, setRatingValue] = useState<number>(0);
    const [commentValue, setCommentValue] = useState<string>("");

    const handlgeComment = (event: any) => {
        const value = event.target.value;
        setCommentValue(value);
    }

    const handleSubmit = () => {
        setLoading(true);

        const paylod: SubmitReview = {
            UserId: getUserId(),
            ReviewEntityId: data?._id ?? "",
            Rating: ratingValue,
            Comment: commentValue
        }

        if (type === "Resturant") {
            ReviewFacade.reviewResturantApi(paylod).then(() => {
                setLoading(false);
                setRatingValue(0);
                setCommentValue("");
                handleClose(type);
            });
        }

        if (type === "Product") {
            ReviewFacade.reviewProductApi(paylod).then(() => {
                setLoading(false);
                setRatingValue(0);
                setCommentValue("");
                handleClose(type);
            });
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} >
            <DialogTitle>
                <Typography variant="h4">{data?.Name}</Typography>
            </DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <img style={{ width: "100%", height: '200px' }} src={`${process.env.PUBLIC_URL}/placeholder.png`} alt="Burger" />
                    <Typography style={{ textAlign: "justify" }} variant="body1">
                        {data?.Description}
                    </Typography>
                </DialogContentText>

                <Grid container justifyContent="space-between" style={{ paddingBottom: '10px' }}>
                    <Grid item xl={4}>
                        <Typography component="legend">Rating</Typography>
                    </Grid>
                    <Grid item xl={4} justifyContent="flex-end" style={{ display: "flex" }}>
                        <Rating
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue ?? 0);
                            }}
                        />
                    </Grid>
                </Grid>

                <TextField
                    fullWidth
                    value={commentValue}
                    label="Write review"
                    multiline
                    minRows={4}
                    variant="outlined"
                    onChange={handlgeComment}
                />
            </DialogContent>

            <DialogActions>
                <Button variant="contained" onClick={handleSubmit} color="primary" disabled={loading}
                    endIcon={
                        loading ? <CircularProgress size={20} /> : <></>
                    }>
                    Submit Review
                </Button>
                <Button variant="outlined" onClick={() => handleClose("")} disabled={loading}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ReviewModal;