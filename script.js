

const color = document.querySelector('.color');

const range = document.querySelector('.range');

const grid = document.querySelector('.grid');

const clear = document.querySelector('.clear');

grid.setAttribute('style', 'width:500px;height500px')

let ink = 'black'
let gridNum = 0;
range.addEventListener('change', ()=>{
    if (gridNum == 0){
        gridNum = range.value;
        let z = 500/range.value;
        

        for (let i = 0; i < gridNum; i++){
            const element1 = document.createElement('div');
            element1.setAttribute('style', 'display:flex;max-width:32rem;min-width:32rem;align-items:center;justify-content:center;');
            for (let j= 0; j < gridNum; j++){
                const element2 = document.createElement('div');
                element2.setAttribute('style', `width:${z}px;height:${z}px;outline:1px black solid`);
                
                color.addEventListener('change', ()=>{
                    ink = color.value;
                })

                element2.addEventListener('mouseenter', ()=>{
                    element2.style.backgroundColor = ink;
                })

                clear.addEventListener('click', ()=>{
                    element2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                })
                
                element1.appendChild(element2)
                grid.appendChild(element1)


            }}
           
            }



        else {
            location.reload();
        }}

)