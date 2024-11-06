const g=9.81 ; //constante
var y=12; //variable, inicialmente 12
var t=0;
let dt=0.1;
while (y>0) {
y0=y;
y=y0-0.5*g*t**2;
t=dt; //sumar dt   
console.log("y(t=", t, ") =", y); 
}