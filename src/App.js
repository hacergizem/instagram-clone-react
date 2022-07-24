import { useRef, useEffect, useState } from 'react'
import Input from 'components/Input';

import { AiFillFacebook } from 'react-icons/ai'

function App() {

  const ref = useRef();

  const [username, setUserName] = useState('');
  const [password, setUserPassword] = useState('');

  const enable = username && password

  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
      total = images.length,
      current = 0

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add('opacity-0')
      } else {
        images[total - 1].classList.add('opacity-0')
      }
      images[current].classList.remove('opacity-0')
      if (current === total - 1) {
        current = 0
      } else {
        current += 1
      }
    }

    imageSlider()

    let interval = setInterval(imageSlider, 3000);

    return () => {
      clearInterval(interval)
    }
  }, [ref])


  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8">
      <div className="hidden md:block w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] ">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"></img>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"></img>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"></img>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"></img>
        </div>
      </div>

      <div className="w-[350px] grid gap-y-2">
        <div className="bg-white border p-[40px] pt-10 pb-6">
          <a href="/" className="flex justify-center mb-8">
            <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"></img>
          </a>
          <form className="grid gap-y-1.5">
            <Input type="text" value={username} onChange={e => setUserName(e.target.value)} label="Phone number, username or email"></Input>
            <Input type="password" value={password} onChange={e => setUserPassword(e.target.value)} label="Password"></Input>

            <button type="submit" disabled={!enable} className="h-[30px] mt-1 text-white font-medium text-sm bg-brand rounded disabled:opacity-50">Log In</button>

            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-[13px] text-gray-500 font-semibold">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <a href="#" className="flex justify-center mb-2 items-center gap-x-2 text-sm text-facebook font-semibold">
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>

            <a href="#" className="text-xs flex items-center justify-center text-link font-semibold">
              Forgot password?
            </a>
          </form>

        </div>

        <div className="bg-white border p-4 text-sm text-center">
          Don't have account? <a href='#' className="font-semibold text-brand">Sign up</a>
        </div>
      </div>




    </div>
  );
}

export default App;
