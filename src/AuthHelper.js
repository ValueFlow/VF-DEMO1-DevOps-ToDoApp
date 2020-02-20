class AuthHelper {

    isLoggedIn = false;
    userInfo = {};

    constructor() {
        this.isLoggedIn = false;
    }

    setUser = (user) => {
        if (user) {
            this.userInfo.displayName = user.displayName;
            this.userInfo.email = user.email;
            this.userInfo.photoURL = user.photoURL;
        }

        if (user) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
    }


    isLoggedIn = () => {
        return this.isLoggedIn;
    }

    getUser = () => {
        return this.userInfo;
    }

}

// Kind of singleton
export default new AuthHelper();