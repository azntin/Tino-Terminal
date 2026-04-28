const input = document.getElementById('terminal-input');
const content = document.getElementById('terminal-content');
const inputLine = document.getElementById('input-line');
const screen = document.getElementById('terminal-screen');

const commands = {
    help:   `available commands:
            help     — show this menu
            info     — about me
            skill    — my skills/techstacks
            proj     — my past and upcoming projects
            contact  — how to reach me
            cls      — clear the terminal`,

    info:   `Justin Tran:
            Hi there! I'm a third year computer science major and an aspiring SWE studying 
            @ UCR. I'm currently based in Montclair, California and am actively looking for 
            job opportunities within the SoCal region. Feel free to message me on any of 
            the platforms using the 'contact' command! :)`,

    skill:     `Languages: C++, Python, HTML, CSS, Java/TypeScript
                Tech Stacks: React, TailwindCSS, Git, Node.js`,

    proj:   `projects:
                1. tino-terminal
                This current terminal you are on is my personal website! It was made using
                vanilla HTML, CSS, and JavaScript being hosted directly from GitHub where
                you can find the source code for this project!
                2. C++ BlackJack Dealer
                A project I made during my college course that emulates an entire game of
                BlackJack all within the terminal. Coded entirely from C++, the game's source
                code can be found within my GitHub.
                3. project three 
                Coming soon!`,

    contact: null,
    cls: null    
};

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

    printLine(`djjtran@gmail-com:~$ ${val}`, 'whitesmoke');

    if (val === 'cls') {
        content.querySelectorAll('p').forEach(p => p.remove());
        return;
    }

    if (val === 'contact') {

        const contactData = [
            { label: 'email   ', href: 'mailto:djjtran@gmail.com',                           display: 'djjtran@gmail.com' },
            { label: 'github  ', href: 'https://github.com/azntin',                          display: 'github.com/azntin' },
            { label: 'linkedin', href: 'https://www.linkedin.com/in/justin-tran-93b584295/', display: 'linkedin.com/in/justin-tran-93b584295' },
        ];

        const header = document.createElement('p');
        header.textContent = 'contact/communication links:';
        header.style.color = 'rgb(17, 93, 255)';
        header.style.margin = '0';
        header.style.paddingLeft = '15px';
        header.style.fontFamily = "'Courier New', Courier, monospace";
        header.style.fontWeight = '800';
        content.insertBefore(header, inputLine);

    [...contactData].forEach(({ label, href, display }) => {
        const p = document.createElement('p');
        p.style.color = 'rgb(17, 93, 255)';
        p.style.margin = '0';
        p.style.paddingLeft = '15px';
        p.style.paddingRight = '15px';
        p.style.fontFamily = "'Courier New', Courier, monospace";
        p.style.fontWeight = '800';

        const labelSpan = document.createElement('span');
        labelSpan.textContent = `            ${label} — `;

        const a = document.createElement('a');
        a.href = href;
        a.textContent = display;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.style.color = 'rgb(17, 93, 255)';
        a.style.textDecoration = 'underline';
        a.style.cursor = 'pointer';

        p.appendChild(labelSpan);
        p.appendChild(a);
        content.insertBefore(p, inputLine);
    });

    content.scrollTop = content.scrollHeight;
    return;
}

    if (val === '') return;

    if (commands[val]) {
        printLine(commands[val]);
    } else {
        printLine(`'${val}' is not a valid argument — type 'help' for available commands`);
    }
});

screen.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'A') return;
    e.preventDefault();
    screen.style.cursor = 'pointer';
    input.focus();
});

// init
setTimeout(() => {
    const ascii = document.querySelector('.text');
    ascii.innerHTML = `<pre style="margin:0; font-family:'Courier New', Courier, monospace;">
Welcome to                                                                              
                      ▄                                                         
██████ ▄▄ ▄▄  ▄▄  ▄▄▄ ▀ ▄▄▄▄   ██████ ▄▄▄▄▄ ▄▄▄▄  ▄▄   ▄▄ ▄▄ ▄▄  ▄▄  ▄▄▄  ▄▄    
  ██   ██ ███▄██ ██▀██ ███▄▄     ██   ██▄▄  ██▄█▄ ██▀▄▀██ ██ ███▄██ ██▀██ ██    
  ██   ██ ██ ▀██ ▀███▀ ▄▄██▀     ██   ██▄▄▄ ██ ██ ██   ██ ██ ██ ▀██ ██▀██ ██▄▄▄ 

For more information, type 'help'                                                                                                                 
</pre>`;    
    document.getElementById('terminal-content').style.justifyContent = 'flex-start';
    inputLine.style.display = 'flex';
    input.focus();
}, 4200);