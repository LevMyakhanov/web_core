let chats = document.querySelectorAll(".feedback");
let modalFeedback = document.querySelector('.modal-feedback')
let calls = document.querySelectorAll(".call");
let modalCall = document.querySelector('.modal-call')
let backModal = document.querySelector(".back-modal");
let chatClose = document.querySelector(".modal-feedback__cancel");
let callClose = document.querySelector(".modal-call__cancel");

export let listenModal = function () {
    chats.forEach(chat => {
        chat.addEventListener('click', function() {
            modalFeedback.style.right = 0;
            backModal.style.right = 0;
        })
    });
    chatClose.addEventListener('click', function () {
        modalFeedback.style.right = '-440px';
        backModal.style.right = '-100%';
    })
    backModal.addEventListener('click', function () {
        modalFeedback.style.right = '-440px';
        backModal.style.right = '-100%';
    })
}

export let listenModal2 = function () {
    calls.forEach(call => {
        call.addEventListener('click', function() {
            modalCall.style.right = 0;
            backModal.style.right = 0;
        })
    });
    callClose.addEventListener('click', function () {
        modalCall.style.right = '-440px';
        backModal.style.right = '-100%';
    })
    backModal.addEventListener('click', function () {
        modalCall.style.right = '-440px';
        backModal.style.right = '-100%';
    })
}