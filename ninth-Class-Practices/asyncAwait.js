console.log('hello we are learning asyn await');
async function fetching(url){
    const gettingResponse =  await fetch(url)
    const convrtResponse = await gettingResponse.json()
    console.log(convrtResponse);
    convrtResponse.forEach(element => {
        console.log(element.name , element.id);
        
    });

}
fetching('https://jsonplaceholder.typicode.com/users')








// function loadScript(src) {
//     // creates a <script> tag and append it to the page
//     // this causes the script with given src to start loading and run when complete
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
//   }
// loadScript('random.js');
