
# Clientes de un Banco (Strategy con Herencia)

Ejercicio que muestra cómo funciona un strategy con herencia en ECMAScript 6, en forma muy similar a otros lenguajes "basados en clases". 

## Dominio

Tenemos un cliente de un banco que tiene tres formas posibles de calcular el monto máximo que le podemos prestar

* común: el 30% de sus ingresos
* especial: el 30% de sus ingresos + 2000
* de cobro dudoso: 100 si deben más de 5000 ó el 30% de sus ingresos en caso contrario

Todos los algoritmos de cálculo dependen del "30% de sus ingresos" por eso se definen en una superclase abstracta.
La implementación puede verse en el archivo [clientes](src/clientes.js).

## Cómo se evalúa

El proyecto viene con tests hechos en [Jasmine](https://jasmine.github.io/). Para facilitar la introducción al lector ya están copiados en el presente repositorio. Para correr los tests

* Clonar el proyecto (o descargarlo como zip)

```bash
# git clone https://github.com/uqbar-project/clientesDecorator-es6
```

* Abrir el archivo [SpecRunner.html](SpecRunner.html) en un navegador
* Eso corre todos los tests definidos en la carpeta spec.

