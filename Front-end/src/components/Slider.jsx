import { useState, useEffect, useRef } from 'react'

import { BannerData } from '~/fetch-data/BannerData'

function Slider() {
  const slideRef = useRef(null)
  const [nextSlide, setNextSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(0)

  useEffect(() => {

  }, [])

  const handleNextSlide = () => {
    setNextSlide(nextSlide + 1)
    // console.log('next');
  }

  const handlePrevSlide = () => {
    setPrevSlide(prevSlide - 1)
    // console.log('prev');
  }


  return (
    <section className="w-full h-fit rounded-lg bg-white">
      <div className="p-4">
        <div className="relative overflow-hidden">
          <div ref={slideRef} className="flex items-center">
            {
              BannerData.map((item) => (
                <div className="min-w-full flex items-center gap-4" key={item.id}>
                  {
                    item?.items.map((itemChild) => (
                      <div key={itemChild.id}>
                        <a href={itemChild.url}>
                          <img className="rounded-lg" src={itemChild.thumbnail_url} alt="" />
                        </a>
                      </div>
                    ))
                  }

                </div>
              ))
            }
          </div>

          <div className="">
            <div onClick={handlePrevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full shadow-lg cursor-pointer bg-white">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0899 14.5899C11.7645 14.9153 11.2368 14.9153 10.9114 14.5899L5.91139 9.58991C5.58596
                  9.26447 5.58596 8.73683 5.91139 8.4114L10.9114 3.41139C11.2368 3.08596 11.7645 3.08596 12.0899
                  3.41139C12.4153 3.73683 12.4153 4.26447 12.0899 4.58991L7.67916 9.00065L12.0899 13.4114C12.4153
                  13.7368 12.4153 14.2645 12.0899 14.5899Z" fill="#0A68FF"
                ></path>
              </svg>
            </div>
            <div onClick={handleNextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full shadow-lg cursor-pointer bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.91107 3.41107C6.23651 3.08563 6.76414 3.08563 7.08958 3.41107L12.0896 8.41107C12.415
                  8.73651 12.415 9.26415 12.0896 9.58958L7.08958 14.5896C6.76414 14.915 6.23651 14.915 5.91107
                  14.5896C5.58563 14.2641 5.58563 13.7365 5.91107 13.4111L10.3218 9.00033L5.91107 4.58958C5.58563
                  4.26414 5.58563 3.73651 5.91107 3.41107Z" fill="#0A68FF"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-3">
            {
              BannerData.map((item) => (
                <span key={item.id} className="w-5 h-[2px] inline-block bg-slate-500 cursor-pointer rounded-md"></span>
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default Slider