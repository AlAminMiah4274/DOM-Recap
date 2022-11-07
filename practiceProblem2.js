const friends = () => {
    const friendsName = ['sabbir', 'masum', 'rakib', 'safim', 'rasel', 'nayem'];
    const newFriends = [];

    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName.length === 'even') {
            newFriends.push(friendsName.length);
        }
    }
    return newFriends;
}
console.log(friends());