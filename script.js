// ==========================================================================
// 1. GESTION DES ONGLETS (TABS SERVICES)
// ==========================================================================
document.querySelectorAll('.ap-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Retire la classe active des onglets et des panneaux
    document.querySelectorAll('.ap-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ap-tab-panel').forEach(p => p.classList.remove('active'));
    
    // Ajoute la classe active à l'onglet cliqué
    tab.classList.add('active');
    
    // Active le panneau correspondant via son dataset
    const panel = document.getElementById('panel-' + tab.dataset.tab);
    if (panel) {
      panel.classList.add('active');
    }
  });
});

// ==========================================================================
// 2. GESTION DE LA CINÉMATIQUE D'INTRO (AVEC SÉCURITÉ ANTI-RETOUR)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const introScreen = document.getElementById('intro-screen');
  const body = document.body;

  // VÉRIFICATION : Si l'utilisateur a déjà vu l'intro pendant sa session (ex: retour de la page CGV)
  if (sessionStorage.getItem("introVue") === "true") {
    if (introScreen) {
      introScreen.style.display = "none"; // On coupe l'intro direct sans animation
    }
    body.classList.remove('intro-active'); // On laisse le scroll actif
  } else {
    // PREMIÈRE VISITE : On lance la cinématique normale de 3.5s
    body.classList.add('intro-active');

    setTimeout(() => {
      if (introScreen) {
        introScreen.classList.add('fade-out');
        
        // On enregistre dans la mémoire de la session que l'intro a été vue
        sessionStorage.setItem("introVue", "true");
        
        // On réactive le scroll du site juste après la fin de la transition CSS (600ms)
        setTimeout(() => {
          body.classList.remove('intro-active');
        }, 600);
      }
    }, 3500); 
  }
});

//tab nav des section 
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burger-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        mobileMenu.classList.remove("open");
      });
    });
  }
});


// SYSTÈME D'ONGLETS POUR LES SERVICES (Ton code existant)
document.querySelectorAll('.ap-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ap-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.ap-tab-panel').forEach(p => p.classList.remove('active'));
    
    tab.classList.add('active');
    
    const panel = document.getElementById('panel-' + tab.dataset.tab);
    if (panel) {
      panel.classList.add('active');
    }
  });
});

/* ==========================================================================
   SLIDER AVIS GOOGLE - SWIPER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    new Swiper(".googleSwiper", {

        loop: true,

        speed: 700,

        spaceBetween: 20,

        grabCursor: true,

        centeredSlides: false,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        navigation: {
            nextEl: ".google-next",
            prevEl: ".google-prev"
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
                centeredSlides: true
            },

            768: {
                slidesPerView: 2,
                centeredSlides: false
            },

            1200: {
                slidesPerView: 3,
                centeredSlides: false
            }

        }

    });

});


// ==========================================================================
// 5. SLIDER SWIPER ATELIER
// ==========================================================================

document.addEventListener("DOMContentLoaded",()=>{

new Swiper(".gallerySwiper",{

loop:true,

speed:1200,

grabCursor:true,

centeredSlides:true,

spaceBetween:25,

autoplay:{
delay:3500,
disableOnInteraction:false
},

navigation:{
nextEl:".gallery-next",
prevEl:".gallery-prev"
},

pagination:{
el:".swiper-pagination",
clickable:true
},

breakpoints:{

0:{
slidesPerView:1.1
},

768:{
slidesPerView:2
},

1200:{
slidesPerView:3
}

}

});

});

