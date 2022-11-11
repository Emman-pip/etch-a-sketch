const grid = document.querySelectorAll('.container');
grid.forEach((content) => {
    for (let i =1;i<=16;i++){
        const lol = document.createElement('div');
        lol.classList.toggle('flex');
        for (let j =1;j<=16;j++){
            const lol2 = document.createElement('div');
            lol2.classList.toggle('grid');
            lol.appendChild(lol2);
            content.appendChild(lol);
        }
        }
    
    })

const hover = document.querySelectorAll('.grid')
hover.forEach((element) => {
    element.addEventListener('mouseenter', ()=>{
        element.classList.toggle('color')
    })
        
    
})
