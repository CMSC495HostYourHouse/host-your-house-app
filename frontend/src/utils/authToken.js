let token = {
    token: '',
    user: {}
};

export const setToken = (sentToken, user) => {
    token.token = sentToken;
    token.user = user;
};

export const clearToken = () => {
    token = {
        token: '',
        user: {}
    };
};

export const checkToken = () => {
    if (token.token !== '') {
        return true;
    } else {
        return false;
    }
};