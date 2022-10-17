let toggle = document.querySelector('.toggle');
let body = docuement.querySelector('body');

toggle.addEventListener('click', function(){
    body.classlist.toggle('open');
}