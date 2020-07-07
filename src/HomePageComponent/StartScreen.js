import React from 'react';

const StartScreen = () => 
<>
<div id="start-screen" className="start-screen start-screen--style-1" data-scroll-discover="true">
</div>
<div id="start-screen__bg" className="start-screen__bg">
</div>
    <div id="vegas-slider" data-dots="true" style={{height: "560px"}} className="vegas-container">
        <div className="vegas-slide vegas-transition-swirlLeft vegas-transition-swirlLeft-in vegas-transition-swirlLeft-out" style={{transition: "all 4000ms ease 0s"}}>
        <div className="vegas-slide-inner" style={{backgroundImage: "url(&quot;img/home_img/img_2.jpg&quot;)", backgroundColor: "rgba(0, 0, 0, 0)", backgroundPosition: "center center", backgroundSize: "cover"}}>
        </div>
        </div>
    </div>
    <div className="vegas-slide vegas-transition-swirlLeft vegas-transition-swirlLeft-in vegas-transition-swirlLeft-out" style={{transition: "all 4000ms ease 0s"}}>
        <div className="vegas-slide-inner" style={{backgroundImage: "url(&quot;img/home_img/img_3.jpg&quot;)", backgroundColor: "rgba(0, 0, 0, 0)", backgroundPosition: "center center", backgroundSize: "cover"}}>
        </div>
    </div>
    <div className="vegas-slide vegas-transition-swirlLeft vegas-transition-swirlLeft-in vegas-transition-swirlLeft-out" style={{transition: "all 4000ms ease 0s"}}>
        <div className="vegas-slide-inner" style={{backgroundImage: "url(&quot;img/home_img/img_1.jpg&quot;)", backgroundColor: "rgba(0, 0, 0, 0)", backgroundPosition: "center center", backgroundSize: "cover"}}>
        </div>
    </div>
    <div className="vegas-slide vegas-transition-swirlLeft vegas-transition-swirlLeft-in vegas-transition-swirlLeft-out" style={{transition: "all 4000ms ease 0s"}}>
        <div className="vegas-slide-inner" style={{backgroundImage: "url(&quot;img/home_img/img_2.jpg&quot;)", backgroundColor: "rgba(0, 0, 0, 0)", backgroundPosition: "center center", backgroundSize: "cover"}}>
        </div>
    </div>
    <div className="vegas-slide vegas-transition-swirlLeft vegas-transition-swirlLeft-in" style={{transition: "all 4000ms ease 0s"}}>
        <div className="vegas-slide-inner" style={{backgroundImage: "url(&quot;img/home_img/img_3.jpg&quot;)", backgroundColor: "rgba(0, 0, 0, 0)", backgroundPosition: "center center", backgroundSize: "cover"}}>
        </div>
    </div>
    <div className="vegas-overlay" style={{backgroundImage: "url(&quot;img/home_img/overlays/05.png&quot;)"}}>
    </div>
     <div className="vegas-wrapper" style={{overflow: "visible", padding: "0px"}}>
        <div className="vegas-control">
            <span id="vegas-control__prev" className="vegas-control__btn">Prev</span>
            <span id="vegas-control__next" className="vegas-control__btn">Next</span>
        </div>
        <nav className="vegas-dots">
            <a href="#" className="paginatorLink"></a>
            <a href="#" className="paginatorLink"></a>
            <a href="#" className="paginatorLink active"></a>
        </nav>
        </div>

<div id="start-screen__content-container" className="start-screen__content-container  text-white">
					<div className="start-screen__content__item start-screen__content__item--1  align-items-center is-active">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12 col-md-10 col-xl-8">
									<div className="__name">My Farm Easy</div>

									<h2 className="__title text-white">Farming company</h2>

									<p className="text-center">
										The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
									</p>

									<p className="text-center mt-5 mt-md-10">
										<span className="d-none d-sm-block"><a className="custom-btn custom-btn--big custom-btn--style-3" href="#">Discover</a></span>

										<span className="d-block d-sm-none"><a className="custom-btn custom-btn--small custom-btn--style-3" href="#">Discover</a></span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="start-screen__content__item start-screen__content__item--2  align-items-center">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-12 col-md col-lg-9 col-xl-8">
									<div className="__name">My Farm Easy</div>

									<h2 className="__title text-white">Best harvest <br /><span>in the World</span></h2>

									<p>
										The point of using Lorem Ipsum is that it has a more-or-less normal distribution
									</p>

									<p className="mt-5 mt-md-10">
										<span className="d-none d-sm-block"><a className="custom-btn custom-btn--big custom-btn--style-3" href="#">Discover</a></span>

										<span className="d-block d-sm-none"><a className="custom-btn custom-btn--small custom-btn--style-3" href="#">Discover</a></span>
									</p>
								</div>

								<div className="col-12 my-3 d-md-none"></div>

								<div className="col-12 col-md-auto col-lg-3 col-xl-4  text-center">
									<a className="play-btn" data-fancybox="" href="https://www.youtube.com/watch?v=kC7nt09wsdM">
										<span></span>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="start-screen__content__item start-screen__content__item--3  align-items-center">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12 col-md-10 col-xl-8">
									<div className="__name">My Farm Easy</div>

									<h2 className="__title text-white">Farming company</h2>

									<p className="text-center">
										The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
									</p>

									<p className="text-center mt-5 mt-md-10">
										<span className="d-none d-sm-block"><a className="custom-btn custom-btn--big custom-btn--style-3" href="#">Discover</a></span>

										<span className="d-block d-sm-none"><a className="custom-btn custom-btn--small custom-btn--style-3" href="#">Discover</a></span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
<span className="scroll-discover"></span>
</>
export default StartScreen;