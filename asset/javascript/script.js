function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

function kirimForm() {
    const nama = document.getElementById("nama").value.trim();
    const nik = document.getElementById("nik").value.trim();
    const jalur = document.getElementById("jalur").value;
    const form = document.getElementById("ppdbForm");

    if (nama === "" || nik === "" || jalur === "") {
        showToast("Semua data wajib diisi!");
        return;
    }

    if (nik.length !== 16) {
        showToast("NIK harus 16 digit!");
        return;
    }

    showToast("Pendaftaran berhasil dikirim!");
    form.reset();
}