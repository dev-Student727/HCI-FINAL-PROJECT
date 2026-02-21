const QuizApp = {
            currentIndex: 0,
            answers: {},
            questions: [
                { text: "True or False: The keyboard is the main tool used to type letters and numbers into a computer.", correct: 0 },
                { text: "True or False: A PC case is a giant box used to keep all the computer's brains and parts together.", correct: 0 },
                { text: "True or False: The DPI setting on a mouse stands for Digital Picture Interface.", correct: 1 },
                { text: "True or False: You should use a mouse on a flat surface to help the cursor move smoothly.", correct: 0 },
                { text: "True or False: The monitor is the screen where you see pictures, videos, and text.", correct: 0 },
                { text: "True or False: If you turn off the monitor, the entire computer automatically deletes all your files.", correct: 1},
                { text: "True or False: A wireless mouse requires a physical cord to be plugged into the computer at all times to work.", correct: 1},
                { text: "True or False: The Spacebar is usually the longest key on a keyboard.", correct: 0},
                { text: "True or False: You can click things on the screen by pressing the buttons on a mouse.", correct:0},
                { text: "True or False: It is perfectly safe to pour a glass of water inside your PC case while it is running.", correct: 1}
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
                // Step 1: Are you sure all answers are correct?
                this.showModal("Are you sure that all your answers are correct?", [
                    { text: "Yes", class: "btn-yes", onClick: () => this.stepTwo() },
                    { text: "No", class: "btn-no", onClick: () => this.hideModal() }
                ]);
            },

            stepTwo() {
                // Step 2: Are you sure you want to submit?
                this.showModal("Are you sure you want to submit this quiz?", [
                    { text: "Yes", class: "btn-yes", onClick: () => this.stepThree() },
                    { text: "No", class: "btn-no", onClick: () => this.hideModal() }
                ]);
            },

            stepThree() {
                // Step 3: Submission received
                this.showModal("Your submission has been received.", [
                    { text: "Okay", class: "btn-yes", onClick: () => { this.hideModal(); this.calculateAndShowResults(); } }
                ]);
            },

            calculateAndShowResults() {
                let score = 0;
                this.questions.forEach((q, i) => { if (this.answers[i] === q.correct) score++; });
                localStorage.setItem('easyModeCompleted', 'true');
                
                document.getElementById('quiz-ui').innerHTML = `
                    <div style="text-align: center; padding: 40px 0;">
                        <h1 style="font-size: 2.5rem; font-weight: 800; color: #2e1a47; margin-bottom: 20px;">Quiz Completed!</h1>
                        <p style="font-size: 1.5rem; color: #1a1a1a; margin-bottom: 30px;">Your Score: <strong>${score} / ${this.questions.length}</strong></p>
                        <button class="btn btn-next" onclick="window.location.assign('./test.html')">Back to Test Menu</button>
                    </div>
                `;
            }
        };
        window.onload = () => QuizApp.init();