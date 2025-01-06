const firebaseConfig = {
    apiKey: "*****",
    authDomain: "*****",
    projectId: "****",
    storageBucket: "*****",
    messagingSenderId: "****",
    appId: "*****"
};
//Use Firebase Keys...

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// render recaptcha verifier
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {'size': 'visible'});
}
render();

// function for send OTP
function phoneAuth() {
    const phoneNumber = "+91" + document.getElementById('number').value;
    const appVerifier = window.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert('OTP Sent');
        }).catch((error) => {
            alert(error);
        });
}

// function for verifying OTP
function codeverify() {
    const code = document.getElementById('verificationcode').value;
    confirmationResult.confirm(code).then((result) => {
        const user = result.user;
        alert("Otp-Verified")
        alert("Signed up Successfull !!!");
    }).catch((error) => {
        alert("error!!!");
    });
}
