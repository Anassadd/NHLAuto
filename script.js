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

// GESTION DE LA CINÉMATIQUE D'INTRO
document.addEventListener('DOMContentLoaded', () => {
  const introScreen = document.getElementById('intro-screen');
  
  // On bloque le scroll au démarrage
  document.body.classList.add('intro-active');

  // Au bout de 3.5 secondes (3500ms), on lance la disparition de l'intro
  setTimeout(() => {
    if (introScreen) {
      introScreen.classList.add('fade-out');
      
      // On réactive le scroll du site juste après la fin de la transition CSS (600ms)
      setTimeout(() => {
        document.body.classList.remove('intro-active');
      }, 600);
    }
  }, 3500); 
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
