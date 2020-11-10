console.log('we are in playground of js');
let parent = document.createElement('div')
parent.setAttribute('id' , 'parent')
let body = document.getElementsByTagName('body');
console.log(body)
body[0].appendChild(parent);
function createRainbow(){
setTimeout(Red , 1000);
setTimeout(Orange , 2000);
setTimeout(Yellow , 3000);
setTimeout(Blue , 4000);

}
 function Red(){
        let create = document.createElement('div')
        create.setAttribute('id' , 'red');
        create.style.width = '100%';
        create.style.backgroundColor = 'red'
        create.style.height = '70px';
        parent.appendChild(create);


    };
function Orange(){
        let create = document.createElement('div')
        create.setAttribute('id' , 'orange');
        create.style.width = '100%';
        create.style.backgroundColor = 'orange'
        create.style.height = '70px';
        parent.appendChild(create);
    }
function Yellow(){
        let create = document.createElement('div')
        create.setAttribute('id' , 'yellow');
        create.style.width = '100%';
        create.style.backgroundColor = 'yellow'
        create.style.height = '70px';
        parent.appendChild(create);
    }
function Green(){
        let create = document.createElement('div')
        create.setAttribute('id' , 'green');
        create.style.width = '100%';
        create.style.backgroundColor = 'green'
        create.style.height = '70px';
        parent.appendChild(create);
    }

    function Blue(){
        let create = document.createElement('div')
        create.setAttribute('id' , 'blue');
        create.style.width = '100%';
        create.style.backgroundColor = 'blue'
        create.style.height = '70px';
        parent.appendChild(create);
    }
//*  the rainbow are Red, Orange, Yellow, Green, Blue, Indigo and Violet


setTimeout(function(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error=> console.log(error))
},3000)
