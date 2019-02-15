window.onload = function () {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'El sexto sentido',
            precio: 1,
            descripcion: 'puto',
            src: '/img/1.jpg'

        },
        {
            id: 2,
            nombre: 'Pulp Fiction',
            precio: 1.2,
            descripcion: 'el que',
            src: '/img/1.jpg'
        },
        {
            id: 3,
            nombre: 'Todo Sobre Mi Madre',
            precio: 2.1,
            descripcion: 'lo',
            src: '/img/1.jpg'
        },
        {
            id: 4,
            nombre: '300',
            precio: 0.6,
            descripcion: 'lea',
            src: '/img/1.jpg'
        },
        {
            id: 4,
            nombre: 'El silencio de los corderos',
            precio: 0.6,
            descripcion: 'lea',
            src: '/img/1.jpg'
        },{
            id: 4,
            nombre: 'Forrest Gump',
            precio: 0.6,
            descripcion: 'lea',
            src: '/img/1.jpg'
        }

    ]
    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    // Funciones
    function renderItems () {
        for (let info of baseDeDatos) {
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-4');
            // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            // Imagen
            let miNodoImg = document.createElement('img');
            miNodoImg.classList.add('img-fluid');
            miNodoImg.setAttribute('src', info['src']);
            miNodoImg.textContent = info['src'];
            // Descripcion
            let miNodoDesc = document.createElement('p');
            miNodoDesc.classList.add('card-text');
            miNodoDesc.textContent = info['descripcion'];
            // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = 'Precio: ' + info['precio'] + '€';
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoImg);
            miNodoCardBody.appendChild(miNodoDesc);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }
    function anyadirCarrito () {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();

    }

    function renderizarCarrito () {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Generamos los Nodos a partir de carrito
        carrito.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right');
            miNodo.textContent = `${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
            // Boton de borrar
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.setAttribute('posicion', indice);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito () {
        // Obtenemos la posicion que hay en el boton pulsado
        let posicion = this.getAttribute('posicion');
        // Borramos la posicion que nos interesa
        carrito.splice(posicion, 1);
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal () {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (let item of carrito) {
            // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
        let totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }
    // Eventos

    // Inicio
    renderItems();

    //Modal carrito
    $("#myBtn-c").click(function(){
        $("#myModal-c").modal();
      });

      //Pago paypal
      paypal.Button.render({

        env: 'sandbox', // sandbox | production
        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create
        client: {
            sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
            production: '<insert production client id>'
        },
        // Show the buyer a 'Pay Now' button in the checkout flow
        commit: true,
        // payment() is called when the button is clicked
        payment: function(data, actions) {
            // Make a call to the REST api to create the payment
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '0.01', currency: 'USD' }
                        }
                    ]
                }
            });
        },
        // onAuthorize() is called when the buyer approves the payment
        onAuthorize: function(data, actions) {
            // Make a call to the REST api to execute the payment
            return actions.payment.execute().then(function() {
                window.alert('Pago completado, su deuda a sido saldada');
            });
        }
    }, '#paypal-button-container');

    //Vaciar carrito
    $("#btn-v").click(function(){
        location.reload();
      });

      $(".card-body").click(function(){
        $(".img-fluid").slideUp();
      });
      

} 