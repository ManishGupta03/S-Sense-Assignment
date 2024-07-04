'use client'
import bg1 from '@/app/utils/bg-1.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg1">
      <h1 className="text-7xl font-bold mt-[150px] ">SocialSense Assignment</h1>
      <style jsx>{`
        main::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${bg1.src}); 
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          z-index: -1; 
        }
      `}</style>
      
    </main>
  );
}
