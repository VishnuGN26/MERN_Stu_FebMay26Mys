const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addBtn");
const faqContainer = document.getElementById("faqContainer");
const error = document.getElementById("error");
const emptyMessage = document.getElementById("emptyMessage");

addBtn.addEventListener("click", function () {

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();

    if (question.length < 5) {
        error.textContent = "Question must be at least 5 characters.";
        return;
    }

    if (answer.length < 15) {
        error.textContent = "Answer must be at least 15 characters.";
        return;
    }

    error.textContent = "";

    emptyMessage.style.display = "none";

    const faq = document.createElement("div");
    faq.classList.add("faq");

    const heading = document.createElement("h4");
    heading.textContent = question;

    const paragraph = document.createElement("p");
    paragraph.textContent = answer;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", function () {
        faq.remove();

        if (faqContainer.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });

    faq.appendChild(heading);
    faq.appendChild(paragraph);
    faq.appendChild(deleteBtn);

    heading.insertAdjacentHTML(
        "beforeend",
        '<span class="badge">NEW</span>'
    );

    faqContainer.appendChild(faq);

    questionInput.value = "";
    answerInput.value = "";

});
