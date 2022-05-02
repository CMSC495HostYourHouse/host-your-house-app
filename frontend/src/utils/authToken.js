let token = {
    token: '',
    name: '',
    email: '',
};

export const setToken = sentToken => {
    if (token) {
        console.log(sentToken);
        token.token = sentToken;
    } else {
        token = {
            token: '',
            name: '',
            email: '',
        }
    }
};

export const checkToken = () => {
    if (token.token != '' || token.token != undefined) {
        console.log(token.token);
        return true;
    } else {
        return false;
    }
};