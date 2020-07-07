import React from 'react';
import EcoFeature from './EcologyFeature';
import FeatureList from './FeatureList';
import Counter from '../AboutPageComponent/Counter';

const FeatureContainer = () => 
<div>
    <EcoFeature/>
    <FeatureList/>
    <section className="section--gutter section--gray-bg">
        <Counter />
    </section>
</div>

export default FeatureContainer;