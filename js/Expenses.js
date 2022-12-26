class Expense extends Data{
    static contExpenses = 0;
    #id;

    constructor(description,value){
        super(description,value);
        this.#id = ++Expense.contExpenses;        
    }

    get id(){
        return this.#id;
    }
}