function displayImage(thumbnail) {
    // Change the source of the main image to the clicked thumbnail
    const mainImage = document.getElementById("displayed-image");
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
  }
  