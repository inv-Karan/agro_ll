import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";

const Fn = () => {
    return (
    <GoogleMap 
        defaultZoom = {10} 
        defaultCenter = {{lat: 21.186047, lng: 72.808299}}
        />
    );
};

const WrappedMap = withScriptjs(withGoogleMap(Fn));

const Maps = () => {
    return (
    <div>
        {/* <div style={{width: '100vw', height: '100vh'}} /> */}
        <WrappedMap 
            googleMapURL = {"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD3XzoM15_lxp1aLjwZ0HCZawLGl3p9Ljc"}
            loadingElement = {<div style={{ height: `100%` }} />}
            containerElement = {<div style={{ height: `255px` }} />}
            mapElement = {<div style={{ height: `100%` }} />}

        />
    </div>
    );
};

export default Maps;