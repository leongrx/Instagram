"use strict"

function instaLeftStoyheadHTML(i) {
    return /*html*/ `
    <div class="insta-left-storyprofil">
        <div>
            <img id="test" src="${user[i].userimage}">
        </div>
        <div class="username">
            <span>${user[i].username}</span>
        </div>
    </div>`;
}

function postInstaHTML(i) {
    return /*html*/ `
    <div class="leftPost">
        <div class="post-header">
            <div class="post-user-img">
                <img src="${user[i].userimage}">
                <span>${user[i].username}</span>
            </div>
            <div class="more">
                <img src="${user[i].post[0].postMoreIcon}">
            </div>
        </div>
        <div class="post-img">
            <img src="${user[i].post[0].postImage}">
        </div>
        <div class="post-description">
            <div class="post-description-icons">
                <img id="imgSwitch" onclick="heartFilled()" src="./img/heart.png">
                <img src="./img/comment.png">
                <img src="./img/send.png">
                <img src="./img/save.png">
            </div>
            <div class="like-static">
                <img src="./img/like-static-img.jpg">
                <p>Gefällt <span>${user[i].post[0].postUserLiked} </span> und <span id="likes">${user[i].post[0].postLikes} weiteren Personen</span></p>
            </div>

            <div class="post-content">
                <span>${user[i].username}</span>
                <span>${user[i].post[0].postDescription}</span>
            </div>
            <div id="view-comments${i}" class="view-comments"></div>
            <div class="comments-date">
                <p>Vor 2 Tagen</p>
            </div>
        </div>
        <div class="description-input">
            <div class="emoji-part">
                <img src="./img/emoji.png">
                <input id="inputComment${i}" type="text" placeholder="Kommentieren ...">
            </div>
            <span onclick="postComment(${i})">Posten</span>
        </div>
    </div>
    `;
}

function commentHTML(i, j) {
    return /*html*/ `
    <div class="loadedComment">
        <p>${user[i].post[0].comments[j].name}</p>
        <p>${user[i].post[0].comments[j].comment}</p>
    </div>
    `;
}

function instaRightProfileHTML() {
    return /*html*/ `
        <div class="profile-img">
            <img src=${user[0].userimage}>
        </div>
        <div class="insta-user">
            <div class="my-username">
                <span>${user[0].username}</span>
            </div>
            <div class="my-fullname">
                <span>${user[0].fullname}</span>
            </div>
        </div>
        <div class="change-user">
            <span onclick="changeUser()">Wechseln</span>
        </div>`;
}

function suggestionForYouHTML(i) {
    return /*html*/ `
    <div class="suggestion">
        <div class="suggestion-profile">
            <img src="${user[i].userimage}">
        </div>
        <div class="suggestion-content">
            <span>${user[i].username}</span>
            <span>Neu auf Instagram</span>
        </div>
        <div class="follow">
            <span onclick="changeFriends(${i})">Folgen</span>
        </div>
    </div>`;
}