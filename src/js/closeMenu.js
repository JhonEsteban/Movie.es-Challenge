const closeMenu = (e) => {
  const isProfile = e.target.classList.contains('profile__logo');

  if (!isProfile) {
    const sidebar = document.getElementById('sidebar'),
      profileToggle = document.getElementById('profileToggle');

    sidebar.classList.remove('active');
    profileToggle.classList.remove('rotate');
  }
};

export default closeMenu;
