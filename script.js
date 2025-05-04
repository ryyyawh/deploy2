const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

function showPage(id) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
    sidebar.classList.remove('show');
}

function copyCode(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector(`#${id} + .btn`);
        btn.textContent = "Copied!";
        setTimeout(() => btn.textContent = "Copy", 1500);
    });
}
