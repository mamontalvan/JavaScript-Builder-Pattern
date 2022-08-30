//Esta clase representa un Formulario HTML
export class Form {

    //Primer parámetro: los elementos que tendrá el formulario
    //Segundo parámetro: hacia donde se van a enviar los datos del formulario
    constructor(elementos, action) {
        this.elementos = elementos;
        this.action = action;
    }

    //Ojo, estos métodos no son parte del patrón builder
    //Devuelve el formulario
    getContent() {
            return `<form method="post" action="${this.action}">
                    ${this.elementos.reduce((ac, elemento)=>{
                        return `${ac} <div>
                                    ${ this.getLabel(elemento) }
                                    ${ this.getInput(elemento) }
                                </div>`;
                             },'')}
                    </br>
                    <button type="submit" name="submit">Enviar</button>
                    </form>`;
    }

    getLabel(elemento) {
        return `<label>${elemento.text}</label>`;
    }

    getInput(elemento) {
        return `<input type=${elemento.type} id="${elemento.name}" name="${elemento.name}"`;
    }
    
}