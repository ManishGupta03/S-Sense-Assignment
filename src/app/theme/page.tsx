"use client";
import React, { useState } from "react";
import image from "@/app/utils/d-2.jpg";
 import Image from "next/image";
import profile from "@/app/utils/d-3.jpg";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import ContrastIcon from '@mui/icons-material/Contrast';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from "@/app/utils/d-4.png";
import pprofile from "@/app/utils/p-1.jpeg"
// import ThemePage from '@/components/themePage';
// import ProfilePage from '@/components/profilePage';
// import AnalyticPage from '@/components/analyticPage';
// import OtherPage from '@/components/otherPage';

type Color = |'#000000'| '#808080'| '#FFFFFF'| '#FFFF00'| '#ADD8E6'| '#FFC0CB'| '#800080'| '#FFEB3B'| '#FF4500'| '#32CD32'| "";
type linearGradient =
|'linear-gradient(to right, #00c6ff, #0072ff)'
|'linear-gradient(to right, #00ff87, #60efff)'
|'linear-gradient(to right, #f857a6, #ff5858)'
|'linear-gradient(to right, #a1ffce, #faffd1)'
|'linear-gradient(to right, #ff9a9e, #fad0c4)'
|'linear-gradient(to right, #a1c4fd, #c2e9fb)'
|'linear-gradient(to right, #d4fc79, #96e6a1)'
|'linear-gradient(to right, #84fab0, #8fd3f4)'
|'linear-gradient(to right, #fa709a, #fee140)'
|'linear-gradient(to right, #fbc2eb, #a18cd1)'
|'linear-gradient(to right, #ff6f61, #de6161)'
|'linear-gradient(to right, #43cea2, #185a9d)'
|'linear-gradient(to right, #ffecd2, #fcb69f)'
|'linear-gradient(to right, #a8ff78, #78ffd6)'
| "";
type radialGradient =
 | 'radial-gradient(circle, #ffafbd, #ffc3a0)'
 | 'radial-gradient(circle, #00c9ff, #92fe9d)'
 | 'radial-gradient(circle, #fddb92, #d1fdff)'
 | 'radial-gradient(circle, #9890e3, #b1f4cf)'
 | 'radial-gradient(circle, #ee9ca7, #ffdde1)'
 | 'radial-gradient(circle, #ff9a9e, #fecfef)'
 | 'radial-gradient(circle, #a18cd1, #fbc2eb)'
 | 'radial-gradient(circle, #fad0c4, #ffd1ff)'
 | 'radial-gradient(circle, #a1c4fd, #c2e9fb)'
 | 'radial-gradient(circle, #84fab0, #8fd3f4)'
 | 'radial-gradient(circle, #ff6f61, #de6161)'
 | 'radial-gradient(circle, #43cea2, #185a9d)'
 | 'radial-gradient(circle, #ffecd2, #fcb69f)'
 | 'radial-gradient(circle, #a8ff78, #78ffd6)'
 | "";

 const FrameFirst: React.FC = () => {
    const [solidColor, setSolidColor] = useState<Color>("");
    const [linearGradient, setLinearGradient] = useState<linearGradient>("");
    const [radialGradient, setRadialGradient] = useState<radialGradient>("");
    const [foregroundColor, setForegroundColor] = useState<Color>('#000000');
    const [activePage, setActivePage] = useState('home');
  
    const handleSolidColorClick = (color: Color) => {
      setSolidColor(color);
      setLinearGradient("");
      setRadialGradient("");
    };
  
    const handleLinearGradientClick = (gradient: linearGradient) => {
      setLinearGradient(gradient);
      setSolidColor("");
      setRadialGradient("");
    };
  
    const handleRadialGradientClick = (gradient: radialGradient) => {
      setRadialGradient(gradient);
      setSolidColor("");
      setLinearGradient("");
    };
  
    const handleForegroundColorClick = (color: Color) => {
      setForegroundColor(color);
    };
    return(
        <div className="flex  bg-white h-[62vw]">
            
          
            {/* Sidebar */}
      <div className="w-[15vw] bg-gray-100 p-4 hidden md:block h-[134vh]">
        <div className="text-xl font-bold mb-10"></div>
        <div style={{ padding: "1px", borderRadius: "4px", }} >
                <Image src={logo}  alt="profile-pic" style={{ width: "90%",  borderRadius: "2px",  height: "50px", }}/>
              </div>
        <nav className="space-y-4 mt-[100px]">
          <a href="#" className="block p-2 hover:bg-gray-300">
          <SpaceDashboardIcon />   Home
          </a>
          <a href="#" className="block p-2 hover:bg-gray-300">
          <CalendarTodayIcon />   Schedule
          </a>
          <a href="#" className="block p-2 hover:bg-gray-300">
          <AssignmentIcon />   Recommendation
          </a>
          <a href="#" className="block p-2 hover:bg-gray-300">
          <AnalyticsIcon />   Analytics
          </a>
          <a href="#" className="block p-2 hover:bg-gray-300">
          <PersonIcon />   Profile
          </a>
          <a href="#" className="block p-2 hover:bg-gray-300">
          <MailIcon />   Inbox{" "}
            <span className="ml-2 bg-blue-600 text-white rounded-full px-2">
              1001
            </span>
          </a>
          <a href="#" className="block p-2 hover:bg-gray-300">
          <ContrastIcon />   Themes
          </a>
       
        
          <a href="#" className="block p-2 hover:bg-gray-300  ">
          <SettingsIcon />   Settings
          </a>
         </nav>
      </div>

      {/* Main Content */}
      
      <div className=" p-4 flex-wrap w-[80vw]">
                <div className="flex flex-col items-end mt-[40px]"> 
            <div className="px-5 py-1.5 bg-whitesmoke self-end rounded-md flex items-center gap-2 text-gray-800 cursor-pointer ml-auto">
               <span className="font-semibold">Manish Gupta</span>
                <div style={{ padding: "1px", borderRadius: "4px" }}>
                <Image src={pprofile} alt="profile-pic" className="rounded-full object-cover h-10 w-10"/>
                </div>
            </div>
            </div>
      <div className="p-4 rounded-lg my-4 flex flex-col gap-4 font-semibold w-[80vw]">
            <h3 className="text-2xl text-center">Theme Page</h3>
            <div className="p-4 border border-gray-400 bg-slate-50 rounded-lg flex justify-between gap-4 font-semibold text-xl">
                <p>Apply a skin to your profile</p>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border-none rounded cursor-pointer transition-colors duration-300 text-black bg-[#ccc] font-semibold hover:bg-white text-sm"> + Custom</button>
                    <button className="px-4 py-2 border-none rounded cursor-pointer transition-colors duration-300 font-semibold text-sm hover:bg-[#ccc] w-[100px]">Save</button>
                </div>
            </div>
        </div>
        <div className="bg-white p-6  ml-[20px] w-[77.5vw] mt-[-15px]">
          <div className="bg-slate-100 border-slate-50  flex justify-between content-center" style={{ border: "1px solid black" }}>

          </div>
        </div>

        {/* submain content */}
        <div className="flex flex-row gap-10 flex-wrap ml-[20px]" >
          <div className="bg-white p-4  shadow w-1/8">
            <div className="grid grid-rows-4 gap-1">
              {/* Solids */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Solids</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-10 h-10 bg-[#000000] cursor-pointer"
                    onClick={() => handleSolidColorClick("#000000")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-[#808080] cursor-pointer"
                    onClick={() => handleSolidColorClick("#808080")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-[#FFFFFF] cursor-pointer"
                    onClick={() => handleSolidColorClick("#FFFFFF")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-[#FFFF00] cursor-pointer"
                    onClick={() => handleSolidColorClick("#FFFF00")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-[#ADD8E6] cursor-pointer"
                    onClick={() => handleSolidColorClick("#ADD8E6")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-[#FFC0CB] cursor-pointer"
                    onClick={() => handleSolidColorClick("#FFC0CB")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-[#800080] cursor-pointer"
                    onClick={() => handleSolidColorClick("#800080")}
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: "#FFEB3B" }}
                    onClick={() => handleSolidColorClick("#FFEB3B")}
                  ></div>
                   <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: "#FF4500" }}
                    onClick={() => handleSolidColorClick("#FF4500")}
                  ></div>
                   <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: "#32CD32" }}
                    onClick={() => handleSolidColorClick("#32CD32")}
                  ></div>
                </div>
              </div>

              {/* Linear Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Linear Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-10 h-10  cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #00c6ff, #0072ff)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #00ff87, #60efff)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #00ff87, #60efff)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #f857a6, #ff5858)"' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #f857a6, #ff5858)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #a1ffce, #faffd1)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #a1ffce, #faffd1)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #ff9a9e, #fad0c4)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #ff9a9e, #fad0c4)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #a1c4fd, #c2e9fb)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #d4fc79, #96e6a1)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #d4fc79, #96e6a1)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #84fab0, #8fd3f4)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #84fab0, #8fd3f4)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #fa709a, #fee140)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #fa709a, #fee140)"
                      )
                    }
                  ></div>
                   <div
                    className="w-10 h-10cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #fbc2eb, #a18cd1)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #fbc2eb, #a18cd1)"
                      )
                    }
                  ></div>
                   <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #ff6f61, #de6161)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #ff6f61, #de6161)"
                      )
                    }
                  ></div>
                   <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #43cea2, #185a9d)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #43cea2, #185a9d)"
                      )
                    }
                  ></div>
                   <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #ffecd2, #fcb69f)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #ffecd2, #fcb69f)"
                      )
                    }
                  ></div>
                   <div
                    className="w-10 h-10 cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #a8ff78, #78ffd6)' }}
                    onClick={() =>
                      handleLinearGradientClick(
                        "linear-gradient(to right, #a8ff78, #78ffd6)"
                      )
                    }
                  ></div>
                  
                </div>
              </div>
              {/* Radial Gradients */}
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Radial Gradients</h3>
                <div className="grid grid-cols-7 gap-2">
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #ffafbd, #ffc3a0)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #ffafbd, #ffc3a0)"
                      )
                    }
                  ></div>


                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #00c9ff, #92fe9d)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #00c9ff, #92fe9d)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #fddb92, #d1fdff)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #fddb92, #d1fdff)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #9890e3, #b1f4cf)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #9890e3, #b1f4cf)"
                      )
                    }
                  ></div>
                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #ee9ca7, #ffdde1)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #ee9ca7, #ffdde1)"
                      )
                    }
                  ></div>

                  <div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #ff9a9e, #fecfef)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #ff9a9e, #fecfef)"
                      )
                    }
                  ></div>

<div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #a18cd1, #fbc2eb)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #a18cd1, #fbc2eb)"
                      )
                    }
                  ></div>

<div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #fad0c4, #ffd1ff)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #fad0c4, #ffd1ff)"
                      )
                    }
                  ></div>

