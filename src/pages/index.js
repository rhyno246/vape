import Layout from "@/layout/Layout";
import styled from  '../styles/page/home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay , Navigation } from 'swiper/modules';
import Link from "next/link";
const banner = [
  {
    title : 'HQD NEO 15000',
    url : './slide.png',
    description : 'Must be 21+Use only in permitted areas'
  },
  {
    title : 'HQD NEO 16000',
    url : './slide.png',
    description : 'Must be 21+Use only in permitted areas'
  },
  {
    title : 'HQD NEO 17000',
    url : './slide.png',
    description : 'Must be 21+Use only in permitted areas'
  }
];
const newArrival = [
  {
    url : './product.png',
    title : 'XROS 3 NANO',
    oldPrice : '$9.99',
    newPrice : '$8.88'
  },
  {
    url : './product.png',
    title : 'XROS 3 NANO',
    oldPrice : '$9.99',
    newPrice : '$8.88'
  },
  {
    url : './product.png',
    title : 'XROS 3 NANO',
    oldPrice : '$9.99',
    newPrice : '$8.88'
  },
  {
    url : './product.png',
    title : 'XROS 3 NANO',
    oldPrice : '$9.99',
    newPrice : '$8.88'
  },
  {
    url : './product.png',
    title : 'XROS 3 NANO',
    oldPrice : '$9.99',
    newPrice : '$8.88'
  },
  {
    url : './product.png',
    title : 'XROS 3 NANO',
    oldPrice : '$9.99',
    newPrice : '$8.88'
  }
]

