const questions = document.querySelectorAll('.faq__question');

questions.forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('active');
    });
});