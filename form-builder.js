import { Form } from "./form.js";

//Esta clase se encargará de construir un objeto de tipo Form o Formulario
export class FormBuilder {

    constructor() {
        this.reset();
    }

    reset() {
        this.action = '';
        this.elementos = [];
    }

    setAcction(action) {
        this.action = action;
        return this;
    }

    setTex(name, text) {
        this.elementos.push({
            name: name,
            text: text,
            type: 'text'
        });
        return this;
    }

    setEmail(name, text) {
        this.elementos.push({
            name: name,
            text: text,
            type: 'email'
        });
        return this;
    }

    setCheckBox(name, text) {
        this.elementos.push({
            name: name,
            text: text,
            type: 'checkbox'
        });
        return this;
    }

    setColor(name, text) {
        this.elementos.push({
            name: name,
            text: text,
            type: 'color'
        });
        return this;
    }

    build() {
        //Creamos un objeto de tipo Form y le enviamos las propiedades ya seteadas
        const form = new Form(this.elementos, this.action);
        this.reset();
        return form;
    }
}