function textClock() {
    var newDate = new Date(),
        day = newDate.getDay(),
        hours = newDate.getHours(),
        minutes = newDate.getMinutes().toString(),
        seconds = newDate.getSeconds().toString();
    
    if (hours > 12 && hours !== 0 && hours !== 23) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    var minsSecs = parseInt(minutes) * 100 + parseInt(seconds);

    if (day == 5) {
        $('#tgif').html('TGIF');
    }

    var hoursObj = {
        1: '#one',
        2: '#two',
        3: '#three',
        4: '#four',
        5: '#five-hr',
        6: '#six',
        7: '#seven',
        8: '#eight',
        9: '#nine',
        10: '#ten-hr',
        11: '#eleven',
        12: '#twelve',
        23: '#eleven',
        24: '#midnight',
        0: '#midnight'
    };

    function getNextHour(currentHour) {
        if (currentHour === 23 || currentHour === 0) return 0;
        if (currentHour === 12) return 1;
        return (currentHour % 12) + 1;
    }

    if (minsSecs <= 3230) {
        updateHour(hoursObj[hours]);
    }

    if ((minsSecs >= 5730 && minsSecs < 6000) || (minsSecs >= 0 && minsSecs < 230)) {
        if (hours !== 24 && hours !== 0) {
            updateDesc('#oclock');
            updateHour(hoursObj[hours]);
        }
    } else if (minsSecs >= 3230) {
        let nextHour = getNextHour(hours);
        updateHour(hoursObj[nextHour]);
        
        if (minsSecs < 3730) {
            updateDesc('#twenty, #five, #to');
        } else if (minsSecs < 4230) {
            updateDesc('#twenty, #to');
        } else if (minsSecs < 4730) {
            updateDesc('#quarter, #to');
        } else if (minsSecs < 5230) {
            updateDesc('#ten, #to');
        } else if (minsSecs < 5730) {
            updateDesc('#five, #to');
            updateHour(hoursObj[nextHour]);
        }
    } else {
        if (minsSecs < 730) {
            updateDesc('#five, #past');
        } else if (minsSecs < 1230) {
            updateDesc('#ten, #past');
        } else if (minsSecs < 1730) {
            updateDesc('#quarter, #past');
        } else if (minsSecs < 2230) {
            updateDesc('#twenty, #past');
        } else if (minsSecs < 2730) {
            updateDesc('#twenty, #five, #past');
        } else if (minsSecs < 3230) {
            updateDesc('#half, #past');
        }
    }
}

function updateDesc(classes) {
    $('.desc').removeClass('active');
    $(classes).addClass('active');
}

function updateHour(classes) {
    $('.hr').removeClass('active');
    $(classes).addClass('active');
}

setInterval(function() {
    textClock();
}, 1000);

textClock();

// Theme switching functionality
const themes = ['theme-dark', 'theme-light', 'theme-nude', 'theme-cream'];
let currentThemeIndex = 0;

function initializeTheme() {
    // Add the initial theme class to body
    document.body.classList.add(themes[currentThemeIndex]);
    
    // Update button color based on theme
    updateButtonStyle();
}

function updateLogoForTheme(isDarkTheme) {
    const logoImg = document.querySelector('#logo img');
    if (logoImg) {
        logoImg.src = isDarkTheme ? 'favicon-na-white.png' : 'favicon-na-black.png';
    }
}

function updateButtonStyle() {
    const button = document.getElementById('theme-button');
    if (currentThemeIndex === 0) { // Dark theme
        button.style.borderColor = '#fff';
        button.style.color = '#fff';
        updateLogoForTheme(true);
    } else {
        button.style.borderColor = '#2c1810';
        button.style.color = '#2c1810';
        updateLogoForTheme(false);
    }
}

function switchTheme() {
    // Remove current theme
    document.body.classList.remove(themes[currentThemeIndex]);
    
    // Move to next theme
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    
    // Add new theme
    document.body.classList.add(themes[currentThemeIndex]);
    
    // Update button styling
    updateButtonStyle();
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme);

// Add click event listener to button
document.getElementById('theme-button').addEventListener('click', switchTheme);

