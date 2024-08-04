import { useNavigate } from "react-router-dom";
import { useUserLogoutMutation } from "../api/auth.api"
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const nav = useNavigate()
  const [userLogout] = useUserLogoutMutation();

  const handleLogout = async () => {

    try {
      const response = await userLogout().unwrap()
      if (response.status === 'success') {
        alert(response.message)
        nav('/')
      }
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }
  return (
    <div className="bg-[#0E1111] h-full">
      <Header />
      <div className="flex">
        <div className="flex-3">
          <Sidebar />
        </div>
        <div className="flex-2"></div>
      </div>

      <div className="">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
export default Dashboard