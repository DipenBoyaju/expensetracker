import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const nav = useNavigate();

  return (
    <div className="w-full h-svh">
      <div className="flex justify-center items-center h-[100%]">
        <div className=" bg-[#0E1111] h-[100%] relative z-20 text-[#E2DFD2] w-full ">
          <div className="logo text-center py-6 mt-10 cursor-pointer">
            <span onClick={() => nav('/')} className="text-2xl font-semibold tracking-widest bg-gradient-to-r from-cyan-800  to-purple-600 uppercase text-center px-2 text-white rounded-sm leading-0" >Expensio</span>
          </div>
          <div className="flex justify-center items-center text-center w-[60vw] mt-[15vh] mx-auto">
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl font-semibold text-yellow-400">Your Personal Finance Assistant</h2>
              <p className="text-sm font-light leading-6">Managing your money doesn&apos;t have to be complicated. With <span>Expensio</span>, you get a personal finance assistant that&apos;s always by your side. Our app makes it easy to record expenses, set budgets, and track your progress. With detailed reports and easy-to-understand charts, you&apos;ll gain valuable insights into your financial habits. Take the first step towards financial freedom today.</p>
              <button className="bg-yellow-400 object-cover text-zinc-900 py-2 text-lg rounded-full w-[30vw] lg:w-[15vw] mx-auto" onClick={() => nav('/login')}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="blob w-[800px] h-[800px] rounded-full absolute top-0 right-0 blur-3xl from-indigo-400 via-purple-400 to-pink-400 bg-opacity-60 bg-gradient-to-r  -z-10"></div> */}
      {/* 
      <div className="blob w-[1000px] h-[1000px] rounded-full absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-200 via-gray-100 to-blue-100"></div>
      <div className="blob w-[600px] h-[600px] rounded-full absolute bottom-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-slate-100 via-teal-100 to-blue-100"></div>
      <div className="blob w-[300px] h-[300px] rounded-full absolute bottom-[10px] left-0 -z-10 blur-3xl bg-opacity-80 bg-gradient-to-r from-green-100 via-cyan-100 to-fuchsia-100"></div> */}
    </div>
  )
}
export default HomePage