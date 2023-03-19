let light = document.getElementById('stylesheetlight');
let dark = document.getElementById('stylesheetdark');

function ChangeStatusAuto() {
    localStorage.removeItem('color-theme');
    light.media = "(prefers-color-scheme: light)";
    dark.media = "(prefers-color-scheme: dark)";
}

function ChangeStatusLight() {
    localStorage.setItem('color-theme', 'light');
    light.media = "all";
    dark.media = "not all";
}

function ChangeStatusDark() {
    localStorage.setItem('color-theme', 'dark');
    light.media = "not all";
    dark.media = "all";
}

function ChangeTheme() {
    if (localStorage.getItem('color-theme') === 'dark') {
        ChangeStatusLight();
    }
    else if (localStorage.getItem('color-theme') === 'light') {
        ChangeStatusAuto();
    }
    else {
        ChangeStatusDark();
    }
}

function ChangeThemeButton() {
    if (localStorage.getItem('color-theme') === 'dark') {
        ChangeStatusLight();
        GetButtonLight();
    }
    else if (localStorage.getItem('color-theme') === 'light') {
        ChangeStatusAuto();
        GetButtonAuto();
    }
    else {
        ChangeStatusDark();
        GetButtonDark();
    }
}

function GetButtonDark() {
    let buttonsvg = document.getElementById('changethemesvg');
    if (buttonsvg !== null) {
        buttonsvg.href.baseVal = "/img/icons/theme.svg#dark";
    }
}

function GetButtonAuto() {
    let buttonsvg = document.getElementById('changethemesvg');
    if (buttonsvg !== null) {
        buttonsvg.href.baseVal = "/img/icons/theme.svg#auto";
    }
}

function GetButtonLight() {
    let buttonsvg = document.getElementById('changethemesvg');
    if (buttonsvg !== null) {
        buttonsvg.href.baseVal = "/img/icons/theme.svg#light";
    }
}

if (localStorage.getItem('color-theme') === 'dark') {
    ChangeStatusDark();
    GetButtonDark();
}
else if (localStorage.getItem('color-theme') === 'light') {
    ChangeStatusLight();
    GetButtonLight();
}
else {
    ChangeStatusAuto();
    GetButtonAuto();
}
