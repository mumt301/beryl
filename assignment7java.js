"use strict";

// Turn theremin on
function thereminOn(oscillator, oscillator2) {
    oscillator.play();
    oscillator2.play();
}

// Control the theremin
function thereminControl(e, oscillator, oscillator2, theremin, semitones, minfreq, maxfreq) {
    let x = e.offsetX;
    let y = e.offsetY;
    console.log(x, y);

    // Calculate theramin frequency
    let freqRange = maxfreq - minfreq;
    let thereminFreq = minfreq + (x / theremin.clientWidth) * freqRange;
    let thereminFreq2 = interval(thereminFreq, semitones)
    let thereminVolume = 1.0 - (y / theremin.clientHeight);

    console.log("Frequency: ", thereminFreq);
    oscillator.frequency = thereminFreq;
    console.log("Volume: ", thereminVolume);
    oscillator.volume = thereminVolume;

    console.log("Frequency: ", thereminFreq);
    oscillator2.frequency = thereminFreq2;
    console.log("Volume: ", thereminVolume);
    oscillator2.volume = thereminVolume;

    // Provide feedback to the user
    userfrequency = document.getElementById("userfrequency");
    userfrequency.innerHTML = "Frequency of note: "+ thereminFreq;
    usernotename = document.getElementById("usernotename");
    usernotename.innerHTML = "Note: "+ noteFromFrequency(thereminFreq);
}

// Turn theremin off
function thereminOff(oscillator, oscillator2) {
    oscillator.stop();
    oscillator2.stop();
}

function runAfterLoadingPage() {
    // Parse the data submitted through the form, get the parameters from the URL
    let urlParameters = (new URL(document.location)).searchParams;

    let semitones = 0;
    let oscillator_type = "sine";
    let minfreq = 220;
    let maxfreq = 880;

    if (urlParameters.has('semitones')) {
        semitones = parseInt(urlParameters.get('semitones'));
    }

    if (urlParameters.has('oscillator')) {
        oscillator_type = urlParameters.get('oscillator');
    }

    if (urlParameters.has('minfreq')) {
        minfreq = parseInt(urlParameters.get('minfreq'));
    }

    if (urlParameters.has('maxfreq')) {
        maxfreq = parseInt(urlParameters.get('maxfreq'));
    }

    // Instantiate a sine wave with pizzicato.js
    const oscillator = new Pizzicato.Sound({
        source: 'wave',
        options: {
            type: oscillator_type,
            frequency: 220
        }
    });

    const oscillator2 = new Pizzicato.Sound({
        source: 'wave',
        options: {
            type: oscillator_type,
            frequency: 220
        }
    });

    // Get the theremin div from the html
    const theremin = document.getElementById("thereminZone");

    // Theremin plays when the mouse enters the theremin div
    theremin.addEventListener("mouseenter", function () {
        thereminOn(oscillator, oscillator2);
    });

    // Theremin is controlled while the mouse is inside the theremin div
    theremin.addEventListener("mousemove", function (e) {
        thereminControl(e, oscillator, oscillator2, theremin, semitones, minfreq, maxfreq);
    });

    // Theremin stops when the mouse leaves the theremin div
    theremin.addEventListener("mouseleave", function () {
        thereminOff(oscillator, oscillator2);
    });
}

window.onload = runAfterLoadingPage;
