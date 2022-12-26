class Data{
    #description;
    #value;

    constructor(description,value){
        this.#description = description;
        this.#value = value;
    }

    get description(){
        return this.#description;
    }

    set description(description){
        this.#description = description;
    }

    get value(){
        return this.#value;
    }

    set value(value){
        this.#value = value;
    }

}