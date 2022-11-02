document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'pink';
    }
});

document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
});

document.getElementById('new-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML = `
    <h3 class="freind-name">New Friend</h3>
    <p>Added new friend in this page</p>
    `
    friendContainer.appendChild(newFriend);
})