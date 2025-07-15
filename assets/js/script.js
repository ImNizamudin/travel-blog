window.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
    setTimeout(() => {
        heroContent.classList.add("fade-in");
    }, 300);
});

function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerText = img.alt;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function flipCard() {
    const card = document.querySelector('.flip-card');
    card.classList.toggle('flipped');
}

function showCardB() {
    const cardB = document.getElementById("cardB");
    const cardRow = document.querySelector(".card-row");

    cardRow.classList.add("expanded");
    cardB.classList.remove("hidden");

    setTimeout(() => {
        cardB.classList.add("show");
    }, 10);
}

function hideCardB() {
    const cardB = document.getElementById("cardB");
    const cardRow = document.querySelector(".card-row");

    cardB.classList.remove("show");
    cardRow.classList.remove("expanded");

    setTimeout(() => {
        cardB.classList.add("hidden");
    }, 600);
}


function validateForm() {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (!nama || !email || !pesan) {
        alert("Semua field wajib diisi.");
        return false;
    }

    alert("Pesan berhasil dikirim! (simulasi)");
    return false;
}

function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
}

