const buttons = document.querySelectorAll('.btn');
const pic = document.querySelector('.img-container');
const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
];
let count = 0;

buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        if(button.classList.contains('btn-left')){
            count--;
            if(count < 0){
                count = (pictures.length - 1);
            }
            pic.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`;
        }
        if(button.classList.contains('btn-right')){
            count++;
            if (count >  (pictures.length - 1)){
                count = 0;
            }
            pic.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`;
        }
    })
});