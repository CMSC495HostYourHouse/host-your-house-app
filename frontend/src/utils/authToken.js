let token = {
    token: '',
    user: {}
};

export const setToken = (sentToken, user) => {
    if (token) {
        token.token = sentToken;
        token.user = user;
        window.localStorage.setItem('token', sentToken);
    } else {
        token = {
            token: '',
            name: '',
            email: '',
        }
    }
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
        let user = window.localStorage.getItem('token')[user];
        return user;
    } else {
        return undefined;
    }
}