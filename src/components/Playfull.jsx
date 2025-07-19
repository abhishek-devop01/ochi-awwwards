import React, { useEffect, useState } from "react";

const Playfull = () => {
  const [rotate, setrotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle-180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full h-full bg-cover bg-center bg-[url(./assets/bgc.jpg)]">
        <div className="absolute flex gap-10 -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2">
          <div className="w-[13vw] flex items-center justify-center h-[13vw] rounded-full bg-zinc-100 ">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-8 absolute top-1/2 left-1/2  "
              >
                <div className="w-6 h-6  rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
          <div className="w-[13vw] flex items-center justify-center h-[13vw] rounded-full bg-zinc-100 ">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-8 absolute top-1/2 left-1/2 "
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playfull;
