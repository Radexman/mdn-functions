// function random(number) {
//     return Math.floor(Math.random() * number + 1);
// }

// const textBox = document.querySelector('#textBox');
// const output = document.querySelector('#output');

// textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);

// const x = 1;

// function a() {
//     const y = 2;
//     output(z);
// }

// function b() {
//     const z = 3;
//     output(z);
// }

// output(x);
// a();
// b();

// function output(value) {
//     const para = document.createElement('p');
//     document.body.appendChild(para);
//     para.textContent = `Value: ${value}`;
// }

// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
// const para = document.createElement('p');
// const section = document.querySelector('.section');

// function chooseName() {
//     const randomNumber = Math.floor(Math.random() * names.length);
//     const choice = names[randomNumber];
//     para.textContent = choice;
// }

// chooseName();

// section.appendChild(para);

// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
// const para = document.createElement('p');

// const shortNames = names.filter(name => name.length < 5);
// para.textContent = shortNames;

// function displayMessage(msgText, msgType) {
//     const body = document.body;
//     const panel = document.createElement('div');
//     panel.setAttribute('class', 'msgBox');
//     body.appendChild(panel);

//     const msg = document.createElement('p');
//     msg.textContent = msgText;
//     panel.appendChild(msg);

//     const closeBtn = document.createElement('button');
//     closeBtn.textContent = 'x';
//     panel.appendChild(closeBtn);

//     closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));
// }

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => displayMessage('Woo, this is a different message!'));

function random(number) {
    const result = Math.floor(Math.random() * number + 1);
    return result;
}