let token = {
    token: '',
};

export const setToken = (sentToken) => {
        token.token = sentToken;
        window.localStorage.setItem('token', JSON.stringify(token));
};

export const clearToken = () => {
    window.localStorage.removeItem('token');
    token = {
        token: '',
        user: {}
    };
};

export const checkToken = () => {
    if (window.localStorage.getItem('token')) {
        return true;
    } else {
        return false;
    }
};

export const grabUser = () => {
    if (checkToken()) {
        let user = JSON.parse(window.localStorage.getItem('token')).token.id;
        return user;
    } else {
        return undefined;
    }
}