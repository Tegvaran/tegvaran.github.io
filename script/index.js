document.addEventListener("mousemove", (e) => {
    const leftPupil = document.getElementById("left-pupil");
    const rightPupil = document.getElementById("right-pupil");
  
    const movePupil = (pupil, eyeCenterX, eyeCenterY, svgRect) => {
      const dx = e.clientX - (svgRect.left + eyeCenterX * svgRect.width);
      const dy = e.clientY - (svgRect.top + eyeCenterY * svgRect.height);
  
      const angle = Math.atan2(dy, dx);
  
      const moveRadiusX = 10; // limit horizontal movement
      const moveRadiusY = 10; // limit vertical movement
  
      const offsetX = Math.cos(angle) * moveRadiusX;
      const offsetY = Math.sin(angle) * moveRadiusY;
  
      // Set the new cx, cy relative to the SVG coordinate system
      pupil.setAttribute("cx", eyeCenterX * 671 + offsetX); // 671 = viewBox width
      pupil.setAttribute("cy", eyeCenterY * 448 + offsetY); // 448 = viewBox height
    };
  
    const svg = document.querySelector("svg");
    const svgRect = svg.getBoundingClientRect();
  
    // SVG coordinate system is relative (0–1), so normalize centers
    const leftEyeCenter = { x: 277.992 / 671, y: 376.52 / 448 };
    const rightEyeCenter = { x: 369 / 671, y: 376.488 / 448 };
  
    movePupil(leftPupil, leftEyeCenter.x, leftEyeCenter.y, svgRect);
    movePupil(rightPupil, rightEyeCenter.x, rightEyeCenter.y, svgRect);
  });