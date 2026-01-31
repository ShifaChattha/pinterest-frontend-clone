function display() {
    document.getElementById('verticalMenu').style.display = 'flex';
}

document.getElementById('ham').addEventListener('click', function() {
    display();
});
