import React from 'react';

const PartnersList = () => 
<section className="section">
<div className="container">
<div className="partners-list">
        <div className="js-slick slick-initialized slick-slider" data-slick="{
             &quot;autoplay&quot;: true,
             &quot;arrows&quot;: false,
             &quot;dots&quot;: true,
             &quot;speed&quot;: 1000,
             &quot;responsive&quot;: [
                {
                    &quot;breakpoint&quot;:576,
                    &quot;settings&quot;:{
                        &quot;slidesToShow&quot;: 2
                    }
                },
                {
                    &quot;breakpoint&quot;:767,
                    &quot;settings&quot;:{
                        &quot;slidesToShow&quot;: 3
                    }
                },
                {
                    &quot;breakpoint&quot;:991,
                    &quot;settings&quot;:{
                        &quot;slidesToShow&quot;: 4
                    }
                },
                {
                    &quot;breakpoint&quot;:1199,
                    &quot;settings&quot;:{
                        &quot;autoplay&quot;: false,
                        &quot;dots&quot;: false,
                        &quot;slidesToShow&quot;: 5
                    }
                }
            ]}"><div className="slick-list draggable"><div className="slick-track" style={{opacity: "1", width: "1140px", transform: "translate3d(0px, 0px, 0px)"}}><div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: "228px"}}><div><div className="__item" style={{width: "100%"}} display="inline-block">
                <img className="img-fluid m-auto" src="img/partners_img/1.jpg" alt="demo" />
            </div></div></div><div className="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{width: "228px"}}><div><div className="__item" style={{width: "100%", display: "inline-block"}}>
                <img className="img-fluid m-auto" src="img/partners_img/2.jpg" alt="demo" />
            </div></div></div><div className="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{width: "228px"}}><div><div className="__item" style={{width: "100%", display: "inline-block"}}>
                <img className="img-fluid m-auto" src="img/partners_img/3.jpg" alt="demo" />
            </div></div></div><div className="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style={{width: "228px"}}><div><div className="__item" style={{width: "100%", display: "inline-block"}}>
                <img className="img-fluid m-auto" src="img/partners_img/4.jpg" alt="demo" />
            </div></div></div><div className="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style={{width: "228px"}}><div><div className="__item" style={{width: "100%", display: "inline-block"}}>
                <img className="img-fluid m-auto" src="img/partners_img/5.jpg" alt="demo" />
            </div></div></div></div></div></div>
    </div>
</div>
</section>

export default PartnersList;