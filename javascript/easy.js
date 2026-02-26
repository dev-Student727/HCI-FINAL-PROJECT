/* ------------- correct: 0 for True. ------------- */
/* ------------- correct: 1 for false. ------------- */


const QuizApp = {
            currentIndex: 0,
            answers: {},
            questions: [
                {
                    text: "True or False: The keyboard's primary function is to act as the main text-entry interface for letters and numbers.",
                    // True: Based on Keyboard function text
                    correct: 0
                },
                {
                    text: "True or False: A PC case (chassis) is designed to house, support, and protect internal components like the motherboard.",
                    // True: Based on PC Case function text
                    correct: 0
                },
                {
                    text: "True or False: An SSD uses spinning magnetic disks and a moving read/write head to access your files.",
                    // False: SSDs use flash memory chips; HDDs use spinning disks
                    correct: 1
                },
                {
                    text: "True or False: The mouse is a pointing device that translates hand movements into the movement of a digital cursor.",
                    // True: Based on Mouse function text
                    correct: 0
                },
                {
                    text: "True or False: The CPU is often called the 'brain' of the computer because it fetches and executes instructions.",
                    // True: Based on CPU function text
                    correct: 0
                },
                {
                    text: "True or False: Data stored in RAM is permanent and will stay there even after you turn the computer off.",
                    // False: RAM is temporary and clears when powered off
                    correct: 1
                },
                {
                    text: "True or False: Modern monitors act as output devices that convert electrical signals into visible images and text.",
                    // True: Based on Monitor function text
                    correct: 0
                },
                {
                    text: "True or False: The primary purpose of a PC Case's mesh front is to block all airflow to keep the computer quiet.",
                    // False: Mesh fronts prioritize high-volume airflow for cooling
                    correct: 1
                },
                {
                    text: "True or False: Hard Disk Drives (HDDs) are generally more affordable than SSDs for storing large amounts of data.",
                    // True: Based on HDD 'Why they are still used' text
                    correct: 0
                },
                {
                    text: "True or False: Bluetooth and RF technology allow modern keyboards and mice to work without physical cords.",
                    // True: Based on Keyboard/Mouse history text
                    correct: 0
                }
            ],
            options: ["True", "False"],

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
                this.options.forEach((opt, idx) => {
                    const sel = this.answers[this.currentIndex] === idx;
                    const card = document.createElement('div');
                    card.className = `option-card ${sel ? 'selected' : ''}`;
                    card.innerHTML = `<div class="radio-circle"></div><div>${opt}</div>`;
                    card.onclick = () => { this.answers[this.currentIndex] = idx; this.render(); };
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
                        localStorage.setItem('easyModeCompleted', 'true');
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
                            Q${i+1}: ${this.options[userIdx]} 
                            <span style="opacity: 0.5; margin-left: 10px;">(Correct: ${this.options[q.correct]})</span>
                        </div>
                    `;
                }).join('');
                
                document.getElementById('quiz-ui').innerHTML = `
                    <div style="text-align: center;">
                        <h1 style="font-size: 60px; font-weight: 800; color: #3b82f6; margin-bottom: 20px; font-family: 'Bungee'">Quiz Completed!</h1>

                        <p style="font-size: 40px; color: #ffffff; margin-bottom: 50px;">Your Score: <strong>${score} / ${this.questions.length}</strong></p>
                        
                        <div class="review-list">
                            ${reviewHtml}
                        </div>

                        <button class="btn btn-next btn-glow" onclick="window.location.assign('./test.html')">Back to Test Menu</button>
                    </div>
                `;
            }
        };
        window.onload = () => QuizApp.init();