import Category from './Category'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category nominal={1000000} icon="icon-desktop">
                Game <br /> Desktop
              </Category>
              <Category nominal={1500000} icon="icon-mobile">
                Game <br /> Mobile
              </Category>
              <Category nominal={2050000} icon="icon-other">
                Other <br /> Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <TableHeader />
              <tbody>
                <TableRow
                  title="Mobile Legends"
                  category="Mobile"
                  item="100 Diamonds"
                  price={200000}
                  status="Success"
                  image="overview-1"
                />
                <TableRow
                  title="Call Of Duty"
                  category="Mobile"
                  item="100 Golds"
                  price={100000}
                  status="Pending"
                  image="overview-2"
                />
                <TableRow
                  title="DOTA-2"
                  category="Desktop"
                  item="10 Golds"
                  price={175000}
                  status="Failed"
                  image="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
