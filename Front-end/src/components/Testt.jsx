

function Testt() {
  return (
    <div className='w-full h-fit rounded-lg bg-white'>
      <div className="py-4">
        <div className="max-w-lg mx-auto py-12">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" id="slider">
              <div className="min-w-full">
                <img src="https://picsum.photos/600/400" alt="Slide 1" className="w-full" />
              </div>
              <div className="min-w-full">
                <img src="https://picsum.photos/600/400" alt="Slide 2" className="w-full" />
              </div>
              <div className="min-w-full">
                <img src="https://picsum.photos/600/400" alt="Slide 3" className="w-full" />
              </div>
            </div>
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2" id="prev">Prev</button>
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2" id="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testt