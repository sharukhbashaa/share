/*primitive data types*/
/*hosting only for var*/
var x;
    x=5;

console.log(x);

/*let and const*/
/*we cannot overwrite the value let*/
{
    let x=5;

    console.log(x);
}
{
  const x=5;

  console.log(x)
}

/*non-primitive data types*/
/* function expression*/

var z=function() {
    var y=10;
    var r;
    r=x+y;
    return r;
}

console.log(z());

/* function declartion*/

function declartion() {
    var y=10;
    var r;
    r=x+y;
    return r;
}
console.log(declartion());

/* self involking function*/

(function declartion() {
    var y=10;
    var r;
    r=x+y;
    return r;
    console.log(r);
}) ();



/* function function constructer*/

var v=new Function ( "x","y", "return r=x+y");
console.log(v(4,5));

/* function array function*/
var b=(x,y)=>{return x+y};
console.log(b(5,5))

/*litral object*/
var employess={
    first:"sharukh",
    last:"basha",
    fullname:function () { return this.first + this.last}
}
employess.age=23;
console.log(employess);
console.log(Object.values(employess));
/* object constructer*/

function employe(first,last) {
    this.first;
    this.last;
    this.fullname=function() {
        return this.first+this.last
    };
}
employe.prototype.age=23;
var b=new Object("sharukh" ,"last");

/*for in object litration*/

console.log(b);
var txn="";
for (var x in b) {
    txn+=b[x];
}
/*call*/

var emp={
    fullname:function () {
        return this.first + this.last+ this.age;

    }
}
emp1={
    first:"sharukh",
    last:"basha",
    age:23
}

var k=emp.fullname.call(emp1,"india");
/*apply*/


var emp={
    fullname:function () {
        return this.first + this.last+ this.age;

    }
}
emp1={
    first:"sharukh",
    last:"basha",
    age:23
}
var k=emp.fullname.apply(emp1,["india"]);
console.log(k);



/*number methods*/

var n=25;

var b=Math.sqrt(n)

console.log(b);

var n=25;
var l=12;

var d=Math.pow(n,l)

console.log(d);

var n=25;


var d=Math.random(n)

console.log(d);


var m=12.222;

var bb=Math.floor(m)

console.log(bb);

var m=12.222;

var bb1=Math.ceil(m);

console.log(bb1);

var mm=12.222;

var bb2=Math.round(mm);

console.log(bb2);

/*strings*/
/*methods*/
var x="sh";
var u="arukh"

console.log(x.toUpperCase()+u.toLowerCase());
console.log(x.charAt(0));
/*concade*/
var x="sh";
var u="arukh"

console.log(x+u);
/*slice*/

var h="hello"
 var j=h.slice(0,2)

console.log(j);



/*indexof*/

var hh1="hello"
var h6=hh1.indexOf("hello")

console.log(h6);

/*arrays*/

var array=["sharukh","basha","person1","person2"]

array[4]=23;
delete array[3];
console.log(array);

/* pop */

var array=["sharukh","basha","person1","person2"]
array.pop();

console.log(array);

/* push */

var array=["sharukh","basha","person1","person2"]
array.push("person3");

console.log(array);

/* shift */

var array=["sharukh","basha","person1","person2"]
array.shift();

console.log(array);

/* unshift */

var array=["sharukh","basha","person1","person2"]
array.unshift("person3");

console.log(array);

/* sort */

var array=["sharukh","basha","person1","person2"]
array.sort();

console.log(array);

var array=[1,5,2,6,7]
var a;
array.sort(function myfunction(a,b) {return a-b;}) ;


console.log(array);

var array=["sharukh","basha","person1","person2"]
array.reverse();

console.log(array);

var array=[1,5,2,6,7]
var a;
array.reverse(function myfunction(a,b) {return a+b;}) ;


console.log(array);
/*min*/

var array=[1,5,2,6,7];

function minarrays(arr) {
    return Math.min.apply(null,arr)

} ;


console.log(minarrays(array));

/*max*/
var array=[1,5,2,6,7];

function maxarrays(arr) {
    return Math.max.apply(null,arr)

} ;


console.log(maxarrays(array));
/*Reduce*/

var array=[1,5,2,6,7];
function re(total,value) {

    return total+value;

}

var v=array.reduce(re);


console.log(v);

/*filter*/


var array=[1,5,2,6,7];
function fi(value) {

    return value >2;

}

var l=array.filter(fi);


console.log(l);

/*some*/


var array=[1,5,2,6,7];
function fi(value) {

    return value >2;

}

var l=array.some(fi);


console.log(l);


/*every*/


var array=[1,5,2,6,7];
function fi(value) {

    return value >2;

}

var l=array.every(fi);


console.log(l);


/*foreach*/


var array=[1,5,2,6,7];
array.forEach(fi);
function fi(total,value) {

    console.log(value);

}
/*concat*/
var array=[1,5,2,6,7];

var i=[5677,8899];


var b=array.concat(i)
console.log(b);

/*slice*/

var array=[1,5,2,6,7];

var y=array.slice(1,4)


console.log(y);

/*splice*/
/*delete*/
var array=[1,5,2,6,7];

array.splice(1,1)


console.log(array);
/*add*/

var array=[1,5,2,6,7];

array.splice(5,0,99)


console.log(array);