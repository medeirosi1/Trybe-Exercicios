let estados = [
'AC - Acre',
'AL - Alagoas',
'AP - Amapá',
'AM - Amazonas',
'BA - Bahia',
'CE - Ceará',
'DF - Distrito Federal',
'ES - Espírito Santo',
'GO - Goías',
'MA - Maranhão',
'MT - Mato Grosso',
'MS - Mato Grosso do Sul',
'MG - Minas Gerais',
'PA - Pará',
'PB - Paraíba',
'PR - Paraná',
'PE - Pernambuco',
'PI - Piauí',
'RJ - Rio de Janeiro',
'RN - Rio Grande do Norte',
'RS - Rio Grande do Sul',
'RO - Rondônia',
'RR - Roraíma',
'SC - Santa Catarina',
'SP - São Paulo',
'SE - Sergipe',
'TO - Tocantins'
];

for (let i = 0; i < estados.length; i += 1) {
const select = document.getElementById("states");
const option = document.createElement("option");
option.innerText = estados[i];
select.appendChild(option);
}



