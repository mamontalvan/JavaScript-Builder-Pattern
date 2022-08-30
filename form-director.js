//Es una clase que va a tener un objeto del tipo Builder.
export class FormDirector {

    constructor(formBuilder) {
        this.setBuilder(formBuilder)
    }

    setBuilder(formBuilder) {
        this.formBuilder = formBuilder;
    }

    //Creamos un recetario para crear un formulario para persona
    //Se define que elementos y en qué orden van a estar los mismos dentro de este tipo de formulario
    createFormPersona() {
        this.formBuilder.reset();
        this.formBuilder
            .setTex('lasttName', 'Apellido')
            .setCheckBox('drinker', 'Eres Bebedor')
    }

    //Creamos un recetario para crear otro tipo de  formulario
    createContactForm() {

        this.formBuilder.reset();
        this.formBuilder.setEmail('nameEmail', 'Email del Contacto');

    }

}