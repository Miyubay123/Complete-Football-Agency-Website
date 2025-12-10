const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // remove active classes
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // activate clicked tab and corresponding content
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});
