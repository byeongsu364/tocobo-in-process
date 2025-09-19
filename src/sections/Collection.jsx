import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "../styles/sections/collection.scss"
import collectionData from '../util/collection'
const Collection = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const swiperRef = useRef(null)

    useEffect(() => {

        if (swiperRef.current &&
            swiperRef.current.params &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current
            swiperRef.current.params.navigation.nextEl = nextRef.current
            swiperRef.current.navigation.destroy()
            swiperRef.current.navigation.init()
            swiperRef.current.navigation.update()
        }

    }, [])

    return (
        <div className='inner collection-inner'>
            <div className="t-wrap">
                <h2 className='tit'>TOCOBO<br /> COLLECTION</h2>
                <p className="txt">Shop By Category</p>
            </div>

            <div className="collection-slider-wrap">
                <Swiper
                    className='collection-slider'
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ type: 'progressbar' }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Pagination, Navigation]}
                >
                    {collectionData.map((sl, i) => (
                        <SwiperSlide key={i}>
                            <a href="#">
                                <div className="info-wrap">
                                    <div className="info-tit">{sl.title}</div>
                                    <div className="name">{sl.name}</div>
                                    <div className="k-name">{sl.kname}</div>
                                </div>
                                <div className="img-wrap">
                                    <img src={sl.image} alt={sl.name} />
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* 화살표 네비게이션 */}
                <div className="arr-prev" ref={prevRef}>‹</div>
                <div className="arr-next" ref={nextRef}>›</div>
            </div>
        </div>

    )
}

export default Collection