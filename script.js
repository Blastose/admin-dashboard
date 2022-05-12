function toggleSidebarItems() {
  const sidebarItems = document.querySelector('.nav');
  sidebarItems.classList.toggle('hide-small');
}

function toggleContentItems(elementParent) {
  elementParent.classList.toggle('hide');
  const contentItem = document.querySelector(`.${elementParent.getAttribute("data-content-name")}`);
  contentItem.classList.toggle('hide-small');
}

const sidebarButton = document.getElementById('sidebar-btn');
sidebarButton.addEventListener('click', toggleSidebarItems);

const contentSections = document.querySelectorAll('.content-title');
contentSections.forEach((element) => {
  element.addEventListener('click', e => {
    toggleContentItems(e.currentTarget);
  });
});