import React from 'react';
import SectionHeading from './SectionHeading';
import Counter from './Counter';
import Timeline from './Timeline';
import Team from './Team'
import Partners from './Partners';

const AboutPageContainer = () => 
    <div>
        {/* <main role="main">
			<link rel="stylesheet" href="css/style.min.css" type="text/css">
				<script>
					(function(w, d) {
						var m = d.getElementsByTagName('main')[0],
							s = d.createElement("script"),
							v = !("IntersectionObserver" in w) ? "8.17.0" : "10.19.0",
							o = {
								elements_selector: ".lazy",
								data_src: 'src',
								data_srcset: 'srcset',
								threshold: 500,
								callback_enter: function (element) {

								},
								callback_load: function (element) {
									element.removeAttribute('data-src');

									oTimeout = setTimeout(function ()
									{
										clearTimeout(oTimeout);

										AOS.refresh();
									}, 1000);
								},
								callback_set: function (element) {

								},
								callback_error: function(element) {
									element.src = "https://placeholdit.imgix.net/~text?txtsize=21&amp;txt=Image%20not%20load&amp;w=200&amp;h=200";
								}
							};
						s.type = 'text/javascript';
						s.async = true; // This includes the script as async. See the "recipes" section for more information about async loading of LazyLoad.
						s.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@" + v + "/dist/lazyload.min.js";
						m.appendChild(s);
						// m.insertBefore(s, m.firstChild);
						w.lazyLoadOptions = o;
					}(window, document));
				</script><script type="text/javascript" async="" src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@10.19.0/dist/lazyload.min.js"></script> */}

                <SectionHeading />
                <Counter />
                <Timeline />
                <Team />
                <Partners />
            {/* </link>
        </main> */}
    </div>

export default AboutPageContainer;
