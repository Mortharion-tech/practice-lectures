//  free API returning random User
const API_URL = 'https://jsonplaceholder.typicode.com'

//  add async keyword to functions to use async/await (for both arrow and normal functions)
const loadUser = async () => {
    //  loading User with ID 1
    const loadedUser = await fetch(`${API_URL}/users/1`);
    //  await waiting until fetch is resolved, only then next line gets executed
    //  parsing data to JSON and waiting for Promise to get resolved
    const parsedUser = await loadedUser.json();
    //  async functions return a Promise
    return parsedUser;
}

const loadPhotos = async (user) => {
    const userPhotos = ['photo1.png'];
    return userPhotos;
}

const loadComments = async (photos) => {
    const photosWithComments = [];
    for (let photo of photos) {
        photosWithComments.push({ photoName: photo, comments: ['Very nice'] });
    }
    return photosWithComments;
}

const showData = (user, photos, comments) => {
    console.log(user, photos, comments);
}

//  asychronous code but linear execution (line by line)
const loadUserData = async () => {
    //  await waiting until Promise from returned from function gets resolved
    const user = await loadUser();
    const photos = await loadPhotos(user);
    const photosWithComments = await loadComments(photos);

    //  showing Data to User
    showData(user, photos, photosWithComments);
}

loadUserData();