export class Player {
    name: string;
    color: 'R' | 'Y';

    constructor(name: string, color: 'R' | 'Y') {
        this.name = name;
        this.color = color;
    }
}
