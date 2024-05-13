
import React, { useState, useEffect, useRef  } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'
import rightarrow from '../../images/icons arrow-right.png'
import earbuds from '../../images/earbuds.png'
import dropp from '../../images/Frame 883.png'
import vector from '../../images/Vector.png'
import keybad from '../../images/Frame 611.png'
import rating from '../../images/Frame 566.png'
import keyboard from '../../images/Frame 612.png'
import lcd from '../../images/Frame 613.png'
import chair from '../../images/chair.png'
import leftArrow from '../../images/Fill With Left Arrow.png'
import rightArrow from '../../images/Fill with Right Arrow.png'
import phone from '../../images/Category-CellPhone.png'
import heart from '../../images/Fill Heart.png'
import jbl from '../../images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
import playstation from '../../images/ps5-slim-goedkope-playstation_large 1.png'
import perfume from '../../images/perfume1.png'
import perfume2 from '../../images/pefume2.png'
import girl from '../../images/attractive-woman-wearing-hat-posing-black-background 1.png'
import service from '../../images/Services.png'
import service2 from '../../images/Services (1).png'
import service3 from '../../images/Services (2).png'
import categoryComputer from '../../images/Category-Computer.png'
import Gamepad from '../../images/Category-Gamepad.png'
import Headphone from '../../images/Category-Headphone.png'
import SmartWatch from '../../images/Category-SmartWatch.png'








// import shiping3 from '../../images/united-states-of-america.svg'
import './Home.css';



{/* ...Timer clock... */}
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span>{timeLeft.days}</span>
        <p>Days</p>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.hours}</span>
        <p>Hours</p>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.minutes}</span>
        <p>Minutes</p>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.seconds}</span>
        <p>Seconds</p>
      </div>
    </div>
  );
};


{/* End...Timer clock...End */}





// ..crousel..//
const items = [
  { id: 1, title: 'Item 1', photo: keybad ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating },
  { id: 2, title: 'Item 2', photo: keyboard ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 3, title: 'Item 3', photo: lcd ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 4, title: 'Item 4', photo: chair ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 4, title: 'Item 4', photo: chair ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 4, title: 'Item 4', photo: chair ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 4, title: 'Item 4', photo: chair ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 1, title: 'Item 1', photo: keybad ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating },
  { id: 2, title: 'Item 2', photo: keyboard ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 3, title: 'Item 3', photo: lcd ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 4, title: 'Item 4', photo: chair ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 4, title: 'Item 4', photo: chair ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 4, title: 'Item 4', photo: chair ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  { id: 4, title: 'Item 4', photo: chair ,para:'HAVIT HV-G92 Gamepad',price:'Rs.1400',photo2:rating  },
  // Add more items as needed
];



const category = [
  { id: 1, title: 'Item 1', photo: phone ,para:'phone',},
  { id: 1, title: 'Item 1', photo: categoryComputer ,para:'computers',},
  { id: 1, title: 'Item 1', photo: SmartWatch ,para:'watches',},
  { id: 1, title: 'Item 1', photo: Headphone ,para:'headphone',},
  { id: 1, title: 'Item 1', photo: Gamepad ,para:'gamepad',},
  { id: 1, title: 'Item 1', photo: phone ,para:'phone',},
  { id: 1, title: 'Item 1', photo: phone ,para:'phone',},
  { id: 1, title: 'Item 1', photo: phone ,para:'phone',},
  // Add more items as needed
];


const Home = () => {

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <rightArrow />,
    prevArrow: <leftArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const secondsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  const thirdsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows:2,
    nextArrow: <rightArrow />,
    prevArrow: <leftArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


 

  const targetDate = new Date('2024-12-31T23:59:59');


  // function myBtn() {
  //   var element = document.getElementsByClassName("btn-onhover");
  //   element.classList.toggle("active");
  // }
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  return (
    
    <>
 <section className='section1'>
  <div className="container">

    <div className='home-parent-flex'>
  <div className='home-parent-left'>
    <ul>
      <div className="li-items">
        <li   onClick={() =>
            section1.current.scrollIntoView({
              behavior: "smooth",
              block: "start"
            })
          }
          >
            <pre>Flash Sales</pre></li>
        <img src={vector}/>
        </div>

        <div className="li-items">
        <li onClick={() =>
            section2.current.scrollIntoView({
              behavior: "smooth",
              block: "start"
            })
          }><pre>Browse by categories</pre></li>
        <img src={vector}/>
        </div>

        <div className="li-items"   onClick={() =>
            section3.current.scrollIntoView({
              behavior: "smooth",
              block: "start"
            })
          }>
        <li ><pre>Best Selling Product</pre></li>
        <img src={vector}/>
        </div>

        <div className="li-items" onClick={() =>
            section4.current.scrollIntoView({
              behavior: "smooth",
              block: "start"
            })
          }>
        <li><pre>Explore our Products</pre></li>
        <img src={vector}/>
        </div>
   
    
    </ul>
  </div>
<div className='home-parent'>
  <div className='buttom-circles'>
    <img src={dropp}/>
  </div>
<div className='home-left'>
<div className='sub-home-1'>
<h1>Elevate Your Every Purchase</h1>
<div className='sub-home-0-1'>
<p>Shop Now </p>
<img src={rightarrow}/>
</div>

</div>
</div>
<div className='home-right'>


<div className='sub-home-2'>
<img src={earbuds}/>
</div>
</div>


</div>
</div>
  </div>
 </section>
 





 <section className="section2" ref={section1}>
  <div className='container'>
<div className='home-parent-2'>
<div className='home-sub-parent-2'>
  <div className='green-box'></div>
  <p>Todays</p>
</div>
<div className='clock'>
  <h3>Flash Sales</h3>
  </div>
</div>
{/* ...Timer clock... */}


<div className="App">
     
      <CountdownTimer targetDate={targetDate} />
    </div>


{/*End ...Timer clock...End */}




    <div className="home-crousel">
    <div className="App">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="item">
            <h4>{item.title}</h4>
            <div className='btn-onhover' /*onMouseEnter={myBtn}*/>
            <img src={item.photo}/>
            <button>Add to Cart</button>
            </div>
            <div className='map-content'>
<p>{item.para}</p>
<p>{item.price}</p>
<img src={item.photo2}/>
            </div>
            <div className='wishlist'><img src={heart}/></div>
          </div>
        ))}
      </Slider>
    </div>
    </div>


