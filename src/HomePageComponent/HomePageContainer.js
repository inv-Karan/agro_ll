import React from 'react';
import WorldMap from './WorldMap';
import SpecialFeature from '../ServicePageComponent/SpecialFeature';
import FeatureHeading from './FeaturesHeading';
import AboutCompany from './AboutCompany';
import CompanyFeatures from './CompanyFeatures';
import Advertisement from './Advertisement';
import CompanyServices from './CompanyServices';
import PartnersList from './PartnersList';
import Counter from '../AboutPageComponent/Counter';
import Startscreen from './StartScreen';

const HomePageContainer = () => 
<div>
    <Startscreen />
    <FeatureHeading />
    <AboutCompany />
    <SpecialFeature />
    <section className="section--gutter section--base-bg">
        <Counter />
    </section>
    <WorldMap />
    <CompanyFeatures />
    <Advertisement />
    <CompanyServices />
    <PartnersList />
</div>
export default HomePageContainer;