/* ------------- correct: 0 means the 1st choice is correct. ------------- */
/* ------------- correct: 1 means the 2nd choice is correct. ------------- */
/* ------------- correct: 2 means the 3rd choice is correct. ------------- */
/* ------------- correct: 3 means the 4th choice is correct. ------------- */

const QuizApp = {
            currentIndex: 0,
            answers: {},
            questions: [
                {
                    text: "In the context of the CPU's continuous cycle, what are the three specific stages it performs to run applications?",
                    options: ["Input-Process-Output", "Fetch-Decode-Execute", "Read-Write-Store", "Load-Translate-Display"],
                    // Source: CPU Function ("operates in a continuous cycle (fetch-decode-execute)")
                    correct: 1
                },
                {
                    text: "Why did the 1990s see a shift from horizontal desktop cases to the 'Vertical Tower' design?",
                    options: ["To support heavier CRT monitors", "To accommodate more powerful components and improve airflow", "To allow for the invention of the trackball mouse", "To integrate the keyboard into the chassis"],
                    // Source: PC Case History ("As internal components became more powerful and generated more heat... shift allowed for better airflow")
                    correct: 1
                },
                {
                    text: "According to the history of the mouse, what specific mechanical change in the late 1990s eliminated the need for internal cleaning?",
                    options: ["The move from wooden boxes to plastic", "The transition from trackballs to optical sensors", "The introduction of Bluetooth tethers", "The addition of a scroll wheel"],
                    // Source: Keyboard & Mouse History ("transitioned from trackballs to optical sensors... eliminating the need for internal cleaning")
                    correct: 1
                },
                {
                    text: "How does the 'Open Interior' layout in modern PC cases differ from older designs?",
                    options: ["It removes bulky front cages used for HDDs and optical drives", "It integrates the monitor directly into the metal frame", "It uses vacuum tubes instead of transistors", "It requires the motherboard to be placed on top of the case"],
                    // Source: PC Case History ("allowed manufacturers to remove bulky front cages, leading to the Open Interior layout")
                    correct: 0
                },
                {
                    text: "What is the primary functional difference between how data is retrieved from an SSD versus an HDD?",
                    options: ["SSD uses magnetic platters; HDD uses flash chips", "SSD accesses data electronically via memory cells; HDD uses a moving read/write head", "SSD is used for backups; HDD is used for the operating system", "SSD is slower but more durable than HDD"],
                    // Source: SSD/HDD Functions ("SSD accesses it electronically... HDD a read/write head moves across the platters")
                    correct: 1
                },
                {
                    text: "Which historical milestone in 1971 marked the transition from vacuum tubes to single-chip microprocessors?",
                    options: ["The release of the IBM PC", "The invention of the Intel 4004", "The creation of the Xerox Alto", "The release of the Apple Macintosh"],
                    // Source: CPU History ("single-chip microprocessors starting with the Intel 4004 in 1971")
                    correct: 1
                },
                {
                    text: "Beyond simple typing, what is the 'Keyboard's' role as a command console?",
                    options: ["It adjusts the physical weight of the PC case", "It uses shortcuts to execute tasks like saving files or switching programs", "It provides the main power supply to the monitor", "It translates hand movements into a digital cursor"],
                    // Source: Keyboard & Mouse Function ("command console where specific keys or combinations... can execute complex tasks")
                    correct: 1
                },
                {
                    text: "What specific risk is reduced by using 'Standoffs' or grounding within a PC Case?",
                    options: ["Input lag on the mouse", "Static electricity damage to delicate internal components", "Slow internet download speeds", "Mechanical jamming of the keyboard arms"],
                    // Source: PC Case Function ("provides grounding to protect components from static electricity")
                    correct: 1
                },
                {
                    text: "Why is data in RAM referred to as 'temporary'?",
                    options: ["It can only be used by the mouse", "It is cleared whenever the device is powered off", "It is physically moved to the monitor after 10 minutes", "It is made of magnetic core memory that expires"],
                    // Source: RAM Function ("Data in RAM is temporary and is cleared when the device is powered off")
                    correct: 1
                },
                {
                    text: "The 1940s-era monitors were referred to as 'glass TTY' terminals because they used what technology?",
                    options: ["LED-backlit LCD", "Cathode Ray Tube (CRT) vacuum tubes", "IPS (In-Plane Switching)", "OLED bitmap displays"],
                    // Source: Monitor History ("Early monitors, or 'glass TTY' terminals... using vacuum tube technology")
                    correct: 1
                },
                {
                    text: "Which CPU component is specifically responsible for mathematical operations and logical comparisons like 'AND' or 'OR'?",
                    options: ["Control Unit (CU)", "Arithmetic Logic Unit (ALU)", "Registers", "SDRAM"],
                    // Source: CPU Function ("Arithmetic Logic Unit (ALU) performs mathematical operations... and logical comparisons")
                    correct: 1
                },
                {
                    text: "In the history of the keyboard, why was the QWERTY layout originally introduced in 1874?",
                    options: ["To make typing faster for computers", "To prevent mechanical arms from jamming in typewriters", "To allow for RGB lighting integration", "To standardize the IBM Model M layout"],
                    // Source: Keyboard & Mouse History ("introduced the QWERTY layout designed to prevent mechanical arms from jamming")
                    correct: 1
                },
                {
                    text: "What is the primary advantage of 'Cable Management' besides aesthetics?",
                    options: ["It increases the storage capacity of the SSD", "It improves airflow and prevents overheating", "It allows the keyboard to work wirelessly", "It enables the monitor to display 16 colors"],
                    // Source: PC Case Function ("routing options... to keep cables tidy, which improves both aesthetics and airflow")
                    correct: 1
                },
                {
                    text: "Which milestone development in 1981 set the industry standard for monitor color support?",
                    options: ["Karl Ferdinand Braun's CRT", "IBM's Color Graphics Adapter (CGA)", "NEC's LED-backlit monitor", "The Xerox Alto bitmap display"],
                    // Source: Monitor History ("IBM's Color Graphics Adapter (CGA) in 1981, which supported 16 colors")
                    correct: 1
                },
                {
                    text: "How does the 'Control Unit' (CU) inside the CPU function?",
                    options: ["By performing addition and subtraction", "By managing the flow of data between the CPU, memory, and I/O devices", "By storing files permanently like an HDD", "By cooling the system through ventilation"],
                    // Source: CPU Function ("Control Unit (CU) manages the flow of data between the CPU, memory, and input/output devices")
                    correct: 1
                },
                {
                    text: "The first mouse prototype (1963) was a wooden box that used what to track movement?",
                    options: ["A single rubber ball", "Two metal wheels positioned perpendicularly", "An optical laser sensor", "A Teletype telegraph wire"],
                    // Source: Keyboard & Mouse History ("wooden box with two metal wheels positioned perpendicularly")
                    correct: 1
                },
                {
                    text: "Why is an SSD generally preferred over an HDD for a laptop's primary drive?",
                    options: ["It uses more power to increase speed", "It is more durable and uses less power", "It has more spinning platters for better storage", "It can only be used in servers and data centers"],
                    // Source: SSD Function ("More durable (less damage from drops) / Uses less power (good for laptops)")
                    correct: 1
                },
                {
                    text: "Which memory technology served as the standard for RAM in the early 1950s?",
                    options: ["SDRAM", "Magnetic core memory", "Williams tube cathode-ray technology", "DDR5"],
                    // Source: RAM History ("development of magnetic core memory in the early 1950s, which became the standard")
                    correct: 1
                },
                {
                    text: "The ATX standard (1995) was introduced by which company to standardize PC Case internals?",
                    options: ["IBM", "Apple", "Intel", "AMD"],
                    // Source: PC Case History ("ATX... standard was introduced by Intel in 1995")
                    correct: 2
                },
                {
                    text: "When a processor requires data, what is the step-by-step relationship between RAM and permanent storage?",
                    options: ["Data is moved from the monitor to the RAM", "Data is loaded into RAM from the HDD or SSD for the processor to access", "The CPU sends data to the HDD to be processed by the RAM", "RAM sends data to the keyboard to be saved on the SSD"],
                    // Source: RAM Function ("Data needed by the processor is loaded into RAM from permanent storage (HDD or SSD)")
                    correct: 1
                }
            ],

            init() {
                this.textEl = document.getElementById('question-text');
                this.optionsEl = document.getElementById('options-container');
                this.counterEl = document.getElementById('counter');
                this.progressEl = document.getElementById('progress-fill');
                this.nextBtn = document.getElementById('next-btn');
                this.prevBtn = document.getElementById('prev-btn');
                this.modalOverlay = document.getElementById('modal-overlay');
                this.modalTitle = document.getElementById('modal-title');
                this.modalButtons = document.getElementById('modal-buttons');

                this.nextBtn.onclick = () => this.handleNext();
                this.prevBtn.onclick = () => this.handlePrev();
                this.render();
            },

            render() {
                const current = this.questions[this.currentIndex];
                this.textEl.innerHTML = `Question ${this.currentIndex + 1}: ${current.text}`;
                this.counterEl.innerText = `${this.currentIndex + 1} / ${this.questions.length} Question`;
                this.progressEl.style.width = `${((this.currentIndex + 1) / this.questions.length) * 100}%`;
                
                this.optionsEl.innerHTML = '';
                current.options.forEach((opt, idx) => {
                    const sel = this.answers[this.currentIndex] === idx;
                    const card = document.createElement('div');
                    card.className = `option-card ${sel ? 'selected' : ''}`;
                    card.innerHTML = `<div class="radio-circle"></div><div>${opt}</div>`;
                    card.onclick = () => { 
                        this.answers[this.currentIndex] = idx; 
                        this.render(); 
                    };
                    this.optionsEl.appendChild(card);
                });
                this.prevBtn.disabled = (this.currentIndex === 0);
                this.nextBtn.innerText = (this.currentIndex === this.questions.length - 1) ? "Submit" : "Next";
            },

            handleNext() {
                if (this.answers[this.currentIndex] === undefined) {
                    const box = document.getElementById('simple-alert');
                    box.style.display = 'block';
                    setTimeout(() => box.style.display = 'none', 2000);
                    return;
                }
                if (this.currentIndex < this.questions.length - 1) {
                    this.currentIndex++;
                    this.render();
                } else {
                    this.startConfirmationFlow();
                }
            },

            handlePrev() {
                if (this.currentIndex > 0) { this.currentIndex--; this.render(); }
            },

            showModal(text, buttons) {
                this.modalTitle.innerText = text;
                this.modalButtons.innerHTML = '';
                buttons.forEach(btn => {
                    const b = document.createElement('button');
                    b.className = `btn-modal ${btn.class}`;
                    b.innerText = btn.text;
                    b.onclick = btn.onClick;
                    this.modalButtons.appendChild(b);
                });
                this.modalOverlay.style.display = 'flex';
            },

            hideModal() {
                this.modalOverlay.style.display = 'none';
            },

            startConfirmationFlow() {
                this.showModal("Are you sure that all your answers are correct?", [
                    { text: "Yes", class: "btn-yes", onClick: () => this.stepTwo() },
                    { text: "No", class: "btn-no", onClick: () => this.hideModal() }
                ]);
            },

            stepTwo() {
                this.showModal("Are you sure you want to submit this quiz?", [
                    { text: "Yes", class: "btn-yes", onClick: () => this.stepThree() },
                    { text: "No", class: "btn-no", onClick: () => this.hideModal() }
                ]);
            },

            stepThree() {
                this.showModal("Your submission has been submit.", [
                    { text: "Okay", class: "btn-yes", onClick: () => { 
                        this.hideModal();
                        localStorage.setItem('mediumModeCompleted', 'true');
                        this.calculateAndShowResults(); 
                    } }
                ]);
            },

            debugShowScore() {
                this.questions.forEach((_, i) => {
                    if (this.answers[i] === undefined) this.answers[i] = this.questions[i].correct;
                });
                this.calculateAndShowResults();
            },

            calculateAndShowResults() {
                let score = 0;
                const reviewHtml = this.questions.map((q, i) => {
                    const userIdx = this.answers[i];
                    const isCorrect = userIdx === q.correct;
                    if (isCorrect) score++;
                    return `
                        <div class="review-row">
                            <span style="color: ${isCorrect ? '#22c55e' : '#ef4444'}; font-weight: 800; margin-right: 15px;">${isCorrect ? '✓' : '✗'}</span>
                            Q${i+1}: ${q.options[userIdx]} 
                            <span style="opacity: 0.5; margin-left: 10px;">(Correct: ${q.options[q.correct]})</span>
                        </div>
                    `;
                }).join('');
                
                document.getElementById('quiz-ui').innerHTML = `
                    <div style="text-align: center;">
                        <h1 style="font-size: 60px; font-weight: 800; color: #3b82f6; margin-bottom: 10px; font-family: 'Bungee';">Quiz Completed!</h1>
                        <p style="font-size: 40px; color: #ffffff; margin-bottom: 50px;">Your Score: <strong>${score} / ${this.questions.length}</strong></p>
                        
                        <div class="review-list">
                            ${reviewHtml}
                        </div>

                        <button class="btn btn-next btn-glow" onclick="window.location.reload()">Back to Test Menu</button>
                    </div>
                `;
            }
        };

        window.onload = () => QuizApp.init();