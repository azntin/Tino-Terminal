const input = document.getElementById('terminal-input');
const content = document.getElementById('terminal-content');
const inputLine = document.getElementById('input-line');

const commands = {
    help:   `available commands:
            help     — show this menu
            info     — about me
            skills   - my skills/techstacks
            projects — my projects
            contact  — how to reach me
            cls      - clear the terminal`,

    info:   `Justin Tran:
            third year computer science major and aspiring SWE studying @ UCR
            based in Montclair, California`,

    skills:     `Languages: C++, Python, HTML, CSS, Java/TypeScript
                Tech Stacks: React, TailwindCSS, Git, Node.js`,

    projects:   `projects:
                1. tino-terminal — this terminal
                2. C++ BlackJack Dealer - on github
                3. project three — coming soon`,

    contact:    `contact:
                email    — djjtran@gmail.com
                github   — github.com/azntin
                linkedin - linkedin.com/in/justin-tran-93b584295`,
    cls: null    
};

function newLine() {
    const p = document.createElement('p');
    p.textContent = '';
    p.style.margin = '0';
    p.style.lineHeight = '1em';
    content.insertBefore(p, inputLine);
}

function printLine(text, color = 'rgb(17, 93, 255)') {
    text.split('\n').forEach(line => {
        const p = document.createElement('p');
        p.textContent = line;
        p.style.color = color;
        p.style.margin = '0';
        p.style.paddingLeft = '15px';
        p.style.paddingRight = '15px';
        p.style.fontFamily = "'Courier New', Courier, monospace";
        p.style.fontWeight = '800';
        content.insertBefore(p, inputLine);
    });
    content.scrollTop = content.scrollHeight;
}

input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;

    const val = input.value.trim().toLowerCase();
    input.value = '';

    // echo the command
    printLine(`djjtran@gmail-com:~$ ${val}`, 'whitesmoke');

    if (val === 'cls') {
        content.querySelectorAll('p').forEach(p => p.remove());
        return;
    }

    if (val === '') return;

    if (commands[val]) {
        printLine(commands[val]);
    } else {
        printLine(`'${val}' is not a valid argument — type 'help' for available commands`);
    }

    newLine();
});

// init
setTimeout(() => {
    document.querySelector('.text').textContent = "Welcome to Tino's Terminal. For more information, type 'help'";
    document.querySelector('.text').style.textDecoration = 'underline';
    document.getElementById('terminal-content').style.justifyContent = 'flex-end';
    inputLine.style.display = 'flex';
    input.focus();
}, 4200);