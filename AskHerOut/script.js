const imagenoUrls = [
    'https://media.giphy.com/media/ZcTZQ9K75kGiMycCLZ/giphy.gif','https://media.giphy.com/media/gaBvNiN5HYouQ7MMfM/giphy.gif','https://media.giphy.com/media/KxDqcD2mAEuOFMMu1g/giphy.gif'

]

function changeLocation() {
    let newX = Math.floor(Math.random() * window.innerWidth);
    let newY = Math.floor(Math.random() * window.innerHeight);

    var button = document.querySelector('.no');
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    changeimageno();
}
function changeimageno(){
    var imageC = document.querySelector('img');
    var randomIndex = Math.floor(Math.random()*imagenoUrls.length);
    imageC.src= imagenoUrls[randomIndex];
    document.querySelector('.go').innerHTML = '<h1>plsssssssssssss</h1> '
}
function changeimageyes(){
    var imageY = document.querySelector('img');
    imageY.src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm82Y3ViMnhndWRnejE1a2JxNThicjNwNmw1MGFiMHdkaTltNWY0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7zGmpJmwUp5lNFudOf/giphy.gif" ;
    document.querySelector('.go').innerHTML = '<h1>Awwww, i knew you would accept.</h1>'
    var button = document.querySelector('.no');
    button.style.position = 'static';
   
}