export default function Home() {
  return ( 
    <Layout title="Home Page">
      <div className="page pageHome">
        <div className="banner">
          <Swiper pagination={{clickable : true}} 
            modules={[Pagination , Autoplay ]} 
            className={styled.homeBanner}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1200}
            loop={true}
          >
            {
              banner?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.url} className ="img-res" alt={item.title} />
                  <div className="groupHeading">
                    <div className="container">
                      <div className="title">
                        {item.title}
                      </div>
                      <div className="description">
                        {item.description}
                      </div>
                    </div>
                  </div> 
                  <div className="bannerViewMore">
                    <Link href="/" className="btn btn-banner">
                      Explore Products
                      <img src="./clickbanner.svg" className="img-res"/>
                    </Link>
                  </div>
                  
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>



        <div className={`${styled.aboutUs} block`}>
          <div className="container">
            <div className={styled.heading}>
              <div className={styled.leftHeading}>
                in 2024, SMTeam was founded on the belief that each action is an endeavor to achieve excellency.
              </div>
              <div className={styled.rightHeading}>
                <img src="./about-us.svg" className="img-res"/>
                <img src="./Lightpng.png" alt="line"  className={styled.lineLine}/>
                <div className={styled.blur}></div>
              </div>
            </div>
            <div className="view-more">
              <Link href="/" className="btn btn-secondary">
                View More
                <img src="./clickbanner.svg" className="img-res" alt="view more"/>
              </Link>
            </div>
            <div className={styled.groupBox}>
              <div className={`${styled.imgBox} img-hover`}>
                <img src="./about.png" alt="imgbox" className="img-res"/>
              </div>
              <div className={styled.boxText}>
                Our unwavering commitment to surpassing the ordinary has propelled us to become the leading vaping brand globally in the future.
                We embody a vision where our technology and values merge, crafting a better, cleaner, and more enjoyable life for all.
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div className={`${styled.newArrival} block`}>
          <div className="container">
            <div className={styled.title}>
              New Arrival
              <div className="group-btn">
                <div className="custom-prev">
                  <img src="./btn-next.svg" alt="prev"/>
                </div>
                <div className="custom-next">
                  <img src="./btn-next.svg" alt="next"/>
                </div>
              </div>
            </div>
            <div className={styled.productSwipper}>
              <Swiper
                modules={[Navigation]} 
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                slidesPerView={1}
                spaceBetween={30}
                className="newArrival"
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween : 20
                  },

                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4
                  },
                }}
              >
                {
                  newArrival?.map((item,index) => (
                    <SwiperSlide key={index}>
                      <div className={styled.productItem}>
                        <div className={`${styled.productImage} img-hover`}>
                          <img src={item.url} alt="product" className="img-res"/>
                          <span className={styled.statusSale}>-20%</span>
                          <span className={styled.statusHot}>Hot</span>
                          <span className={styled.statusNew}>New</span>
                        </div>
                        <div className={styled.productContent}>
                          <div className={styled.productTitle}>XROS 3 NANO</div>
                          <div className={styled.productPrice}>
                              <span className={styled.oldPrice}>$9.99</span> - <span className={styled.newPrice}>$8.88</span>
                          </div>
                          <span className={styled.iconCart}>
                            <img src="./cart.svg" alt="cart" className="img-res"/>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
      </div>


      <div className={`${styled.Categories} block`}>
        <div className="container">
          <div className={styled.wrapperTitle}>
            <div className={styled.groupText}>
              Inspired by our users,
              SMTeam’s innovation transcends the ordinary, merging your aspirations with our technological prowess to redefine the vaping experience.
            </div>
            <div className={styled.title}>
              Featured Categories
            </div>
          </div>

          <div className="wrapperContent">
              <div className="item item-1">
                <div className="item-image img-hover">
                    <img src="./category1.png" alt="category-1" className="img-res"/>
                    <div className="item-content">
                      <div className="group-sale">
                        <div className="sale-off">20% Off</div>
                        <div className="name">Saltnic</div>
                      </div>
                      <Link href="/" className="btn btn-secondary">
                        Shop Now
                      </Link>
                    </div>
                </div>
              </div>
              <div className="item item-2">
                <div className="item-image img-hover">
                    <img src="./category2.png" alt="category-1" className="img-res"/>
                    <div className="item-content">
                      <div className="group-sale">
                        <div className="sale-off">20% Off</div>
                        <div className="name">Saltnic</div>
                      </div>
                      <Link href="/" className="btn btn-secondary">
                        Shop Now
                      </Link>
                    </div>
                </div>
              </div>
              <div className="item item-3">
                <div className="item-image img-hover">
                    <img src="./category3.png" alt="category-1" className="img-res"/>
                    <div className="item-content">
                      <div className="group-sale">
                        <div className="sale-off">20% Off</div>
                        <div className="name">Saltnic</div>
                      </div>
                      <Link href="/" className="btn btn-secondary">
                        Shop Now
                      </Link>
                    </div>
                </div>
              </div>
              <div className="item item-4">
                <div className="item-image img-hover">
                    <img src="./category4.png" alt="category-1" className="img-res"/>
                    <div className="item-content">
                      <div className="group-sale">
                        <div className="sale-off">20% Off</div>
                        <div className="name">Saltnic</div>
                      </div>
                      <Link href="/" className="btn btn-secondary">
                        Shop Now
                      </Link>
                    </div>
                </div>
              </div>
              <div className="item item-5">
                <div className="item-image img-hover">
                    <img src="./category5.png" alt="category-1" className="img-res"/>
                    <div className="item-content">
                      <div className="group-sale">
                        <div className="sale-off">20% Off</div>
                        <div className="name">Saltnic</div>
                      </div>
                      <Link href="/" className="btn btn-secondary">
                        Shop Now
                      </Link>
                    </div>
                </div>
              </div>
              <div className="item item-6">
                <div className="item-image img-hover">
                    <img src="./category6.png" alt="category-1" className="img-res"/>
                    <div className="item-content">
                      <div className="group-sale">
                        <div className="sale-off">20% Off</div>
                        <div className="name">Saltnic</div>
                      </div>
                      <Link href="/" className="btn btn-secondary">
                        Shop Now
                      </Link>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>


      <div className={`${styled.favProduct} block`}>
          <div className="container">
            <div className={styled.headingFavProduct}>
              <img src="./flavour-products.svg" className="img-res"/>
              <img src="./Lightpng.png" alt="line"  className={styled.lineLine}/>
              <div className={styled.blur}></div>
            </div>

            <div className="main-fav">
            <div className="block-fav">
                  <div className={styled.title}>
                    Pod Mod
                    <div className="group-btn">
                      <div className="custom-prev">
                        <img src="./btn-next.svg" alt="prev"/>
                      </div>
                      <div className="custom-next">
                        <img src="./btn-next.svg" alt="next"/>
                      </div>
                    </div>
                  </div>
                  <div className={styled.productSwipper}>
                    <Swiper
                      modules={[Navigation]} 
                      navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                      }}
                      slidesPerView={1}
                      spaceBetween={30}
                      className="favProduct"
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                        },

                        768: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 4
                        },
                      }}
                    >
                      {
                        newArrival?.map((item,index) => (
                          <SwiperSlide key={index}>
                            <div className={styled.productItem}>
                              <div className={`${styled.productImage} img-hover`}>
                                <img src={item.url} alt="product" className="img-res"/>
                                <span className={styled.statusSale}>-20%</span>
                                <span className={styled.statusHot}>Hot</span>
                                <span className={styled.statusNew}>New</span>
                              </div>
                              <div className={styled.productContent}>
                                <div className={styled.productTitle}>XROS 3 NANO</div>
                                <div className={styled.productPrice}>
                                    <span className={styled.oldPrice}>$9.99</span> - <span className={styled.newPrice}>$8.88</span>
                                </div>
                                <span className={styled.iconCart}>
                                  <img src="./cart.svg" alt="cart" className="img-res"/>
                                </span>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>
                  </div>
                </div>


                <div className="block-fav">
                  <div className={styled.title}>
                    Pod Mod
                    <div className="group-btn">
                      <div className="custom-prev">
                        <img src="./btn-next.svg" alt="prev"/>
                      </div>
                      <div className="custom-next">
                        <img src="./btn-next.svg" alt="next"/>
                      </div>
                    </div>
                  </div>
                  <div className={styled.productSwipper}>
                    <Swiper
                      modules={[Navigation]} 
                      navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                      }}
                      slidesPerView={1}
                      spaceBetween={30}
                      className="favProduct"
                      breakpoints={{
                        320: {
                          slidesPerView: 2,
                        },

                        768: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 4
                        },
                      }}
                    >
                      {
                        newArrival?.map((item,index) => (
                          <SwiperSlide key={index}>
                            <div className={styled.productItem}>
                              <div className={`${styled.productImage} img-hover`}>
                                <img src={item.url} alt="product" className="img-res"/>
                                <span className={styled.statusSale}>-20%</span>
                                <span className={styled.statusHot}>Hot</span>
                                <span className={styled.statusNew}>New</span>
                              </div>
                              <div className={styled.productContent}>
                                <div className={styled.productTitle}>XROS 3 NANO</div>
                                <div className={styled.productPrice}>
                                    <span className={styled.oldPrice}>$9.99</span> - <span className={styled.newPrice}>$8.88</span>
                                </div>
                                <span className={styled.iconCart}>
                                  <img src="./cart.svg" alt="cart" className="img-res"/>
                                </span>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))
                      }
                    </Swiper>
                  </div>
                </div>
            </div>
          </div>
      </div>

      <div className="contactUs block">
          <div className="container">
            <div className="main-contact">
              <div className="items">
                <img src="./spchat1.png" alt="telegram" className="img-res"/>
                <div className="content">
                  <div className="live-sp">Telegram Live Support</div>
                  <div className="info">@smteam</div>
                  <div className="banner-contatus">
                    <Link href="/" className="btn btn-contact">
                      Click To Chat
                      <img src="./clickbanner.svg" className="img-res"/>
                    </Link>
                  </div>
                </div>
                <div className="social">
                  <img src="./telegram.png" className="img-res"/>
                </div>
              </div>
              <div className="items">
                <img src="./spchat2.png" alt="telegram" className="img-res"/>
                <div className="content">
                  <div className="live-sp">Signal Live Support</div>
                  <div className="info">@smteam</div>
                  <div className="banner-contatus">
                    <Link href="/" className="btn btn-contact">
                      Click To Chat
                      <img src="./clickbanner.svg" className="img-res"/>
                    </Link>
                  </div>
                </div>
                <div className="social">
                  <img src="./signal.png" className="img-res"/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  );
}
