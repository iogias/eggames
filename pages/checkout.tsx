import Footer from '../components/organisms/Footer'
import Navbar from '../components/organisms/Navbar'
import CheckoutItem from '../components/organisms/CheckoutItem'
import CheckoutDetail from '../components/organisms/CheckoutDetail'
import CheckoutConfirm from '../components/organisms/CheckoutConfirm'

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirm />
        </div>
      </section>
      <Footer />
    </>
  )
}
