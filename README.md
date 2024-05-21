# Training Date
<p>"Training Date" es una plataforma en línea que simplifica la conexión entre entrenadores personales y usuarios, brindando una experiencia integrada para la planificación, reserva y pago de clases privadas de entrenamiento físico. Con una interfaz intuitiva y fácil de usar, "Training Date" facilita la organización de sesiones de entrenamiento personalizadas.</p>

## Características Principales
<p>La plataforma "Training Date" se divide en dos partes distintas pero igualmente importantes: la interfaz del entrenador y la interfaz del usuario.</p>

<h4>Interfaz Entrenador:</h4>
<ul>
  <li><strong>Registro en la aplicación:</strong> Los entrenadores pueden registrarse en la aplicación y confirmar su registro a través de un correo electrónico.</li>
  <li><strong>Registro especialización:</strong> Antes de poder empezar a crear sus primeras clases, el entrenador deberá confirmar sus estudios o certificados que le permiten ejercer los entrenamientos, eligiendo entre las disciplinas disponibles en la aplicación.</li>
  <li><strong>Confirmación de especialización:</strong> Una vez enviada la especialización, esta será revisada por los administradores de la página, y una vez verificada la veracidad de esta, se confirmará el     resultado de la revisión por correo electrónico, ya sea que esté confirmada o rechazada.</li>
  <li><strong>Creación de clases:</strong> Una vez confirmada la especialización, podrás empezar a crear las clases insertando la información, que incluye dirección, cantidad de alumnos, precio, etc.</li>
  <li><strong>Edición del perfil:</strong> Podrás editar los datos de tu perfil.</li>
  <li> <strong>Clases:</strong> Podrás ver tus clases creadas. Esto está dividido en clases pasadas y clases futuras para una mejor organización.</li>
</ul>

<h4>Interfaz Usuario:</h4>
<ul>
  <li><strong>Registro en la aplicación:</strong> Los usuarios pueden registrarse en la aplicación y confirmar su registro a través de un correo electrónico.</li>
  <li><strong>Edición del perfil:</strong> Podrás editar los datos de tu perfil.</li>
  <li><strong>Clases disponibles:</strong> El usuario podrá ver las clases disponibles y podrá filtrarlas para buscar la clase que mejor se adapte a sus condiciones físicas y al entrenamiento que está buscando.</li>
  <li><strong>Favoritos:</strong> Podrá poner las clases que más le interesan en favoritos y proceder al pago directamente desde aquí.</li>
  <li><strong>Pago:</strong> Una vez elegida la clase, el usuario podrá pagarla a través de la app.</li>
  <li><strong>Clases Reservadas:</strong> El usuario podrá ver las clases reservadas y tener un historial de las clases pasadas.</li>
  <li><strong>Especializaciones disponibles:</strong> Si tienes alguna duda respecto a las especializaciones de un entrenamiento, podrás revisar detalladamente cada una de las especializaciones disponibles en la app.</li>
</ul>

## Tecnologías y bibliotecas Utilizadas
<h4>Frontend</h4>
<ul>
  <li><strong>React:</strong> React es una biblioteca de JavaScript utilizada en "Training Date" para crear una interfaz de usuario interactiva y dinámica. Permite construir componentes reutilizables que gestionan eficientemente el estado de la aplicación y se actualizan de manera rápida cuando cambian los datos.</li>
  <li><strong>React Router:</strong> React Router es una biblioteca de enrutamiento utilizada en "Training Date" para gestionar la navegación dentro de la aplicación. Permite definir rutas y asociar componentes específicos a cada ruta, lo que facilita la creación de una experiencia de navegación fluida y dinámica para los usuarios. Con React Router, podemos controlar la visualización de diferentes componentes en función de la URL actual del navegador, lo que permite crear una navegación basada en el estado de la aplicación y mejorar la usabilidad del sitio.</li>
  <li><strong>React-Bootstrap:</strong> React-Bootstrap es una extensión de Bootstrap adaptada para trabajar con React. En "Training Date", React-Bootstrap se utiliza para diseñar y estilizar los elementos de la interfaz de usuario de manera coherente, siguiendo las prácticas de diseño de Bootstrap y facilitando la creación de una experiencia de usuario atractiva y consistente.</li>
  <li><strong>Swiper:</strong> Swiper es una biblioteca de JavaScript que proporciona una experiencia de deslizamiento táctil suave. En "Training Date", Swiper se emplea para crear y gestionar elementos deslizantes, como carruseles de imágenes, que permiten a los usuarios navegar de manera intuitiva a través de contenido relevante.</li>
  <li><strong>Bootswatch:</strong> Bootswatch es una colección de temas para Bootstrap que permite personalizar la apariencia visual de una aplicación. En "Training Date", Bootswatch se utiliza para seleccionar un tema de estilo que refleje la identidad de la marca y proporcione una experiencia de usuario atractiva y coherente en toda la aplicación.</li>
  <li><strong>CSS:</strong> CSS es un lenguaje utilizado para definir la presentación y el diseño de documentos HTML. En "Training Date", CSS se utiliza para complementar las funcionalidades proporcionadas por React y Bootstrap, permitiendo personalizar aún más la apariencia de la interfaz de usuario y garantizar una experiencia de usuario única y atractiva.</li>
