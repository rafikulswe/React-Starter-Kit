import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import programmingImg from './../../../../../assets/images/programming.svg';
import desktopImg from './../../../../../assets/images/desktop-solid.svg';
import awsImg from './../../../../../assets/images/aws.svg';
import codeImg from './../../../../../assets/images/code-solid.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faLocationDot, faDesktop, faCheck } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'

import './MainLayout.scss';

export const MainLayout: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <main>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top border-bottom">
                <div className="container px-5">
                    <Link className="navbar-brand" to="/">Assemble Code</Link>
                    <button className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`} onClick={handleCollapse} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isCollapsed ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-3">
                            <li className="nav-item" key={'home'}>
                                <NavLink to={'/'} className="nav-link active">Home</NavLink>
                            </li>
                            <li className="nav-item" key={'service'}>
                                <NavLink to={'/service'} className="nav-link">Service</NavLink>
                            </li>
                            <li className="nav-item" key={'team'}>
                                <NavLink to={'/team'} className="nav-link">Team</NavLink>
                            </li>
                            <li className="nav-item" key={'contact'}>
                                <NavLink to={'/contact-us'} className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                        <NavLink to={'/auth/login'} className="btn btn-sm btn-outline-light ms-3" type="button">Login</NavLink>
                        <NavLink to={'/auth/register'} className="btn btn-sm btn-warning btn-outline-secondary ms-3" type="button">Register</NavLink>
                    </div>
                </div>
            </nav>

            {/* BANNER/SLIDER */}
            <div className={`container pt-5 ${isCollapsed ? 'collapsed-height-adjust' : ''}`}>
                <div className="row align-items-center container container-fluid pt-5 banner-content">
                    <div className="col-lg-6 p-4">
                        <h1 className="fw-bolder">Build your next project faster with</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias molestiae odio nulla repellat pariatur laborum dolor.</p>
                        <NavLink to={'/'} className="btn btn-lg btn-outline-primary ps-5 pe-5" type="button">View Details</NavLink>
                    </div>
                    <div className="col-lg-6">
                        <img src={programmingImg} alt="banner-image" className="img-fluid" />
                    </div>
                </div>
            </div>

            {/* SERVICES */}
            <div className="service bg-light pb-5">
                <div className="container container-fluid pt-5">
                    <div className="text-center service-title">
                        <h1 className="border-bottom border-primary p-3">Our Services</h1>
                    </div>

                    <div className="row pt-3 service-item">
                        <div className="col-lg-4 text-center">
                            <div className="card bg-light p-3">
                                <div className="img-box rounded-circle p-2 bg-white">
                                    <img src={desktopImg} className="img-circle p-2 img-fluid" height={60} width={80} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Web Application</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to={'/'} className="btn btn-primary">Details</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 text-center">
                            <div className="card bg-light p-3">
                                <div className="img-box rounded-circle p-2 bg-white">
                                    <img src={awsImg} className="img-circle p-2 img-fluid" height={60} width={80} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Cloud Service</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to={'/'} className="btn btn-primary">Details</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 text-center">
                            <div className="card bg-light p-3">
                                <div className="img-box rounded-circle p-2 bg-white">
                                    <img src={codeImg} className="img-circle p-2 img-fluid" height={60} width={80} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Custom Development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to={'/'} className="btn btn-primary">Details</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3 service-item">
                        <div className="col-lg-4 text-center">
                            <div className="card bg-light p-3">
                                <div className="img-box rounded-circle p-2 bg-white">
                                    <img src={codeImg} className="img-circle p-2 img-fluid" height={60} width={80} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Custom Development</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to={'/'} className="btn btn-primary">Details</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 text-center">
                            <div className="card bg-light p-3">
                                <div className="img-box rounded-circle p-2 bg-white">
                                    <img src={desktopImg} className="img-circle p-2 img-fluid" height={60} width={80} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Web Application</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to={'/'} className="btn btn-primary">Details</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 text-center">
                            <div className="card bg-light p-3">
                                <div className="img-box rounded-circle p-2 bg-white">
                                    <img src={awsImg} className="img-circle p-2 img-fluid" height={60} width={80} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Cloud Service</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to={'/'} className="btn btn-primary">Details</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* PRICING */}
            {/* <div className="pricing bg-light pb-5 border-top">
                <div className="container container-fluid pt-5">
                    <div className="text-center pricing-title">
                        <h1 className="border-bottom border-primary p-3">Our Pricing</h1>
                    </div>

                    <div className="row pt-3 pricing-item">
                        <div className="col-lg-3 text-center">
                            <div className="card border-secondary">
                                <div className="card-header">Free</div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bolder">$0/Month</h5>
                                    <p className="card-text">
                                        <ul className="list-unstyled text-start">
                                            <li><FontAwesomeIcon icon={faCheck} /> Some quick example text to build</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> text to build on the card</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> the card title and make up the</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> make up the bulk the card</li>
                                        </ul>
                                    </p>
                                    <NavLink to={'/'} className="btn btn-warning">Hire Now</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 text-center">
                            <div className="card border-success">
                                <div className="card-header">Standard</div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bolder">$20/Month</h5>
                                    <p className="card-text">
                                        <ul className="list-unstyled text-start">
                                            <li><FontAwesomeIcon icon={faCheck} /> Some quick example text to build</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> text to build on the card</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> the card title and make up the</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> make up the bulk the card</li>
                                        </ul>
                                    </p>
                                    <NavLink to={'/'} className="btn btn-warning">Details</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 text-center">
                            <div className="card border-info">
                                <div className="card-header">Medium</div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bolder">$40/Month</h5>
                                    <p className="card-text">
                                        <ul className="list-unstyled text-start">
                                            <li><FontAwesomeIcon icon={faCheck} /> Some quick example text to build</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> text to build on the card</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> the card title and make up the</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> make up the bulk the card</li>
                                        </ul>
                                    </p>
                                    <NavLink to={'/'} className="btn btn-warning">Details</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 text-center">
                            <div className="card border-warning">
                                <div className="card-header">Enterprice</div>
                                <div className="card-body">
                                    <h5 className="card-title fw-bolder">Based on Work</h5>
                                    <p className="card-text">
                                        <ul className="list-unstyled text-start">
                                            <li><FontAwesomeIcon icon={faCheck} /> Some quick example text to build</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> text to build on the card</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> the card title and make up the</li>
                                            <li><FontAwesomeIcon icon={faCheck} /> make up the bulk the card</li>
                                        </ul>
                                    </p>
                                    <NavLink to={'/'} className="btn btn-warning">Details</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className="container">
                <Outlet />
            </div>


            {/* FOOTER */}
            <div className="footer-layout bg-light border-top">
                <footer className="container container-fluid pt-10 pb-5">
                    <div className="row gx-5 p-5">
                        <div className="col-lg-3">
                            <h2>AssembleCode</h2>
                            <p>Build your next project faster with Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="social-link">
                                {/* <ul className="d-flex justify-content-lg-start py-3 list-unstyled">
                                    <li className="shadow p-2 ms-2 bg-body rounded"><NavLink to={'/'}><FontAwesomeIcon icon={faFacebookF} /></NavLink></li>
                                    <li className="shadow p-2 ms-2 bg-body rounded"><NavLink to={'/'}><FontAwesomeIcon icon={faLinkedinIn} /></NavLink></li>
                                    <li className="shadow p-2 ms-2 bg-body rounded"><NavLink to={'/'}><FontAwesomeIcon icon={faTwitter} /></NavLink></li>
                                    <li className="shadow p-2 ms-2 bg-body rounded"><NavLink to={'/'}><FontAwesomeIcon icon={faYoutube} /></NavLink></li>
                                </ul> */}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>Quick Links</h3>
                                    <ul className="list-unstyled">
                                        <li className="pt-1"><NavLink to={'/'} className="nav-link active">Home</NavLink></li>
                                        <li className="pt-1"><NavLink to={'/service'} className="nav-link">Service</NavLink></li>
                                        <li className="pt-1"><NavLink to={'/team'} className="nav-link">Team</NavLink></li>
                                        <li className="pt-1"><NavLink to={'/contact-us'} className="nav-link">Contact Us</NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <h3>Contact Us</h3>
                                    {/* <ul className="list-unstyled">
                                        <li className="pt-1"><FontAwesomeIcon icon={faPhone} /> <NavLink to="tel:+8801517170887">+8801517170887</NavLink></li>
                                        <li className="pt-1"><FontAwesomeIcon icon={faEnvelope} /> <NavLink to="mailto:rafikulswe@gmail.com">rafikulswe@gmail.com</NavLink></li>
                                        <li className="pt-1"><FontAwesomeIcon icon={faLocationDot} /> <span>House: 40/A, Road #7, Shekhertek, Mohammadpur, Dhaka-1207</span></li>
                                    </ul> */}
                                </div>
                                <div className="col-lg-4">
                                    <h3>Newsletter</h3>
                                    <form action="">
                                        <input type="email" placeholder="Email" className="form-control" />
                                        <button type="submit" className="btn btn-primary form-control mt-3">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}
