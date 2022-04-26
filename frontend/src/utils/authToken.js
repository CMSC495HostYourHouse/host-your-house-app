
let token = {
    token: '',
    name: '',
    email: '',
};

export const setToken = sentToken => {
    if (token) {
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
    if (token.token != '') {
        return true;
    } else {
        return false;
    }

};