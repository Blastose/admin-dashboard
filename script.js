function toggleSidebarItems() {
  const sidebarItems = document.querySelector('.nav');
  sidebarItems.classList.toggle('hide');
}

const sidebarButton = document.getElementById('sidebar-btn');
sidebarButton.addEventListener('click', toggleSidebarItems);