const button = document.querySelectorAll('button'),
      p = document.querySelector('p');

document.addEventListener('DOMContentLoaded', ()=>{
    let buttons = document.querySelectorAll('.userBut');
    
    buttons.forEach((e) => {
        const request = new XMLHttpRequest();
    
        request.open('GET', `https://jsonplaceholder.typicode.com/users/${e.id}`);
        request.setRequestHeader('Content-type','application/json; charset=utf-8');
        request.send();
        request.addEventListener('load', ()=>{
            if(request.status === 200){
                console.log(request.response);

                const data = JSON.parse(request.response);
                
                e.innerHTML = `${data.name}`;
            } else{
                console.log('Запрос не удался');
            }
        });
    });
});

button.forEach((elemet)=>{
    elemet.addEventListener('click', ()=>{
        const request = new XMLHttpRequest();
    
        request.open('GET', `https://jsonplaceholder.typicode.com/users/${elemet.id}`);
        request.setRequestHeader('Content-type','application/json; charset=utf-8');
        request.send();
    
        request.addEventListener('load', ()=>{
            if(request.status === 200){
                
                let btnClass = document.querySelector('.info');
                btnClass.classList.remove("none");

                let deleteP = document.querySelector('.delete');
                deleteP.classList.remove("none");

                deleteP.addEventListener('click', ()=>{
                    p.innerHTML = ``;
                    btnClass.classList.add("none");
                    deleteP.classList.add("none");
                });



                console.log(request.response);
                const data = JSON.parse(request.response);
                p.innerHTML = `имя пользователя ${data.name}<br>
                               email пользователя ${data.email}<br>
                               телефон пользователя ${data.phone}<br>
                               website пользователя ${data.website}<br>`;
            } else{
                console.log('Запрос не удался');
            }
        });
    });
    
});
