const OS = navigator.userAgent.toLowerCase();

const GoogleButton = document.getElementById('google-button');
const AppleButton = document.getElementById('apple-button');

const classes = { flex: 'flex', none: 'none' };
const osNames = { windows: 'windows', android: 'android', iphone: 'iphone' }

if(OS.includes(osNames.android)){
    GoogleButton.style.display = classes.flex;
    AppleButton.style.display = classes.none;
} else if(OS.includes(osNames.iphone)){
    GoogleButton.style.display = classes.none;
    AppleButton.style.display = classes.flex;
} else {
    GoogleButton.style.display = classes.flex;
    AppleButton.style.display = classes.flex;
}