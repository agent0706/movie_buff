import {Switch, Route} from 'react-router-dom';
import Header from './header';
import HomePage from './homePage';
import MovieDetails from './movieDetails';
import './App.css';

const App = () => {
    return (
        <>
            <div className="main_container">
                <Header />
            </div>
            <div className="body_container">
                <div className="body_contents">
                    <Switch>
                        <Route exact path="/movie-details/:movieId">
                            <MovieDetails />
                        </Route>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default App;