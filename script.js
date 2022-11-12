const gridSize = document.querySelector('.gridSize');
let x = 0;
let grid = 0;
gridSize.addEventListener('click', ()=>{
    if (x==0){    
        x = prompt('grid size');
    } else {
        location.reload();
    }

//main grid
    const grid = document.querySelectorAll('.container');
    grid.forEach((content) => {
        if (x > 32) {
            alert('too many lines');
            location.reload();
        }
        for (let i =1;i<=x;i++){
            const lol = document.createElement('div');
            lol.classList.toggle('flex');
            for (let j =1;j<=x;j++){
                const lol2 = document.createElement('div');
                lol2.classList.toggle('grid');
                lol.appendChild(lol2);
                content.appendChild(lol);
            }}

        // hover and clear

            const hover = document.querySelectorAll('.grid')
            const clear = document.querySelector('.clear');
            hover.forEach((element) => {
                element.addEventListener('mouseenter', ()=>{
                    element.classList.add('color');
                clear.addEventListener('click', () => {
                    element.classList.remove('color')
                    })
                })
            })
            
            
        
        })
    })