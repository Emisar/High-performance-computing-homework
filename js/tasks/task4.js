function task4(task) {
    const ERROR_MESSAGE = "Размер матрицы не задан!";
    const ANSWER = "Количество ребер: ";

    // Берем все разделы
    const sections = task.querySelectorAll("." + SECTION_CLASS);
    // Берем кнопки из разделов
    const buttons = [
        sections[0].querySelector("." + SUBMIT_BUTTON_CLASS),
        sections[1].querySelector("." + SUBMIT_BUTTON_CLASS)
    ];

    // Добавляем событие "Создание таблицы для ввода значений" на кнопку из первого раздела
    buttons[0].addEventListener("click", () => {
        // Берем поля ввода параметров будущей таблицы
        const input = sections[0].querySelector("." + INPUT_FIELD_CLASS);
        // Считываем данные с поля ввода
        const n = input.value - 0;    // Кол-во переменных в уравнениях
        // Проверка на пустой ввод
        if (n == 0) { alert(ERROR_MESSAGE); return; }
        // Создаем таблицу для ввода данных
        const table = createInputTable(n, n);
        sections[1].querySelector("." + TABLES_DIV_CLASS).appendChild(table);
        // Переключаем раздел
        showSection(sections[1])
    });

    // Добавляем событие "Проверка матрицы" на кнопку из второго раздела
    buttons[1].addEventListener("click", () => {
        // Берем таблицу с введенными данными
        const table = sections[1].querySelector("." + TABLES_DIV_CLASS).children[0];
        // Переводим таблицу в матрицу
        const matrix = tableToMatrix(table);
        // Проверяем матрицу по условию задачи
        const answer = ANSWER + checkMatrix(matrix);
        sections[2].querySelector("." + ANSWER_DIV_CLASS).innerHTML = answer;
        // Переключаем раздел
        showSection(sections[2])
    });

    function checkMatrix(matrix) {
        // Проверяем размер матрицы
        if (matrix.length <= 1) return false;
        // Запоминаем высоту и ширину матрицы
        const height = matrix.length;
        const width = matrix[0].length;
        // Счетчик ребер
        let cntr = 0;

        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const elem = matrix[i][j];
                cntr += elem;
            }
        }
    
        return cntr;
    }
}