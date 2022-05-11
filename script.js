function toggleSidebarItems() {
  const sidebarItems = document.querySelector('.nav');
  sidebarItems.classList.toggle('hide-sidebar');
}

const sidebarButton = document.getElementById('sidebar-btn');
sidebarButton.addEventListener('click', toggleSidebarItems);