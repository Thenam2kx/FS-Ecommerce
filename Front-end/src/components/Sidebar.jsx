import { sidebarData } from '~/fetch-data/SidebarData'

function Sidebar() {
  return (
    <aside className="w-[230px] max-h-screen sticky top-4 overflow-y-scroll">
      {
        sidebarData.map((itemsBlock, indexBlock) => {
          return (
            <section key={indexBlock} className="px-2 py-3 rounded-lg flex flex-col mb-4 bg-white">
              <h4 className="mb-2 pl-4 text-sm font-bold text-[#27272a]">{itemsBlock?.title}</h4>
              <div className="flex flex-col">
                {
                  itemsBlock.items.map((item, index) => {
                    return (
                      <div key={index}>
                        <a href="" className="px-4 py-2 flex items-center gap-2 rounded-lg transition-all hover:bg-[#27272a1f]">
                          <img className="h-8 w-8" src={item.icon_url} alt="" />
                          <span className="truncate text-sm text-[#38383d]">{item.text}</span>
                        </a>
                      </div>
                    )
                  })
                }
              </div>
            </section>
          )
        })
      }
    </aside>
  )
}

export default Sidebar