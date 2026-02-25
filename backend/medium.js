/* ------------- correct: 0 means the 1st choice is correct. ------------- */
/* ------------- correct: 1 means the 2nd choice is correct. ------------- */
/* ------------- correct: 2 means the 3rd choice is correct. ------------- */
/* ------------- correct: 3 means the 4th choice is correct. ------------- */

const QuizApp = {
            currentIndex: 0,
            answers: {},
            questions: [
                {
                    text: "Which component is responsible for performing actual calculations and processing tasks?",
                    options: ["RAM", "SSD", "CPU", "PC Case"],
                    correct: 2
                },
                {
                    text: "What does 'SSD' stand for?",
                    options: ["Static Storage Drive", "Solid State Drive", "System Serial Data", "Standard Slot Device"],
                    correct: 1
                },
                {
                    text: "RAM (Random Access Memory) is considered 'volatile' memory. What does this mean?",
                    options: ["It is very fast", "It stores data even without power", "It loses data when power is turned off", "It is easily broken"],
                    correct: 2
                },
                {
                    text: "Which storage device uses physical spinning disks to read and write data?",
                    options: ["SSD", "RAM", "CPU", "HDD"],
                    correct: 3
                },
                {
                    text: "Which monitor specification determines the total number of pixels on the screen?",
                    options: ["Refresh Rate", "Resolution", "Response Time", "Aspect Ratio"],
                    correct: 1
                },
                {
                    text: "What is the primary purpose of the PC Case?",
                    options: ["Increase internet speed", "Provide structure and airflow", "Process graphics", "Act as a battery"],
                    correct: 1
                },
                {
                    text: "What does a mouse's 'Polling Rate' measure?",
                    options: ["Number of buttons", "Frequency of reporting position", "Maximum movement speed", "RGB brightness"],
                    correct: 1
                },
                {
                    text: "Why is an SSD preferred over an HDD for an operating system?",
                    options: ["It is cheaper", "It has more moving parts", "Much faster read/write speeds", "Higher capacity per dollar"],
                    correct: 2
                },
                {
                    text: "Which of these is often called the 'brain' of the computer?",
                    options: ["Monitor", "Motherboard", "CPU", "RAM"],
                    correct: 2
                },
                {
                    text: "What is the most common connector for keyboards and mice today?",
                    options: ["PS/2", "VGA", "USB", "HDMI"],
                    correct: 2
                },
                {
                    text: "Increasing RAM capacity primarily helps the computer to:",
                    options: ["Store more movies", "Run multiple programs smoothly", "Brighten the screen", "Block viruses"],
                    correct: 1
                },
                {
                    text: "Which monitor port carries both high-definition video and audio signals?",
                    options: ["DVI", "VGA", "HDMI", "Serial Port"],
                    correct: 2
                },
                {
                    text: "Who is Intel's primary competitor in the consumer CPU market?",
                    options: ["Nvidia", "AMD", "Samsung", "Microsoft"],
                    correct: 1
                },
                {
                    text: "What is a common disadvantage of a Hard Disk Drive (HDD)?",
                    options: ["It is too quiet", "Susceptible to damage if dropped while running", "Too small for desktop cases", "Consumes no power"],
                    correct: 1
                },
                {
                    text: "On a mechanical keyboard, the 'feel' is determined by the:",
                    options: ["Keycap color", "Switch type", "Cable length", "Ghosting"],
                    correct: 1
                },
                {
                    text: "Which component's speed is most likely measured in Gigahertz (GHz)?",
                    options: ["Monitor", "SSD", "CPU", "Mouse"],
                    correct: 2
                },
                {
                    text: "What is the standard aspect ratio for a modern widescreen monitor?",
                    options: ["4:3", "1:1", "16:9", "21:9"],
                    correct: 2
                },
                {
                    text: "Where is the CPU physically installed?",
                    options: ["PC Case wall", "Inside the SSD", "Motherboard Socket", "Monitor Back"],
                    correct: 2
                },
                {
                    text: "What does 'RGB' stand for in hardware lighting?",
                    options: ["Real Graphics Boost", "Red, Green, Blue", "Rapid Gaming Battery", "Rear General Bus"],
                    correct: 1
                },
                {
                    text: ":",
                    options: ["HDD Space", "RAM", "Refresh Rate", "DPI"],
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
                // Dynamically use current.options from the question object
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
                if (this.currentIndex > 0) { 
                    this.currentIndex--; 
                    this.render(); 
                }
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
                // Fill all answers randomly to simulate completion
                this.questions.forEach((_, i) => {
                    if (this.answers[i] === undefined) this.answers[i] = Math.floor(Math.random() * 4);
                });
                this.calculateAndShowResults();
            },

            calculateAndShowResults() {
                this.hideModal();
                let score = 0;
                this.questions.forEach((q, i) => { 
                    if (this.answers[i] === q.correct) score++; 
                });
                
                document.getElementById('quiz-ui').innerHTML = `
                    <div style="text-align: center; padding: 40px 0;">
                        <h1 style="font-size: 60px; font-weight: 800; color: #3b82f6; margin-bottom: 20px;">Quiz Completed!</h1>
                        <p style="font-size: 40px; color: #ffffff; margin-bottom: 50px;">Your Score: <strong>${score} / ${this.questions.length}</strong></p>
                        <button class="btn btn-next btn-glow" onclick="window.location.assign('./test.html')">Back to Test Menu</button>
                    </div>
                `;
            }
        };

        window.onload = () => QuizApp.init();