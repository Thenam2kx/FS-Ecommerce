import Slider from '~/components/Slider'

function Category() {
  return (
    <article className="w-[calc(100%-246px)] rounded-lg">
      <div className="flex flex-col gap-3">
        <section className="text-3xl font-semibold p-4 rounded-lg bg-white">Nhà Sách Tiki</section>

        <section className=""><Slider/></section>

        <section className='flex flex-col gap-3 px-4 py-3 rounded-lg bg-white'>
          <div className='text-base font-semibold'>Khám phá theo danh mục</div>
          <div className='grid grid-cols-6 gap-3'>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
            <a href="" className='flex flex-col gap-2 items-center'>
              <img className='h-[88px] w-[88px]' src="https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/53/69/14/2e66a952748f9da2b7624b3b69e21375.jpg" alt="" />
              <p className='cssText text-sm font-medium text-center'>Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi</p>
            </a>
          </div>
        </section>

        <article className='flex flex-col gap-3 px-4 py-3 rounded-lg bg-white'>
          <section className='text-base font-semibold text-red-600 lg:text-blue-400 md:text-orange-600'>Tất cả sản phẩm</section>

          <section className=''>

          </section>

          <section className=''></section>
        </article>
      </div>
    </article>
  )
}

export default Category