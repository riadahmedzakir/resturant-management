import { Button, Card, CardContent, CardHeader, CardMedia, Checkbox, Chip, Divider, FormControl, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, Toolbar, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoaderData, useNavigate, useNavigation, useSearchParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { IResturantDto } from '../../constants/resturant.interface';
import { SetResturants } from '../../data/state/application/application.actions';
import { getRatingValue } from '../../data/util/util';
import './Resturant.css';

function Resturant(): JSX.Element {
    const history = useNavigate();
    const navigation = useNavigation();
    const resturants = useLoaderData() as IResturantDto[];
    const dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();

    const [sortState, setSortState] = useState('recom');
    const [priceFilterValue, setPriceFilterValue] = useState(new Set());
    const [cuisineFilterState, setCuisineFilterState] = useState<Record<string, boolean>>({
        Sandwiches: false,
        Burgers: false,
        FastFoods: false,
        Chinese: false,
        Indian: false
    });

    useEffect(() => {
        if (resturants) {
            dispatch(SetResturants(resturants));
        }
    }, [dispatch, resturants]);



    const handleSortChange = (event: any) => {
        setSortState(event.target.value);
        let params = getFilterParams('sort', event.target.value);
        setSearchParams(params);
    };

    const handlePriceChange = (id: string) => {
        const newSet = new Set(priceFilterValue);

        if (newSet.has(id)) { newSet.delete(id) }
        else { newSet.add(id); }

        setPriceFilterValue(newSet);

        const values = Array.from(newSet).join(',');
        const params = getFilterParams('budget', values);
        setSearchParams(params);
    };

    const handleCuisineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const state = { ...cuisineFilterState, [event.target.name]: event.target.checked };
        setCuisineFilterState(state);

        const values = Object.keys(state)
            .filter((key) => state[key] === true)
            .join(',');

        const params = getFilterParams('cuisine', values);
        setSearchParams(params);
    };

    const handleResturantSelection = (resturantId: string) => {
        history(`/resturants/${resturantId}`);
    }

    const getFilterParams = (a: 'sort' | 'budget' | 'cuisine', b: string): any => {
        const params = {
            'sort': searchParams.get('sort') ?? '',
            'budget': searchParams.get('budget') ?? '',
            'cuisine': searchParams.get('cuisine') ?? '',
        };

        params[a] = b;

        return params;
    }

    return (
        <Grid className="resturant-container" container justifyContent="space-between" direction="row">

            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} style={{ display: "flex" }}>
                <Card variant="outlined" className='filter-container'>
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

            <Grid item xs={12} sm={12} md={9} lg={9} xl={9} className='resturant-item-container'>
                {
                    <Grid container spacing={2} style={{ height: '100%' }}>
                        {
                            navigation.state === 'loading' ?
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent='center' style={{ display: "flex", height: "100%" }}>
                                    <div style={{ margin: 'auto' }}>
                                        <CircleLoader size={100} color="#27085c" />
                                    </div>
                                </Grid> :
                                resturants.map(resturant =>
                                    <Grid key={resturant._id} item xs={12} sm={12} md={12} lg={4} xl={3}>
                                        <Card variant="outlined">
                                            <CardHeader style={{ padding: '12px' }}
                                                title={
                                                    <Typography style={{ width: "98%" }} className='text-elipsis' variant='h5'>
                                                        {resturant.Name}
                                                    </Typography>
                                                }
                                                subheader={
                                                    <Typography style={{ width: "98%" }} className='text-elipsis' variant='subtitle2'>
                                                        {resturant.Cuisine.join(', ')}
                                                    </Typography>
                                                } />

                                            <CardMedia style={{ height: 0, paddingTop: '49%' }}
                                                image="https://fakeimg.pl/600x400/b57070/909090"
                                                title="Image" />
                                            <CardContent>
                                                <Grid container direction='row'>
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Grid container justifyContent='space-between'>
                                                            <Grid item xl={5}>
                                                                <Rating name="read-only" value={getRatingValue(resturant.Rating)} readOnly />
                                                            </Grid>
                                                            <Grid item xl={4} style={{ textAlign: "end" }}>
                                                                <p style={{ margin: "3px" }}>{resturant.Rating ? resturant.Rating : 'N/A'}</p>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid style={{ marginTop: '15px' }} container justifyContent="space-between">
                                                        <Grid item xl={5}>Operation Time</Grid>
                                                        <Grid item xl={5} style={{ textAlign: "end" }}>
                                                            {new Intl.DateTimeFormat("en-GB", {
                                                                hour: "numeric",
                                                                minute: "numeric",
                                                                hour12: true
                                                            }).format(new Date(resturant.OpeningTime))}
                                                            &nbsp;-&nbsp;
                                                            {new Intl.DateTimeFormat("en-GB", {
                                                                hour: "numeric",
                                                                minute: "numeric",
                                                                hour12: true
                                                            }).format(new Date(resturant.ClosingTime))}
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '20px' }}>
                                                        <Button fullWidth variant="outlined" color="primary" onClick={() => { handleResturantSelection(resturant._id) }}>
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
                }
            </Grid>
        </Grid >
    );
}

export default Resturant;