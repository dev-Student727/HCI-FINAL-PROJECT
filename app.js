let onSlideTwo = false;

function nextPage() {
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-desc');
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!onSlideTwo) {
         title.innerText = "Breif Introduction";
         desc.innerText = "What is Computer Hardware? A Computer hardware refers to the physical, tangible parts of a computer system that you can see and touch, including internal components like the CPU, motherboard, RAM, and storage drives, and external peripherals like the monitor, keyboard, and mouse, all working together under the direction of software to perform tasks. Hardware provides the foundation for software to run, enabling functions like data processing, storage, input, and output. "

         backBtn.style.display = "block";
         
         nextBtn.innerText = "Go to Menu \u2192";

         const contentArea = document.getElementById('content-area');
         contentArea.style.opacity = 0;
         setTimeout(() => {
             contentArea.style.opacity = 1;
             contentArea.style.transition = "opacity 0.5s";
         }, 50);

         onSlideTwo = true;
    } else {
        window.location.href = "content.html";
    }
}

function backPage() {
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-desc');
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');

    title.innerText = "TECH. PROFESSIONAL";
    desc.innerText = "From the lightning-fast processing of the CPU to the vast storage capacity of SSDs, tech. pro has breaking down every physical part that powers your digital world. Understand the 'what' and the 'why' behind your hardware and Hardware is more than just parts; it is a system of functional excellence. Learn how data travels from input devices through the motherboard to create the seamless experience you see on your screen.";

    backBtn.style.display = "none";
    nextBtn.innerText = "Next \u2192";
    onSlideTwo = false;

    const contentArea = document.getElementById('content-area');
    contentArea.style.opacity = 0;
    setTimeout(() => {
        contentArea.style.opacity = 1;
        contentArea.style.transition = "opacity 0.5s";
    }, 50);
}