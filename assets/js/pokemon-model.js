class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
    weight;
    height;
    stats = [];
}

class Stat {
    constructor(name, baseStat) {
        this.name = name;
        this.baseStat = baseStat;
    }
}