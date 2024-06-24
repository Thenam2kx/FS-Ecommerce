import Slider from "~/components/Slider"
import QuickLinks from "~/components/QuickLinks"
import GroupProducts from "~/components/GroupProducts"

function Home() {
  return (
    <main className="w-[calc(100%-246px)] rounded-lg">
      {/* flex flex-shrink flex-grow basis-0 rounded-lg */}
      <div className="flex flex-col gap-3">
        <Slider />
        <QuickLinks />
        <GroupProducts />
        <GroupProducts />
        <GroupProducts />
        <GroupProducts />
        <GroupProducts />
      </div>
    </main>
  )
}

export default Home