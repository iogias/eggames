import VerticalLine from '../../atoms/VerticalLine'
import ReachedItem from '../../molecules/ReachedItem'

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem numbers="290M+" title="Players Top up" />
          <VerticalLine />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <ReachedItem numbers="100+" title="Games Available" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <VerticalLine />
          <ReachedItem numbers="99,9%" title="Happy Players" />
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block" />
          <VerticalLine />
          <ReachedItem numbers="4.7" title="Rating World wide" />
        </div>
      </div>
    </section>
  )
}
