import Footer from './Footer'
import Profile from './Profile'
import MenuItem from './MenuItem'

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            active={activeMenu === 'overview'}
            title="Overview"
            icon="icon-menu-overview"
            href="/member"
          />
          <MenuItem
            active={activeMenu === 'transactions'}
            title="Transcations"
            icon="icon-shopping-bag"
            href="/member/transactions"
          />
          <MenuItem
            title="Messages"
            icon="icon-messages"
            href="/member/messages"
          />
          <MenuItem title="Card" icon="icon-card" href="/member/card" />
          <MenuItem
            title="Rewards"
            icon="icon-rewards"
            href="/member/rewards"
          />
          <MenuItem
            active={activeMenu === 'settings'}
            title="Settings"
            icon="icon-settings"
            href="/member/edit-profile"
          />
          <MenuItem title="Logout" icon="icon-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  )
}
