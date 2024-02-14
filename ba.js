const answers = [
    "Համոզված ես?",
    "Իսկապե՞ս համոզվա՞ծ ես»",
    "Իսկապե՞ս վստահ ես???»",
    "Նորից մտածիր?",
    "Չե՞ք հավատում երկրորդ հնարավորություններին»",
    "Ինչու՞ ես այդքան սառը»",
    "Գուցե մենք կարող ենք խոսել այդ մասին»",
    "Ես այլևս չեմ հարցնելու»",
    "Լավ, հիմա սա վիրավորում է իմ զգացմունքները»",
    "Դու հիմա ուղղակի չար ես»",
    "Ինչո՞ւ ես դա անում ինձ հետ»",
    "Խնդրում եմ, ինձ հնարավորություն տվեք»",
    "Ես խնդրում եմ ձեզ դադարեցնել»",
    "Լավ, եկեք սկսենք նորից…»"
];

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "images/no.gif";
        refreshBanner();
    }
    clicks++;

    const sizes = [40, 50, 30, 35, 45];
    const randomIndex = Math.floor(Math.random() * sizes.length);
    size += sizes[randomIndex];

    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    const total = answers.length;
    if (i < total - 1) {
        no_button.textContent = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.textContent = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "images/yes.gif";
    refreshBanner();

    let buttons = document.querySelector('.buttons');
    buttons.style.display = "none";

    let message = document.querySelector('.message');
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}
