
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");
  
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")
  
    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")
  }


toggleTheme.addEventListener("click", changeTheme);

   const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})


function setupImageHoverEffects() {
  const imageMap = {

    'project1-img': {
      original: 'src/imagens/Home.png',
      hover: 'src/imagens/Homehover.png' 
    },
  
    'project2-img': {
      original: 'src/imagens/Mundo Normal.png',
      hover: 'src/imagens/Mundo Invertido.png'
    },

    'project3-img': {
      original: 'assets/images/projects/games-store.jpg',
      hover: 'assets/images/projects/games-store-hover.jpg'
    }
  };

  Object.keys(imageMap).forEach(id => {
    const imgElement = document.getElementById(id);
    if (imgElement) {
      imgElement.addEventListener('mouseover', () => {
        imgElement.src = imageMap[id].hover;
      });
      
      imgElement.addEventListener('mouseout', () => {
        imgElement.src = imageMap[id].original;
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', setupImageHoverEffects);
