"use strict"

function render() {
    instaLeftStoyhead();
    postInsta();
    instaRightProfile();
    suggestionForYou();
    loadComment();
}

function instaLeftStoyhead() {
    document.getElementById('insta-left-storyhead').innerHTML = '';
        for (let i = 0; i < user.length; i++) {
            if(user[i].friend == true) {
            document.getElementById('insta-left-storyhead').innerHTML += instaLeftStoyheadHTML(i);
            }
        }
}

function postInsta() {
    document.getElementById('post').innerHTML = '';
    for (let i = 0; i < user.length; i++) {
        if(user[i].post) {
            document.getElementById('post').innerHTML += postInstaHTML(i);
        }
    }
}

function instaRightProfile() {
    document.getElementById('profile').innerHTML = ''; 
    for (let i = 0; i < user.length; i++) {
        document.getElementById('profile').innerHTML = instaRightProfileHTML();
    }
}

function suggestionForYou() {
    document.getElementById('suggestions').innerHTML = ''; 
    document.getElementById('suggestions').innerHTML = /*html*/ `
    <div class="suggestion-for-you">
        <span>Vorschläge für dich</span>
        <span>Alle ansehen</span>
    </div>`; 
    for (let i = 0; i < user.length; i++) {
        if(user[i].friend == false) {
        document.getElementById('suggestions').innerHTML += suggestionForYouHTML(i);
        }
    }
}

function loadComment() {
    for(let i = 0; i < user.length; i++) {
        if(user[i].post) {
            document.getElementById(`view-comments${i}`).innerHTML = '';
            for(let j = 0; j < user[i].post[0].comments.length; j++) {
                document.getElementById(`view-comments${i}`).innerHTML += commentHTML(i, j);
            }
        }
    }
}

/* ====== SPIELEREI ======*/

function postComment(i) {
    let comment = document.getElementById(`inputComment${i}`).value;
    let name = user[0].username;
    document.getElementById(`inputComment${i}`).value = '';
    document.getElementById(`view-comments${i}`).innerHTML = '';
    if(comment <= 0) {
        alert('Bitte geben Sie einen Kommentar ein');
    } else {
        if(user[i].post) {
            user[i].post[0].comments.push({name: name, comment: comment});
            loadComment(); 
        }
    }
}

function heartFilled() {
    let changeImage = document.getElementById('imgSwitch');
    if(changeImage.src.match('./img/heart.png')) {
        changeImage.src = './img/heart-filled.png';
        changeLikes();
    } else {
        changeImage.src = './img/heart.png';
        
    }
}

function heartFilledHeader() {
    let changeImage = document.getElementById('imgSwitchHeader');
    if(changeImage.src.match('./img/heart.png')) {
        changeImage.src = './img/heart-filled.png';
    } else {
        changeImage.src = './img/heart.png';
    }
} 

function changeFriends() {
    if(user[i].friend == false) {
    user[i].friend = true;
    instaLeftStoyhead();
    suggestionForYou();
    }
}

function changeUser() {
    alert('Es sind leider keine weiteren Accounts hinterlegt :(');
}

function filterPost() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();

    searchName(search);
}

function searchName(search) {
    document.getElementById('post').innerHTML = '';
    for(let i = 0; i < user.length; i++) {
        if(user[i].username.toLowerCase().includes(search)) {
            document.getElementById('post').innerHTML += postInstaHTML(i);
            for(let j = 0; j < user[i].post[0].comments.length; j++) {
                document.getElementById(`view-comments${i}`).innerHTML += commentHTML(i, j);
            }
        }
    }
}

function changeLikes(i) {
    user[i].post[0].postLikes++;
}