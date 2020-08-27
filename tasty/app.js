chrome.tabs.getSelected(null, tab => {
    if (tab.url.includes('tasty.co/recipe')) {
        document.querySelector('.disclaimer').classList.add('hidden');
        document.querySelector('.shopping-list').classList.remove('hidden');
    }
});

document.querySelector('.import').addEventListener('click', () => {
    chrome.tabs.sendMessage(tab.id, { action: 'fetchIngredients' }, response => {
        console.log(response);
    });
});
