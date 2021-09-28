let intro = document.querySelector('.intro');
let arrowSpan = document.querySelectorAll('.arrows');
let name = document.querySelector('.nameAnimation');

window.addEventListener('DOMContentLoaded', ()=>{
        setTimeout(()=>{

            arrowSpan.forEach((span, idx)=>{
                setTimeout(()=> {
                    span.classList.add('active');
                }, (idx + 1) * 400)
            });

            setTimeout(()=>{
                arrowSpan.forEach((span, idx)=> {
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');

                    }, (idx + 1) * 50)
                })
            }, 2000);

            setTimeout(()=>{
                intro.style.top = '-100vh';
            }, 2300)
        });
});

