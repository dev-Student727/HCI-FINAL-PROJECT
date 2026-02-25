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
            history:  `The history of the computer keyboard begins with the Sholes and Glidden typewriter in 1874, which introduced the <b>QWERTY</b> layout designed to prevent mechanical arms 
                    from jamming. As technology moved into the mid-20th century, the <b>Teletype</b> machine combined typing with telegraphy, eventually leading to the <b>Binac and Univac</b> 
                    computers which utilized electromechanical keyboards for data entry. By the 1970s, the <b>Video Display Terminal (VDT)</b> integrated the keyboard as the primary user 
                    interface, and the 1980s saw the release of the iconic <b>IBM Model M</b>, which set the standard for the modern layout we use today. 
                    <br><br>
                    The mouse followed a separate but parallel path, starting in 1963 when Douglas Engelbart and Bill English built the first prototype at the Stanford Research Institute. 
                    This original device was a wooden box with two metal wheels positioned perpendicularly to track movement along the X and Y axes.
                    <br><br>
                    The concept was refined at Xerox PARC in the 1970s, where the ball mouse was developed, but the technology did not reach the masses until the 1984 release of the Apple 
                    Macintosh. This launch popularized the graphical user interface and made the mouse an essential tool for navigating a digital desktop. Over the following decades, both 
                    devices underwent significant mechanical transformations to improve precision and comfort. The mouse transitioned from trackballs to optical sensors in the late 1990s,
                    eliminating the need for internal cleaning, while keyboards moved from heavy mechanical switches to membrane sheets and eventually back to specialized mechanical switches 
                    for enthusiasts. Today, both peripherals have largely shed their physical tethers through Bluetooth and RF technology, evolving into ergonomic, wireless tools that define 
                    how we interact with the digital world.`,
                    
            function: `<ul><b>The Keyboard: Command and Composition</b> <br>The primary function of a keyboard is to act as the main text-entry interface, allowing you to input letters, numbers, 
                    and symbols directly into a computer system. Beyond just typing, it serves as a powerful command console where specific keys or combinations—known as keyboard shortcuts—can
                    execute complex tasks like saving files, refreshing pages, or switching between programs without using a menu. It also handles navigation and system control, using arrow 
                    keys to move through documents or function keys to adjust hardware settings like volume and screen brightness. <br><br><b>The Mouse: Navigation and Interaction</b>The mouse 
                    functions as a pointing device that translates your physical hand movements into the movement of a digital cursor on the screen. Its basic use revolves around spatial 
                    interaction, enabling you to select, open, and manipulate graphical elements like icons, folders, and windows. Through actions like clicking, double-clicking, and dragging, 
                    the mouse provides a tactile way to navigate complex software layouts. Most modern mice also feature a scroll wheel, which is essential for quickly moving through long 
                    documents or web pages that extend beyond the viewable screen.</ul>`,
            image: "../assets/img 1.png"
        },
        "pc-case": {
            name: "Pc Case",
            history: `The history of the PC case is a transformation from massive, industrial refrigerators to the sleek, glass-enclosed aesthetic statements we see on desks today. The history of 
                    pc case is divided into 4 parts these are: <br><br><b>The Era of the Beige Box (1970s – 1980s)</b><br> In the early days of personal computing, the case was purely functional 
                    and often integrated into the machine itself. The Altair 8800 (1975) featured a heavy metal chassis with switches on the front, while the Apple II (1977) introduced a plastic 
                    molded case that looked more at home in a living room. However, it was the IBM PC (1981) that established the Horizontal Desktop standard. These were heavy, steel-constructed 
                    boxes painted in a neutral computer beige designed to sit on a desk with a heavy CRT monitor perched directly on top of them. 
                    <br><br>
                    <b>The Rise of the Tower (1990s): </b><br>As internal components became more powerful and generated more heat, the horizontal layout became a limitation. The industry shifted 
                    toward the Vertical Tower design, popularized by the IBM PS/2 (1987) and later adopted by clones. This shift allowed for better airflow and more drive bays for floppy disks 
                    and the emerging CD-ROM technology. During this time, the ATX (Advanced Technology eXtended) standard was introduced by Intel in 1995, which standardized the placement of 
                    the motherboard and power supply, ensuring that cases from different manufacturers would work with any internal parts. 
                    <br><br>
                    <b>The Aesthetics Revolution (Early 2000s):</b> The turn of the millennium marked the end of beige dominance. Enthusiasts began case modding which involved manually cutting 
                    holes into metal cases to install acrylic windows and neon lights. Manufacturers took notice, leading to the release of the Antec PlusView and the Apple iMac G3, which proved 
                    that computers could be colorful and visually interesting. This era saw the introduction of aluminum cases (like those from Lian Li), which offered a more premium feel and 
                    better heat dissipation compared to traditional steel. 
                    <br><br>
                    <b>The Modern Era: Airflow and Glass (2010s to Present): </b> Modern PC case design focuses on two primary pillars: Thermal Performance and Showmanship. The move away from 
                    internal spinning hard drives and optical (CD) drives allowed manufacturers to remove bulky front cages, leading to the Open Interior layout. This paved the way for: 
                    <br>
                    <ul><b>Tempered Glass:</b> Replacing scratch prone acrylic to show off high-end components and RGB lighting.</ul>
                    <ul><b>Mesh Fronts:</b> Prioritizing high-volume airflow to cool modern, high-heat GPUs and CPUs.</ul>
                    <ul><b>Cable Management:</b> Dedicated Channels and shrouds to hide messy power supply wires.</ul>
                    <ul><b>Niche Form Factors:</b> The rise of SFF (Small Form Factor) cases that pack full gaming power into boxes no larger than a shoebox.</ul>`,

            function: `A PC case (also known as a chassis, tower, or system unit) is the metal or plastic enclosure that houses, supports, and protects the essential internal components of a 
                    computer, such as the motherboard, CPU, GPU, and power supply. Its primary functions include organizing components for easy access, facilitating airflow to prevent ove
                    rheating, and protecting parts from dust and physical damage.
                    <br>
                    <b>Primary Functions and Uses</b>
                    <ul><b>Protection:</b> Shields delicate internal components from dust, debris, and physical impact. It also provides grounding to protect components from static electricity.</ul>
                    <ul><b>Cooling & Airflow:</b> Features mounts for fans and radiators, and utilizes ventilation holes (often with mesh panels) to move cool air in and hot air out, preventing overheating.</ul>
                    <ul><b>Structural Support & Organization:</b. Provides a rigid frame to mount the motherboard, power supply, and drive bays.</ul>
                    <ul<b>Cable Management:</b> Includes spaces and routing options behind the motherboard tray to keep cables tidy, which improves both aesthetics and airflow.</ul>
                    <ul><b>Access to I/O Ports:</b> Provides easily accessible power/reset buttons, USB ports, and audio jacks, usually on the front or top of the case.</ul>`,
            image: "../assets/img 2.png"
        },
        "cpu": {
            name: "Central Processing Unit (CPU)",
            history: `The CPU (Central Processing Unit) evolved from room-sized vacuum tube machines in the 1940s to, after the 1947 transistor invention, tiny, powerful, single-chip 
                    microprocessors starting with the Intel 4004 in 1971. This shift to integrated circuits and Moore's Law drove exponential growth in transistor density, speed, 
                    and capabilities, enabling personal computing, smartphones, and modern AI.
                    <br><br>
                    <b>Key Historical Milestones:</b>
                    <ul><b>Early Era (1940s–1950s):</b> Initial CPUs used vacuum tubes (e.g., ENIAC, UNIVAC 1103).</ul>
                    <ul><b>Transistor & IC Era (1960s):</b>Transistors replaced tubes, increasing efficiency; 1960 saw the first mass production of transistors.</ul>
                    <ul><b>Microprocessor Revolution (1970s):</b>Intel 4004 (1971) was the first commercial microprocessor (4-bit, 740 kHz), followed by the 8-bit 8080 in 1974.</ul>
                    <ul><b>PC Era (1980s–1990s):</b>Intel 8088 powered the original IBM PC (1981). Intel Pentium (1993) brought superscalar processing, with AMD emerging as a 
                    major competitor.</ul>
                    <ul><b>Modern Era (2000s–Present):</b>Shift to 64-bit architecture (Itanium), multi-core processors (AMD Athlon 64 X2, 2005), and increased reliance on AI, with 
                    billions of transistors on modern chips. </ul>
                    <br>
                    The CPU continues to follow a path of becoming smaller, faster, and more specialized for modern computing tasks. `,

            function: `The Central Processing Unit (CPU) is the primary component ("brain") of a computer, responsible for fetching, decoding, and executing instructions from software,
                    managing data flow, and performing arithmetic/logical calculations. It operates in a continuous cycle (fetch-decode-execute) to run applications, control hardware, 
                    and enable system interactivity
                    <br><br>
                    <b>Basic Functions of a CPU</b>
                    <ul><b>Instruction Handling (Fetch-Decode-Execute):</b> The CPU fetches instructions from memory (RAM), decodes what action is required, and executes the command.</ul>
                    <ul><b>Arithmetic and Logic (ALU):</b> The Arithmetic Logic Unit (ALU) performs mathematical operations (\(+\), \(-\), \(\times \), \(\div \)) and logical comparisons
                    (e.g., AND, OR, NOT).</ul>
                    <ul><b>Data Control (Control Unit):</b> The Control Unit (CU) manages the flow of data between the CPU, memory, and input/output devices.</ul>
                    <ul><b>Data Storage (Registers/Cache):</b> The CPU uses high-speed internal memory called registers to store data temporarily for immediate processing.</ul>
                    <b>Basic Uses of a CPU</b>
                    <ul><b>Running Software:</b> Operating systems (Windows, macOS, Linux) and applications (web browsers, games, word processors) rely on the CPU to function.</ul>
                    <ul><b>Data Processing:</b> Interpreting user input from keyboards and mice, and processing data for output on screens.</ul>
                    <ul><b>System Management:</b> Coordinating system resources and managing multitasking between different applications.</ul>
                    <b>Core Components</b>
                    <ul><b>Control Unit (CU):</b> Directs traffic and flow of data.</ul>
                    <ul><b>Arithmetic Logic Unit (ALU):</b> Performs calculations. </ul>
                    <ul><b>Registers:</b> Temporary storage.</ul>`,
            image: "../assets/img 3.png"
        },
        "monitor": {
            name: "Monitor",
            history: `Computer monitors evolved from 1940s-era bulky monochrome Cathode Ray Tube (CRT) displays into, slim, high-resolution, and energy-efficient LCD/LED flat-panel screens by 
                    the 2000s. Key milestones include the first CRT monitors in the 1940s, the introduction of color CRT in the 1960s, and the dominance of LCD technology by the 2000s
                    <br><br>
                    <b>Evolution of Computer Monitor Technology</b>
                    <br>
                    <b>The CRT Era (1940s–1990s):</b> Early monitors, or "glass TTY" terminals, were largely monochromatic, using vacuum tube technology similar to televisions to display text and basic graphics.
                    <ul><b>1960s:</b> The first true computer monitors, like the IBM 2250 (1964), emerged, allowing for interactive graphics.</ul>
                    <ul><b>1970s–1980s:</b> Personal computers like the Apple II (1977) introduced color CRT monitors, followed by IBM's Color Graphics Adapter (CGA) in 1981, which supported
                    16 colors.</ul>
                    <ul><b>1990s:</b> CRTs became more advanced, offering higher resolutions and faster refresh rates.</ul>
                    <b>The Flat-Panel Revolution (1990s–2000s):</b>
                    <br>
                    <ul>Monitors evolved to include IPS (In-Plane Switching) for better color, high resolutions (4K/8K), and, in some cases, curved screens.</ul>
                    <ul>Current trends include advanced OLED displays and increased focus on high refresh rates for gaming.</ul> 
                    <b>Milestone Developments</b>
                    <ul><b>1897:</b> Karl Ferdinand Braun invents the Cathode Ray Tube (CRT).</ul>
                    <ul><b>1973:</b> The Xerox Alto, often considered the first modern personal computer, features a bitmap display.</ul>
                    <ul><b>1976:</b> Apple I and Sol-20 computers feature video output ports, allowing for external monitors.</ul>
                    <ul><b>1980s:</b> IBM introduces CGA (1981) and later EGA/VGA, setting industry standards.</ul>
                    <ul><b>1990s/2000s:</b> Eizo and other manufacturers popularize LCD monitors.</ul>
                    <ul><b>2009:</b> NEC releases early LED-backlit monitors.</ul>`,

            function: `A computer monitor is an essential output device that displays visual, text, and video information generated by a computer's graphics adapter. It allows 
                    users to visually interact with software, browse the internet, and view content, acting as the primary display unit for computing tasks. Modern monitors 
                    typically use LED-backlit LCD technology, with common, modern connections including HDMI, DisplayPort, and USB-C.
                    <br><br>
                    <b>Basic Functions of a Monitor</b>
                    <ul><b>Visual Display (Output):</b> Converts electrical signals from the computer's graphics card into visible images, text, and video.</ul>
                    <ul><b>User Interface:</b> Provides a visual, interactive interface to operate the operating system, applications, and games.</ul>
                    <ul><b>Visual Control Settings:</b> Most monitors include physical buttons or menus to adjust display settings like brightness, contrast, and color balance.</ul>
                    <ul><b>Data Visualization:</b> Displays complex data, such as spreadsheets, documents, and graphics, enabling, for example, professional tasks like graphic design.</ul>
                    <ul><b>Multimedia Playback:</b> Enables viewing of videos, images, and, with built-in speakers, audio content.</ul>
                    <b>Basic Uses of a Monitor</b>
                    <ul><b>General Productivity:</b> Creating documents, spreadsheets, and web browsing.</ul>
                    <ul><b>Entertainment:</b> Watching movies, streaming content, and playing video games.</ul>
                    <ul><b>Professional Work:</b> Editing photos, videos, or designing, requiring high color accuracy.</ul>
                    <ul><b>System Monitoring:</b> Viewing system resources and performance data through specialized software.</ul>
                    <ul><b>Touch Input:</b> Certain monitors, known as touchscreens, act as both output and input devices by allowing direct interaction with the screen.</ul>
                    Monitors come in various types, including LED (light-emitting diode) and LCD (liquid crystal display), which have largely replaced older, larger CRT 
                    (cathode ray tube) monitors. They connect to computers using standards like VGA, DVI, HDMI, or DisplayPort.`,
            image: "../assets/img 4.png"
        },
        "ssd": {
            name: "Solid State Drive (SSD)",
            history: `Monitors come in various types, including LED (light-emitting diode) and LCD (liquid crystal display), which have largely replaced older, larger CRT
                    (cathode ray tube) monitors. They connect to computers using standards like VGA, DVI, HDMI, or DisplayPort.`,
            function: `An <b>SSD (Solid-State Drive)</b> is used to store data in electronic devices such as:
                    <ul>Computers and laptops</ul>
                    <ul>martphones and tablets</ul>
                    <ul>Gaming consoles</ul>
                    <ul>Servers and data centers</ul>
                    <b>It stores:</b>
                    <ul>The operating system (like Windows or macOS)</ul>
                    <ul>Applications and software</ul>
                    <ul>Files such as documents, photos, videos, and games</ul>
                    An SSD <b>stores and retrieves data using flash memory chips</b> instead of spinning disks. Because it has no moving parts, it works faster and more quietly 
                    than traditional hard drives.
                    <br><br>
                    <b>How it functions in simple terms:</b>
                    <ul>1.Data is saved in memory cells inside the SSD.</ul>
                    <ul>2.When the computer needs data, the SSD accesses it electronically.</ul>
                    <ul>3.The data is delivered very quickly to the processor.</ul>
                    <ul>4.This results in faster boot times, quicker file loading, and smoother performance.</ul>
                    <b>Why SSDs Are Important</b>
                    <ul>Faster startup and shutdown</ul>
                    <ul>Faster file access and app loading</ul>
                    <ul>More durable (less damage from drops)</ul>
                    <ul>Uses less power (good for laptops)</ul>
                    `,
            image: "../assets/img 5.png"
        }, 
        
        "hdd": {
            name: "Hard Disk Drive (HDD)",
            history: `The <b>Hard Disk Drive (HDD)</b> is one of the earliest and most important data storage technologies in computing history. It was first introduced in <b>1956 by IBM</b>
                    with the IBM 350 Disk Storage Unit, which used large spinning magnetic platters to store data. Early HDDs were massive, expensive, and could store only a
                    few megabytes of data, making them suitable mainly for large organizations and mainframe computers. Over the following decades, technological advancements
                    significantly reduced their size while increasing storage capacity and reliability. By the <b>1980s and 1990s</b>, HDDs became common in personal computers, 
                    using standardized interfaces and offering storage in the megabyte and later gigabyte range. In the <b>2000s</b>, HDD capacities expanded into terabytes while 
                    becoming more affordable, making them ideal for mass data storage. Today, despite the rise of faster SSDs, HDDs remain widely used for bulk storage due to 
                    their cost-effectiveness and large capacity.`,
            function: `<b>Basic Use of HDD</b>
                    <br><br>
                    A <b>Hard Disk Drive (HDD)</b> is used to <b>store large amounts of data</b> in devices such as:
                    <ul>Desktop computers and laptops</ul>
                    <ul>Servers and data centers</ul>
                    <ul>External storage devices</ul>
                    <b>It stores:</b>
                    <ul>Operating systems</ul>
                    <ul>Software applications</ul>
                    <ul>Documents, photos, videos, and backups</ul>
                    An HDD <b>stores and retrieves data using magnetic technology</b> and moving parts.
                    <br>
                    <b>How it functions in simple terms:</b>
                    <ul>1.Data is stored on spinning magnetic disks (platters)</ul>
                    <ul>2.A read/write head moves across the platters to access data</ul>
                    <ul>3.The platters rotate to locate the correct data position</ul>
                    <ul>4.The data is then read or written and sent to the computer</ul>
                    <b>Why HDDs Are Still Used</b>
                    <ul>Large storage capacity</ul>
                    <ul>More affordable than SSDs</ul>
                    <ul>Suitable for storing large files and backups</ul>`,
            image: "../assets/img 6.png"
        },
        "ram": {
            name: "Random Access Memory",
            history: `Random Access Memory (RAM) is the primary memory used in computers to temporarily store data that the processor requires for quick access. The first practical 
                    forms of RAM appeared in the late 1940s, starting with experimental memory systems such as the Williams tube, which used cathode-ray technology. This was followed 
                    by the development of magnetic core memory in the early 1950s, which became the standard form of RAM for many years.
                    <br></br>
                    Random Access Memory (RAM) is the primary memory used in computers to temporarily store data that the processor requires for quick access. The first practical forms 
                    of RAM appeared in the late 1940s, starting with experimental memory systems such as the Williams tube, which used cathode-ray technology. This was followed by the 
                    development of magnetic core memory in the early 1950s, which became the standard form of RAM for many years.
                    <br></br>
                    Over the following decades, RAM technology continued to evolve, offering increased speed, capacity, and efficiency. Modern RAM used in personal computers and servers
                    includes various standards such as SDRAM and its successors (DDR, DDR2, DDR3, DDR4, and DDR5), each improving performance and power efficiency. Today, RAM remains
                    essential for high-speed data access, enabling computing devices to run applications efficiently and process information rapidly.`,
            function: `<b>Basic Use of RAM</b>
                    <br><br>
                    RAM (Random Access Memory) is used in computers and other electronic devices to <b>temporarily store data for quick access</b>. It is essential for:
                    <ul>Personal computers and laptops</ul>
                    <ul>Servers and data centers</ul>
                    <ul>Smartphones and tablets</ul>
                    <b>It stores:</b>
                    <ul>Data currently used by the operating system</ul>
                    <ul>Active software applications</ul>
                    <ul>Files and information required for processing</ul>
                    <b>Basic Function of RAM</b>
                    <br><br>
                    RAM <b>stores and provides fast access to data for the processor</b>, allowing the system to operate efficiently.
                    <b>How it functions in simple terms:</b>
                    <ul>Data needed by the processor is <b>loaded into RAM from permanent storage</b> (HDD or SSD)</ul>
                    <ul>The processor accesses and processes this data <b>directly from RAM</b>, which is much faster than reading from a hard drive</ul>
                    <ul>Data in RAM is <b>temporary</b> and is cleared when the device is powered off</ul>
                    <b>Why RAM Is Important</b>
                    <ul>Enables <b>fast system performance</b> and smooth multitasking</ul>
                    <ul>Supports <b>quick access to active programs and files</b></ul>
                    <ul>Critical for <b>running applications efficiently.</b></ul>`,
            image: "../assets/img 7.png"
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

function handleFormSubmit() {
    console.log("Button clicked!"); // Check your console (F12) for this!

    // 1. The Confirmation Pop-up
    const firstConfirm = confirm("Confirm submission?");

    if (firstConfirm) {
        // 2. The Success Pop-up
        alert("Your concern has been submitted, please click OK to close this message.");
        
        // 3. Manually clear the form only AFTER they click OK
        document.getElementById('contactForm').reset();
    } else {
        console.log("User cancelled submission.");
    }
}

/* ==================== HANDLE FUNCTION FOR EASY MODE ==================== */
function handleExitEasy() {
    // This takes the user back to your main page (adjust 'index.html' to your filename)
        window.location.href = "test.html";
}
function handleStartEasy() {
    const response = confirm("Are you sure you want to start the quiz?");

    if (response) {
        // If 'Yes' (OK), go to the actual test page
                window.location.href = "registration-easy.html";
    } else {
        // If 'No' (Cancel), go back to the Choose Mode selection in the main file
                window.location.href = "test.html#choose-mode";
    }
}

/* ==================== HANDLE FUNCTION FOR MEDIUM MODE ==================== */
function handleExitMedium() {
    // This takes the user back to your main page (adjust 'index.html' to your filename)
        window.location.href = "test.html";
}
function handleStartMedium() {
    const response = confirm("Are you sure you want to start the quiz?");

    if (response) {
        // If 'Yes' (OK), go to the actual test page
                window.location.href = "registration-medium.html";
    } else {
        // If 'No' (Cancel), go back to the Choose Mode selection in the main file
                window.location.href = "test.html#choose-mode";
    }
}
