import React from 'react';
import FooterToolBar from './FooterToolBar';
import FooterLogo from './FooterLogo';
import Subscribe from './Subscribe';
import Copyright from './Copyright';
import Address from './Address';
import SocialButtons from './SocialButtons';
import WrapButton from './WrapButton';
import Inquiry from './Inquiry';
import Maps from './Maps';

const footComp = () => 
    <div>
            <main>
				<Inquiry />
				<section className="section section--no-pt section--no-pb">
					{/* this is demo key "AIzaSyBXQROV5YMCERGIIuwxrmaZbBl_Wm4Dy5U" */}
                     <div className="g_map">
						 <Maps />
					 </div>
                    {/* data-api-key="AIzaSyBXQROV5YMCERGIIuwxrmaZbBl_Wm4Dy5U" 
                    data-longitude="44.958309" data-latitude="34.109925" 
                    data-marker="img/marker.png" style={{minHeight: "255px"}}></div> */}
				</section>
			</main>

        <div>
			<footer id="footer" className="footer--style-1">
				<div className="container">
					<div className="row">
                        <FooterLogo />
						<div className="col-12 col-sm">
							<div className="row align-items-md-center no-gutters">
								<div className="col-12 col-md">
									<div className="footer__item">
										<Address />
									</div>
								</div>

								<div className="col-12 col-md-auto">
									<div className="footer__item">
										<SocialButtons />
									</div>
								</div>
							</div>
						</div>
                        <Subscribe />
					</div>

					<div className="row flex-lg-row-reverse">
						<div className="col-12 col-lg-6">
							<div className="footer__item">
                                <FooterToolBar />
							</div>
						</div>

						<div className="col-12 col-lg-6">
							<div className="footer__item">
								<Copyright />
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
		<WrapButton />

		<script src="../../../ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="js/jquery-2.2.4.min.js"></script>')</script>

		<script type="text/javascript" src="js/main.min.js"></script>
		{/* Google Analytics: change UA-XXXXX-X to be your site's ID.  */}
		<script>
			{/* (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='../../../www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-XXXXX-X','auto');ga('send','pageview'); */}
		</script>
		
        </div>


export default footComp