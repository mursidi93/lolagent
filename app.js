Pi.init({ version: "2.0" });

function loginPi() {
  const scopes = ['username', 'payments'];

  Pi.authenticate(scopes, onIncompletePaymentFound)
    .then(auth => {
      alert("Welcome " + auth.user.username);
      console.log(auth);
    })
    .catch(error => {
      console.error(error);
    });
}

function onIncompletePaymentFound(payment) {
  console.log(payment);
}
