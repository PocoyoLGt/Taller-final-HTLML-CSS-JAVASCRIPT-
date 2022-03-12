const main = () => {
    const elements = document.querySelectorAll(".fruit");
    const btn_cambiar = document.querySelector("#btn_cambiar")
    
    btn_cambiar.addEventListener('click', () => {
        
        elements.forEach(element => {
            console.log(element.classList.contains('even'))
            if (element.classList.contains('even')) {
                element.classList.remove('even');
                element.classList.add('odd')


            } else {
                element.classList.remove('odd');
                element.classList.add('even');

            }
        })

    })
}