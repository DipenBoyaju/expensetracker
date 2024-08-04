import { useState } from "react"

const Header = () => {
  const [showMenu, setShowMenu] = useState(null);
  return (
    <div className="text-white bg-zinc-900 flex justify-between px-10 py-5">
      <div className="">
        <span className="uppercase tracking-widest font-semibold text-lg bg-gradient-to-r from-blue-500 to-red-500 px-2 py-1 rounded-sm">Expensio</span>
      </div>
      <div className="">
        <p onClick={() => setShowMenu((prev) => !prev)} className="cursor-pointer">User</p>
        {
          showMenu ?
            <>
              <div className="bg-zinc-600 w-32 flex gap-2 flex-col absolute right-0">
                <p className="cursor-pointer hover:bg-zinc-400 px-2 py-1">Profile</p>
                <p className="cursor-pointer hover:bg-zinc-400 px-2 py-1">Logout</p>
              </div>
            </> : ""
        }
      </div>
    </div>
  )
}
export default Header