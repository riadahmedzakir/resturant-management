import { Button, Card, CardContent, CardHeader, CardMedia, Checkbox, Chip, Divider, FormControl, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, Toolbar, Typography } from '@material-ui/core';
import './Resturant.css'
import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { useNavigate } from 'react-router-dom';

function Resturant(): JSX.Element {
    const history = useNavigate();

    const [sortState, setSortState] = useState('recom');
    const [priceFilterValue, setPriceFilterValue] = useState(new Set());
    const [cuisineFilterState, setCuisineFilterState] = useState({
        Sandwiches: true,
        Burgers: true,
        FastFoods: true,
        Chinese: true,
        Indian: true
    });

    const [resturants, setResturants] = useState([1, 2, 3, 4, 5]);

    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortState((event.target as HTMLInputElement).value);
    };

    const handlePriceChange = (id: string) => {
        const newSet = new Set(priceFilterValue);

        if (newSet.has(id)) { newSet.delete(id) }
        else { newSet.add(id); }

        setPriceFilterValue(newSet);
    };

    const handleCuisineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCuisineFilterState({ ...cuisineFilterState, [event.target.name]: event.target.checked });
    };

    const handleResturantSelection = () => {
        history('/resturants/12345');
    }

    return (
        <Grid className="resturant-container" container justifyContent="space-between" direction="row">

            <Grid item xl={3} alignItems="center" style={{ display: "flex" }}>
                <Card variant="outlined" style={{ height: '85vh', width: '100%' }}>
                    <Toolbar>
                        <Typography variant='h5'>Filter</Typography>
                    </Toolbar>
                    <Divider />
                    <CardContent>
                        <Typography variant='subtitle1'>Sort</Typography>

                        <FormControl component="fieldset">
                            <RadioGroup color='primary' aria-label="sort" name="sort" value={sortState} onChange={handleSortChange}>
                                <Grid container>
                                    <Grid item xl={6}>
                                        <FormControlLabel value="recom" control={<Radio color='primary' />} label="Recommended" />
                                    </Grid>
                                    <Grid item xl={6}>
                                        <FormControlLabel value="top" control={<Radio color='primary' />} label="Top Rated" />
                                    </Grid>
                                    <Grid item xl={6}>
                                        <FormControlLabel value="fast" control={<Radio color='primary' />} label="Fast Delivery" />
                                    </Grid>
                                    <Grid item xl={6}>
                                        <FormControlLabel value="distance" control={<Radio color='primary' />} label="Distance" />
                                    </Grid>
                                </Grid>
                            </RadioGroup>
                        </FormControl>

                        <Typography variant='subtitle1' style={{ paddingTop: '20px', paddingBottom: '15px' }}>Price</Typography>
                        <Grid container spacing={4}>
                            <Grid item xl={3} >
                                <Chip key="price1" onClick={() => { handlePriceChange("1") }}
                                    style={{ width: '100%' }} label="$"
                                    color={priceFilterValue.has("1") ? "primary" : "default"}
                                    variant={priceFilterValue.has("1") ? "default" : "outlined"} />
                            </Grid>
                            <Grid item xl={3}>
                                <Chip key="price1" onClick={() => { handlePriceChange("2") }}
                                    style={{ width: '100%' }} label="$$"
                                    color={priceFilterValue.has("2") ? "primary" : "default"}
                                    variant={priceFilterValue.has("2") ? "default" : "outlined"} />
                            </Grid>
                            <Grid item xl={3}>
                                <Chip key="price1" onClick={() => { handlePriceChange("3") }}
                                    style={{ width: '100%' }} label="$$$"
                                    color={priceFilterValue.has("3") ? "primary" : "default"}
                                    variant={priceFilterValue.has("3") ? "default" : "outlined"} />
                            </Grid>
                            <Grid item xl={3}>
                                <Chip key="price1" onClick={() => { handlePriceChange("4") }}
                                    style={{ width: '100%' }} label="$$$$"
                                    color={priceFilterValue.has("4") ? "primary" : "default"}
                                    variant={priceFilterValue.has("4") ? "default" : "outlined"} />
                            </Grid>
                        </Grid>

                        <Typography variant='subtitle1' style={{ paddingTop: '20px' }}>Cuisines</Typography>
                        <FormGroup>
                            <Grid container>
                                <Grid item xl={4}>
                                    <FormControlLabel
                                        control={<Checkbox checked={cuisineFilterState.Sandwiches} color='primary'
                                            onChange={handleCuisineChange} name="Sandwiches" />} label="Sandwiches" />
                                </Grid>

                                <Grid item xl={4}>
                                    <FormControlLabel
                                        control={<Checkbox color='primary' checked={cuisineFilterState.Burgers}
                                            onChange={handleCuisineChange} name="Burgers" />} label="Burgers" />
                                </Grid>

                                <Grid item xl={4}>
                                    <FormControlLabel
                                        control={<Checkbox color='primary' checked={cuisineFilterState.FastFoods}
                                            onChange={handleCuisineChange} name="FastFoods" />} label="Fast Foods" />
                                </Grid>

                                <Grid item xl={4}>
                                    <FormControlLabel
                                        control={<Checkbox color='primary' checked={cuisineFilterState.Chinese}
                                            onChange={handleCuisineChange} name="Chinese" />} label="Chinese" />
                                </Grid>

                                <Grid item xl={4}>
                                    <FormControlLabel
                                        control={<Checkbox color='primary' checked={cuisineFilterState.Indian}
                                            onChange={handleCuisineChange} name="Indian" />} label="Indian" />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xl={9} style={{ padding: "0px 20px 0px 20px" }}>
                <Grid container spacing={2}>
                    {
                        resturants.map(resturant =>
                            <Grid key={resturant} item xl={3}>
                                <Card variant="outlined">
                                    <CardHeader style={{ padding: '12px' }} title="Resturant"
                                        subheader={resturant} />

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
                                                <Button fullWidth variant="outlined" color="primary" onClick={handleResturantSelection}>
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
    );
}

export default Resturant;