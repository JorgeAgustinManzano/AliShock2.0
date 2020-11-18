
var imagenesC = [
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
let modalMultimedia =
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
                <div class="modal-body">

                    <div class="row">
                        <div class="col-12" id="imagen-modal">
                            
                            <div class="banner">
                                <section id="dg-container" class="dg-container">
                                    <div class="dg-wrapper">
                                    `
for (let i = 0; i < imagenesC.length; i++) {
    modalMultimedia += `<a href="#">
                        <img src="${imagenesC[i]}">
                        </a>`
}

modalMultimedia += `
                    </div>
                        <div class="control"></div><!--esto lo agrego para que no me de error-->
                            <ol class="button" id="lightButton">
                    `
for (let i = 0; i < imagenesC.length; i++) {
    modalMultimedia += `<li index="${i}">`
}

modalMultimedia += `</ol>
                                    <nav>
                                        <span class="dg-prev"></span>
                                        <span class="dg-next"></span>
                                    </nav>
                                </section>
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

document.getElementById('modalMultimedia').innerHTML = modalMultimedia;
