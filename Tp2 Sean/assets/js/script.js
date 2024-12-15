document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menuOverlay = document.getElementById("menu-overlay");
  const banner = document.querySelector(".banner");
  const scrollDownArrow = document.querySelector('.scroll-down-container');
  const welcomeSection = document.querySelector('.welcome');
  const header = document.querySelector(".header");

  // Function to show the banner with sliding effect
  function showBanner() {
    banner.classList.add("visible");
  }

  // Function to hide the banner
  function hideBanner() {
    banner.classList.remove("visible");
  }

  // Function to show the header
  function showHeader() {
    header.classList.add("visible");
  }

  // Function to hide the header
  function hideHeader() {
    header.classList.remove("visible");
  }

  // Function to check scroll position and show/hide elements
  function checkScrollPosition() {
    const welcomeSectionBottom = welcomeSection.offsetTop + welcomeSection.offsetHeight;
    const bannerAlreadyVisible = banner.classList.contains('visible');
    const headerAlreadyVisible = header.classList.contains('visible');

    if (window.scrollY > welcomeSectionBottom) {
      if (!bannerAlreadyVisible) {
        showBanner();
      }
      if (!headerAlreadyVisible) {
        showHeader();
      }
    } else {

      if (bannerAlreadyVisible) {
        hideBanner();
      }
      if (headerAlreadyVisible) {
        hideHeader();
      }
    }
  }

  window.addEventListener("scroll", () => {
    checkScrollPosition();
    if (window.scrollY > welcomeSection.offsetHeight) {
      scrollDownArrow.classList.add('hidden');
    } else {
      scrollDownArrow.classList.remove('hidden');
    }
  });

  scrollDownArrow.addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
  menuButton.addEventListener("click", () => {
    menuOverlay.classList.toggle("visible");
  });
  menuOverlay.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      menuOverlay.classList.remove("visible");
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const bookNowButton = document.querySelector('.welcome .book-now');
  setTimeout(() => {
    bookNowButton.classList.add('show');
  }, 1000);
});
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu-link");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
      menuLinks.forEach((link) => link.classList.remove("active"));
      document.querySelector(`.menu-link[href="#${section.id}"]`).classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-container img");
  const imageOverlay = document.getElementById("image-overlay");
  const overlayImage = document.getElementById("overlay-image");
  const closeButton = document.getElementById("close-button");
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      overlayImage.src = image.src;
      imageOverlay.classList.add("active");
    });
  });
  closeButton.addEventListener("click", () => {
    imageOverlay.classList.remove("active");
  });
  imageOverlay.addEventListener("click", (event) => {
    if (event.target === imageOverlay) {
      imageOverlay.classList.remove("active");
    }
  });
});
