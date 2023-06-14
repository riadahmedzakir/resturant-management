import { Grid, Typography } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';

export interface EmptyReviewProps {
    message: string;
    fontSize: string;
}

function EmptyReview(props: EmptyReviewProps): JSX.Element {
    const { message, fontSize } = props;

    return (
        <Grid container style={{ paddingTop: "20px" }}>
            <Grid item xl={12} justifyContent='center' style={{ display: "flex", height: "100%" }}>
                <SearchOutlined style={{ fontSize: fontSize }} />
            </Grid>
            <Grid item xl={12} justifyContent='center' style={{ display: "flex", height: "100%" }}>
                <Typography variant="h5">{message}</Typography>
            </Grid>
        </Grid>
    )
}

export default EmptyReview