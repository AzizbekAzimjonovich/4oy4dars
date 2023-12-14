//1-misol
/**let n=+prompt("son kiriting");
let hisob=0
for (let i = 1; i <= n; i++) {
    if (i%3==0&&i%7==0) {
        hisob+=1
    }
}
console.log(hisob); */

//2-misol
/**let n=+prompt("son kiriting");
let hisob=0
for (let i = 1; i <= n; i++) {
    if (i%2==0) {
        hisob+=i
    }
}
console.log(hisob); */

//3-misol
/**let n=+prompt("son kiriting");
let hisob=0
for (let i = 1; i <= n; i++) {
    if (i%5==0&&i%7!=0) {
        hisob+=i
    }
}
console.log(hisob); */

//4-misol
/**let a=+prompt("son kiriting");
let b=+prompt("son kiriting");
let hisob=0;
if (a<b) {
    for (let i = a; i <= b; i++) {
        if (i<0) {
            hisob+=i
        }
    }
}
console.log(hisob); */

//5-misol
/**let n=+prompt("son kiriting");
let hisob=1;
for (let i = 1; i<=n; i++) {
    hisob*=i
}
console.log(hisob); */

//6-misol
/**let n=+prompt("son kiriting");
for (let i = 1; i<=n; i++) {
    if (n%i==0) {
        console.log(i);
    }
} */

//7-misol
/**let n=+prompt("son kiriting");
let hisob=0;
for (let i = 1; i<=n; i++) {
    if (n%i==0) {
       hisob+=1
    }
}
console.log(hisob); */

//8-misol
/**let n=+prompt("son kiriting");
let hisob=0;
for (let i = 1; i<=n; i++) {
    if (n%i==0) {
        hisob+=1
    }
}
if (hisob>2) {
    console.log("tub emas");
}else{
    console.log("tub");
} */

//9-misol
/**let n=+prompt("son kiriting");
let hisob=0;
for (let i = 1; i<=n; i++) {
    hisob+=(i**2);
}
console.log(hisob); */

//10-misol
let n=+prompt("son kiriting");
let hisob=0;
for (let i = 1; i<=n; i++) {
    let hisob2=0;
    for (let l = 0; l<=i; l++) {
        if (i%l==0) {
            hisob2+=1
        }
    }
    if (hisob2==2) {
       hisob+=i;
    }
}
console.log(hisob);