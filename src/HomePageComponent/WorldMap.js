import React from 'react';

const WorldMap = () => 
<section className="section">
<div className="container">
    <div className="section-heading section-heading--center aos-init aos-animate" data-aos="fade">
        <h2 className="__title">We are <span>on the world</span></h2>

        <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
    </div>

    <div data-aos="slide-up" data-aos-duration="800" data-aos-offset="50" className="aos-init aos-animate">
        <img className="img-fluid lazy map-img-style loaded" src="img/img_world_map.png" alt="demo" data-was-processed="true" />
    </div>
</div>
</section>

export default WorldMap;