/* ============================================================
   Ibrahim Tayyab Memon - Portfolio
   Contact Page JavaScript
   ============================================================ */

// ==================== STATE ====================
let isSubmitting = false;
let showPreview = false;
let notifiedMilestones = [];
let toastId = 0;

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("cp-name");
    const emailInput = document.getElementById("cp-email");
    const messageInput = document.getElementById("cp-message");

    // Listen for input changes to update progress
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener("input", updateProgress);
    });

    // Character counter for message
    messageInput.addEventListener("input", () => {
        document.getElementById("charCount").textContent = messageInput.value.length;
        // Update preview text
        document.getElementById("previewText").textContent = messageInput.value;
    });
});

// ==================== FORM PROGRESS ====================
function updateProgress() {
    const name = document.getElementById("cp-name").value.trim();
    const email = document.getElementById("cp-email").value.trim();
    const message = document.getElementById("cp-message").value.trim();

    let filled = 0;
    if (name.length > 0) filled++;
    if (email.length > 0) filled++;
    if (message.length > 0) filled++;

    const progress = (filled / 3) * 100;

    // Update progress bar
    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("progressPercent").textContent = Math.round(progress) + "%";

    // Milestone notifications
    if (progress >= 50 && !notifiedMilestones.includes(50)) {
        addToast("Form is 50% complete!", "info");
        notifiedMilestones.push(50);
    }
    if (progress === 100 && !notifiedMilestones.includes(100)) {
        addToast("Form is fully completed!", "success");
        notifiedMilestones.push(100);
    }
}

// ==================== FORM SUBMISSION ====================
function handleSubmit(e) {
    e.preventDefault();

    if (isSubmitting) return false;

    const name = document.getElementById("cp-name").value.trim();
    const email = document.getElementById("cp-email").value.trim();
    const message = document.getElementById("cp-message").value.trim();

    // Validation
    if (!name || !email || !message) {
        addToast("All fields are required", "error");
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        addToast("Please enter a valid email address", "error");
        return false;
    }

    isSubmitting = true;
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...';

    // Disable inputs
    document.querySelectorAll("#contactForm input, #contactForm textarea").forEach(el => el.disabled = true);

    // Simulate sending (since we don't have a backend, use mailto)
    setTimeout(() => {
        // Create mailto link
        const subject = encodeURIComponent(`New Contact Form Submission from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        window.location.href = `mailto:ibrahimtayyab696@gmail.com?subject=${subject}&body=${body}`;

        addToast("Opening email client...", "success");

        // Reset state
        isSubmitting = false;
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
        document.querySelectorAll("#contactForm input, #contactForm textarea").forEach(el => el.disabled = false);

        // Reset form
        document.getElementById("cp-name").value = "";
        document.getElementById("cp-email").value = "";
        document.getElementById("cp-message").value = "";
        document.getElementById("charCount").textContent = "0";
        document.getElementById("progressBar").style.width = "0%";
        document.getElementById("progressPercent").textContent = "0%";
        notifiedMilestones = [];
    }, 1000);

    return false;
}

// ==================== PREVIEW TOGGLE ====================
function togglePreview() {
    showPreview = !showPreview;
    const preview = document.getElementById("messagePreview");
    const btn = document.getElementById("previewBtn");

    if (showPreview) {
        preview.classList.add("open");
        btn.textContent = "Hide Preview";
        document.getElementById("previewText").textContent = document.getElementById("cp-message").value;
        addToast("Message preview shown", "info");
    } else {
        preview.classList.remove("open");
        btn.textContent = "Show Preview";
        addToast("Message preview hidden", "info");
    }
}

// ==================== FORM RESET ====================
function resetForm() {
    if (!confirm("Are you sure you want to reset the form?")) return;

    document.getElementById("cp-name").value = "";
    document.getElementById("cp-email").value = "";
    document.getElementById("cp-message").value = "";
    document.getElementById("charCount").textContent = "0";
    document.getElementById("progressBar").style.width = "0%";
    document.getElementById("progressPercent").textContent = "0%";
    document.getElementById("previewText").textContent = "";
    notifiedMilestones = [];

    if (showPreview) {
        showPreview = false;
        document.getElementById("messagePreview").classList.remove("open");
        document.getElementById("previewBtn").textContent = "Show Preview";
    }

    addToast("Form has been reset", "warning");
}

// ==================== TOAST NOTIFICATION SYSTEM ====================
function addToast(message, type) {
    const container = document.getElementById("toastContainer");
    const id = toastId++;

    const icons = { success: "✅", error: "❌", info: "ℹ️", warning: "⚠️" };

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.id = `toast-${id}`;
    toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <p class="toast-message">${message}</p>
  `;

    container.appendChild(toast);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        toast.classList.add("removing");
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}
