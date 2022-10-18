$(function() {

    if ($(window).width() > 768) {
        block01a_anime()
        setTimeout(() => {
            block01b_anime()
        }, 15000)

        block02_anime()

        block03a_anime()
        setTimeout(() => {
            block03b_anime()
        }, 18000)

        block04_anime()

        block05a_anime()
        setTimeout(() => {
            block05b_anime()
        }, 21000)

        block06_anime()

        block07a_anime()
        setTimeout(() => {
            block07b_anime()
        }, 24000)

        block08_anime()
    }
});

function block01a_anime() {
    $("#block01").animate({
            opacity: 1,
            top: 30,
            left: 70,
        }, 1500)
        .delay(1500)
        .animate({
            opacity: 0,
            top: 100,
            left: -300,
        }, 1500)
}

function block01b_anime() {
    $("#block01").animate({
            opacity: 1,
            top: 30,
            left: 70,
        }, 1500)
        .delay(11000)
        .animate({
            opacity: 0,
            top: 100,
            left: -300,
        }, 1500)
        .delay(11000)

    setTimeout(() => {
        block01b_anime()
    }, 25000);
}

function block02_anime() {
    $("#block02")
        .delay(3000)
        .animate({
            opacity: 1,
            top: 30,
            left: 70,
        }, 1500)
        .delay(10000)
        .animate({
            opacity: 0,
            top: -300,
            left: 100,
        }, 1500)
        .delay(9000)

    setTimeout(() => {
        block02_anime()
    }, 25000);

}

function block03a_anime() {
    $("#block03").animate({
            opacity: 1,
            top: 30,
            right: 110,
        }, 1500)
        .delay(4500)
        .animate({
            opacity: 0,
            top: -300,
            right: 100,
        }, 1500)
}

function block03b_anime() {
    $("#block03").animate({
            opacity: 1,
            right: 110,
            top: 30,
        }, 1500)
        .delay(11000)
        .animate({
            opacity: 0,
            top: -300,
            right: 100,
        }, 1500)
        .delay(11000)

    setTimeout(() => {
        block03b_anime()
    }, 25000);

}

function block04_anime() {
    $("#block04")
        .delay(6000)
        .animate({
            opacity: 1,
            top: 30,
            right: 110,
        }, 1500)
        .delay(10000)
        .animate({
            opacity: 0,
            top: 100,
            right: -300,
        }, 1500)
        .delay(6000)

    setTimeout(() => {
        block04_anime()
    }, 25000);

}


function block05a_anime() {
    $("#block05").animate({
            opacity: 1,
            bottom: 30,
            right: 70,
        }, 1500)
        .delay(7500)
        .animate({
            opacity: 0,
            bottom: 100,
            right: -300,
        }, 1500)
}

function block05b_anime() {
    $("#block05").animate({
            opacity: 1,
            bottom: 30,
            right: 70,
        }, 1500)
        .delay(11000)
        .animate({
            opacity: 0,
            bottom: 100,
            right: -300,
        }, 1500)
        .delay(11000)

    setTimeout(() => {
        block05b_anime()
    }, 25000);

}

function block06_anime() {
    $("#block06")
        .delay(9000)
        .animate({
            opacity: 1,
            bottom: 30,
            right: 70,
        }, 1500)
        .delay(10000)
        .animate({
            opacity: 0,
            bottom: -300,
            right: 100,
        }, 1500)
        .delay(3000)

    setTimeout(() => {
        block06_anime()
    }, 25000);

}

function block07a_anime() {
    $("#block07").animate({
            opacity: 1,
            bottom: 30,
            left: 150,
        }, 1500)
        .delay(10500)
        .animate({
            opacity: 0,
            bottom: -300,
            left: 100,
        }, 1500)
}

function block07b_anime() {
    $("#block07").animate({
            opacity: 1,
            bottom: 30,
            left: 150,
        }, 1500)
        .delay(11000)
        .animate({
            opacity: 0,
            bottom: -300,
            left: 100,
        }, 1500)
        .delay(11000)

    setTimeout(() => {
        block07b_anime()
    }, 25000);
}

function block08_anime() {
    $("#block08")
        .delay(12000)
        .animate({
            bottom: 30,
            left: 110,
            opacity: 1,
        }, 1500)
        .delay(10000)
        .animate({
            opacity: 0,
            bottom: 100,
            left: -300,
        }, 1500)

    setTimeout(() => {
        block08_anime()
    }, 25000);

}