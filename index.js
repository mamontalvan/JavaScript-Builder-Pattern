import { FormBuilder } from "./form-builder.js";
import { FormDirector } from "./form-director.js";

//LLamamos a la clase que se encargará de construir el formulario
const builderFormulario = new FormBuilder();

//Construimos un primer formulario Persona, que tendrá dos cajas de texto: Nombre y Apellido
const formularioPersona = builderFormulario
    .setAcction('algo.php')
    .setTex('firstName', 'Nombre')
    .setTex('lasttName', 'Apellido')
    .build();

//Agregamos el formulario al DIV
form1.innerHTML = formularioPersona.getContent();

//Construimos un segundo formulario, que tendrá 
const formularioEmailPersona = builderFormulario.setAcction('validaEmail.php')
    .setColor('colorEmail', 'Escoja un color')
    .setEmail('email', 'Correo Electrónico')
    .build();

//Agregamos el formulario construido a un segundo DIV
form2.innerHTML = formularioEmailPersona.getContent();

//Ahora vamos a emplear DIRECTOR para crear nuestros formularios personalizados
const director = new FormDirector(builderFormulario);
//Creamos un primer tipo de formulario desde Director
director.createFormPersona();

//Aqui lo construye el formulario en base al recetario anterior
form3.innerHTML = builderFormulario.build().getContent();

//Creamos otro tipo de formulario
director.createContactForm();

//Aqui lo construye el formulario en base al recetario anterior
form4.innerHTML = builderFormulario.build().getContent();