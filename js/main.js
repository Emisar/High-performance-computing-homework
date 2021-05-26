const TASK_CLASS = "task";
const SECTION_CLASS = "task-section";
const INPUT_FIELD_CLASS = "task-input-field";
const SUBMIT_BUTTON_CLASS = "task-input-button";
const TABLES_DIV_CLASS = "task-matrix-div";
const ANSWER_DIV_CLASS = "task-answer";

function showSection(section) {
    if (section.classList.contains("hide")) {
        section.classList.remove("hide");
    }
}

function hideSection(section) {
    if (!section.classList.contains("hide")) {
        section.classList.add("hide");
    }
}

function switchSection(section1, section2) {
    hideSection(section1);
    showSection(section2);
}

function createInputTable(n, m) {
    let options = {};

    // Добавляем заголовок матрицы
    options.title = "";

    // Добавляем элементы матрицы
    let table = [];
    for (let i = 0; i < n; i++) {
        table[i] = [];
        for (let j = 0; j < m; j++) {
            table[i][j] = {
                elemType: "td",
                contentType: INPUT_TYPE
            }
        }
    }

    options.table = table;

    return createTable(options);
}

function createInputTable(n) {
    let options = {};

    // Добавляем заголовок матрицы
    options.title = "";

    // Добавляем элементы матрицы
    let table = [];
    for (let i = 0; i < n; i++) {
        table[i] = [];
        for (let j = 0; j < 2; j++) {
            table[i][j] = {
                elemType: "td",
                contentType: INPUT_TYPE
            }
        }
    }

    options.table = table;

    return createTable(options);
}

window.onload = () => {
    const tasks = document.querySelectorAll("." + TASK_CLASS);

    task1(tasks[0]);
    task2(tasks[1]);
    task3(tasks[2]);
    task4(tasks[3]);
    task5(tasks[4]);
    task6(tasks[5]);
    task7(tasks[6]);
}