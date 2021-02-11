const toggleMenu = () => {
  const sidebar = document.getElementById('sidebar'),
    profileToggle = document.getElementById('profileToggle');

  sidebar.classList.toggle('active');
  profileToggle.classList.toggle('rotate');
};

export default toggleMenu;
