const revenues = [
    new Revenue('Salario', 2001000.00),
    new Revenue('Venta carro', 50000000.00),
];
const expenses = [
    new Expense('Pago renta de casa', 800000),
    new Expense('Ropa diciembre', 550000)
]

let runApp = () => {
    runHead();
}

let runHead = () => {
    this.assignValuesAndPercentages();
    loadRevenues();
    loadExpenses();

}

function assignValuesAndPercentages() {
    let budget = totalRevenues() - totalExpenses();
    let percentageExpenses = totalExpenses() / totalRevenues();
    document.getElementById('budget').innerHTML = formatValue(budget);
    document.getElementById('percentageExpenses').innerHTML = formPercentage(percentageExpenses);
    document.getElementById('totalRevenue').innerHTML = formatValue(totalRevenues());
    document.getElementById('totalExpense').innerHTML = formatValue(totalExpenses());
}

let totalRevenues = () => {
    let totalRevenue = 0;
    for (let revenue of revenues) {
        totalRevenue += revenue.value;
    }
    return totalRevenue;
}

let totalExpenses = () => {
    let totalExpense = 0;
    for (let expense of expenses) {
        totalExpense += expense.value;
    }
    return totalExpense;
}

const formatValue = (value) => {
    return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 });
}

const formPercentage = (value) => {
    return value.toLocaleString('es-CO', { style: 'percent', minimumFractionDigits: 2 })
}

const loadRevenues = () => {
    let revenueHTML = "";
    for (let revenue of revenues) {
        revenueHTML += createRevenueHTML(revenue);
    }
    document.getElementById('lista-ingresos').innerHTML = revenueHTML;
}

const createRevenueHTML = (revenue) => {
    return `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${revenue.description}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">+ ${formatValue(revenue.value)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onClick="deleteNevenue(${revenue.id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>`
}

const loadExpenses = () =>{
    let expenseHTML = "";
    for (let expense of expenses) {
        expenseHTML += createExpenseHTML(expense);
    }
    document.getElementById('lista-egresos').innerHTML = expenseHTML;
}

const createExpenseHTML = (expense) => {
    return `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion"> ${expense.description}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">- ${formatValue(expense.value)}</div>
      <div class="elemento_porcentaje"> ${formPercentage(expense.value / totalExpenses())}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onClick="deleteExpense(${expense.id})"></ion-icon>
        </button>
      </div>
    </div>
  </div>`
}

const deleteNevenue = (idRevenue)=>{
    let indexToDelete = revenues.findIndex(revenue => revenue.id === idRevenue);
    revenues.splice(indexToDelete,1);
    runHead();
}

const deleteExpense = (idExpense)=>{
    let indexToDelete = expenses.findIndex(expense => expense.id === idExpense);
    expenses.splice(indexToDelete,1);
    runHead();
}

const agregarDato = () =>{
    let form = document.forms['forma'];
    let description = form['descripcion'].value;
    let kind = form['tipo'].value;
    let value = form['valor'].value;
    let noneEmpty = description != '' && kind != '' && value != '';

    if(kind === '+' && noneEmpty){
        revenues.push(new Revenue(description,Number(value)));
    }else if(kind === '-' && noneEmpty){
        expenses.push(new Expense(description,Number(value)));
    }
    runHead();
}