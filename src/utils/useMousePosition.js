// import React, { useEffect, useRef } from "react";

// const useMousePosition = () => {
//   const mousePositionRef = useRef({ x: 0, y: 0 });

//   const updateMousePosition = (e) => {
//     mousePositionRef.current = {
//       x: e.clientX,
//       y: e.clientY,
//     };
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", updateMousePosition);

//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return mousePositionRef;
// };

// const CursorTracker = () => {
//   const mousePositionRef = useMousePosition();
//   const dotRef = useRef();

//   useEffect(() => {
//     const updateDotPosition = () => {
//       if (dotRef.current) {
//         dotRef.current.style.left = `${mousePositionRef.current.x}px`;
//         dotRef.current.style.top = `${mousePositionRef.current.y}px`;
//       }
//     };

//     const animationFrameId = requestAnimationFrame(updateDotPosition);
    
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [mousePositionRef]);

//   return (
//     <div
//       ref={dotRef}
//       className="fixed bg-black h-1 w-1 rounded-full"
//       style={{ left: 0, top: 0, position: "fixed" }}
//     />
//   );
// };

// export default CursorTracker;
