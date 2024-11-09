async function loadUser(userId) {
    let user;
    try {
        user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    } catch(err) {
        console.log(err.message, ' - error');
    }
    
    const parsedUser = await user?.json();

    if (parsedUser.website !== "hildegard.org") {
        throw new Error('Only users from "hildegard.org" are accepted!');
    }

    console.log(parsedUser);
    return parsedUser;
}

async function anotherLoad() {
    try {
        console.log('Show loader');
        console.log('Loading User 1');
        const user1 = await loadUser(1);
        console.log(user1);
        console.log('Loading User 2');
        const user2 = await loadUser(2);
        console.log(user2);
    } catch(err) {
        console.log(err.message, ' - error 2');
    } finally {
        console.log('Hide loader');
    }
    console.log('Finish');
}

anotherLoad();