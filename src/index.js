const messages = [
    "romen",
    "oscar",
    "maria",
    "marcos",
    "federico",
    "ignacion",
    "mariano",
    "marcelo",
    "gancho"
];

const randomMsg = () => {
    const message = messages [Math.floor(Math.random()*
        messages.length)];
        console.log(message)
};

module.exports = { randomMsg};