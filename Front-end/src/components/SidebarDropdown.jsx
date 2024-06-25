import { useState } from 'react'

function SidebarDropdown() {

  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <aside>
      <section className="">
        <p className="bg-white px-4 py-3 text-sm font-semibold text-[#27272a]">
          Khám phá theo danh mục
        </p>
      </section>
      <section>
        <ul>
          <li className="relative bg-white px-4 py-2">
            <div className="flex items-center justify-between">
              <a href="" className="text-xs text-[#27272a] hover:underline">
                Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi
              </a>
              <div
                onClick={handleDropdown}
                className="flex h-8 w-8 min-w-8 items-center justify-center rounded-sm hover:bg-[#00000026]"
              >
                <img
                  className={`h-5 w-5 cursor-pointer ${ !dropdown ? 'rotate-180' : '' }`}
                  src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                  alt=""
                />
              </div>
            </div>

            <ul className={`pr-4 pl-7 ${dropdown ? 'block' : 'hidden'}`}>
              <li className="mb-3">
                <a href="" className="text-xs text-[#27272a] hover:underline">Thiết Bị Văn Phòng</a>
              </li>
              <li className="mb-3">
                <a href="" className="text-xs text-[#27272a] hover:underline">Thiết Bị Văn Phòng</a>
              </li>
              <li className="mb-3">
                <a href="" className="text-xs text-[#27272a] hover:underline">Thiết Bị Văn Phòng</a>
              </li>
              <li className="mb-3">
                <a href="" className="text-xs text-[#27272a] hover:underline">Thiết Bị Văn Phòng</a>
              </li>
            </ul>
          </li>

          <li className="relative bg-white px-4 py-2">
            <div className="flex items-center justify-between">
              <a href="" className="text-xs text-[#27272a] hover:underline">
                Thiết Bị Văn Phòng - Thiết Bị Ngoại Vi
              </a>
              <div
                onClick={handleDropdown}
                className="flex h-8 w-8 min-w-8 items-center justify-center rounded-sm hover:bg-[#00000026]"
              >
                <img
                  className={`h-5 w-5 cursor-pointer ${ !dropdown ? 'rotate-180' : '' }`}
                  src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                  alt=""
                />
              </div>
            </div>

            <ul className={`pr-4 pl-7 ${dropdown ? 'block' : 'hidden'}`}>
              <li className="mb-3">
                <a href="" className="text-xs text-[#27272a] hover:underline">Thiết Bị Văn Phòng</a>
              </li>
              <li className="mb-3">
                <a href="" className="text-xs text-[#27272a] hover:underline">Thiết Bị Văn Phòng</a>
              </li>
              <li className="mb-3">
                <a href="" className="text-xs text-[#27272a] hover:underline">Thiết Bị Văn Phòng</a>
              </li>
              <li className="mb-3">
                <a href="" className="text-xs text-[#27272a] hover:underline">Thiết Bị Văn Phòng</a>
              </li>
            </ul>
          </li>

        </ul>
      </section>
    </aside>
  )
}

export default SidebarDropdown