<div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #a1c4fd, #c2e9fb)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #a1c4fd, #c2e9fb)"
                      )
                    }
                  ></div>

<div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #84fab0, #8fd3f4)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #84fab0, #8fd3f4)"
                      )
                    }
                  ></div>

<div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #ff6f61, #de6161)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #ff6f61, #de6161)"
                      )
                    }
                  ></div>

<div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #43cea2, #185a9d)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #ff6f61, #de6161)"
                      )
                    }
                  ></div>



<div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #ffecd2, #fcb69f)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #ffecd2, #fcb69f)"
                      )
                    }
                  ></div>

<div
                    className="w-10 h-10 cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(circle, #a8ff78, #78ffd6)",
                    }}
                    onClick={() =>
                      handleRadialGradientClick(
                        "radial-gradient(circle, #a8ff78, #78ffd6)"
                      )
                    }
                  ></div>

                </div>
              </div>

              {/* Foreground Color */}
              <div>
                <h3 className="font-semibold mb-2">Foreground Color</h3>
                <div className="flex gap-1">
                  <div
                    className="w-10 h-10 bg-black cursor-pointer"
                    onClick={() => handleForegroundColorClick("#000000")}
                  ></div>
                  <div
                    className="w-10 h-10 bg-white border border-black cursor-pointer"
                    onClick={() => handleForegroundColorClick("#FFFFFF")}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow rounded " style={{ width: "100%", maxWidth: "65%" }}>
            <div className="bg-white p-4 rounded shadow"   style={{ backgroundColor: solidColor || undefined, backgroundImage: linearGradient || radialGradient || undefined,}}>
              <div style={{border: "3px dashed #cecece", padding: "5px", borderRadius: "10px", }} >
                <Image src={image}  alt="profile-pic" style={{ width: "100%",  borderRadius: "8px",  height: "200px", }}/>
              </div>
              <div  className="p-5 flex justify-left items-left" style={{ color: foregroundColor }} >
                <div className="flex items-left flex-col">
                  <div className="text-left">
                    <Image src={profile} alt="profile pic" className="w-[106px] h-[106px] rounded-full mb-4"  style={{ marginTop: "-70px" }}/>
                    <p>Manish Gupta</p>
                    <p className="mt-1">Full Stack Developer</p>
                    <p className="mt-1">manishsam@gmail.com</p>
                  </div>
                  <div  style={{padding: "10px", border: "3px dashed #cecece",borderRadius: "10px", marginTop: "4%", width: "103%", }}>
                    <p>
                    ”Aspiring software engineer aiming to leverage a strong foundation in software development and system analysis to design
                     and implement high-quality software solutions. Keen on utilizing my technical skills to contribute effectively to the projects
                     and growth of the organization while advancing my expertise in modern technologies. My proficiency in backend technologies like Node.js and databases such as
                      MongoDB further strengthens my ability to develop robust and scalable web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default FrameFirst;
