document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('frined');
    for (const friend of friends) {
        friend.style.backgroundColor = 'pink';
    }
});

document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
});

document.getElementById('new-friend').addEventListener('click', function () {
    console.log('clicked');
})