const API_URL = 'https://jsonplaceholder.typicode.com'

const loadUser = async () => {
    const loadedUser = await fetch(`${API_URL}/users/1`);
    const parsedUser = await loadedUser.json();
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

const loadUserData = async () => {
    const user = await loadUser();
    const photos = await loadPhotos(user);
    const photosWithComments = await loadComments(photos);

    showData(user, photos, photosWithComments);
}

loadUserData();