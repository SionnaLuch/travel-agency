import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles/AnimatedSwitch.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
// TODO - import other views
import CountryContainer from'./components/views/Country/CountryContainer';
import CountriesContainer from'./components/views/Countries/CountriesContainer';
// import Trip from './components/views/Trip/Trip';
import RegionsContainer from'./components/views/Regions/RegionsContainer';
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';
import { AnimatedSwitch } from 'react-router-transition';
import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';
import TripContainer from './components/views/Trip/TripContainer';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips !== this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
          atEnter={{ opacity: 1 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}>
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
            {/* TODO - add more routes for other views */}
            <Route exact path='/countries' component={CountriesContainer} />
            <Route exact path='/regions' component={RegionsContainer} />
            <Route exact path='/trip/:id' component={TripContainer} />
            <Route exact path='/country/:id' component={CountryContainer} />
            <Route exact path='/info' component={Info} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
