const QuizApp = {
            currentIndex: 0,
            userAnswers: {},
            questions: [
                { 
                    text: "The 1874 typewriter layout designed to prevent mechanical arms from jamming is known as ____________.",
                    answer: "QWERTY",
                    icon: "⌨️"
                },
                { 
                    text: "The first microprocessor, the ____________ (1971), began the shift from vacuum tubes to single-chip CPUs.",
                    answer: "Intel 4004",
                    icon: "💾"
                },
                { 
                    text: "In the CPU's 'Fetch-Decode-Execute' cycle, the ____________ unit specifically manages the flow of data.",
                    answer: "Control Unit",
                    icon: "🚥"
                },
                { 
                    text: "The first mouse prototype (1963) used two ____________ wheels to track movement along the X and Y axes.",
                    answer: "Metal",
                    icon: "🖱️"
                },
                { 
                    text: "To protect components from ____________ electricity, the PC Case provides a necessary grounding path.",
                    answer: "Static",
                    icon: "⚡"
                },
                { 
                    text: "In the 1980s, the IBM PC established the ____________ Desktop standard before the rise of vertical towers.",
                    answer: "Horizontal",
                    icon: "🖥️"
                },
                { 
                    text: "Modern PC cases utilize a ____________ front design to prioritize high-volume airflow for cooling.",
                    answer: "Mesh",
                    icon: "🌬️"
                },
                { 
                    text: "The ____________, developed in 1964, was one of the first monitors to allow for interactive graphics.",
                    answer: "IBM 2250",
                    icon: "📺"
                },
                { 
                    text: "Memory that uses cathode-ray technology to store data, used in the late 1940s, was the ____________ tube.",
                    answer: "Williams",
                    icon: "🧪"
                },
                { 
                    text: "The 1984 release of the ____________ popularized the mouse by introducing the Graphical User Interface.",
                    answer: "Apple Macintosh",
                    icon: "🍎"
                },
                { 
                    text: "An SSD stores data using ____________ memory chips instead of physical spinning magnetic platters.",
                    answer: "Flash",
                    icon: "💾"
                },
                { 
                    text: "The first modern personal computer to feature a bitmap display (1973) was the ____________.",
                    answer: "Xerox Alto",
                    icon: "🏢"
                },
                { 
                    text: "To ensure every simultaneous key press is registered, high-end keyboards must feature ____________.",
                    answer: "N-Key Rollover",
                    icon: "⌨️"
                },
                { 
                    text: "A PC case is also commonly referred to as a system unit, tower, or ____________.",
                    answer: "Chassis",
                    icon: "🏗️"
                },
                { 
                    text: "The ____________ of 1947 was the invention that allowed CPUs to shrink from room-sized to chip-sized.",
                    answer: "Transistor",
                    icon: "🔌"
                },
            ],


            init() {
                this.textEl = document.getElementById('question-text');
                this.optionsEl = document.getElementById('options-container');
                this.counterEl = document.getElementById('counter');
                this.progressEl = document.getElementById('progress-fill');
                this.canvasEl = document.getElementById('hardware-canvas');
                this.inputEl = document.getElementById('answer-input');
                this.nextBtn = document.getElementById('next-btn');
                this.prevBtn = document.getElementById('prev-btn');
                this.modalOverlay = document.getElementById('modal-overlay');
                this.modalTitle = document.getElementById('modal-title');
                this.modalButtons = document.getElementById('modal-buttons');

                this.nextBtn.onclick = () => this.handleNext();
                this.prevBtn.onclick = () => this.handlePrev();
                this.inputEl.onkeydown = (e) => { if(e.key === 'Enter') this.handleNext(); };

                this.render();
            },

            render() {
                const current = this.questions[this.currentIndex];
                this.textEl.innerText = current.text;
                this.canvasEl.innerText = current.icon;
                this.counterEl.innerText = `${this.currentIndex + 1} / ${this.questions.length} Question`;
                this.progressEl.style.width = `${((this.currentIndex + 1) / this.questions.length) * 100}%`;
                
                this.inputEl.value = this.userAnswers[this.currentIndex] || "";
                
                this.optionsEl.innerHTML = '';
                const allPossibleAnswers = this.questions.map(q => q.answer).sort();
                
                allPossibleAnswers.forEach(ans => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    if (this.userAnswers[this.currentIndex] === ans) btn.classList.add('selected');
                    btn.innerText = ans;
                    
                    btn.onclick = () => {
                        this.userAnswers[this.currentIndex] = ans;
                        this.render();
                    };
                    this.optionsEl.appendChild(btn);
                });

                this.prevBtn.disabled = (this.currentIndex === 0);
                this.nextBtn.innerText = (this.currentIndex === this.questions.length - 1) ? "Submit" : "Next";
                this.inputEl.focus();
            },

            handleNext() {
                const currentInput = this.inputEl.value.trim();
                if (currentInput !== "") {
                    this.userAnswers[this.currentIndex] = currentInput;
                }

                if (!this.userAnswers[this.currentIndex]) {
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
                    if (this.inputEl.value.trim() !== "") {
                        this.userAnswers[this.currentIndex] = this.inputEl.value.trim();
                    }
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
                this.showModal("Your submission has been submitted.", [
                    { text: "Okay", class: "btn-yes", onClick: () => this.finalize() }
                ]);
            },

            finalize() {
                this.hideModal();
                let score = 0;
                const reviewHtml = this.questions.map((q, i) => {
                    const userVal = (this.userAnswers[i] || "").toLowerCase();
                    const correctVal = q.answer.toLowerCase();
                    const isCorrect = userVal === correctVal;
                    
                    if (isCorrect) score++;
                    return `
                        <div class="review-row">
                            <span style="color: ${isCorrect ? '#22c55e' : '#ef4444'}">${isCorrect ? '✓' : '✗'}</span>
                            <b>Q${i+1}:</b> Your: ${this.userAnswers[i] || 'None'} | Correct: ${q.answer}
                        </div>
                    `;
                }).join('');

                document.getElementById('quiz-ui').innerHTML = `
                    <div style="text-align: center; padding: 40px 0;">
                        <h1 style="font-size: 60px; font-weight: 800; color: #3b82f6; margin-bottom: 20px; font-family: 'Bungee'">Quiz Completed!</h1>

                        <p style="font-size: 40px; color: #ffffff; margin-bottom: 50px;">Your Score: <strong>${score} / ${this.questions.length}</strong></p>

                        <div class="review-list">${reviewHtml}</div>
                        
                        <button class="btn btn-next btn-glow" onclick="window.location.assign('./test.html')">Back to Test Menu</button>
                    </div>
                `;
            },

            debugShowScore() {
                this.questions.forEach((q, i) => {
                    this.userAnswers[i] = q.answer;
                });
                this.finalize();
            }
        };

        window.onload = () => QuizApp.init();