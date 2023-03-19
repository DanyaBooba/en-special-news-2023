function CommitPrivacy() {
    localStorage.setItem('privacy-block', 'close');
    CheckPrivacy();
}

function CheckPrivacy() {
    let block = document.getElementById('privacyblock');
    if (localStorage.getItem('privacy-block') !== 'close') {
        if (block !== null) {
            block.classList.remove('d-none');
        }
    }
    else {
        if (block !== null) {
            block.classList.add('d-none');
        }
    }
}

CheckPrivacy();
