import React from 'react';
import { Provider } from 'react-redux';
import argoStore from './argostore';
import Wrapper from './wrapperComponent/WrapperComponent';
import AboutComp from './AboutPageComponent/AboutPageContainer';
import ServiceComp from './ServicePageComponent/ServicePageContainer';
import FeatureComp from './FeatureComponent/FeatureContainer';
import ContactComp from './ContactComponent/ContactContainer';
import HomeScreen from './HomePageComponent/HomePageContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={argoStore}>
      <Router>
        <Switch>
          <Route path="/about">
            <Wrapper>
              <AboutComp />
            </Wrapper>
          </Route>
          <Route path="/service">
            <Wrapper>
              <ServiceComp />
            </Wrapper>
          </Route>
          <Route path="/feature">
            <Wrapper>
              <FeatureComp />
            </Wrapper>
          </Route>
          <Route path="/contact">
            <Wrapper>
              <ContactComp />
            </Wrapper>
          </Route>
          <Route path="/home">
            <Wrapper>
              <HomeScreen />
            </Wrapper>
          </Route>
          <Route path="/">
          <Wrapper>
              <AboutComp />
            </Wrapper>
          </Route>
        </Switch>
      </Router>

    </Provider>
  );
}

export default App;
