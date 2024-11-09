async function loadUser(userId) {
    let user;
    //  catching errors with try / catch
    //  1. try block gets executed
    try {
    //  passing user ID to function and using the user based on that user ID
        user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
    //  only executed when an error occurs
    //  ! rest of try block will not get executed after an error occured !
    catch(err) {
    //  .message to access the error message (careful, not all errors have all properties)
        console.log(err.message, ' - error in loadUser');
    }
    //  code after still getting executed since we are catching the error
    

    //  ? checks if variable is defined (neither null nor undefined)
    const parsedUser = await user?.json();

    //  defining custom error, manually generating error message
    //  Error thrown if User website doesn't match
    if (parsedUser.website !== "hildegard.org") {
        throw new Error('Only users from "hildegard.org" are accepted!');
    }

    console.log(parsedUser);
    return parsedUser;
}

async function anotherLoad() {
    //  try / catch works with any nesting
    //  either catch the error here or in loadUser() function
    //  ! Just make sure to catch the error somewhere !
    try {
    //  Loading functionality added here - showing website is loading
        console.log('Show loader');
        console.log('Loading User 1');
    //  loading User with ID 1
        const user1 = await loadUser(1);
        console.log(user1);
        console.log('Loading User 2');
    //  loading User with ID 2
        const user2 = await loadUser(2);
        console.log(user2);
    } catch(err) {
        console.log(err.message, ' - error in anotherLoad');
    }
    //  finally block will run regardless of result of try / catch blocks
    //  mostly used to hide page loader if anything fails so user doesn't see infinite loader in case of error
    finally {
    //  Loading functionality added here - showing website finished loading
    //  loader will get hidden after everything is loaded even if there is an error
        console.log('Hide loader');
    }
    console.log('Finish');
}

anotherLoad();