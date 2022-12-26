const Revenues  = [
    new Revenue('Salario', 2000.00),
    new Revenue('Sale car', 10000.00),
];
const Expenses = [
    new Expense('House rent payment',550),
    new Expense('Clothes', 3550)
]

let runApp = () =>{
    runHead();
}

let runHead = () =>{
  this.assignValuesAndPercentages();
    
}

function assignValuesAndPercentages(){
    let budget = totalRevenues() - totalExpenses();
    let percentageExpenses = totalExpenses()/totalRevenues();
    document.getElementById('budget').innerHTML = formatValue(budget);
    document.getElementById('percentageExpenses').innerHTML = formPercentage(percentageExpenses);
    document.getElementById('totalRevenue').innerHTML = formatValue(totalRevenues());
    document.getElementById('totalExpense').innerHTML = formatValue(totalExpenses());
}

let totalRevenues = () =>{
    let totalRevenue = 0;
    for(let revenue of Revenues){
        totalRevenue += revenue.value;
    }
    return totalRevenue;
} 

let totalExpenses= () =>{
    let totalExpense = 0;
    for(let expense of Expenses){
        totalExpense += expense.value;
    }
    return totalExpense;
} 

const formatValue = (value) =>{
    return value.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigits:2});
}

const formPercentage = (value) =>{
    return value.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2})
}