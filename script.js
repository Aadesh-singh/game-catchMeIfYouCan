var box = document.getElementById('box');
console.log(box);

let view = document.getElementById('view').getBoundingClientRect();
console.log(view.height);


function rand() {
   let v = Math.random()*600;
   if(v > view.bottom ){
       rand();
   }
   return v;
}

const move = () => {
    rand1 = Math.random();
    rand2 = Math.random();
    console.log(rand1,rand2);
    box.style.transform = `translate(${rand() + `px`},${rand() + `px`})`;
}