import { useState, useRef, useEffect } from 'react'

function GroupProducts() {
  const [widthOfSlider, setWidthOfSlider] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const eleSlider = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    if (eleSlider.current) {
      setWidthOfSlider(eleSlider.current.offsetWidth)
    }
  }, [])

  const handleBtnNext = () => {
    setCurrentIndex(currentIndex + widthOfSlider / 6)
  }

  const handleBtnPrev = () => {
    setCurrentIndex(currentIndex - widthOfSlider / 6)
  }


  return (
    <section className="w-full h-fit rounded-lg bg-white">
      <div className="p-4 flex flex-col gap-3">
        {/* ===== Title ===== */}
        <section className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Nhập khẩu chính hãng</h3>
          <a href="" className="text-sm font-medium text-[#0a68ff]">Xem tất cả</a>
        </section>

        {/* ===== Slider Tag ===== */}
        <section className="flex items-center gap-2">
          <div className="h-8 px-4 text-sm flex items-center border rounded-full cursor-pointer truncate border-[#dddde3] hover:bg-[#27272a1f]">
            <span>Quánh/Nồi nấu bột</span>
          </div>
          <div className="h-8 px-4 text-sm flex items-center border rounded-full cursor-pointer truncate border-[#dddde3] hover:bg-[#27272a1f]">
            <span>Quánh/Nồi nấu bột</span>
          </div>
          <div className="h-8 px-4 text-sm flex items-center border rounded-full cursor-pointer truncate border-[#dddde3] hover:bg-[#27272a1f]">
            <span>Quánh/Nồi nấu bột</span>
          </div>
        </section>

        {/* ===== Slider Products ===== */}
        <section ref={eleSlider} className="relative overflow-hidden">
          <div ref={sliderRef} className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex}px)` }}>

            <div className="p-1" style={{ minWidth: widthOfSlider / 6 }}>
              <a href="" className="flex flex-col border rounded-lg border-[#ebebf0]">
                {/* ===== Image product ===== */}
                <div className="">
                  <img className="w-full h-fit object-cover" src="https://salt.tikicdn.com/cache/280x280/ts/product/27/76/d9/574e043fa75e5d40be24d8007d03df67.jpg.webp" alt="" />
                </div>
                {/* ===== infor product ===== */}
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex flex-col gap-1">
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" />
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">Quánh Inox PoongNyun WTPIH-16B - Size 16cm</p>
                    <div className="flex items-center gap-1">
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                    </div>
                    <span className="text-base font-semibold text-[#ff424e]">800.000<sup>₫</sup></span>
                    <div className="flex items-start gap-1">
                      <span className="px-1 text-xs rounded-lg bg-[#f5f5fa]">-50%</span>
                      <span className="text-[10px] line-through text-[#808089]">1.800.000<sup>đ</sup></span>
                    </div>
                  </div>
                  <div className="fle flex-col gap-1">
                    <span className="text-[10px] truncate">Made in Korea</span>
                    <div className="w-full h-[1px] bg-[#ebebf0]"></div>
                    <span className="text-[10px] truncate text-[#808089]">Giao thứ 2, 10/06</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-1" style={{ minWidth: widthOfSlider / 6 }}>
              <a href="" className="flex flex-col border rounded-lg border-[#ebebf0]">
                {/* ===== Image product ===== */}
                <div className="">
                  <img className="w-full h-fit object-cover" src="https://salt.tikicdn.com/cache/280x280/ts/product/27/76/d9/574e043fa75e5d40be24d8007d03df67.jpg.webp" alt="" />
                </div>
                {/* ===== infor product ===== */}
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex flex-col gap-1">
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" />
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">Quánh Inox PoongNyun WTPIH-16B - Size 16cm</p>
                    <div className="flex items-center gap-1">
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                    </div>
                    <span className="text-base font-semibold text-[#ff424e]">800.000<sup>₫</sup></span>
                    <div className="flex items-start gap-1">
                      <span className="px-1 text-xs rounded-lg bg-[#f5f5fa]">-50%</span>
                      <span className="text-[10px] line-through text-[#808089]">1.800.000<sup>đ</sup></span>
                    </div>
                  </div>
                  <div className="fle flex-col gap-1">
                    <span className="text-[10px] truncate">Made in Korea</span>
                    <div className="w-full h-[1px] bg-[#ebebf0]"></div>
                    <span className="text-[10px] truncate text-[#808089]">Giao thứ 2, 10/06</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-1" style={{ minWidth: widthOfSlider / 6 }}>
              <a href="" className="flex flex-col border rounded-lg border-[#ebebf0]">
                {/* ===== Image product ===== */}
                <div className="">
                  <img className="w-full h-fit object-cover" src="https://salt.tikicdn.com/cache/280x280/ts/product/27/76/d9/574e043fa75e5d40be24d8007d03df67.jpg.webp" alt="" />
                </div>
                {/* ===== infor product ===== */}
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex flex-col gap-1">
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" />
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">Quánh Inox PoongNyun WTPIH-16B - Size 16cm</p>
                    <div className="flex items-center gap-1">
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                    </div>
                    <span className="text-base font-semibold text-[#ff424e]">800.000<sup>₫</sup></span>
                    <div className="flex items-start gap-1">
                      <span className="px-1 text-xs rounded-lg bg-[#f5f5fa]">-50%</span>
                      <span className="text-[10px] line-through text-[#808089]">1.800.000<sup>đ</sup></span>
                    </div>
                  </div>
                  <div className="fle flex-col gap-1">
                    <span className="text-[10px] truncate">Made in Korea</span>
                    <div className="w-full h-[1px] bg-[#ebebf0]"></div>
                    <span className="text-[10px] truncate text-[#808089]">Giao thứ 2, 10/06</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-1" style={{ minWidth: widthOfSlider / 6 }}>
              <a href="" className="flex flex-col border rounded-lg border-[#ebebf0]">
                {/* ===== Image product ===== */}
                <div className="">
                  <img className="w-full h-fit object-cover" src="https://salt.tikicdn.com/cache/280x280/ts/product/27/76/d9/574e043fa75e5d40be24d8007d03df67.jpg.webp" alt="" />
                </div>
                {/* ===== infor product ===== */}
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex flex-col gap-1">
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" />
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">Quánh Inox PoongNyun WTPIH-16B - Size 16cm</p>
                    <div className="flex items-center gap-1">
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                    </div>
                    <span className="text-base font-semibold text-[#ff424e]">800.000<sup>₫</sup></span>
                    <div className="flex items-start gap-1">
                      <span className="px-1 text-xs rounded-lg bg-[#f5f5fa]">-50%</span>
                      <span className="text-[10px] line-through text-[#808089]">1.800.000<sup>đ</sup></span>
                    </div>
                  </div>
                  <div className="fle flex-col gap-1">
                    <span className="text-[10px] truncate">Made in Korea</span>
                    <div className="w-full h-[1px] bg-[#ebebf0]"></div>
                    <span className="text-[10px] truncate text-[#808089]">Giao thứ 2, 10/06</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-1" style={{ minWidth: widthOfSlider / 6 }}>
              <a href="" className="flex flex-col border rounded-lg border-[#ebebf0]">
                {/* ===== Image product ===== */}
                <div className="">
                  <img className="w-full h-fit object-cover" src="https://salt.tikicdn.com/cache/280x280/ts/product/27/76/d9/574e043fa75e5d40be24d8007d03df67.jpg.webp" alt="" />
                </div>
                {/* ===== infor product ===== */}
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex flex-col gap-1">
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" />
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">Quánh Inox PoongNyun WTPIH-16B - Size 16cm</p>
                    <div className="flex items-center gap-1">
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                    </div>
                    <span className="text-base font-semibold text-[#ff424e]">800.000<sup>₫</sup></span>
                    <div className="flex items-start gap-1">
                      <span className="px-1 text-xs rounded-lg bg-[#f5f5fa]">-50%</span>
                      <span className="text-[10px] line-through text-[#808089]">1.800.000<sup>đ</sup></span>
                    </div>
                  </div>
                  <div className="fle flex-col gap-1">
                    <span className="text-[10px] truncate">Made in Korea</span>
                    <div className="w-full h-[1px] bg-[#ebebf0]"></div>
                    <span className="text-[10px] truncate text-[#808089]">Giao thứ 2, 10/06</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-1" style={{ minWidth: widthOfSlider / 6 }}>
              <a href="" className="flex flex-col border rounded-lg border-[#ebebf0]">
                {/* ===== Image product ===== */}
                <div className="">
                  <img className="w-full h-fit object-cover" src="https://salt.tikicdn.com/cache/280x280/ts/product/27/76/d9/574e043fa75e5d40be24d8007d03df67.jpg.webp" alt="" />
                </div>
                {/* ===== infor product ===== */}
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex flex-col gap-1">
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" />
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">Quánh Inox PoongNyun WTPIH-16B - Size 16cm</p>
                    <div className="flex items-center gap-1">
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                    </div>
                    <span className="text-base font-semibold text-[#ff424e]">800.000<sup>₫</sup></span>
                    <div className="flex items-start gap-1">
                      <span className="px-1 text-xs rounded-lg bg-[#f5f5fa]">-50%</span>
                      <span className="text-[10px] line-through text-[#808089]">1.800.000<sup>đ</sup></span>
                    </div>
                  </div>
                  <div className="fle flex-col gap-1">
                    <span className="text-[10px] truncate">Made in Korea</span>
                    <div className="w-full h-[1px] bg-[#ebebf0]"></div>
                    <span className="text-[10px] truncate text-[#808089]">Giao thứ 2, 10/06</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-1" style={{ minWidth: widthOfSlider / 6 }}>
              <a href="" className="flex flex-col border rounded-lg border-[#ebebf0]">
                {/* ===== Image product ===== */}
                <div className="">
                  <img className="w-full h-fit object-cover" src="https://salt.tikicdn.com/cache/280x280/ts/product/27/76/d9/574e043fa75e5d40be24d8007d03df67.jpg.webp" alt="" />
                </div>
                {/* ===== infor product ===== */}
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex flex-col gap-1">
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" />
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">Quánh Inox PoongNyun WTPIH-16B - Size 16cm</p>
                    <div className="flex items-center gap-1">
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                    </div>
                    <span className="text-base font-semibold text-[#ff424e]">800.000<sup>₫</sup></span>
                    <div className="flex items-start gap-1">
                      <span className="px-1 text-xs rounded-lg bg-[#f5f5fa]">-50%</span>
                      <span className="text-[10px] line-through text-[#808089]">1.800.000<sup>đ</sup></span>
                    </div>
                  </div>
                  <div className="fle flex-col gap-1">
                    <span className="text-[10px] truncate">Made in Korea</span>
                    <div className="w-full h-[1px] bg-[#ebebf0]"></div>
                    <span className="text-[10px] truncate text-[#808089]">Giao thứ 2, 10/06</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="p-1" style={{ minWidth: widthOfSlider / 6 }}>
              <a href="" className="flex flex-col border rounded-lg border-[#ebebf0]">
                {/* ===== Image product ===== */}
                <div className="">
                  <img className="w-full h-fit object-cover" src="https://salt.tikicdn.com/cache/280x280/ts/product/27/76/d9/574e043fa75e5d40be24d8007d03df67.jpg.webp" alt="" />
                </div>
                {/* ===== infor product ===== */}
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex flex-col gap-1">
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/upload/0f/59/82/795de6da98a5ac81ce46fb5078b65870.png" alt="" />
                    <img className="h-5 w-fit" src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">Quánh Inox PoongNyun WTPIH-16B - Size 16cm</p>
                    <div className="flex items-center gap-1">
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                      <img src="../../images/star.svg" alt="" />
                    </div>
                    <span className="text-base font-semibold text-[#ff424e]">800.000<sup>₫</sup></span>
                    <div className="flex items-start gap-1">
                      <span className="px-1 text-xs rounded-lg bg-[#f5f5fa]">-50%</span>
                      <span className="text-[10px] line-through text-[#808089]">1.800.000<sup>đ</sup></span>
                    </div>
                  </div>
                  <div className="fle flex-col gap-1">
                    <span className="text-[10px] truncate">Made in Korea</span>
                    <div className="w-full h-[1px] bg-[#ebebf0]"></div>
                    <span className="text-[10px] truncate text-[#808089]">Giao thứ 2, 10/06</span>
                  </div>
                </div>
              </a>
            </div>

          </div>
          {/* ===== Btn next and prev ===== */}
          <div className="">
            <div onClick={handleBtnPrev} className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full shadow-lg cursor-pointer bg-white">
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
            <div onClick={handleBtnNext} className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full shadow-lg cursor-pointer bg-white">
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
        </section>
      </div>
    </section>
  )
}

export default GroupProducts