import Image from "next/image";
import HomePhone from "../images/login/home-phones.png";
import InstaLogo from "../images/login/logo2.jpg";
import InputBox from "./InputBox";
import Button from "./Button";
import GetFromGoolgePlay from "../images/login/c5Rp7Ym-Klz.png";
import GetFromMicrosoft from "../images/login/EHY6QnZYdNX.png";
import ScreenShot1 from "../images/login/screenshot1.png";
import ScreenShot2 from "../images/login/screenshot2.png";
import ScreenShot3 from "../images/login/screenshot3.png";
import ScreenShot4 from "../images/login/screenshot4.png";

export default function Login() {
  const StyleImageHomePhone = {
    position: "relative",
  };
  const StyleImageScreenshots = {
    position: "absolute",
    left: "456px",
    top: "20px",
    zIndex: 2,
  };
  return (
    <>
      <main>
        {/*  start: Divide page in 2 parts */}
        <div className=" max-w-full h-[610px] mt-12 flex justify-end">
          {/* start of 1 box contain home phone image  */}
          <div className=" relative w-0 md:w-6/12  flex justify-end z-2">
            <Image
              src={HomePhone}
              alt="Home phone"
              width={450}
              height={700}
              style={StyleImageHomePhone}
            />
            <Image
              src={ScreenShot1}
              alt="Screenshot1"
              width={250}
              height={539}
              style={StyleImageScreenshots}
            />
          </div>
          {/* end of 1 box contain home phone image  */}
          {/* start of 2 box contain form for login  */}
          <div className="w-full md:w-6/12">
            {/* start of 1st container -till fogot password */}
            <div className=" w-[350px] h-[400px] border-2 border-slate-200 pt-3">
              {/* start of instagram logo  */}
              <div className="flex justify-center mt-8 mb-7">
                <Image src={InstaLogo} alt="Logo" width={174} height={50} />
              </div>
              {/* end of instagram logo  */}
              {/* start of form  */}
              <div className="">
                <InputBox
                  type="text"
                  placeholder="Phone number, username or email"
                ></InputBox>
                <InputBox type="text" placeholder="Password"></InputBox>
              </div>
              {/* end of form  */}
              {/* Start of login button  */}
              <Button name="Log in"></Button>
              {/* End of login button  */}
              {/* OR section */}
              <div className="flex flex-row justify-center items-center my-4 ">
                <div className=" w-[115px] border-t border-slate-200"></div>
                <div className="px-3 text-xs text-slate-500 font-medium">
                  OR
                </div>{" "}
                <div className="  w-[115px] border-t border-slate-200"></div>
              </div>
              {/* end of OR section */}
              {/*  start of btn- login with fb  */}
              <div className="flex  flex-row justify-center my-4">
                <button className="flex ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.3em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                  </svg>
                  <div className="text-sm  pl-2  font-semibold text-[#385185]">
                    {" "}
                    Log in with Facebook
                  </div>
                </button>
              </div>
              {/*  end of btn- login with fb  */}
              <p className=" text-center mt-6 mb-3 text-xs">
                Forgot password?{" "}
              </p>
            </div>
            {/*end  of 1st container  */}
            {/* start of 2nd container - don't have an account  */}
            <div className=" w-[350px] mt-2 border-2 border-slate-200 flex flex-row justify-center p-5 ">
              <div className="text-sm"> Don't have an account? </div>
              <a href="#" className="text-sky-500 font-semibold text-sm ">
                &nbsp;Sign up
              </a>
            </div>
            {/* end of 2nd container - don't have an account  */}
            {/* start of get the app  */}
            <div className=" w-[350px] flex flex-row justify-center">
              <p className="text-sm py-4 "> Get the app. </p>
            </div>

            <div className=" w-[350px] flex flex-row justify-center">
              {" "}
              <Image
                className="pr-2"
                src={GetFromGoolgePlay}
                alt="Get it from google play"
                width={134}
                height={40}
              />
              <Image
                src={GetFromMicrosoft}
                alt="Get it from microsoft"
                width={110}
                height={40}
              />
            </div>
            {/* end of get the app */}
          </div>
          {/* end of 2 box contain form for login  */}
        </div>
        {/* end: Divide page in 2 parts */}
      </main>
      {/* start of footer    */}
      <footer>
        {" "}
        <div>
          <ul className="flex flex-row justify-center">
            <li className="mr-4 text-xs text-[#737373]">meta</li>
            <li className="mr-4 text-xs text-[#737373]">Introduction </li>
            <li className="mr-4 text-xs text-[#737373]">blog </li>
            <li className="mr-4 text-xs text-[#737373]">job </li>
            <li className="mr-4 text-xs text-[#737373]">Help</li>
            <li className="mr-4 text-xs text-[#737373]">API</li>
            <li className="mr-4 text-xs text-[#737373]">Privacy</li>
            <li className="mr-4 text-xs text-[#737373]">terms</li>
            <li className="mr-4 text-xs text-[#737373]">place</li>
            <li className="mr-4 text-xs text-[#737373]">Instagram Lite</li>
            <li className="mr-4 text-xs text-[#737373]">threads </li>
            <li className="mr-4 text-xs text-[#737373]">
              Uploading contacts and non-users
            </li>
            <li className="mr-4 text-xs text-[#737373]">Meta Verified</li>
          </ul>
        </div>
        <div className="flex flex-row justify-center">
          <select
            name=""
            id=""
            className="text-xs text-[#737373] w-[53px] h-[12] mr-2 outline-0"
          >
            <option value="af">Afrikaans</option>
            <option value="ar">العربية</option>
            <option value="cs">Čeština</option>
            <option value="el">Greek</option>
            <option value="de">Deutsch</option>
            <option value="en">English</option>
            <option value="en-gb">English (UK)</option>
            <option value="es">Español (España)</option>
            <option value="es-la">Español</option>
            <option value="fa">Farsi</option>
            <option value="fi">Finland</option>
            <option value="fr">French</option>
            <option value="he">Hebrew</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="hi">हिन्दी</option>
            <option value="gu">Gujrati</option>
          </select>
          <p className="text-xs text-[#737373] my-5">
            © 2023 Instagram from Meta
          </p>
        </div>
      </footer>
      {/* end of footer  */}
    </>
  );
}
