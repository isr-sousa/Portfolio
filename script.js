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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView();
        }
    });
});
const form = document.getElementById("form-contato");
const status = document.getElementById("status-envio");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = new FormData(form);
        status.innerHTML = "Enviando...";
        status.style.color = "#888";

        fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Mensagem enviada com sucesso!";
                status.style.color = "green";
                form.reset();

                setTimeout(() => {
                    status.innerHTML = "";
                }, 4000);

            } else {
                status.innerHTML = "Ocorreu um erro ao enviar. Tente novamente.";
                status.style.color = "red";

                setTimeout(() => {
                    status.innerHTML = "";
                }, 5000);
            }
        }).catch(error => {
            status.innerHTML = "Ocorreu um erro ao enviar. Verifique sua conexão.";
            status.style.color = "red";

            setTimeout(() => {
                status.innerHTML = "";
            }, 5000);
        });
    });