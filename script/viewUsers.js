const buttonForm = document.querySelector('.survey-request__button');

buttonForm.addEventListener('click', () => {
    if (document.getElementsByClassName('users__data')[0]) {
        return;
    }

    fetch('findFiles.php')
    .then(
        response => {
            return response.json();
        }
    )
    .then(
        result => { 
            result.forEach(userdata => {
                const newUser = document.createElement('div');
                const newUserText = document.createElement('p');
                newUserText.innerHTML = userdata.replaceAll('\n', '<br>');
                const newUserIcon = document.createElement('img');
                newUserIcon.src = 'img/user.png';
                newUser.appendChild(newUserIcon);
                newUser.appendChild(newUserText);
                
                newUser.classList.add('users__data');
                document.getElementsByClassName('survey-request')[0].appendChild(newUser);
            });
            if (!document.getElementsByClassName('users__data')[0]) {
                const newUserText = document.createElement('p');
                newUserText.innerHTML = 'Сохраненных пользователей нет';
                document.getElementsByClassName('survey-request')[0].appendChild(newUserText);
            }
        }
    )
    .catch(
        error => console.log(error)
    );

    // const response = await fetch('./script/findFiles.php');
    // const result = await response.json();
    

    // result.forEach(userdata => {
    //     const newUser = document.createElement('div');
    //     const newUserText = document.createElement('p');
    //     newUserText.innerHTML = userdata.replaceAll('\n', '<br>');
    //     const newUserIcon = document.createElement('img');
    //     newUserIcon.src = 'img/user.png';
    //     newUser.appendChild(newUserIcon);
    //     newUser.appendChild(newUserText);
        
    //     newUser.classList.add('users__data');
    //     document.getElementsByClassName('survey-request')[0].appendChild(newUser);
    // });
    // if (!document.getElementsByClassName('users__data')[0]) {
    //     const newUserText = document.createElement('p');
    //     newUserText.innerHTML = 'Сохраненных пользователей нет';
    //     document.getElementsByClassName('survey-request')[0].appendChild(newUserText);
    // }



    // for (userdata of result) {
    //     const newUser = document.createElement('div');
    //     const newUserText = document.createElement('p');
    //     newUserText.innerHTML = userdata.replaceAll('\n', '<br>');
    //     const newUserIcon = document.createElement('img');
    //     newUserIcon.src = 'img/user.png';
    //     newUser.appendChild(newUserIcon);
    //     newUser.appendChild(newUserText);
        
    //     newUser.classList.add('users__data');
    //     document.getElementsByClassName('survey-request')[0].appendChild(newUser);
    // }
      
    // if (!document.getElementsByClassName('users__data')[0]) {
    //     const newUserText = document.createElement('p');
    //     newUserText.innerHTML = 'Сохраненных пользователей нет';
    //     document.getElementsByClassName('survey-request')[0].appendChild(newUserText);
    // }
});
