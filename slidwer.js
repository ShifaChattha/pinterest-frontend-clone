const initslider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButton = document.querySelectorAll(".slider-wrapper .slide-button");
    const maxscrollLeft = imageList.scrollWidth - imageList.clientWidth; 
  
    slideButton.forEach(button => {
      button.addEventListener("click", () => {
        const direction = button.id === "pre-slider" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * 0.4 * direction; // Adjust scroll amount if needed
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  
    const handelslideButtons = () => {
      slideButton[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
      slideButton[1].style.display = imageList.scrollLeft >= maxscrollLeft ? "none" : "block";
    };
  
    // Call the function initially to set button visibility
    handelslideButtons();
  
    imageList.addEventListener("scroll", () => {
      handelslideButtons();
    });
  };
  
  window.addEventListener("load", initslider);
  