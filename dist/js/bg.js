function ChangeBackground() {
    let info = localStorage.getItem('bg-color');
    if (info === 'color') {
        localStorage.removeItem('bg-color');
    }
    else {
        localStorage.setItem('bg-color', 'color');
    }

    GetColor();
}

function GetColor() {
    let info = localStorage.getItem('bg-color');

    if (info === 'color') {
        document.body.classList.add('get-body--color');
    }
    else {
        document.body.classList.remove('get-body--color');
    }
}

GetColor();
