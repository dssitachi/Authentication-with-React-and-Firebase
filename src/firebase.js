import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    // ADD your configurations of the firebase here
})


export const auth = app.auth();
export default app;