window.onload = function() {
    if (localStorage.getItem('user')) {
        loadPage('order');
    } else {
        loadPage('login');
    }
};

function loadPage(page) {
    var a = new XMLHttpRequest();
    a.open('GET', page + '.html', true);
    a.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.querySelector('.logindiv').innerHTML = this.responseText;

        if (page === 'login') {
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;

                if (username === password) {
                    localStorage.setItem('user', username);
                    localStorage.setItem('password', password);
                    alert('Login Successful');
                    window.location.href = 'order.html';
                } else {
                    alert('Please enter valid credentials!');
                }
            });
        }
    };
    a.send();
}

// function func(){
//         var user = document.getElementById("username").value;
//         var pass = document.getElementById("password").value;
//         if(user == 'qaifi' && pass == 'qaifi'){
//             window.location.href = ("order.html");
//             alert("successful!")
//         }
//         else{
//             alert("wrong entry invalid")
//             return;
//         }
//     }