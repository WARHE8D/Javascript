const UwU = document.querySelector('.UwU');
const OwO = document.querySelector('.OwO');

UwU.addEventListener('click',() =>
{
    if(UwU.classList.contains('active'))
    {
        OwO.classList.add('active');
        UwU.classList.remove('active');
    }
});

OwO.addEventListener('click',() =>
{
    if(OwO.classList.contains('active'))
    {
        UwU.classList.add('active');
        OwO.classList.remove('active');
    }
});