
let loginBtn = document.getElementsByClassName('loginbtn')[0]; 
let signupBtn = document.getElementsByClassName('signupbtn')[0]; 

loginBtn.addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/sahit/OneDrive/Attachments/BID/login.html';
});

signupBtn.addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/sahit/OneDrive/Attachments/BID/signup.html';
});


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.box-slider'); 
const boxWidth = document.querySelector('.box').offsetWidth;
let slideIndex = 0;

prevBtn.addEventListener('click', function() {
    if (slideIndex > 0) {
        slideIndex--;
        slider.style.transform = `translateX(-${slideIndex * boxWidth}px)`;
    }
});

nextBtn.addEventListener('click', function() {
    if (slideIndex < slider.children.length - 1) {
        slideIndex++;
        slider.style.transform = `translateX(-${slideIndex * boxWidth}px)`;
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homeLink');
    const auctionLink = document.getElementById('auctionLink');
    const completedLink = document.getElementById('completedLink');
    const statusLink = document.getElementById('statusLink');


    homeLink.addEventListener('click', function() {
        window.location.href = 'home.html'; 
    });
    auctionLink.addEventListener('click', function() {
        window.location.href = 'activeauction.html'; 
    });
    completedLink.addEventListener('click', function() {
        window.location.href = 'completedauction.html'; 
    });
    statusLink.addEventListener('click', function() {
        window.location.href = 'auctionstatus.html';
    });

    
    function handleHoverEffect(link) {
        link.addEventListener('mouseenter', function() {
            link.classList.add('hover-box');
        });

        link.addEventListener('mouseleave', function() {
            link.classList.remove('hover-box');
        });
    }

    handleHoverEffect(homeLink);
    handleHoverEffect(auctionLink);
    handleHoverEffect(completedLink);
    handleHoverEffect(statusLink);

});



function updateAuctionCounts() {

    const auctionsTodayCount = Math.floor(Math.random() * 10);
    const auctionsEndingTodayCount = Math.floor(Math.random() * 10);
    const auctionsPublishedCount = Math.floor(Math.random() * 10000);
    const auctionsAwardedCount = Math.floor(Math.random() * 10000);


    document.getElementById('auctionsTodayCount').textContent = auctionsTodayCount;
    document.getElementById('auctionsEndingTodayCount').textContent = auctionsEndingTodayCount;
    document.getElementById('auctionsPublishedCount').textContent = auctionsPublishedCount;
    document.getElementById('auctionsAwardedCount').textContent = auctionsAwardedCount;
}


updateAuctionCounts();

setInterval(updateAuctionCounts, 60000);


const likeIcons = document.querySelectorAll('.like-icon');


likeIcons.forEach(icon => {
    icon.addEventListener('click', () => {

        window.location.href = 'signup.html';
    });
});
const cardButtons = document.querySelectorAll('.card-buttons');

cardButtons.forEach(button => {
    button.addEventListener('click', () => {
    
        window.location.href = 'signup.html';
    });
});
const cardButton = document.querySelectorAll('.bid-btn');

cardButton.forEach(button => {
    button.addEventListener('click', () => {
    
        window.location.href = 'signup.html';
    });
});

