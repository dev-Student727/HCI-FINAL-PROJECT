/**
 * Registration Logic for TECH.PRO
 * Handles user input validation and redirection to the exam page.
 */

const RegistrationApp = {
    init() {
        this.nameInput = document.getElementById('user-name');
        this.displayNameInput = document.getElementById('display-name');
        this.startBtn = document.getElementById('start-btn');
        this.alertBox = document.getElementById('simple-alert');

        if (this.startBtn) {
            this.startBtn.addEventListener('click', () => this.handleRegistration());
        }
    },

    showAlert(msg) {
        this.alertBox.innerText = msg;
        this.alertBox.style.display = 'block';
        setTimeout(() => {
            this.alertBox.style.display = 'none';
        }, 2500);
    },

    handleRegistration() {
        const name = this.nameInput.value.trim();
        const displayName = this.displayNameInput.value.trim();

        // 1. Basic Validation
        if (!name || !displayName) {
            this.showAlert("Please fill in both Name and Display Name.");
            return;
        }

        // 2. Display Name Length Validation (Optional)
        if (displayName.length < 3) {
            this.showAlert("Display name must be at least 3 character.");
            return;
        }

        // 3. Store Data for the Exam session
        const userData = {
            fullName: name,
            displayName: displayName,
            loginTime: new Date().toLocaleTimeString()
        };

        localStorage.setItem('techProUserData', JSON.stringify(userData));

        // 4. Redirect to the actual exam page
        window.location.href = 'exam.html';
    }
};

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    RegistrationApp.init();
});