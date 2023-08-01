import homeBg from './assets/home/home_bg.svg';
import developerCoding from './assets/home/developer_coding.svg';
import customerReview from './assets/home/customer_reviews.svg';
import './App.css'
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar.jsx";
import 'flickity/dist/flickity.min.css';
import Flickity from 'flickity';
import CarouselItem from "./components/carousel/CarouselItem.jsx";

function App() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let elem = document.querySelector('.main-carousel');
        new Flickity(elem, {
            cellAlign: 'left',
            wrapAround: true,
            autoPlay: true
        });
    }, []);
    const toggleMenu = () => {
        setOpen(!open)
    }
    return (
        <div className="font-sans">
            <Navbar onClick={toggleMenu} open={open}/>
            <section style={{backgroundImage: `url(${homeBg})`}}
                     className="h-[80vh] bg-no-repeat bg-contain lg:px-20 py-10 grid md:grid-cols-2   px-8 max-w-7xl mx-auto">
                <div className="flex flex-col gap-10">
                    <h1 className="text-2xl sm:text-5xl font-semibold font-serif leading-loose">
                        Transforming Your Ideas Into Groundbreaking Software Solutions.
                    </h1>
                    <p className="text-gray-500 text-lg sm:text-2xl">
                        At Kodesoft, We Are A Leading Software Development Company That Strives To Unleash The Power Of
                        Innovation
                    </p>
                    <div>
                        <a href=""
                           className="text-primary border-2 border-primary px-10 py-4 inline-flex font-semibold rounded-l0 text-lg hover:bg-primary hover:text-white  hover:scale-105 transition ease-in-out delay-150">
                            Read More <i className="bi bi-arrow-right ml-3"></i>
                        </a>
                    </div>
                </div>
                <div>
                </div>
            </section>

            <section className="w-full relative">
                <div className="absolute bg-primary h-2/3 w-full"></div>
                <div className="relative grid lg:grid-cols-2 text-white">
                    <div className="hidden lg:block bg-white rounded-r-2xl border-t px-20">
                        <img src={developerCoding} alt="" className="w-2/3 object-cover"/>
                    </div>
                    <div className="p-10 ">
                        <h1 className="xl:text-5xl text-2xl font-serif font-semibold leading-tight tracking-wide ">
                            Experience The Future Of Software Development With Kodesoft
                        </h1>
                        <p className="text-xl my-8 text-gray-300 tracking-wide leading-relaxed">
                            Welcome To Kodesoft, Where Innovation Meets Excellence. Our Passion For Software Development
                            Drives Us To Deliver Exceptional Solutions That Redefine Possibilities.
                        </p>
                        <a href=""
                           className="px-8 bg-success font-semibold tracking-wider text-white py-4 border-2  hover:bg-light hover:text-success ">
                            Message Us
                        </a>
                    </div>
                </div>

                <div className="lg:px-20 p-8 relative z-10">
                    <h1 className="text-center text-3xl  font-semibold font-serif text-white my-10">
                        Different Services We Offer In Kodesoft
                    </h1>
                    <div className="grid  md:grid-cols-3 gap-10 my-10 max-w-7xl mx-auto">
                        <div className="bg-gray-100 rounded-xl px-10 py-16 border">
                            <div className="flex justify-center">
                                <i className="bi bi-code-square text-7xl"></i>
                            </div>
                            <h1 className="text-center text-2xl font-semibold my-10 font-serif">
                                Web Development
                            </h1>
                            <p className="text-gray-500 text-center leading-loose">
                                Creating websites and web applications using various programming languages and
                                frameworks.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-10 py-16 border">
                            <div className="flex justify-center">
                                <i className="bi bi-app-indicator text-7xl"></i>
                            </div>
                            <h1 className="text-center text-2xl font-semibold my-10 font-serif">
                                Mobile App Dev.
                            </h1>
                            <p className="text-gray-500 text-center leading-loose">
                                Designing and developing mobile applications for iOS, Android, or cross-platform
                                environments
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl px-10 py-16 border">
                            <div className="flex justify-center">
                                <i className="bi bi-terminal text-7xl"></i>
                            </div>
                            <h1 className="text-center text-2xl font-semibold my-10 font-serif">
                                UI/UX Design
                            </h1>
                            <p className="text-gray-500 text-center leading-loose">
                                Creating user-friendly interfaces and visually appealing designs to enhancethe user
                                experience.
                            </p>
                        </div>
                    </div>

                    <div className="my-10 text-center">
                        <a href="" className=" text-primary font-semibold">
                            View More
                            <i className="bi bi-arrow-right ml-3"></i>
                        </a>
                    </div>

                    <div
                        className="bg-gray-100 py-4 px-6  max-w-7xl mx-auto grid md:grid-cols-3 gap-4 mb-10 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div
                                className="flex rounded-full bg-success/20 text-success items-center justify-center h-12 w-12 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check"
                                     width="24" height="24" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-3xl">100+</div>
                                <div className="text-sm text-gray-600">Project done</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="flex rounded-full bg-success/20 text-success items-center justify-center h-12 w-12 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-trending-up" width="40" height="40"
                                     viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 17l6 -6l4 4l8 -8"></path>
                                    <path d="M14 7l7 0l0 7"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-3xl">3+ years</div>
                                <div className="text-sm text-gray-600">Of Experience</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="flex rounded-full bg-success/20 text-success items-center justify-center h-12 w-12 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users"
                                     width="40" height="40" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-semibold text-3xl">2k+</div>
                                <div className="text-sm text-gray-600">Happy clients</div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

            {/*customers review*/}
            <section className="my-10">
                <h1 className="text-3xl text-center my-10 font-semibold font-serif">
                    What Our Client Say About Us
                </h1>
                <div className="grid lg:grid-cols-2 max-w-7xl mx-auto">
                    <div>
                        <img src={customerReview} alt="Customer reviews" className="w-full h-80 object-contain"/>
                    </div>
                    <div className="bg-primary text-white py-10">
                        <div className="main-carousel">
                            <CarouselItem itemCount={4} name="Jean Paul Byiringiro" position="CEO, Kodesoft"/>
                            <CarouselItem itemCount={3} name="John Doe" position="Senior Software Developer,ORION"/>
                            <CarouselItem itemCount={5} name="Jane Doe" position="Accountant ,Besoft"/>
                            <CarouselItem itemCount={4} name="Emerlad You" position="Database Administrator,RURA"/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default App
