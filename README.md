# TowerOfHanoi-API


Receives a body.
{
"n": numberOfDiscs,
"from": "Left",
"to": "Right",
"aux": "Middle"
}

Returns array of [Answer]

class Answer {
    constructor(disc, from, to) {
        this.disc = disc;
        this.from = from;
        this.to = to;
    }
}
