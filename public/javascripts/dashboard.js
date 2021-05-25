$(document).ready(function() {
    console.log(baseUrl);
    $('#userLogin').off().submit(e => {
        e.preventDefault();
        loginUser();
   
    }) ;
});


async  function loginUser()
{
    const User = $('#userLogin').serializeArray();
    let data = {};
    for(key of User)
    {
        data[key.name] = key.value;
    }
    if(data.uname ==='admin' && data.password === 'admin')
    window.location.href = baseUrl+'Dashboard';
    else
    alert('Incorrect Credentails');
}