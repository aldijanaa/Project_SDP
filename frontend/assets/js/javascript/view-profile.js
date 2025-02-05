document.getElementById("userDropdown").addEventListener("click", function () {
    document.getElementById("dropdownMenu").classList.toggle("show");
});

window.onclick = function (event) {
    if (!event.target.matches('#userDropdown') && !event.target.matches('.user-profile img')) {
        document.getElementById("dropdownMenu").classList.remove("show");
    }
};
