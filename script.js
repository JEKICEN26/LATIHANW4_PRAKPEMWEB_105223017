const Form = document.getElementById("Form");

Form.addEventListener("submit" ,(e) => {
    e.preventDefault();
    
    const namaInput = document.getElementById("nama");
    const emailInput = document.getElementById("email");
    const pesanInput = document.getElementById("pesan");   

    const namaError = document.getElementById("namaError");
    const emailError = document.getElementById("emailError");
    const pesanError = document.getElementById("pesanError");
    const pesanSukses = document.getElementById("pesanSukses");

    clearErrors();

    let isValid = true;

    if (namaInput.value == "") {
        namaError.textContent = "Nama tidak boleh kosong";
        namaInput.classList.add("border-error");
        isValid = false;
    }

    if (emailInput.value == "") {
        emailError.textContent = "Email tidak boleh kosong";
        emailInput.classList.add("border-error");
        isValid = false;
    }

    if (pesanInput.value == "") {
        pesanError.textContent = "Pesan tidak boleh kosong";
        pesanInput.classList.add("border-error");
        isValid = false;
    }

    if (isValid ==  true) {
        pesanSukses.textContent = "Pesan berhasil dikirim!";
        Form.reset();
    }

    function clearErrors() {
        namaError.textContent = "";
        emailError.textContent = "";
        pesanError.textContent = "";
        pesanSukses.textContent = "";
        namaInput.classList.remove("border-error");
        emailInput.classList.remove("border-error");
        pesanInput.classList.remove("border-error");
    }
});