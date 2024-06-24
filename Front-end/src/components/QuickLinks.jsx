import { QuickLinksData } from '~/fetch-data/QuickLinksData'

function QuickLinks() {
  return (
    <section className="w-full h-fit rounded-lg bg-white">
      <div className="p-4 grid grid-cols-7 gap-2">
        {
          QuickLinksData.map((item, index) => {
            return (
              <div key={index}>
                <a href="" className="flex flex-col items-center gap-2">
                  <img className="w-16 h-16" src={item.thumbnail_url} alt="icon" />
                  <span className="cssText text-sm text-center font-medium">{item.name}</span>
                </a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default QuickLinks