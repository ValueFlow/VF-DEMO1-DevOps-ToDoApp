import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { configedFirebase } from './configs/Firebase'
import AuthHelper from './AuthHelper'

export class Auth extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            configedFirebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // {
            //     provider: 'microsoft.com',
            //     providerName: 'Microsoft',
            //     buttonColor: 'white',
            //     iconUrl: 'https://img.favpng.com/1/13/6/microsoft-windows-logo-scalable-vector-graphics-png-favpng-6xSyDNz8wEx4FQn7gSiMGMg39.jpg',
            //     loginHintKey: 'Login with Microsoft Account',
            // }
        ],
        callbacks: {
            signInSuccess: (response) => console.log('Signed in successfully!')
        }
    }

    componentDidMount() {
        configedFirebase.auth().onAuthStateChanged(user => {
            AuthHelper.setUser(user)

            if (AuthHelper.isLoggedIn) {
                this.props.history.push('/Layout');
            }
        })
    }

    render() {
        const loginStyle = {
            margin: "0 autho",
            backGroundColor: 'green'
        }

        return (
            <div>
                {
                    AuthHelper.isLoggedIn ?
                        <div>Signed in!</div>
                        :
                        // if not signed in then show the sign in provider logos
                        <div style={loginStyle}>

                            <StyledFirebaseAuth
                                uiConfig={this.uiConfig}
                                firebaseAuth={configedFirebase.auth()}
                            />
                        </div>
                }
            </div>
        )
    }
}

export default Auth
