import AccessMenu from './AccessMenu';

export default function Navigation() {
  
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Accessible Toolbar Prototype</a>
      </div>
      <div className="flex-none">
        <AccessMenu />
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="UI profile image" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}