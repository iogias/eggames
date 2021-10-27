import Link from 'next/link'
import cx from 'classnames'

interface ButtonTabProps {
  title: string
  active?: boolean
}
export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title = 'all', active } = props
  const classStatus = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  })
  return (
    <Link href="/#">
      <a data-filter={title.toLowerCase()} className={classStatus}>
        {title}
      </a>
    </Link>
  )
}
