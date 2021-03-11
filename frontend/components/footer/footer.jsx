import React from "react";
import { Links } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer-main-cntr">
				<section className="f1-bg">
					<div className="f1-cntr">
						<div>
							<p>
								Track every mile you run, connect your devices and get closer to
								your next PR.
							</p>
						</div>
					</div>
				</section>

				<section className="f2-bg">
					<div className="f2-cntr">
						<div className="f2-content">
							<img
								className="f2c-left"
								src={window.footerLogo}
								alt="Run with me footer logo"
							/>
							<div className="f2c-right">
								<div className="f2 ride">Ride</div>
								<div className="f2 walk">Walk</div>
								<div className="f2 fitness">Fitness</div>
							</div>
						</div>
					</div>
				</section>

				<section className="f3-bg">
					<div className="f3-cntr">
						<div className="f3-content">
							<img
								src={window.footerPhone}
								alt="phone photo"
								className="footer-iphone"
							/>
							<div className="f3c-right">
								<div className="f3cr social">
									<ul>
										<li className="f3cr-link-headers">Github</li>
										<li>Check out my code here</li>
										<li>Follow me on GitHub</li>
										<li></li>
									</ul>
								</div>
								<div className="f3cr help">
									<ul>
										<li className="f3cr-link-headers">Help</li>
									</ul>
								</div>
								<div className="f3cr about">
									<ul>
										<li className="f3cr-link-headers">About us</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="f4-bg">
					<div className="f4-cntr">
						<div className="f4-content">Created by Daniel Ahn</div>
					</div>
				</section>
			</footer>
		);
	}
}

export default Footer;