<div className='product-btn'>
  <button>View all Product</button>
</div>
  </div>
 </section>

 <section className='section2' ref={section2}>
  <div className='container'>

  
 <div className='home-parent-2'>
<div className='home-sub-parent-2'>
  <div className='green-box'></div>
  <p>Categories</p>
</div>
<div className='clock'>
  <h3>Browse By Category</h3>
  </div>
</div>




<div className="home-crousel">
 
   
      <Slider {...secondsettings}>
        {category.map((item) => (
          <div key={item.id} className="category-product">
          <img src={item.photo}/>
            <h4>{item.para}</h4>
          
          </div>
        ))}
      </Slider>
     
    </div>
  
    </div>
 </section>


 <section className='section2'  ref={section3}>
<div className='container'>
 <div className='home-parent-2'>
<div className='home-sub-parent-2'>
  <div className='green-box'></div>
  <p>This Month</p>
</div>
<div className='clock'>
  <h3>Best Selling Products</h3>
  </div>
</div>





<div className="home-crousel">
    <div className="App">
      <Slider {...secondsettings}>
        {items.map((item) => (
          <div key={item.id} className="item">
            <h4>{item.title}</h4>
            <div className='btn-onhover' /*onMouseEnter={myBtn}*/>
            <img src={item.photo}/>
            <button>Add to Cart</button>
            </div>
            <div className='map-content'>
<p>{item.para}</p>
<p>{item.price}</p>
<img src={item.photo2}/>
            </div>
            <div className='wishlist'><img src={heart}/></div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </div>
 </section>



 <section className='section2'>
<div className='container'>
  <div className='jbl-parent'>
<div className='left-jbl'>
  <p>Categories</p>
  <h3>
  Enhance Your Music Experience
  </h3>
  <button>Buy Now</button>
</div>

<div className='right-jbl'>
<img src={jbl}/>
</div>
  </div>

</div>

 </section>

 <section className='section2' ref={section4}>
 <div className='container'>
<div className='home-parent-2'>
<div className='home-sub-parent-2'>
  <div className='green-box'></div>
  <p>Our Products</p>
</div>
<div className='clock'>
  <h3>Explore Our Products</h3>
  </div>
</div>



  <div className="home-crousel">
    <div className="App">
      <Slider {...thirdsettings}>
        {items.map((item) => (
          <div key={item.id} className="item">
            <h4>{item.title}</h4>
            <div className='btn-onhover' /*onMouseEnter={myBtn}*/>
            <img src={item.photo}/>
            <button>Add to Cart</button>
            </div>
            <div className='map-content'>
<p>{item.para}</p>
<p>{item.price}</p>
<img src={item.photo2}/>
            </div>
            <div className='wishlist'><img src={heart}/></div>
          </div>
        ))}
      </Slider>
    </div>
    </div>


<div className='product-btn'>
  <button>View all Product</button>
</div>
  </div>
 </section>


 <section className='section2' >
<div className='container'>
<div className='home-parent-2'>
<div className='home-sub-parent-2'>
  <div className='green-box'></div>
  <p>Featured</p>
</div>
<div className='clock'>
  <h3>New Arrival</h3>
  </div>
</div>

<div className='perfume-parent'>
  <div className='left-perfume'>
<img src={playstation}/>
<div className='left-perfume-absolute'>
<h5>PlayStation 5</h5>
<p>Black and White version of the PS5 coming out on sale.</p>
<p className='shop-now'>Shop Now</p>
</div>
  </div>

  <div className='right-perfume'>
    <div className='girl'>
    <img src={girl}/>

    <div className='left-perfume-absolute-1'>
<h5>Women’s Collections</h5>
<p>Featured woman collections that give you another vibe.</p>
<p className='shop-now'>Shop Now</p>
</div>
    </div>
    <div className='child-perfume'>
<div className='perfume'>
<img src={perfume}/>

<div className='left-perfume-absolute-2'>
<h5>Speakers</h5>
<p>Amazon wireless speakers</p>
<p className='shop-now'>Shop Now</p>
</div>
</div>
<div className='perfume2'><img src={perfume2}/>

<div className='left-perfume-absolute-3'>
<h5>Perfume</h5>
<p>GUCCI INTENSE OUD EDP</p>
<p className='shop-now'>Shop Now</p>
</div>
</div>
</div>
  </div>
</div>

</div>
 </section>



 <section className='section2'>
<div className='container'>
  <div className='service-parent'>
<div className='sub-service'>
  <img src={service}/>
  <h5>FREE AND FAST DELIVERY</h5>
  <p>Free delivery for all orders over $140</p>
</div>

<div className='sub-service'>
  <img src={service2}/>
  <h5>24/7 CUSTOMER SERVICE</h5>
  <p>Friendly 24/7 customer support</p>
</div>

<div className='sub-service'>
  <img src={service3}/>
  <h5>MONEY BACK GUARANTEE</h5>
  <p>We reurn money within 30 days</p>
</div>
  </div>

</div>
 </section>


 



 </>

  )
}

export default Home