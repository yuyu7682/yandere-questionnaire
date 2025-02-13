document.getElementById('questionnaire').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const selected = question.querySelector('input:checked');
        if (selected) {
            score += parseInt(selected.value);
        }
    });

    const result = document.getElementById('result');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');

    if (score >= 7) {
        resultTitle.textContent = '彻底沦陷';
        resultDescription.textContent = '你完全顺从，沉溺在沉岭的掌控中。你的世界只剩下他，再也无法离开。';
    } else if (score >= 4) {
        resultTitle.textContent = '危险依赖';
        resultDescription.textContent = '你半信半疑，挣扎但离不开沉岭。你试图保持理智，但内心已被他深深吸引。';
    } else {
        resultTitle.textContent = '无情的背叛';
        resultDescription.textContent = '你拒绝占有，被沉岭强制掌控。你的反抗激起了他更强烈的占有欲，你已无法逃脱。';
    }

    result.classList.remove('hidden');
});
