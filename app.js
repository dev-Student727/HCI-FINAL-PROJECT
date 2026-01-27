function nextPage() {
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-desc');
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');
    const contentArea = document.getElementById('content-area');

    if (nextBtn.innerText.includes("Next")) {
         title.innerText = "Breif Introduction";
         desc.innerText = "What is Computer Hardware? A Computer hardware refers to the physical, tangible parts of a computer system that you can see and touch, including internal components like the CPU, motherboard, RAM, and storage drives, and external peripherals like the monitor, keyboard, and mouse, all working together under the direction of software to perform tasks. Hardware provides the foundation for software to run, enabling functions like data processing, storage, input, and output. "

         backBtn.style.display = "block";
         nextBtn.style.display = "none";

         contentArea.style.opacity = 0;
         setTimeout(() => {
             contentArea.style.opacity = 1;
             contentArea.style.transition = "opacity 0.5s";
         }, 50);
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
    nextBtn.style.display = "block";

    const contentArea = document.getElementById('content-area');
    contentArea.style.opacity = 0;
    setTimeout(() => {
        contentArea.style.opacity = 1;
    }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
    const partData = {
        "keyboard-mouse": {
            name: "Keyboard & Mouse",
            history: "The keyboard and mouse evolved from 19th-century mechanical typewriters and 1960s research, respectively, to become primary human-computer interfaces. Keyboards adopted the QWERTY layout in the 1870s to prevent mechanical jams, while the mouse was invented by Douglas Engelbart in 1964 as a wooden X-Y position indicator to navigate early graphical interfaces. <br><br><b>Key Historical Developments</b>",
            function: "",
            image: "assets/img 1.png"
        },
        "pc-case": {
            name: "",
            history: "",
            function: "",
            image: "assets/img 2.png"
        },
        "cpu": {
            name: "",
            history: "",
            function: "",
            image: "assets/img 3.png"
        },
        "monitor": {
            name: "",
            history: "",
            function: "",
            image: "assets/img 4.png"
        },
        "ssd": {
            name: "",
            history: "",
            function: "",
            image: "assets/img 5.png"
        },
        "hdd": {
            name: "",
            history: "",
            function: "",
            image: "assets/img 6.png"
        },
        "ram": {
            name: "",
            history: "",
            function: "",
            image: "assets/img 7.png"
        }
    };
    window.openSlide = function(partKey) {
        console.log("Opening slide for:", partKey);
        const data = partData[partKey];
        const overlay = document.getElementById('infoSlide');

        if (data && overlay) {
            document.getElementById("partName").innerText = data.name;
            document.getElementById("partHistory").innerHTML = data.history;
            document.getElementById("partFunction").innerText = data.function;

            const imgElement = document.getElementById("partImg");
            imgElement.src = data.image;
            imgElement.alt = data.name;

            overlay.classList.add("active");
            console.log("Slide opened successfully.");
        } else {
            console.error("Missing data for key:", partKey);
        }
    };
    window.closeSlide = function() {
        const overlay = document.getElementById("infoSlide");
        if (overlay) {
            overlay.classList.remove("active");
        }
    };
});
