document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('theme-switcher');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitcher.checked = true;
        themeSwitcher.nextElementSibling.textContent = '🌜';
    }

    themeSwitcher.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            themeSwitcher.nextElementSibling.textContent = '🌜';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            themeSwitcher.nextElementSibling.textContent = '🌞';
            localStorage.setItem('theme', 'light');
        }
    });
});