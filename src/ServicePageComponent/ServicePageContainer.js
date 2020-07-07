import React from 'react';
import SpecialFeature from './SpecialFeature';
import Counter from '../AboutPageComponent/Counter';
import FarmingManagement from './FarmingManagement';
import EComManage from './E-commercePlatform';
import PartnersList from '../HomePageComponent/PartnersList';

const ServicePageContainer = () => 
    <div>
        <SpecialFeature />
        <section className="section--gutter section--base-bg">
            <Counter />
        </section>
        <FarmingManagement />
        <EComManage />
        <PartnersList />
    </div>

export default ServicePageContainer;