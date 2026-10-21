function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    document.querySelector('.menu-button').style.display = 'none';
}
function hideSider(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
    document.querySelector('.menu-button').style.display = 'block';
}
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        hideSider();
        });
        });

function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
}