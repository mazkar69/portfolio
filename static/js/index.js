/*------------------------------------------

    Creating humburger

-----------------------------------------------*/
const menu = document.querySelector(".menu")
const close = document.querySelector(".close")
const headerElem = document.querySelector(".header")

menu.addEventListener("click", () => {
    headerElem.classList.toggle("active")
    menu.style = "display:none";
    close.style.display = "block";
})
close.addEventListener("click", () => {
    headerElem.classList.toggle("active")
    menu.style = "display:block";
    close.style.display = "none";
})



/*------------------------------------------

    Creating a portfolio tabbed button

-----------------------------------------------*/
// console.log('Creating a portfolio tabbed button');
const p_btns = document.querySelector(".p-btns")
const p_btn = document.querySelectorAll(".p-btn");
const p_img_element = document.querySelectorAll(".img-overlay")


//  FOR PROJECT BUTTON
// p_btns.addEventListener("click", (e) => {
//     const p_btn_clicked = e.target;
//     // console.log(p_btn_clicked)
//     p_btn.forEach((ele) => ele.classList.remove("p-btn-acive"));
//     p_btn_clicked.classList.add("p-btn-acive");

//     // To find the Number in the data atribute 
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     // console.log(btn_num);

//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

//     p_img_element.forEach((elem) => {
//         elem.classList.add("p-img-active-not");
//     });


//     img_active.forEach((currnetElem) => {

//         currnetElem.classList.remove("p-img-active-not");
//     })


// })



const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) {
        return;
    }
    // Animate number
    const counterNum = document.querySelectorAll(".counter-numbers");
    const speed = 200;
    counterNum.forEach((currnetElem) => {
        const updateNumber = () => {
            const targetNumber = parseInt(currnetElem.dataset.number);
            // console.log(targetNumber)
            const initialNum = parseInt(currnetElem.innerText);


            const incrementNumber = Math.trunc(targetNumber / speed)
            // console.log(incrementNumber);

            if (initialNum < targetNumber) {

                currnetElem.innerText = `${initialNum + incrementNumber}+`;

                setTimeout(updateNumber, 10);

            }
        }
        updateNumber();
    })
    workObserver.unobserve(workSection)


}, {
    root: null,
    threshold: 0,
})

workObserver.observe(workSection)

