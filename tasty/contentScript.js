chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fetchIngredients') {
        const recipeName = document.querySelector('.recipe-name').innerText;
        const ingredients = Array.from(document.querySelectorAll('.ingredient')).map(ingredient => ingredient.innerText);

        sendResponse({ recipeName, ingredients });
    }
});
