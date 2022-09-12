// Toggle menu

var sideLink = document.getElementById('sideLink');

function showMenu() {
    sideLink.style.right = "0";
}

function hideMenu() {
    sideLink.style.right = "-200px";
}

// Scroll to top

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#D331BB ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;