'use client'
import React, { useState, useCallback, ChangeEvent, FormEvent, useEffect } from 'react';
import { Button, Modal, Stack, Slider } from '@mui/material';
import Cropper, { Area } from 'react-easy-crop';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from "next/image";
import logo from "@/app/utils/d-4.png"

// Utility function to create the cropped image
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new window.Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.src = url;
  });

const getCroppedImg = async (imageSrc: File, crop: Area): Promise<string> => {
  console.log(imageSrc);
    try{
  const image = await createImage(URL.createObjectURL(imageSrc));
  const canvas = await document.createElement('canvas');
  const ctx = await canvas.getContext('2d');

  if (!ctx) { throw new Error('Could not get canvas context'); }

  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = 'high';

  ctx.drawImage(image,crop.x,crop.y,crop.width,crop.height, 0, 0, crop.width, crop.height);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas is empty'));
        return;
      }
      const url = URL.createObjectURL(blob);
      console.log('Cropped image URL:', url);
      resolve(url);
    }, 'image/jpeg');
  });
}catch (error) {
    console.error('Error in getCroppedImg:', error);
    throw error;
  }
};

interface ProfilePageProps {
  setActivePage: (page: string) => void;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ setActivePage }) => {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [role, setRole] = useState<string>('employee');
  const [onboardingDate, setOnboardingDate] = useState<string>('');
  const [currentStatus, setCurrentStatus] = useState<number>(0);
  const [toggleCheckboxes, setToggleCheckboxes] = useState({
    officeTour: false,
    managementIntro: false,
    workTools: false,
    meetColleagues: false,
    activityTracking: false,
    reqHandling: false,
    dutiesJournal: false
  });
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [aspect, setAspect] = useState<number>(4 / 3);
  const [cropModalOpen, setCropModalOpen] = useState<boolean>(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleProfilePicChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePic(file);
      setCropModalOpen(true);
    }
  };

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropComplete = async () => {
    if (!profilePic || !croppedAreaPixels) return;
    try {
      const croppedImage = await getCroppedImg(profilePic, croppedAreaPixels);
      setCroppedImage(croppedImage);
      console.log(croppedImage);
      setCropModalOpen(false);
      console.log('Cropped image set successfully');
    } catch (e) {
      console.error('Error cropping image:', e);
    }
  };

  const handleCropCancel = () => {
    setProfilePic(null);
    setCropModalOpen(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      phone,
      role,
      onboardingDate,
      currentStatus,
      toggleCheckboxes,
      croppedImage
    });
  };
 useEffect(()=>{

 },[])

 const handleCheckboxChange = (key: keyof typeof toggleCheckboxes) => {
  setToggleCheckboxes((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));
};
  return (
    <div className="flex flex-col min-h-screen w-[98vw] max-w-full p-5 bg-inherit font-sans bg-white">
      <div className="mb-[20px] bg-[#007aff] text-white border-none px-5 py-2.5 rounded-lg cursor-pointer shadow-md transition-colors duration-300 hover:bg-[#005bb5] mt-[30px] w-[160px]">
        <button >Back to Themes</button>
      </div>
      {/* onClick={() => setActivePage('theme')} */}
      <div className="flex bg-white rounded-lg mt-[-10px] ">
        <div className=" bg-gray-500  p-20 mr-20 text-white flex flex-col gap-20 min-h-screen sticky top-0 rounded-xl shadow-md w-[100px]">
          <div className=' w-[20px] ml-[35px]'>
          <div className='ml-[-100px] mt-[-50px] flex justify-end items-center ' >
                <Image src={logo}  alt="profile-pic" width={50} height={50} style={{ width: "150%",  borderRadius: "4px",  height: "40px", }} />
              </div>
          </div>
          <SupervisorAccountIcon className='ml-[-15px] cursor-pointer hover:text-gray-200'/>
          <SpeakerNotesIcon className='ml-[-15px] cursor-pointer hover:text-gray-200'/>
          <SettingsIcon className='ml-[-15px] cursor-pointer hover:text-gray-200'/>
        </div>

        <div className="flex flex-col  bg-white rounded-lg shadow-md p-20 ">
          <div className="flex w-full justify-between items-center mb-20 bg-white p-[20px] rounded-lg shadow-md ">
            <div className="flex gap-[10px] flex-1 h-[20px] font-semibold">
              {firstName && <p>{firstName}</p>}
              {croppedImage && (
                <div className="">
                  <Image src={croppedImage} alt="Profile"  objectFit="cover" width={50} height={50} className='w-[50px] h-[50px] rounded-full mt-[-15px]'/>
                </div>
              )}
            </div>
            <div className="flex items-center ml-[-30px] ">
              <button className='bg-[#007aff] text-white border-0 px-4 py-2 rounded-lg cursor-pointer shadow-md transition duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg text-base font-semibold text-center no-underline'>Save</button>
            </div>
          </div>

          <div className="flex flex-row text-gray-400 mb-[10px] ml-[-50px] h-[80vh]">
            <div className="flex-1 bg-[#f0f0f0] p-[20px] mr-[20px] mb-[20px] rounded-lg w-[25vw] h-[80vh]">
              <div className="bg-[#f0f0f0] p-[20px] mb-[20px] rounded-lg ">
                <h2 className='text-xl font-semibold text-gray-500 mb-[10px] '>Profile Picture</h2>
                <input type="file" className = 'w-[100%] p-[10px] mb-[10px] rounded-md border border-solid border-gray-300' onChange={handleProfilePicChange} />
                {profilePic &&
                  <Modal open={cropModalOpen} onClose={handleCropCancel}>
                    <div className="w-full h-full flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
                      <Cropper image={URL.createObjectURL(profilePic)} crop={crop}  zoom={zoom} aspect={aspect} onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete} />
                      <Stack spacing={2} direction="row" className="mt-4">
                        <Slider value={zoom} min={1} max={3} step={0.1} aria-labelledby="Zoom" sx={{ width: 40 }} onChange={(e, zoom) => setZoom(zoom as number)} />
                      
                      <Button variant="contained" color="secondary" onClick={handleCropCancel}>Cancel</Button>
                      <Button variant="contained" color="primary" onClick={handleCropComplete}>Crop</Button>
                      </Stack>
                    </div>
                  </Modal>
                }
                {croppedImage && (
                  <div className="w-[150px] h-[150px] mb-[10px] rounded-sm overflow-hidden shadow-md">
                    <Image src={croppedImage} alt="Profile" width={50} height={50} className='w-[140%] h-[100%] object-cover rounded-lg'/>
                  </div>
                )}

                <h2 className='mt-[10px] font-semibold text-xl text-gray-500'>User Details</h2>

                <input className="w-full h-[40px] my-[10px] gap-3 rounded-lg p-[10px] flex justify-center items-center border border-solid border-gray-300 font-semibold text-gray-700" type="text"  placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input  className="w-full h-[40px] my-[10px] gap-3 rounded-lg p-[10px] flex justify-center items-center border border-solid border-gray-300 font-semibold text-gray-700" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input className="w-full h-[40px] my-[10px] gap-3 rounded-lg p-[10px] flex justify-center items-center border border-solid border-gray-300 font-semibold text-gray-700" type="email"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input  className="w-full h-[40px] my-[10px] gap-3 rounded-lg p-[10px] flex justify-center items-center border border-solid border-gray-300 font-semibold text-gray-700"   type="tel"  placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>

            <div className="flex-1 bg-[#f0f0f0] p-[20px] mr-[20px] mb-[20px] rounded-lg w-[25vw] h-[80vh]">
              <div className="mb-[20px] w-[100%] p-[10px]  rounded-md border border-solid border-gray-300">
                <h2 className='text-xl font-semibold text-gray-500'>Role</h2>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full h-[50px] my-[10px] gap-3 rounded-lg p-[10px] flex justify-center items-center border border-solid border-gray-300 font-semibold text-gray-700">
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>
                </select>
              </div>

              <div className="mb-[20px]">
                <h2 className='text-xl font-semibold text-gray-500'>Team Details</h2>
                <p className='mb-[20px] font-bold'>HR - John Doe</p>
              </div>
            </div>

            <div className="flex-1 bg-[#f0f0f0] p-[20px] mr-[20px] mb-[20px] rounded-lg w-[25vw] h-[80vh]">
              <div className="mb-[20px]">
                <h2 className='text-xl font-semibold text-gray-500 mb-[10px]'>Onboarding</h2>
                <input className="w-[100%] p-[10px] mb-[10px] rounded-md border border-solid border-gray-300 text-black" type="date" value={onboardingDate} onChange={(e) => setOnboardingDate(e.target.value)}/>
                <input className="w-[100%] p-[10px] mb-[10px] rounded-md border border-solid border-gray-300" type="range"  min="0"  max="100"  value={currentStatus} onChange={(e) => setCurrentStatus(Number(e.target.value))}/>
                <button className = "bg-[#007aff] text-white border-none py-[10px] px-[20px] rounded-md cursor-pointer shadow-sm transition duration-300 ease-in-out hover:bg-[#005bb5]" onClick={() => console.log('View Answers')}>View Answers</button>
              </div>

              <div className="mb-[20px] ">
                <h2 className='text-xl font-semibold text-gray-500 mb-[10px]'>Checkboxes</h2>
                {Object.entries(toggleCheckboxes).map(([key, value]) => (
                 
                  <label key={key} className='block mb-[4px] relative'>
                    <input type="checkbox" id={key} checked={value} 
                    className={'appearance-none w-[50px] h-[30px] rounded-2xl  cursor-pointer outline-none'}  style={{backgroundColor:value?"blue":"gray"}}
                    onChange={() => handleCheckboxChange(key as keyof typeof toggleCheckboxes)}
                    />
                    
                    <div
            className={`absolute left-[0px] mt-[-30px] w-[20px] h-[20px] rounded-full bg-white transition-transform duration-300 ease-in-out transform ${
              value ? 'translate-x-[28px]' : '-translate-x-[-2px]' }`} ></div>
                  <div className="ml-[10px] inline-block font-semibold text-gray-500">{key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {  return str.toUpperCase(); })}</div>
                  </label>
))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
// transition duration-300 ease-in-out checked:bg-blue-500 checked:translate-x-full checked:shadow-outline 
//  ${value ? 'bg-blue-500' : 'bg-gray-300' }`}
// () => setToggleCheckboxes((prev) =>  {  console.log(key); return {  ...prev, [key]:!prev[key] }})