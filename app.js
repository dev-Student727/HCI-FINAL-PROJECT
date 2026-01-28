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
            history: "The history of the computer keyboard begins with the Sholes and Glidden typewriter in 1874, which introduced the <b>QWERTY</b> layout designed to prevent mechanical arms from jamming. As technology moved into the mid-20th century, the <b>Teletype</b> machine combined typing with telegraphy, eventually leading to the <b>Binac and Univac</b> computers which utilized electromechanical keyboards for data entry. By the 1970s, the <b>Video Display Terminal (VDT)</b> integrated the keyboard as the primary user interface, and the 1980s saw the release of the iconic <b>IBM Model M</b>, which set the standard for the modern layout we use today. <br><br>The mouse followed a separate but parallel path, starting in 1963 when Douglas Engelbart and Bill English built the first prototype at the Stanford Research Institute. This original device was a wooden box with two metal wheels positioned perpendicularly to track movement along the X and Y axes.<br><br>The concept was refined at Xerox PARC in the 1970s, where the ball mouse was developed, but the technology did not reach the masses until the 1984 release of the Apple Macintosh. This launch popularized the graphical user interface and made the mouse an essential tool for navigating a digital desktop.<br<br>Over the following decades, both devices underwent significant mechanical transformations to improve precision and comfort. The mouse transitioned from trackballs to optical sensors in the late 1990s, eliminating the need for internal cleaning, while keyboards moved from heavy mechanical switches to membrane sheets and eventually back to specialized mechanical switches for enthusiasts. Today, both peripherals have largely shed their physical tethers through Bluetooth and RF technology, evolving into ergonomic, wireless tools that define how we interact with the digital world.",
            function: "<ul><b>The Keyboard: Command and Composition</b> <br>The primary function of a keyboard is to act as the main text-entry interface, allowing you to input letters, numbers, and symbols directly into a computer system. Beyond just typing, it serves as a powerful command console where specific keys or combinations—known as keyboard shortcuts—can execute complex tasks like saving files, refreshing pages, or switching between programs without using a menu. It also handles navigation and system control, using arrow keys to move through documents or function keys to adjust hardware settings like volume and screen brightness. <br><br><b>The Mouse: Navigation and Interaction</b>The mouse functions as a pointing device that translates your physical hand movements into the movement of a digital cursor on the screen. Its basic use revolves around spatial interaction, enabling you to select, open, and manipulate graphical elements like icons, folders, and windows. Through actions like clicking, double-clicking, and dragging, the mouse provides a tactile way to navigate complex software layouts. Most modern mice also feature a scroll wheel, which is essential for quickly moving through long documents or web pages that extend beyond the viewable screen.</ul>",
            image: "assets/img 1.png"
        },
        "pc-case": {
            name: "Pc Case",
            history: "The history of the PC case is a transformation from massive, industrial refrigerators to the sleek, glass-enclosed aesthetic statements we see on desks today. The history of pc case is divided into 4 parts these are: <br><br><b>The Era of the Beige Box (1970s – 1980s)</b><br> In the early days of personal computing, the case was purely functional and often integrated into the machine itself. The Altair 8800 (1975) featured a heavy metal chassis with switches on the front, while the Apple II (1977) introduced a plastic molded case that looked more at home in a living room. However, it was the IBM PC (1981) that established the Horizontal Desktop standard. These were heavy, steel-constructed boxes painted in a neutral computer beige designed to sit on a desk with a heavy CRT monitor perched directly on top of them. <br><br><b>The Rise of the Tower (1990s): </b><br> As internal components became more powerful and generated more heat, the horizontal layout became a limitation. The industry shifted toward the Vertical Tower design, popularized by the IBM PS/2 (1987) and later adopted by clones. This shift allowed for better airflow and more drive bays for floppy disks and the emerging CD-ROM technology. During this time, the ATX (Advanced Technology eXtended) standard was introduced by Intel in 1995, which standardized the placement of the motherboard and power supply, ensuring that cases from different manufacturers would work with any internal parts. <br><br><b>The Aesthetics Revolution (Early 2000s):</b> The turn of the millennium marked the end of beige dominance. Enthusiasts began case modding which involved manually cutting holes into metal cases to install acrylic windows and neon lights. Manufacturers took notice, leading to the release of the Antec PlusView and the Apple iMac G3, which proved that computers could be colorful and visually interesting. This era saw the introduction of aluminum cases (like those from Lian Li), which offered a more premium feel and better heat dissipation compared to traditional steel. <br><br><b>The Modern Era: Airflow and Glass (2010s – Present):</b> Modern PC case design focuses on two primary pillars: Thermal Performance and Showmanship. The move away from internal spinning hard drives and optical (CD) drives allowed manufacturers to remove bulky front cages, leading to the Open Interior layout. This paved the way for: <br><ul><b>Tempered Glass:</b> Replacing scratch prone acrylic to show off high-end components and RGB lighting.</ul> <br><ul><b>Mesh Fronts:</b> Prioritizing high-volume airflow to cool modern, high-heat GPUs and CPUs.</ul> <br><ul><b>Cable Management:</b> Dedicated Channels and shrouds to hide messy power supply wires.<ul><b>Niche Form Factors:</b> The rise of SFF (Small Form Factor) cases that pack full gaming power into boxes no larger than a shoebox.</ul>",
            function: "",
            image: "assets/img 2.png"
        },
        "cpu": {
            name: "Central Processing Unit (CPU)",
            history: "",
            function: "",
            image: "assets/img 3.png"
        },
        "monitor": {
            name: "Monitor",
            history: "",
            function: "",
            image: "assets/img 4.png"
        },
        "ssd": {
            name: "Solid State Drive (SSD)",
            history: "",
            function: "",
            image: "assets/img 5.png"
        },
        "hdd": {
            name: "Hard Disk Drive (HDD)",
            history: "",
            function: "",
            image: "assets/img 6.png"
        },
        "ram": {
            name: "Random Access Memory",
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
            document.getElementById("partFunction").innerHTML = data.function;

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
