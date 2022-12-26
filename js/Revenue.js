class Revenue extends Data{
    static contRevenues = 0;
    #id;

    constructor(description,value){
        super(description,value);
        this.#id = ++Revenue.contRevenues;        
    }

    get id(){
        return this.#id;
    }
}