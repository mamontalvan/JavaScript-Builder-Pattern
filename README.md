## Patrón Builder:
- Es un patrón de construcción de objetos complejos, es decir objetos que requieren mucha información o múltiples propiedades para su creación, por ejemplo: cuándo vemos un constructor con más de 20 parámetros ahí se puede aplicar Builder.
- Lo que hace Builder es separar el constructor en un conjunto de métodos encadenados, que se los puede  invocar a todos o sólo los que se requieran dependiendo de la construcción de su objeto. 
- Muchas veces el Builder se trabaja con un Director, para poder un atajo a la construcción que se quiere lograr sino sería muy tedioso.

### Ventajas:
- Crear objetos complejos con representaciones distintas de una manera muy limpia.
- Se puede aislar el código de construcción complejo de la lógica de negocio del objeto.

### Ejemplo:
- Para ejemplificar este patrón se han creado varios formularios por medio de Builder y se los renderiza en el index.html
