import React from 'react';
const Advertisement = () => 
<section className="section section--no-pt section--no-pb section--gutter">
<div className="simple-banner simple-banner--style-1 aos-init aos-animate" data-aos="fade" data-aos-offset="50">

    <div className="__label d-none d-md-block">
        <div className="d-table m-auto h-100">
            <div className="d-table-cell align-middle">
                <span className="num-1">1</span>
            </div>

            <div className="d-table-cell align-middle">
                <span className="num-2">50$</span>
                <span>Kg</span>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="__inner">
                    <img className="img-fluid lazy site-logo loaded" src="img/farmlogo.png" alt="demo" data-was-processed="true" />

                    <div className="row">
                        <div className="col-12 col-lg-7 col-xl-5">
                            <div className="banner__text aos-init aos-animate" data-aos="fade-left" data-delay="500">
                                <h2 className="__title h1"><b style={{display: 'block', color: '#c6c820'}}>Fresh Apples</b> <span>in Our Store</span></h2>

                                <p>
                                    The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                                </p>

                                <p>
                                    <a className="custom-btn custom-btn--medium custom-btn--style-1" href="#">Buy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

export default Advertisement;