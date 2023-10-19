import { useLoaderData } from 'react-router-dom';


const Swipers = () => {
  const ads = useLoaderData()

  if (!ads) {
    return null
  }

  const filteredAds = ads.filter((ad) => ad.ads1 || ad.ads2 || ad.ads3);

  return (
    <div>
      {
        filteredAds?.map((ad, idx) => <div key={idx} className="carousel w-full h-96 mb-10">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={ad?.ads1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={ad?.ads2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={ad?.ads3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default Swipers;




{/* <div className='w-[250px] md:w-[500px] lg:w-[600px]'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1.5}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide className='border-8 rounded-xl md:rounded-3xl lg:rounded-3xl border-yellow-500'>
                           
                            <img src={ad.ads1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='border-8 rounded-xl md:rounded-3xl lg:rounded-3xl border-yellow-500'>
                            
                            <img src={ad.ads2} alt="" />
    
                    </SwiperSlide>
                    <SwiperSlide className='border-8 rounded-xl md:rounded-3xl lg:rounded-3xl border-yellow-500'>
                            
                            <img src={ad.ads3} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div> */}