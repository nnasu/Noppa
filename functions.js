const button = document.querySelector('button')


button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const imgElement = document.querySelector('#dice img');
    imgElement.src = `/img/${randomNumber}.png`;

});