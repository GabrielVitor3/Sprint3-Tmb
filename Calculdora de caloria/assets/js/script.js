"Tmb" [
  {
      "id": 1,
      "Sexo": "Masculino",
      "Idade": "19",
      "Altura": "177",
      "AtividadeFisica": "Atividade intensa",
  },
  {
    "id": 2,
    "Sexo": "Masculino",
    "Idade": "27",
    "Altura": "187",
    "AtividadeFisica": "Sedentario",
  },
  {
    "id": 3,
    "Sexo": "Feminino",
    "Idade": "57",
    "Altura": "156",
    "AtividadeFisica": "Atividade muito intensa",
  }
]


const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();

  const gender = getSelectedValue('gender');
  const age = getInputNumberValue('age');
  const weight = getInputNumberValue('weight');
  const height = getInputNumberValue('height');
  const activityLevel = getSelectedValue('activity_level');

  const tmb = Math.round(
    gender === 'female'
    ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 *age)) //if (cálculo pronto)
    : (66 + (13.7 * weight) + (5 * height) - (6.8 *age)) //else
  );

  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 600;
  const gainWeight = maintenance + 500; 
  const setWeight = maintenance;
  const layout = `
    <h2>Sua taxa metabolica basal:</h2>

    <div class="result-content">
      <ul>
        <li>
          Sua taxa metabolica basal sem fazer nada ao dia <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Sua taxa metabolica basal com exercícios ao dia <strong>${setWeight} calorias</strong>.
        </li>
        <li>
          Para manter você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganho de massa você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
  `;

  const result = document.getElementById('result');

  result.innerHTML = layout; //repassando que o layout deve ser exibido na tela
}

function getSelectedValue(id) {
  const select = document.getElementById(id);

  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}