</ul>

<h4>Backend</h4>
<ul>
 <li><strong>Python:</strong> En "Training Date", Python es el lenguaje de programación utilizado en el backend para implementar la lógica de negocio y el manejo de datos. Con su sintaxis clara y legible, Python permite desarrollar el backend de manera eficiente y escalable.</li>
  <li><strong>Flask:</strong> Flask es un framework de Python utilizado en "Training Date" para construir aplicaciones web. Es minimalista y flexible, proporciona las herramientas necesarias para crear endpoints API y gestionar las solicitudes de los clientes.</li>
  <li><strong>Flask-Mail:</strong> Flask-Mail es una extensión de Flask que facilita el envío de correos electrónicos desde aplicaciones Flask. En "Training Date", se utiliza para enviar notificaciones por correo electrónico, como confirmaciones de registros.</li>
  <li><strong>Flask-SqlAlchemy:</strong> Flask-SqlAlchemy es una extensión de Flask que proporciona una integración con SQLAlchemy, una biblioteca de Python para trabajar con bases de datos relacionales. En "Training Date", se utiliza para interactuar con la base de datos y realizar operaciones como la creación, lectura, actualización y eliminación de datos.</li>
  <li><strong>flask_bcrypt:</strong> flask_bcrypt es una extensión de Flask que facilita el hashing de contraseñas en aplicaciones Flask. Se utiliza en "Training Date" para garantizar la seguridad de las contraseñas de los usuarios mediante el hashing y la comparación segura de contraseñas almacenadas en la base de datos.</li>
  <li><strong>flask_jwt_extended:</strong> flask_jwt_extended es una extensión de Flask que proporciona soporte para tokens JWT (JSON Web Tokens) en aplicaciones Flask. En "Training Date", se utiliza para autenticar y autorizar las solicitudes de los usuarios mediante el uso de tokens JWT, garantizando la seguridad de la aplicación.</li>
  <li><strong>itsdangerous:</strong> itsdangerous es una biblioteca de Python utilizada en Flask para generar y verificar tokens de seguridad y firmas. En "Training Date", se utiliza para generar tokens seguros que se utilizan en la autenticación de usuarios y en la protección contra ataques CSRF (Cross-Site Request Forgery).</li>
  <li><strong>stripe:</strong> Stripe es una plataforma de pagos en línea utilizada en "Training Date" para procesar pagos de manera segura y eficiente. Se integra con Flask para gestionar transacciones financieras, incluyendo el cobro de clases reservadas.</li>
  <li><strong>Cloudinary:</strong> Cloudinary es un servicio en la nube utilizado en "Training Date" para almacenar y gestionar imágenes de forma eficiente. Se utiliza para cargar la documentación de los entrenadores al momento de enviar la certificación.</li>
  <li><strong>googlemaps:</strong> Google Maps es una API utilizada en "Training Date" para integrar funcionalidades de mapas en la aplicación. Se utiliza para proporcionar información sobre ubicaciones de entrenamiento y ofrecer una experiencia de usuario enriquecida y geolocalizada.</li>
  <li><strong>PostgreSQL:</strong> "Training Date" utiliza PostgreSQL como su sistema de gestión de bases de datos relacional. PostgreSQL es una opción popular para aplicaciones web debido a su robustez, escalabilidad y capacidad para manejar grandes volúmenes de datos. Se integra con Flask-SqlAlchemy para interactuar con la base de datos y almacenar la información de usuarios, clases, reservas, y más.</li>
</ul>

### 1) Installation:

> If you use Github Codespaces (recommended) or Gitpod this template will already come with Python, Node and the Posgres Database installed. If you are working locally make sure to install Python 3.10, Node 

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

> Note: Codespaces users can connect to psql by typing: `psql -h localhost -U gitpod example`

### Undo a migration

You are also able to undo a migration by running

```sh
$ pipenv run downgrade
```

### Backend Populate Table Users

To insert test users in the database execute the following command:

```sh
$ flask insert-test-users 5
```

And you will see the following message:

```
  Creating test users
  test_user1@test.com created.
  test_user2@test.com created.
  test_user3@test.com created.
  test_user4@test.com created.
  test_user5@test.com created.
  Users created successfully!
```

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`
