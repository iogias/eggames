import TableHeader from '../../../components/organisms/OverviewContent/TableHeader'
import TableRow from '../../../components/organisms/OverviewContent/TableRow'
import SideBar from '../../../components/organisms/SideBar'
import TransactionContent from '../../../components/organisms/TransactionContent'
import ButtonTab from '../../../components/organisms/TransactionContent/ButtonTab'

export default function Transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <TransactionContent />
            <div className="row mt-30 mb-20">
              <div className="col-lg-12 col-12 main-content">
                <div id="list_status_title">
                  <ButtonTab active title="All" />
                  <ButtonTab active={false} title="Success" />
                  <ButtonTab active={false} title="Pending" />
                  <ButtonTab active={false} title="Failed" />
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
                  <tbody id="list_status_item">
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
      </section>
    </>
  )
}
