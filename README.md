
# Clientes de un Banco (Strategy con Herencia)

Ejercicio que muestra cómo funciona un strategy con herencia en ECMAScript 6, en forma muy similar a otros lenguajes "basados en clases". 

<img src="img/customer.png" height="100" width="100"/>

## Dominio

Tenemos un cliente de un banco que tiene tres formas posibles de calcular el monto máximo que le podemos prestar

* común: el 30% de sus ingresos
* especial: el 30% de sus ingresos + 2000
* de cobro dudoso: 100 si deben más de 5000 ó el 30% de sus ingresos en caso contrario

Todos los algoritmos de cálculo dependen del "30% de sus ingresos" por eso se definen en una superclase abstracta.
La implementación puede verse en el archivo [clientes](src/clientes.js).

# Cómo se evalúa

## En un browser

El proyecto viene con tests hechos en [Jasmine](https://jasmine.github.io/). Para facilitar la introducción al lector ya están copiados en el presente repositorio. Para correr los tests

* Clonar el proyecto (o descargarlo como zip)

```bash
# git clone https://github.com/uqbar-project/clientesHerencia-es6
```

* Abrir el archivo [SpecRunner.html](SpecRunner.html) en un navegador
* Eso corre todos los tests definidos en la carpeta spec.

## Mediante un script npm

Otra opción consiste en correr los tests mediante el script de npm desde la consola o el Git Bash

```bash
$ npm install
$ npm test
```

Los archivos de configuración que pueden mirar son:

- package.json: que contiene el script para instalar dependencias y ejecutar los tests de **Karma**
- karma.conf.js: la configuración de Karma para correr los tests contra un browser oculto llamado PhantomJS, que requiere transpilar los archivos fuente en ECMAScript6 a Javascript 5.

