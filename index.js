function showPassword(selector) {
    const TARGET = document.querySelector(selector)
TARGET.setAttribute("type", "text")
}
// hide eye








const getUserRole = (element) => {
    console.log()
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute("data-role")
    return DATA
}

const getLastUserName = (element)=>{
    console.log(element)
    const VALUE = element.value;
    if (VALUE.length >=3){
        return VALUE;
    } else {
        alert("Last name too short")
        return null;
    }

}
// start point
document.addEventListener("DOMContentLoaded", () => {

    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock")
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock")
    const LF_BLOCK = document.querySelector(".form__top_LFor")
    const CHECK_BOX = document.querySelector(".form__input_checkbox")
    const SUBMIT_BTN = document.querySelector(".form__input_sumbit")
    const REGISTER_FORM = document.querySelector(".form")
    const INPUT_LAST_NAME =document.querySelector(".form__input_second_name")
    //switch user role
    LF_BLOCK.addEventListener("click", () => {
        LEFT_BLOCK.classList.toggle('active')
        RIGHT_BLOCK.classList.toggle('active')
    })
    CHECK_BOX.addEventListener("click", function (e) {
        const CHECK_BOX_VALUE = CHECK_BOX.checked
        CHECK_BOX_VALUE ? SUBMIT_BTN.disabled = !CHECK_BOX_VALUE : SUBMIT_BTN.disabled = !CHECK_BOX_VALUE;

    })
    REGISTER_FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        let role = getUserRole(LF_BLOCK)
        let lastUserName = getLastUserName(INPUT_LAST_NAME)
        if (!lastUserName){
            return
        }
        //
        const USER_DATA = {
            role, lastUserName
        }
        console.log("USER_DATA", USER_DATA)
    })
})