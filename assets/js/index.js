document.addEventListener("DOMContentLoaded", function () {
  // Gestion du menu burger (mobile)
  // Lorsque l'utilisateur clique sur le bouton burger, le menu de navigation s'ouvre ou se ferme.
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu = document.getElementById('navMenu');

  burgerBtn.addEventListener('click', function () {
    // Ajoute ou supprime la classe 'open' pour afficher ou masquer le menu.
    navMenu.classList.toggle('open');
  });

  // Gestion de la modal "Lire l'article"
  // Permet d'afficher ou de masquer la section de l'article lorsque l'utilisateur interagit avec les boutons.
  const openArticleBtn = document.querySelector('.btn.btn-lire-article'); // Bouton pour ouvrir l'article
  const closeArticleBtn = document.getElementById('closeArticle'); // Bouton pour fermer l'article
  const articleSection = document.getElementById('lire-article'); // Section contenant l'article

  openArticleBtn.addEventListener('click', function () {
    // Affiche la section de l'article en ajoutant la classe 'show' et met à jour l'attribut 'aria-hidden'.
    articleSection.classList.add('show');
    articleSection.setAttribute('aria-hidden', 'false');
  });

  closeArticleBtn.addEventListener('click', function () {
    // Masque la section de l'article en supprimant la classe 'show' et met à jour l'attribut 'aria-hidden'.
    articleSection.classList.remove('show');
    articleSection.setAttribute('aria-hidden', 'true');
  });
});
