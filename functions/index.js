// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

exports.solveHanoi = onRequest(async (req, res) => {
    const { n, from, to, aux } = req.body;
    const results = await hanoiAlgo(n,from, to, aux);
    res.json({results});
});

class Answer {
    constructor(disc, from, to) {
        this.disc = disc;
        this.from = from;
        this.to = to;
    }
}

const hanoiAlgo = async function(n, from, to, aux, moves) {
    let foundMoves = moves || [];

    if (n > 0) {
        hanoiAlgo(n - 1, from, aux, to, foundMoves);
        foundMoves.push(new Answer(n, from, to))
        hanoiAlgo(n - 1, aux, to, from, foundMoves);
    }

    return foundMoves
}