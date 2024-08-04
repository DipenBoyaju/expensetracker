import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useUserLoginMutation } from "../api/auth.api";

const Login = () => {
  const nav = useNavigate();
  const [userLogin, { error }] = useUserLoginMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await userLogin(data).unwrap();
      alert(response.message)
      reset()
      nav('/dashboard')
    } catch (error) {
      console.log(error);

    }
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="w-full h-svh">
      <div className="flex justify-center items-center h-[100%]">
        <div className=" bg-[#0E1111] h-[100%] relative z-20 text-[#E2DFD2] w-full ">
          <div className="logo text-center py-6 mt-10 cursor-pointer">
            <span onClick={() => nav('/')} className="text-2xl font-semibold tracking-widest bg-gradient-to-r from-cyan-800  to-purple-600 uppercase text-center px-2 text-white rounded-sm leading-0" >Expensio</span>
          </div>
          <div className="flex justify-center items-center text-center w-[60vw] lg:w-[30vw] mt-[5vh] mx-auto flex-col gap-6 shadow-2xl p-10">
            <div className="space-y-3">
              <h1 className="font-semibold text-2xl uppercase">Login</h1>
              <p className="text-lg">Welcome back to <span className="text-yellow-400 uppercase underline">Expensio</span></p>
            </div>
            <hr className="w-full" />
            <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
              <input {...register("email", { required: { value: true, message: 'This field is required' } })} placeholder="Email" type="email" className="h-[45px] px-2 text-black" />
              {errors.email && <div className="text-red-500">{errors.username.email}</div>}




              <input {...register("password", { required: { value: true, message: 'This field is required' }, maxLength: { value: 20, message: 'Max length is 20' }, minLength: { value: 5, message: 'Password should be more than 5 character' } })} type="password" placeholder="Password" className="h-[45px] px-2 text-black" />
              <button type="submit" className="bg-yellow-400 text-lg text-zinc-900 capitalize p-3" disabled={isSubmitting}>submit</button>
              <p>Dont have an Account?<br /> <span className="text-cyan-400 cursor-pointer" onClick={() => nav('/signup')}>Create a Account</span></p>
            </form>

          </div>
        </div>
      </div >
    </div >
  )
}
export default Login