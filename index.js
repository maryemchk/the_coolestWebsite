const terminal = document.querySelector('.terminal');
const output = terminal.querySelector('.output');
const inputLine = terminal.querySelector('.input-line');
const commandLine = terminal.querySelector('#command-line');


const shutdownText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The system will shutdown now!`;

const rebootText = `systemd[1]: Stopping target Timers.
systemd[1]: Stopping target Sound Card.
systemd[1]: Stopping target Swap.
systemd[1]: Stopping target Local File Systems (Pre).
systemd[1]: Stopping target Local File Systems.
systemd[1]: Stopped target Remote File Systems.
systemd[1]: Stopped target Swap.
systemd[1]: Stopped target Local File Systems (Pre).
systemd[1]: Stopped target Local File Systems.
systemd[1]: Stopped target Timers.
The system will reboot now!`;



function outputCommand() {
    const input = commandLine.value;
    const outputString = `\n> ${input}\n`;
    output.innerHTML += outputString;
    commandLine.value = '';
    handleCommand(input);
}

function handleCommand(command) {
    if (command === 'help') {
        const helpText = `Available commands:\n
        help - displays this help message\n
        clear - clears the screen\n
        who_maryem - displays information about the user\n
        about - displays information about me\n
        projects - displays a list of my projects\n
        contact - displays my contact information\n
        sourcecode - displays the source code of this website\n
        poweroff - turns off the computer\n
        reboot - restarts the computer\n`
        output.innerHTML += helpText;
    } else if (command === 'clear') {
        output.innerHTML = '';
    } else if (command === 'who_maryem') {
        output.innerHTML += "root"
    } else if (command === 'about') {
        output.innerHTML += "I am Maryem, 21 yo software engineering student from Tunisia. "
    } else if (command === 'projects') {
        output.innerHTML += "into see more projects! check out my github: https://github.com/maryemchk"
    } else if (command === 'contact') {
        output.innerHTML += "for contact you can use:\n\nMail: chakrounmeryem23@gmail.com \n\n"
    } else if (command === 'sourcecode') {
        window.location.replace('https://github.com/maryemchk');
    } else if (command === 'poweroff') {
        output.innerHTML += shutdownText;
        delete inputLine;
        setTimeout(function() {
            window.location.replace('https://youtu.be/HhZaHf8RP6g?si=yLjkzzE5c5iNWjV-');
        }, 1000);
    } else if (command === 'reboot') {
        output.innerHTML += rebootText;
        setTimeout(function() {
            window.location.replace('https://github.com/maryemchk');
        }, 1000);

    } else {
        const errorText = `Command '${command}' not found. Type 'help' for a list of available commands.`;
        output.innerHTML += errorText;
    }
}

commandLine.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        outputCommand();
    }
});
commandLine.focus();
