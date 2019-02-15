window.onload = function () {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'El sexto sentido',
            precio: 1,
            descripcion: 'El psicólogo Malcolm Crowe es un profesional de indudable talento. Una noche, mientras pasa una agradable velada con su esposa Anna, uno de sus pacientes, Vincent Gray, hace una inesperada visita a la casa de Crowe, y antes de suicidarse ante sus ojos, le dispara. Meses más tarde, el psicólogo está aún convaleciente de sus heridas físicas, aunque las psicológicas serán más difíciles de curar, ya que ha perdido la confianza en sí mismo, y empieza a dudar sobre su capacidad profesional, dado el fracaso obtenido con el caso de Gray. Pero su siguiente caso es el de Cole Sear, un niño de ocho años que, tras el divorcio de su padres, vive con su madre Lynn, encerrado en su propio mundo y obsesionado con un terrible y oscuro secreto: ve fanstasmas, es decir, gente muerta en extrañas y violentas circunstancias que acude a él en busca de ayuda. Sólo el doctor Crowe será capaz de ayudarle y descubrir la terrible verdad sobre los poderes sobrenaturales de Cole, y así, de paso, será la oportunidad de resarcirse del error cometido con Gray. Aunque las consecuencias, tanto para el paciente como para el terapeuta, acabarán produciendo un estremecimiento que les revelará misterios angustiosos e inexplicables.',
            src: '/img/ElSextoSentido.png'

        },
        {
            id: 2,
            nombre: 'Pulp Fiction',
            precio: 1.2,
            descripcion: 'Jules Winnfield y Vincent Vega son dos asesinos a sueldo que trabajan a las órdenes del temido gángster Marsellus Wallace, quien les encarga la importante misión de recuperar su misterioso maletín, que ha sido robado. Ahí empezarán todos sus problemas. Los dos criminales son polos opuestos que deberán trabajar juntos para cumplir su cometido. De forma paralela, Vincent tendrá que hacerse cargo de Mia Wallace, la peculiar novia de su jefe, a petición del mismo, mientras él pasa unos días fuera de la ciudad. Su compañero Jules le recomienda que vaya con cautela, pues la atractiva mujer le puede meter en problemas. Mientras, el boxeador Butch Coolidge debe perder una importante pelea, pues ha sido sobornado por Wallace para participar en este combate amañado, y la pareja formada por Pumpkin/Ringo y Honey Bunny/Yolanda decidirá atracar un establecimiento debido a su lamentable situación laboral. Esta película de culto escrita y dirigida por Quentin Tarantino se convirtió en todo un icono de la década de los noventa y en uno de los filmes mejor valorados de la historia. Además de los mencionados, cuenta en su reparto con Harvey Keitel, Maria de Medeiros, Eric Stoltz, Rosanna Arquette y Christopher Walken. ',
            src: '/img/PulpFiction.png'
        },
        {
            id: 3,
            nombre: 'Todo Sobre Mi Madre',
            precio: 2.1,
            descripcion: 'Manuela es una enfermera que vive sola con su hijo Esteban, a quien adora. Esteban es muy cinéfilo y le encanta ver películas en la compañía de su madre, sobre todo Eva al desnudo (o Todo sobre Eva, como se titularía en una traducción más fiel del inglés). Para el día del cumpleaños de su madre, Esteban decide invitarla a una noche de teatro viendo Un tranvía llamado deseo. Los dos adoran la obra, y a la salida del lugar se encuentran con Huma Rojo, la actriz protagonista. Esteban no se lo piensa dos veces y corre tras ella para conseguir su autógrafo. Cruza la calle a toda velocidad y, en ese momento, un coche lo atropella. Manuela presencia, de este modo, la muerte de su propio hijo, pérdida de la que no podrá recuperarse en toda su vida. Poco tiempo después, aún loca de dolor, Manuela viaja a Barcelona en busca del padre de su hijo, una búsqueda que no será fácil, ni tampoco carente de aún más dolores. La película que consagró al director manchego Pedro Almodóvar, no sólo a nivel patrio sino también internacional. César y Oscar en el año 2000 a la mejor película extranjera. ',
            src: '/img/TodoSobreMiMadre.png'
        },
        {
            id: 4,
            nombre: '300',
            precio: 0.6,
            descripcion: 'Basada en la épica novela gráfica de Frank Miller, 300 narra la antigua Batalla de Termópilas, en la que el rey Leónidas (Gerard Butler), junto con 300 espartanos, luchó a muerte contra el Emperador Jerjes y su gran ejército persa. Haciendo frente a insuperables adversidades, el valor y sacrificio de estos hombres inspiró a toda Grecia para unirse contra el enemigo persa, y así decir basta a esa situación en favor de la democracia.La película hace cobrar vida a la aclamada novela gráfica de Miller (Sin City) al combinar la acción real con fondos digitales que reproducen su marcada visión de este antiguo cuento histórico.',
            src: '/img/300.png'
        },
        {
            id: 4,
            nombre: 'El silencio de los corderos',
            precio: 0.6,
            descripcion: 'El FBI busca a "Buffalo Bill", un asesino en serie que mata a sus víctimas, todas adolescentes, después de prepararlas minuciosamente y arrancarles la piel. Para poder atraparlo recurren a Clarice Starling, una brillante licenciada universitaria, experta en conductas psicópatas, que aspira a formar parte del FBI. Siguiendo las instrucciones de su jefe, Jack Crawford, Clarice visita la cárcel de alta seguridad donde el gobierno mantiene encerrado al Dr. Hannibal Lecter, antiguo psicoanalista y asesino, dotado de una inteligencia superior a la normal. Su misión será intentar sacarle información sobre los patrones de conducta del asesino que están buscando.',
            src: '/img/ElSilencioDeLosCorderos.png'
        },{
            id: 4,
            nombre: 'Forrest Gump',
            precio: 0.6,
            descripcion: 'Forrest Gump (Tom Hanks) sufre desde pequeño un cierto retraso mental. A pesar de todo, gracias a su tenacidad y a su buen corazón será protagonista de acontecimientos cruciales de su país durante varias décadas. Mientras pasan por su vida multitud de cosas en su mente siempre está presente la bella Jenny (Robin Wright), su gran amor desde la infancia, que junto a su madre será la persona más importante en su vida.',
            src: '/img/ForrestGump.png'
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
            // Botones 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);

            let miNodoBoton2 = document.createElement('button');
            miNodoBoton2.classList.add('btn', 'btn-primary');
            miNodoBoton2.textContent = 'Leer Mas';
            miNodoBoton2.setAttribute('marcador', info['id']);
            miNodoBoton2.addEventListener('click', anyadirCarrito)
            // Insertamos
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoImg);
            miNodoCardBody.appendChild(miNodoDesc);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodoCardBody.appendChild(miNodoBoton2);
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
        // Generamos los Nodos a partir de carrit 
  


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

   //Leer mas
   $(document).on('ready',function(){
    $("#ocultar").click(function(event){
    event.preventDefault();
    $("#oculto").hide("slow");
    $("#mostrar").show(1000);
    });

    $("#mostrar").click(function(event){
    event.preventDefault();
    $("#oculto").show(1000);
    $("#mostrar").hide("slow");
    });
    });

      
} 