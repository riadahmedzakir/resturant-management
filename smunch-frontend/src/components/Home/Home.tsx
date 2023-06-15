import './Home.css'

import { Button, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {
    const history = useNavigate();

    return (
        <Grid className="home-container" container justifyContent="space-between" direction="row">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignItems="center" style={{ display: "flex" }}>
                <div className="home-container-text">
                    <h1 className='home-container-text-header'>Food Made With Love</h1>
                    <p  className='home-container-text-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Button className='home-container-button' variant="contained" color="primary" onClick={() => history('/resturants')}>Check Out</Button>
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: "flex" }}>
                <div className="home-image">
                    <img src={`${process.env.PUBLIC_URL}/home-burger.png`} alt="Burger" />
                </div>
            </Grid>
        </Grid>
    );
}

export default Home;