
var imgC = [
    'img/gal_fotos/IMG-20200912-WA0008.jpg',
    'img/gal_fotos/IMG-20200912-WA0009.jpg',
    'img/gal_fotos/IMG-20200912-WA0010.jpg',
    'img/gal_fotos/IMG-20200912-WA0011.jpg',
    'img/gal_fotos/IMG-20200912-WA0012.jpg',
    'img/gal_fotos/IMG-20200912-WA0013.jpg',
    'img/gal_fotos/IMG-20200912-WA0014.jpg',
    'img/gal_fotos/IMG-20200912-WA0015.jpg',
    'img/gal_fotos/IMG-20200912-WA0001.jpg',
    'img/gal_fotos/IMG-20200912-WA0002.jpg',
    'img/gal_fotos/IMG-20200912-WA0003.jpg',
    'img/gal_fotos/IMG-20200912-WA0004.jpg',
    'img/gal_fotos/IMG-20200912-WA0005.jpg',
    'img/gal_fotos/IMG-20200912-WA0006.jpg'
]


let encabezado =
`<nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar color-nav">
        <div class="container">
            <img class="navbar-brand ml-3" src="img/logo redondo.png" width="40" alt=""><a class="navbar-brand" href="#">AliShock</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <!-- <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                    </li> -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Inicio
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush1" href="#seccion">Nosotros</a>
                        </div>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Recomendaciones</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Servicios
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="clickServicios">
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush"  @click="abrirModal(0)" href="#">Alisado Definitivo</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(1)" href="#">Botox Capilar</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(2)"href="#">Shock de Keratina</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(3)"href="#">Nutriciones</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(4)"href="#">Corte de Puntas</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush" @click="abrirModal(5)"href="#">Tintura Capilar</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Galeria
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Videos</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#modalPush2" href="#">Fotos</a>
                            <a class="dropdown-item" href="#">Otros</a>
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav nav-flex-icon">
                    <li class="nav-item mr-4">
                        <a id="ubicacion" href="#"><img src="img/como llegar.png" width="30" height="30"
                                title="Direccion/Como Llegar/Horarios"></a>
                    </li>
                    <!-- <li class="nav-item ml-3">
                        <a href="#"><img src="img/logo redondo.png" width="40" height="40"
                            title="Logo"></a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>`


let pieDePagina = 
`<footer class="page-footer font-small dark darken-3 ">
<div class="container">
    <div class="row">
        <div class="col-md-12 py-1">
            <div class="mb-2 flex-center">
                <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="footer-copyright text-center py-1">© 2020 Derechos Reservados:
    <a href="https://mdbootstrap.com/"> AliShock</a>
</div>
</footer>`
let modalServicios =
`<div class="modal fade bd-example-modal-lg" id="modalPush" tabindex="-1" role="dialog"
aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <!--Content-->
    <div class="modal-content">
        <!--Header-->
        <div class="modal-header">
            <p class="heading">AliShock - Servicios</p>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="white-text">&times;</span>
            </button>
        </div>

        <!--Body-->
        <div class="modal-body">

            <div class="row">
                <div class="col-5" id="imagen-modal">
                    <img :src = "imagenM" width="90%" alt="">
                </div>
                <div class="col-7" id="app-modal">
                    <p><strong>{{titulo}}</strong></p>
                    <p class="text-justify">{{descripcion}}</p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-dark btn-sm float-right" data-dismiss="modal">Cerrar</button>
        </div>
    </div>
</div>
</div>
`
let modalNosotros = 
`   <div class="modal fade bd-example-modal-lg" id="modalPush1" tabindex="-1" role="dialog"
aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <!--Content-->
    <div class="modal-content">
        <!--Header-->
        <div class="modal-header">
            <p class="heading">AliShock - Nosotros</p>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="white-text">&times;</span>
            </button>
        </div>

        <!--Body-->
        <div class="modal-body">

            <div class="row">
                <div class="col-4" id="imagen-modal">
                    <img src="img/nosotros.jpg" width="90%" alt="">
                </div>
                <div class="col-8" id="app-modal1">
                    <p class="text-justify">
                        Alishock nació en el año 2016 con el propósito de realzar la belleza natural de cada
                        persona.
                        Nuestra misión es obtener la imagen deseada por los clientes, fortificando su
                        autoestima.
                        Brindamos atención y servicio personalizado que transciende lo estético y crea
                        relaciones de impacto conlosclientes.<br>
                        Para nosotros lo más importante son nuestras clientas/es.
                        Nos especializamos en Alisados, shock, botox, otros.. Trabajamos con los mejores
                        productos del mercado.
                        Damos garantía y soporte pos tratamiento por todos nuestros trabajos.
                    </p>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-dark btn-sm float-right" data-dismiss="modal">Cerrar</button>
        </div>
    </div>
</div>
</div>
`

let modalCarrusel =
    `
<div class="modal fade bd-example-modal-lg" id="modalPush2" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <p class="heading">AliShock - Galeria de Imagenes</p>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>

                <!--Body-->
                <div class="modal-body bodyCarrusel">

                    <div class="row">
                        <div class="col-12" id="imagen-modal">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">

                                    `
for (let i = 0; i < imgC.length; i++) {
    modalCarrusel += `<div class="swiper-slide" style="background-image:url(${imgC[i]})">
                        </div>`
}
modalCarrusel += `
                                    <div class="swiper-pagination">
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark btn-sm float-right" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `


document.getElementById('idHeader').innerHTML = encabezado;
document.getElementById('modalServ').innerHTML = modalServicios;
document.getElementById('modalNosotros').innerHTML = modalNosotros;
document.getElementById('modalCarrusel').innerHTML = modalCarrusel;
document.getElementById('idFooter').innerHTML = pieDePagina;

