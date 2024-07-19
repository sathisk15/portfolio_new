const toggleSideBar = () => {
  let sideBar = document.getElementById('sidebar');
  sideBar.style.left === '0px'
    ? (sideBar.style.left = '-100%')
    : (sideBar.style.left = 0);
};

export default toggleSideBar;
