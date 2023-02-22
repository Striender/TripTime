import React from 'react';
import Slider from 'react-slick';
import avao1 from '../../assets/images/ava-1.jpg'
import avao2 from '../../assets/images/ava-2.jpg'
import avao3 from '../../assets/images/ava-3.jpg'
import avao4 from '../../assets/images/ava-4.jpg'
import avao5 from '../../assets/images/ava-5.jpg'
import avao6 from '../../assets/images/ava-6.jpg'
import avao7 from '../../assets/images/ava-7.jpg'

const Testimonial = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint :992 ,
                settings: {
                    slideToShow:2,
                    slideToScroll:1,
                    infinite:true,
                    dots : true,
                },
            },
            {
                breakpoint : 576 ,
                settings: {
                    slideToShow:1,
                    slideToScroll:1,
                   
                },
            },

        ]
    }

  return (
    <Slider  {...settings}>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid tenetur voluptate ea iste nulla eligendi laudantium
             quas libero excepturi ut accusantium placeat culpa aliquam
             soluta, perspiciatis non eum minima. In.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={avao4} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Neeraj patel</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid tenetur voluptate ea iste nulla eligendi laudantium
             quas libero excepturi ut accusantium placeat culpa aliquam
             soluta, perspiciatis non eum minima. In.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={avao3} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Harvey Spector</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid tenetur voluptate ea iste nulla eligendi laudantium
             quas libero excepturi ut accusantium placeat culpa aliquam
             soluta, perspiciatis non eum minima. In.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={avao5} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Nityam Sharma</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid tenetur voluptate ea iste nulla eligendi laudantium
             quas libero excepturi ut accusantium placeat culpa aliquam
             soluta, perspiciatis non eum minima. In.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={avao2} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lisa</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid tenetur voluptate ea iste nulla eligendi laudantium
             quas libero excepturi ut accusantium placeat culpa aliquam
             soluta, perspiciatis non eum minima. In.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={avao1} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Avator</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid tenetur voluptate ea iste nulla eligendi laudantium
             quas libero excepturi ut accusantium placeat culpa aliquam
             soluta, perspiciatis non eum minima. In.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={avao6} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Sarthak Pandey</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Aliquid tenetur voluptate ea iste nulla eligendi laudantium
             quas libero excepturi ut accusantium placeat culpa aliquam
             soluta, perspiciatis non eum minima. In.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={avao7} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Urvashi Rakholiya</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
       
    </Slider>
  );
};

export default Testimonial;