import GameItem from '../../molecules/GameItem'

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            title="Valorant"
            platform="mobile"
            thumbnail="Thumbnail-1"
          />
          <GameItem
            title="Call Of Duty"
            platform="mobile"
            thumbnail="Thumbnail-2"
          />
          <GameItem title="Dota2" platform="PC" thumbnail="Thumbnail-3" />
          <GameItem
            title="Clash Of Clans"
            platform="mobile"
            thumbnail="Thumbnail-4"
          />
          <GameItem
            title="Mobile Legend"
            platform="mobile"
            thumbnail="Thumbnail-5"
          />
        </div>
      </div>
    </section>
  )
}
