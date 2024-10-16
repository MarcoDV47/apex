const button = document.getElementById("add");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const table = document.querySelector("table");
const formButton = document.querySelector("form button");
button.addEventListener("click", () => {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    button.classList.add("hidden");
});
formButton.addEventListener("click", () => {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    button.classList.remove("hidden");
});

let HTML = `
    <thead>
        <tr>
            <th>Item</th>
            <th>Quantidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Garrafa água 500ml</td>
            <td>4000</td>
        </tr>
        <tr>
            <td>Cobertor</td>
            <td>300</td>
        </tr>
`

table.innerHTML = HTML;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    HTML += `<tr>`;

    // Caso o usuário não preencha corretamente o formulário dará erro pois não implementamos verificação

    inputs.forEach(e => {
        HTML += `<td>${e.value}</td>`;
        e.value = "";
    });
    HTML += `</tr>`;
    console.log(HTML);
    table.innerHTML = HTML;
})