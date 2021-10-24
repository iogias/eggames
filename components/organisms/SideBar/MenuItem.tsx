import cx from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

interface MenuItemProps {
  title: string
  active?: boolean
  href: string
  icon:
    | 'icon-menu-overview'
    | 'icon-shopping-bag'
    | 'icon-messages'
    | 'icon-card'
    | 'icon-rewards'
    | 'icon-settings'
    | 'icon-logout'
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, active, href = '/member', icon } = props
  const classTitle = cx({
    'item mb-30': true,
    active,
  })
  return (
    <div className={classTitle}>
      <div className="me-3 pt-2">
        <Image
          src={`/icon/${icon}.svg`}
          alt="icon overview"
          width={25}
          height={25}
        />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  )
}
