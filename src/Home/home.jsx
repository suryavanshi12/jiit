import Arrow from '../assets/images/arrow.png';
import Publication from '../assets/images/publication.png';
import Funding from '../assets/images/funding.png';
import Startup from '../assets/images/startup.png';
import NAAC from '../assets/images/naac-logo.png';
import AICTE from '../assets/images/aicte.png';
import Campus1 from '../assets/images/campus1.png';
import Campus2 from '../assets/images/campus2.png';
import Campus3 from '../assets/images/campus3.png';
import Cam1 from '../assets/images/cam1.png';
import Cam2 from '../assets/images/cam2.png';
import Cam3 from '../assets/images/cam3.png';
import Cam4 from '../assets/images/cam4.png';
import Cam5 from '../assets/images/cam5.png';
import Cam6 from '../assets/images/cam6.png';
import Cam7 from '../assets/images/cam7.png';
import Cam8 from '../assets/images/cam8.png';
import Cam9 from '../assets/images/cam9.png';
import Cam10 from '../assets/images/cam10.png';
import LinkedIn from '../assets/images/linkedin.png';
import Cisco from '../assets/images/cisco.png';
import Amazon from '../assets/images/amazon.png';
import Morgan from '../assets/images/morgan.png';
import Playsimple from '../assets/images/playsimple.png';
import ZS from '../assets/images/zs.png';
import SAP from '../assets/images/sap.png';
import American from '../assets/images/american.png';
import Atlassian from '../assets/images/atlassian.png';
import Google from '../assets/images/google.png';
import Paypal from '../assets/images/paypal.png';
import Goldman from '../assets/images/goldman.png';
import Snackmagic from '../assets/images/snackmagic.png';
import Innovation1 from '../assets/images/innovation1.png';
import Innovation2 from '../assets/images/innovation2.png';
import Startup1 from '../assets/images/startup1.png';
import Startup2 from '../assets/images/startup2.png';
import Speak from '../assets/images/speak.png';
import ArrowLeft from '../assets/images/arrow-left.png';
import Group from '../assets/images/group.png';
import Search from '../assets/images/svg/search.svg';
import Happy1 from '../assets/images/happy1.jpg';
import Happy2 from '../assets/images/happy2.jpg';
import SecImg1 from '../assets/images/sec-img1.jpg';
import SecImg2 from '../assets/images/sec-img2.jpg';
import SecImg3 from '../assets/images/sec-img3.jpg';
import SecImg4 from '../assets/images/sec-img4.jpg';
import SecImg5 from '../assets/images/sec-img5.jpg';
import SecImg6 from '../assets/images/sec-img6.jpg';
import SecImg7 from '../assets/images/sec-img7.jpg';
import SecImg8 from '../assets/images/sec-img8.jpg';
import SecImg9 from '../assets/images/sec-img9.jpg';
import SecImg10 from '../assets/images/sec-img10.jpg';
import SecImg11 from '../assets/images/sec-img11.jpg';
import SecImg12 from '../assets/images/sec-img12.jpg';
import './home.sass';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import 'animate.css';
import '../assets/style/icomoon.css';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Home() {

    const { ref, inView } = useInView();

    return (
        <>
            <section>
                <div className='container'>
                    <div className="banner-slider">
                        <Swiper
                            modules={[Pagination]}
                            autoplay={{ delay: 3000 }}
                            pagination={{
                                clickable: true,
                                el: ".swiper-pagination",
                                vertical: true,
                            }}
                            loop={true}
                            speed={0}
                        >
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="slide-content banner1">
                                    <div className="text-box">
                                        <h2 className='color-change'>Explore Life-Changing <br /> Opportunities</h2>
                                        <p>Providing the best of everything <br /> for overall growth</p>
                                        <button className="btn">Know More About the JIIT →</button>

                                        <div className="stats" ref={ref}>
                                            <div>
                                                <h4>{inView && <CountUp start={0} end={712} duration={4.5} />}</h4>
                                                <h5>Placement</h5>
                                            </div>
                                            <div>
                                                <h4>{inView && <CountUp start={0} end={88} duration={4.5} />}</h4>
                                                <h5>Funded Projects</h5>
                                            </div>
                                            <div>
                                                <h4>{inView && <CountUp start={0} end={30} duration={4.5} />}</h4>
                                                <h5>Patents</h5>
                                            </div>
                                            <div>
                                                <h4>{inView && <CountUp start={0} end={6719} duration={4.5} />}</h4>
                                                <h5>Publications</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="slide-content banner2">
                                    <div className="text-box">
                                        <h2>Giving wings to dreams</h2>
                                        <p>Grooming the future of the world with education</p>
                                        <button className="btn">Know More About the JIIT →</button>

                                        <div className="stats">
                                            <div>
                                                <h4>712</h4>
                                                <h5>Placement</h5>
                                            </div>
                                            <div>
                                                <h4>88</h4>
                                                <h5>Funded Projects</h5>
                                            </div>
                                            <div>
                                                <h4>30</h4>
                                                <h5>Patents</h5>
                                            </div>
                                            <div>
                                                <h4>6719</h4>
                                                <h5>Publications</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 3 */}
                            <SwiperSlide>
                                <div className="slide-content  banner3">
                                    <div className="text-box">
                                        <h2>Join to reinvent yourself</h2>
                                        <p>Ranked in Top 100 Engineering institutions <br /> by MOE since 2016</p>

                                        <div className="stats">
                                            <div>
                                                <h4>712</h4>
                                                <h5>Placement</h5>
                                            </div>
                                            <div>
                                                <h4>88</h4>
                                                <h5>Funded Projects</h5>
                                            </div>
                                            <div>
                                                <h4>30</h4>
                                                <h5>Patents</h5>
                                            </div>
                                            <div>
                                                <h4>6719</h4>
                                                <h5>Publications</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 4 */}
                            <SwiperSlide>
                                <div className="slide-content banner4">
                                    <div className="text-box">
                                        <h2>State of the art infrastructure</h2>
                                        <p>Providing most advanced facilities to help<br />students attain academic & career goals</p>

                                        <div className="stats">
                                            <div className="stats">
                                                <div>
                                                    <h4>712</h4>
                                                    <h5>Placement</h5>
                                                </div>
                                                <div>
                                                    <h4>88</h4>
                                                    <h5>Funded Projects</h5>
                                                </div>
                                                <div>
                                                    <h4>30</h4>
                                                    <h5>Patents</h5>
                                                </div>
                                                <div>
                                                    <h4>6719</h4>
                                                    <h5>Publications</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        {/* Right Side Pagination Dots */}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>

            <section className="section-one">
                <div className='container'>
                    <div className='parent-slider-section box bottom show'>
                        <div className='slider-section-content'>
                            <h3>Our Strength</h3>
                            <p>Jaypee Institute of Information Technology (JIIT) is a premier institution for a reason. We align our curriculum with the latest <br /> industry trends, ensuring you graduate with the necessary skills and knowledge sought by the top players in various industries. </p>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".next-one",
                                prevEl: ".prev-one",
                            }}
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 15 },
                                768: { slidesPerView: 2, spaceBetween: 20 },
                                1024: { slidesPerView: 5, spaceBetween: 30 },
                            }}
                        >
                            <SwiperSlide>
                                <div className="strength-card active">
                                    <div className='strength-card-border'>
                                        <div className="card-icon"><img src={Publication} alt='' /></div>
                                        <div className="card-title">6719</div>
                                        <div className="card-subtitle">Publications</div>
                                        <div className="card-description">Impactful research through JIIT's publications</div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Card 2 */}
                            <SwiperSlide>
                                <div className="strength-card">
                                    <div className='strength-card-border'>
                                        <div className="card-icon"><img src={Funding} alt='' /></div>
                                        <div className="card-title">88</div>
                                        <div className="card-subtitle">Funded Projects</div>
                                        <div className="card-description">Supporting innovation with funded projects</div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Card 3 */}
                            <SwiperSlide>
                                <div className="strength-card">
                                    <div className='strength-card-border'>
                                        <div className="card-icon"><img src={Startup} alt='' /></div>
                                        <div className="card-title">16</div>
                                        <div className="card-subtitle">Startups</div>
                                        <div className="card-description">Empowering ideas into startups at JIIT</div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Card 4 */}
                            <SwiperSlide>
                                <div className="strength-card">
                                    <div className='strength-card-border'>
                                        <div className="card-icon"><img src={NAAC} alt='' /></div>
                                        <div className="card-subtitle">Accreditation</div>
                                        <div className="card-description">Accredited by NAAC with 'A' grade in 2023</div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Card 5 */}
                            <SwiperSlide>
                                <div className="strength-card">
                                    <div className='strength-card-border'>
                                        <div className="card-icon"><img src={AICTE} alt='' /></div>
                                        <div className="card-subtitle">Approval</div>
                                        <div className="card-description">AICTE approved Institution since 2018</div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="strength-card">
                                    <div className='strength-card-border'>
                                        <div className="card-icon"><img src={Publication} alt='' /></div>
                                        <div className="card-title">6719</div>
                                        <div className="card-subtitle">Publications</div>
                                        <div className="card-description">Impactful research through JIIT's publications</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        {/* Custom navigation for FIRST */}
                        <div className='custom-navigation'>
                            <div className="prev-one"><img src={Arrow} alt='' /></div>
                            <div className="next-one"><img src={Arrow} alt='' /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="campus-section">
                        <h3>JIIT Campus</h3>
                        <div className='campus-flex'>
                            <div className='campus-item'>
                                <img src={Campus1} alt='' />
                                <div className='campus-detail'>
                                    <h6>Main Campur</h6>
                                    <span class="icon-map"></span>
                                </div>
                            </div>
                            <div className='campus-item'>
                                <img src={Campus2} alt='' />
                                <div className='campus-detail'>
                                    <h6>Wish Town Campus</h6>
                                    <span class="icon-map"></span>
                                </div>
                            </div>
                            <div className='campus-item'>
                                <img src={Campus3} alt='' />
                                <div className='campus-detail'>
                                    <h6>Vidya Vihar</h6>
                                    <span class="icon-map"></span>
                                </div>
                            </div>
                            <div className='campus-item'>
                                <p>Jaypee Institute of Information Technology, has a campus <b>spanning</b><span>18.25</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong>acres</strong></p>
                            </div>
                        </div>
                        <div className='campus-slider'>
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: ".next-two",
                                    prevEl: ".prev-two",
                                }}
                                spaceBetween={30}
                                slidesPerView={2}
                                breakpoints={{
                                    320: { slidesPerView: 3, spaceBetween: 15 },
                                    768: { slidesPerView: 5, spaceBetween: 20 },
                                    1024: { slidesPerView: 10, spaceBetween: 30 },
                                }}
                            >
                                <SwiperSlide>
                                    <img src={Cam1} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam2} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam3} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam4} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam5} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam6} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam7} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam8} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam9} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam10} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Cam1} alt='' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>


            <section className='placement-section'>
                <div className="container">
                    <div className='placement-section-bg'>
                        <div class="placement-section-content">
                            <div>
                                <h3>Placement</h3>
                                <h4>Highlights</h4>
                            </div>
                            <p>With our excellent placement record, you can land your dream role. Top employers recruit from JIIT, offering top salary packages and <br /> establishing a lucrative career ahead.</p>
                        </div>
                        <div className='placement-flex'>
                            <div className='placement-item box1'>
                                <h4>₹60.71 LPA</h4>
                                <p>Highest Package<br />Offered by LinkedIn</p>
                            </div>
                            <div className='placement-item box2'>
                                <h4>252</h4>
                                <p>Companies Visited<br />In 2024</p>
                            </div>
                            <div className='placement-item box3'>
                                <h4>1667</h4>
                                <p>Placements & Internship<br />Offered - 2024 Batch</p>
                            </div>
                            <div className='placement-item box4'>
                                <h4>₹1.25 LPM </h4>
                                <p>Highest Internship<br />Stipend Offered by Microsoft</p>
                            </div>
                        </div>
                        <div className='placement-company-flex'>
                            <div className='company-content'>
                                <h4>Key Recruiters</h4>
                                <p>Placements Companies</p>
                            </div>
                            <div className='company-slider'>
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        nextEl: ".next-two",
                                        prevEl: ".prev-two",
                                    }}
                                    spaceBetween={30}
                                    slidesPerView={2}
                                    breakpoints={{
                                        320: { slidesPerView: 2, spaceBetween: 15 },
                                        768: { slidesPerView: 5, spaceBetween: 20 },
                                        1024: { slidesPerView: 6.7, spaceBetween: 30 },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={LinkedIn} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Happy1} alt='' />
                                            <img src={Happy2} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Cisco} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Amazon} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Morgan} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Playsimple} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={ZS} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={SAP} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={American} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Atlassian} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Google} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Paypal} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Goldman} alt='' />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='company-logo'>
                                            <img src={Snackmagic} alt='' />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className='innovation-top-section'>
                        <div className='innovation-content'>
                            <h3>Innovation Hub</h3>
                            <p>Be creative, collaborative, and engage in entrepreneurial roles with the JIIT Innovation Hub. It is a <br /> place for aspiring innovators to find resources and support to turn their ideas into reality.</p>
                            <div className='pagination-btns'>
                                <button className='bg'>Center of Excellence</button>
                                <button>Innovation Projects</button>
                                <button>Giant Projects</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='innovation-bottom-section'>
                    <div className='container'>
                        <div className='innovation-flex'>
                            <div className='innovation-card'>
                                <div className='image'><img src={Innovation1} alt='' /></div>
                                <h5>Development of fortified periodic cookies<br /> using edible seeds</h5>
                                <div className='box-flex'>
                                    <span><b>Year :</b> 2022-23</span>
                                    <span><b>Department :</b> Biotechnology</span>
                                    <span><b>Coordinator :</b> Dr Smriti Gaur</span>
                                </div>
                            </div>
                            <div className='innovation-card'>
                                <div className='image'><img src={Innovation2} alt='' /></div>
                                <h5>Development of fortified periodic cookies<br /> using edible seeds</h5>
                                <div className='box-flex'>
                                    <span><b>Year :</b> 2022-23</span>
                                    <span><b>Department :</b> Biotechnology</span>
                                    <span><b>Coordinator :</b> Dr Smriti Gaur</span>
                                </div>
                            </div>
                        </div>
                        <button><span class="icon-new-tab"></span> View All</button>
                        <div className='child-section'>
                            <h3>Startups</h3>
                            <p>Econea Selini Pvt Ltd</p>
                            <p className='while'><b>Student Name : </b> &nbsp; &nbsp; &nbsp; Divyansh Chauhan, Rika Verma</p>
                            <div className='startup-box'>
                                <img src={Startup1} alt='' />
                                <div className='startup-box-content'>
                                    <p><b>Business Idea :</b> We have 3 verticals of business. Namely Nea Selini, Barter with Nea and Remix by Nea. At Nea Selini shop we upcycle deadstock rejects into ne...</p>
                                </div>
                            </div>
                            <div className='read-more'><button><span class="icon-new-tab"></span></button></div>
                            <span></span>
                            <p>Econea Selini Pvt Ltd</p>
                            <p className='while'><b>Student Name : </b> &nbsp; &nbsp; &nbsp; Divyansh Chauhan, Rika Verma</p>
                            <div className='startup-box'>
                                <img src={Startup2} alt='' />
                                <div className='startup-box-content'>
                                    <p><b>Business Idea :</b> We have 3 verticals of business. Namely Nea Selini, Barter with Nea and Remix by Nea. At Nea Selini shop we upcycle deadstock rejects into ne...</p>
                                </div>
                            </div>
                            <div className='read-more'><button><span class="icon-new-tab"></span></button></div>
                            <div className='read-more'><button className='view-all'><span class="icon-new-tab"></span> View All</button></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="spotlight-section">
                <div className="spotlight-left">
                    <h3>In Spotlights</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="read-btn"><span class="icon-new-tab"></span> Read More</button>
                    <span></span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="read-btn"><span class="icon-new-tab"></span> Read More</button>

                    <button className="view-all"><span class="icon-new-tab"></span> View All</button>
                </div>

                <div className="spotlight-right">
                    <div className="overlay-content">
                        <h3>ALUMNI</h3>
                        <p>JIIT alumni exemplify excellence and <br /> accomplishment across diverse fields.</p>

                        <div className="alumni-stats">
                            <div className="stat">
                                <h3>1000+</h3>
                                <p>CIVIL <br /> SERVANTS</p>
                            </div>
                            <div className="one">
                                <h3>150+</h3>
                                <p>CEO’s ACROSS <br /> THE GLOBE</p>
                            </div>
                            <div className="stat">
                                <h3>100+</h3>
                                <p>ALUMNI ACROSS <br /> THE GLOBE</p>
                            </div>
                        </div>

                        <button className="alumni-btn">
                            <span class="icon-new-tab"></span> Alumni Cell
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='addmission-section'>
                        <div className='addmission-left-sec'>
                            <h3>Latest</h3>
                            <p>Announcements</p>
                            <div className='addmision-box'>
                                <h4>Admission 2025</h4>
                                <span></span>
                                <p>Latest @ University</p>
                            </div>
                            <div className='speak-section'>
                                <img src={Speak} alt='' />
                            </div>
                        </div>
                        <div className='addmission-right-sec'>
                            <div className='content-scroll'>
                                <p><img src={ArrowLeft} alt='' /> Corrigendum for EOI for Extreme Cold Weather Clothing: "The last date for issuing of EOI is extended till 10th June 2024 (Monday) and the last date for submission of filled Expression of Interest (EOI) is extended till 20th June 2024 (Thursday) by 05:00 PM."</p>
                                <p><img src={ArrowLeft} alt='' /> BTech (Direct Admission-10+2 based) in EE(VLSI), EC(ACT), ECM, M&C</p>
                                <p><img src={ArrowLeft} alt='' /> BTech (Direct Admission-10+2 based) in EE(VLSI), EC(ACT), ECM, M&C
                                    (Last date 31 May 2024)</p>
                                <p><img src={ArrowLeft} alt='' /> BTech Biotechnology (Last date 15 June 2024)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='group-section-flex'>
                    <div className='group-image'>
                        <img src={Group} alt='' />
                    </div>
                    <div className='group-contact'>
                        <h4>Find Your Program</h4>
                        <p>At JIIT, you’ll find a program that aligns aptly with your academic interests and career aspirations. Leave the crowd and make your own path.</p>
                        <div className='group-btns'>
                            <button>Undergraduate</button>
                            <button>Graduate</button>
                            <button>Doctoral</button>
                        </div>
                        <form>
                            <select>
                                <option>Search Course and Programs</option>
                                <option>Search Course and Programs</option>
                                <option>Search Course and Programs</option>
                                <option>Search Course and Programs</option>
                            </select>
                            <button>Search <img src={Search} alt='' /></button>
                        </form>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className='innovation-top-section'>
                        <div className='innovation-content'>
                            <h3>What’s Happening</h3>
                            <p>@ JIIT</p>
                        </div>
                    </div>
                </div>
                <div className='innovation-bottom-section second-section'>
                    <div className='container'>
                        <div className='innovation-flex'>
                            <div className='innovation-card'>
                                <div className='image'><img src={Happy1} alt='' /></div>
                                <h5>JULY 01 2024 | 11:00 AM</h5>
                                <div className='box-flex'>
                                    <p>Dept of CSE & IT is organizing a 2-week Summer School on "Emerging Trends in Software Development: Tools and Techniques" from 01 -13 July 2024</p>
                                    <button class="read-btn"><span class="icon-new-tab"></span> Read More</button>
                                </div>
                            </div>
                            <div className='innovation-card'>
                                <div className='image'><img src={Happy2} alt='' /></div>
                                <h5>JULY 16 2024 | 01:00 PM</h5>
                                <div className='box-flex'>
                                    <p>Dept of PMSE is organizing One Week FDP on “Computational techniques using High Performance Computing (HPC) in Physical Sciences” from 16th – 22nd July 2024</p>
                                    <button class="read-btn"><span class="icon-new-tab"></span> Read More</button>
                                </div>
                            </div>
                        </div>
                        <button><span class="icon-new-tab"></span> View All</button>
                        <div className='child-section color-change'>
                            <h3>Event Archive</h3>
                            <p className='while'>Jaypee Business School wishes a heartfelt congratulations to Vansh Chopra for his placement in Dynamics Archer.</p>
                            <p><b>May 28, 2024</b></p>
                            <p className='while'>Jaypee Business School proudly wishes a heartfelt congratulations to Rishab Tyagi and Aditya Sharma for their successful placement in IGT Solutions.</p>
                            <p><b>May 28, 2024</b></p>
                            <p className='while'>With an unwavering commitment to empowering and inspiring students.</p>
                            <p><b>May 28, 2024</b></p>
                            <p className='while'>A truly enlightening session by Mr. Manoj Kumar Sharma on Corporate Governance and Ethics</p>
                            <p><b>May 28, 2024</b></p>
                            <div class="read-more">
                                <button class="view-all"><span class="icon-new-tab btn-color"></span> View All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="life-section">
                <div className="container">
                    <div class="text-content">
                        <h3>Life JIIT</h3>
                        <p>Get a sneak peek into the dynamic world of JIIT, where we not only focus on academics,
                            but focus beyond the classroom to give you an <br /> enriching and vibrant campus experience.
                            Come together and create memories that will last a lifetime.</p>
                    </div>
                    <div className="image-grid">
                        <div className="image-card">
                            <img src={SecImg1} alt='' />
                            <img src={SecImg2} alt='' />
                        </div>
                        <div className="image-card">
                            <img src={SecImg3} alt='' />
                            <img src={SecImg4} alt='' />
                        </div>
                        <div className="image-card">
                            <img src={SecImg5} alt='' />
                            <img src={SecImg6} alt='' />
                        </div>
                        <div className="image-card">
                            <img src={SecImg7} alt='' />
                            <img src={SecImg8} alt='' />
                        </div>
                        <div className="image-card">
                            <img src={SecImg9} alt='' />
                            <img src={SecImg10} alt='' />
                        </div>
                        <div className="image-card">
                            <img src={SecImg11} alt='' />
                            <img src={SecImg12} alt='' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='university'>
                <div className='container'>
                    <div className='university-section'>
                        <div className="orange-box">
                            <h3>Jaypee<br />Universities</h3>
                        </div>
                        <div className="university-grid">
                            <div className="university-card">
                                <img src={Campus1} alt='' />
                                <div className="overlay">JIIT, Noida</div>
                            </div>
                            <div className="university-card">
                                <img src={Campus2} alt='' />
                                <div className="overlay">JIIT, Noida</div>
                            </div>
                            <div className="university-card">
                                <img src={Campus3} alt='' />
                                <div className="overlay">JIIT, Noida</div>
                            </div>
                            <div className="university-card">
                                <img src={Campus1} alt='' />
                                <div className="overlay">JIIT, Noida</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
