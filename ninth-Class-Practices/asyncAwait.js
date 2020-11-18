console.log('hello we are learning asyn await');
async function fetching(url){
    const gettingResponse =  await fetch(url)
    const convrtResponse = await gettingResponse.json()
    console.log(convrtResponse);
    convrtResponse.forEach(element => {
        console.log(element.name , element.id);
        
    });

}
// fetching('https://jsonplaceholder.typicode.com/users');

let postNUserFetch = async () => {
        let postAwait = await fetch('https://jsonplaceholder.typicode.com/posts').then( response => response.json() )
        .catch(errorPost =>  ('getting post got this error' , errorPost ) );

        let usersAwait = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .catch(errUser => ('getting user got this error ' , errUser) );

        let iterator = 0;

        let userNtitle = postAwait.map( (element , indexes) => {

            return   {
                title : element.title
     

        }  

    });
//* new
    usersAwait.map( (element , indexes ) => {
       return element.title = userNtitle[indexes].title 
    });

//*traditional
// for (let i = 0 ; i < usersAwait.length ; i++){
//     usersAwait[i].title = userNtitle[i].title
// }
//*
console.log(usersAwait)

        console.log(userNtitle);
        // console.log('posts :' , postAwait , 'users' , usersAwait);
        


    }

postNUserFetch();







// function loadScript(src) {
//     // creates a <script> tag and append it to the page
//     // this causes the script with given src to start loading and run when complete
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
//   }
// loadScript('random.js');
