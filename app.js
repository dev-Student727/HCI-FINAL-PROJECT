function nextPage() {
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-desc');
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');

    title.innerText = "Breif Introduction";
    desc.innerText = "What is Computer Hardware? A Computer hardware refers to the physical, tangible parts of a computer system that you can see and touch, including internal components like the CPU, motherboard, RAM, and storage drives, and external peripherals like the monitor, keyboard, and mouse, all working together under the direction of software to perform tasks. Hardware provides the foundation for software to run, enabling functions like data processing, storage, input, and output. "

    backBtn.style.display = "block";
    nextBtn.style.display = "none";

    const contentArea = document.getElementById('content-area');
    contentArea.style.opacity = 0;

    setTimeout(() => {
        contentArea.style.opacity = 1;
        contentArea.style.transition = "opacity 0.5s";
    }, 50);
}

function backPage() {
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-desc');
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');

    title.innerText = "TECH. PROFESSIONAL";
    desc.innerText = "Your Ultimate Guide to Computer Hardware! Dive into the world of computer hardware with TECH. PRO. Learn more about computer parts and their functions.";

    backBtn.style.display = "none";
    nextBtn.style.display = "block";

    const contentArea = document.getElementById('content-area');
    contentArea.style.opacity = 0;

    setTimeout(() => {
        contentArea.style.opacity = 1;
        contentArea.style.transition = "opacity 0.5s";
    }, 50);
}