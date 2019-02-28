// Your code here!
const circle = {
    radius=1,
    location: { x:1, y:1},


draw: function () {
        console.log('draw');}
};
circle.draw();

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
circle.draw();

function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);

for (i = 1109; i >= 119; i-=11) {
    console.log(i);
}

var total = 0;
for (i = 1109; i >= 119; i -= 11) {
    total = tatal + i;
}
console.log(i)