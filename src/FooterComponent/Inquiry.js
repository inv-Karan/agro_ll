import React from 'react';

const Inquiry = () => 
<section className="section section--dark-bg">
					<div className="container">
						<div className="section-heading section-heading--center section-heading--white" >
							<h2 className="__title">Get <span>in touch</span></h2>

							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>

						<form className="contact-form js-contact-form" action="#" >
							<div className="row">
								<div className="col-12 col-md-6">
									<div className="input-wrp">
										<input className="textfield" name="name" type="text" placeholder="Name" />
									</div>
								</div>

								<div className="col-12 col-md-6">
									<div className="input-wrp">
										<input className="textfield" name="email" type="text" placeholder="E-mail" />
									</div>
								</div>
							</div>

							<div className="input-wrp">
								<textarea className="textfield" name="message" placeholder="Comments"></textarea>
							</div>

							<button className="custom-btn custom-btn--medium custom-btn--style-3 wide" type="submit" >Send</button>

							<div className="form__note"></div>
						</form>
					</div>
				</section>

export default Inquiry;