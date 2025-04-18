export const loadImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => resolve(img);
      };
      reader.readAsDataURL(file);
    });
  };
  
  export const findContours = (image) => {
    // Implement OpenCV.js contour detection
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      
      // Mock contour data - replace with actual OpenCV.js
      const mockContours = [
        { points: [[10,20],[30,40],[50,60]], type: 'crack' }
      ];
      resolve(mockContours);
    });
  };