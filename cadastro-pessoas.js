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
        <th>Nome</th>
        <th>Idade</th>
        <th>Data Nascimento</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>CPF</th>
        <th>Data de Chegada</th>
        <th>Data Saída</th>
        <th>Categoria</th>
    </tr>
            </thead >
    <tbody>
        <tr>
            <td>Alfredo Amado</td>
            <td>24</td>
            <td>15/10/2000</td>
            <td>alfredo.amado@gmail.com</td>
            <td>(49)99822-9214</td>
            <td>072.195.095-69</td>
            <td>10/10/2024</td>
            <td>-</td>
            <td>Voluntáro</td>
        </tr>
        <tr>
            <td>Zélia de Souza</td>
            <td>70</td>
            <td>10/10/1954</td>
            <td>zelia@yahoo.com.br</td>
            <td>(48)99988-9142</td>
            <td>015.120.168-15</td>
            <td>10/05/2024</td>
            <td>-</td>
            <td>Abrigado</td>
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