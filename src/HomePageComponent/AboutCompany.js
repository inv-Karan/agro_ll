import React from 'react';

const AboutCompany = () => 
<section class="section">
<div class="d-none d-lg-block">
    <img id="bg-img-1" class="img-fluid lazy loaded" src="img/myfarm.png" alt="demo" data-was-processed="true" />
    {/* <style type="text/css">
        {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
        }
    </style> */}
</div>

<div class="container">
    <div class="row align-items-center">
        <div class="col-12 col-lg-4">
            <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="500" ddata-aos-offset="100" class="aos-init aos-animate">
                <div class="section-heading">
                    <h2 class="__title">About My Farm Easy  <span>farm company</span></h2>
                </div>

                <p class="d-none d-sm-block">
                    <a class="custom-btn custom-btn--medium custom-btn--style-1" href="#">More about</a>
                </p>
            </div>
        </div>

        <div class="col-12 my-3 d-lg-none"></div>

        <div class="col-12 col-lg-4  text-center">
            <div data-aos="fade-up" ddata-aos-duration="600" data-aos-offset="100" class="aos-init aos-animate">
                <img class="img-fluid lazy loaded" src="img/img_1.png" alt="demo" data-was-processed="true" />
            </div>
        </div>

        <div class="col-12 my-3 d-lg-none"></div>

        <div class="col-12 col-lg-4">
            <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="500" ddata-aos-offset="100" class="aos-init aos-animate">
                <p>
                    Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                </p>

                <p>
                    The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi
                </p>

                <p class="d-sm-none">
                    <a class="custom-btn custom-btn--medium custom-btn--style-1" href="#">More about</a>
                </p>
            </div>
        </div>
    </div>
</div>
</section>

export default AboutCompany;