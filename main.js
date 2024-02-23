let box = document.querySelector(".card");

class Show {
  constructor(w, h, bg) {
    this.w = w;
    this.h = h;
    this.bg = bg;
  }
}

let show = new Show(45, 45, "red");

box.style = `width:${show.w}px;height:${show.h}px;background:${show.bg}`;

let circleEl = document.querySelector(".circle");

class Circle extends Show {
  constructor(w, h, bg, border) {
    super(w, h);
    this.bg = bg;
    this.border = border;
  }
}

let circle = new Circle(90, 90, "green", 50);

circleEl.style = `width:${circle.w}px;height:${circle.h}px;background:${circle.bg};border-radius:${circle.border}%`;

let triangleEl = document.querySelector(".triangle");

class Triangle {
  constructor(bl, br, bb, clr) {
    this.bl = bl;
    this.bb = bb;
    this.br = br;
    this.color = clr;
  }
}

let triangle = new Triangle(50, 50, 50, "black");

triangleEl.style = `width:0;heigth:0; border-left: ${triangle.bl}px solid transparent;border-right: ${triangle.br}px solid transparent; border-bottom: ${triangle.bb}px solid ${triangle.color};`;
