class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display() {
        //var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(this.x, this.y, this.w, this.h);
    }
};