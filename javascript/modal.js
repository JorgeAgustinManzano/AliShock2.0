
var arregloDatos = new Vue({

    el: '#app-modal',

    data: {
        datos: [
            {codigo:"cod1",
            imagen:"img/img_servicios/alisado-capilar.jpg",
            nombre:"Alisado Definitivo",
            descripcion: "El alisado capilar es una técnica que permite arreglar la apariencia de tu cabello, controlando el frizz, y convertirlo de un cabello esponjoso a encrespado a uno muy liso. El alisado capilar es una técnica que permite arreglar la apariencia de tu cabello, controlando el frizz, y convertirlo de un cabello esponjoso a encrespado a uno muy liso."
            },
            {codigo:"cod2",
            imagen:"img/img_servicios/botox-capilar.jpg",
            nombre:"Botox Capilar",
            descripcion: "El botox capilar es un tipo de tratamiento intensivo que hidrata y le da brillo al cabello, dejándolo más bonito, un poco más liso, sin frizz."
            },
            {codigo:"cod3",
            imagen:"img/img_servicios/shock-capilar.jpg",
            nombre:"Shock de Keratina",
            descripcion: "El shock de Keratina es un tratamiento reestructurante de larga duración. Gracias a sus componentes de keratina, siliconas, ceramidas y aceites naturales, restaura el cabello en profundidad desde la parte interna hacia la externa. Se puede aplicar sobre todo tipo de cabello: con coloración, reflejos o decolorados."
            },
            {codigo:"cod4",
            imagen:"img/img_servicios/nutricion-capilar.jpg",
            nombre:"Nutriciones",
            descripcion: "Una nutrición capilar busca reponer los nutrientes grasos o lípidos del pelo. La porosidad, el exceso de volumen y el frizz aparecen en los cabellos carentes de una nutrición. Un tratamiento de nutrición capilar manejado adecuadamente proporciona un cabello brillante, con peso y flexibilidad."
            },
            {codigo:"cod5",
            imagen:"img/img_servicios/corte-de-puntas.jpg",
            nombre:"Corte de Puntas",
            descripcion: "Split Ender Pro, con esta tecnica se Remueve de forma segura las puntas secas, dañadas, quemadas, quebradizas y abiertas en minutos. Elimina las puntas sin afectar el largo del pelo.Es más Fácil, Rápido y Seguro que la tijera.."
            },
            {codigo:"cod6",
            imagen:"img/img_servicios/tintura-capilar.jpg",
            nombre:"Tintura Capilar",
            descripcion: "La tintura capilar, o tinte de cabello, es una preparación química que se utiliza para cambiar el color del cabello de una persona. La tintura para cabello se utiliza para cubrir las canas dado que las canas son un signo de edad avanzada."
            },
        ],
        titulo:'',
        descripcion:'',
    },
    
    methods:{
        cargarTexto (pos) {
            this.titulo = this.datos[pos].nombre
            this.descripcion = this.datos[pos].descripcion
        },
        imagenModal (pos){
            return this.datos[pos].imagen
        }
    }

})

var recibeClick = new Vue({
    el:"#clickServicios",
    methods:{
        abrirModal (pos) {
            arregloDatos.cargarTexto(pos)
            imagenes.cargarImagen(pos)
        }
    }
})

var imagenes = new Vue({
    el:"#imagen-modal",
    data:{
        imagenM:'',
    }, 
    methods:{
        cargarImagen (pos) {
            this.imagenM = arregloDatos.imagenModal(pos)
        }
    }
})

