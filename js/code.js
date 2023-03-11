let bodyPagina = document.querySelector("body")
let divContainer1 = document.createElement("div")
divContainer1.classList.add("container-fluide", "bgImage1")
divContainer1.style.height = '100vh'
divContainer1.style.overflow = 'none'
bodyPagina.appendChild(divContainer1)

let navbarContainer = document.createElement("nav")
navbarContainer.classList.add("navbar", "navbar-expand-lg", "bg-transparent")
divContainer1.appendChild(navbarContainer)

let divHijaCont1 = document.createElement("div")
divHijaCont1.classList.add("container-fluid", "position-fixed", "position-absolute", "mt-4", "navbar_params")
navbarContainer.appendChild(divHijaCont1)

// divHija1_1 = al logo paramount

let divHija1_1 = document.createElement("div")
divHija1_1.className = "ms-2"
divHijaCont1.appendChild(divHija1_1)

let imgDivHija1_1 = document.createElement("img")
imgDivHija1_1.setAttribute("alt", "logo_paramount")
divHija1_1.appendChild(imgDivHija1_1)

// divHija1_2 = a los elementos de la navbar
// ---------------------------------------------
let divHija1_2 = document.createElement("div")
divHija1_2.classList.add("collapse", "navbar-collapse")
divHija1_2.id= "navbarSupportedContent"
divHijaCont1.appendChild(divHija1_2)

let ulDivHija1_2 = document.createElement("ul")
ulDivHija1_2.classList.add("navbar-nav", "me-auto","mb-2", "mb-lg-0" )
divHija1_2.appendChild(ulDivHija1_2)

//  li del PIPE
let liUlDivHija1_2_1 = document.createElement("li")
liUlDivHija1_2_1.className = "nav-item"
ulDivHija1_2.appendChild(liUlDivHija1_2_1)

//  a de PIPE
let aLiUlDivHija1_2_1 = document.createElement("a")
aLiUlDivHija1_2_1.classList.add("nav-link", "text-secondary", "me-2")
aLiUlDivHija1_2_1.style = '--bs-text-opacity: .8; font-size: 20px;'
aLiUlDivHija1_2_1.setAttribute("aria-current", "page")
aLiUlDivHija1_2_1.setAttribute("href", "#")
aLiUlDivHija1_2_1.innerText = "|"
liUlDivHija1_2_1.appendChild(aLiUlDivHija1_2_1) 

// li de Halo :
let liUlDivHija1_2_2 = document.createElement("li")
liUlDivHija1_2_2.className = "nav-item"
ulDivHija1_2.appendChild(liUlDivHija1_2_2)
//  a de HALO :
let aLiUlDivHija1_2_2 = document.createElement("a")
aLiUlDivHija1_2_2.classList.add("nav-link", "text-secondary", "me-2", "ms-2")
aLiUlDivHija1_2_2.style = "--bs-text-opacity: .8; font-size: 20px;"
aLiUlDivHija1_2_2.setAttribute("aria-current", "page")
aLiUlDivHija1_2_2.setAttribute("href", "#")
aLiUlDivHija1_2_2.innerText = "HALO : "
liUlDivHija1_2_2.appendChild(aLiUlDivHija1_2_2)

// Li de "VER AHORA"
let liUlDivHija1_2_3 = document.createElement("li")
liUlDivHija1_2_2.className = "nav-item"
ulDivHija1_2.appendChild(liUlDivHija1_2_3)
// a de VER AHORA
let aLiUlDivHija1_2_3 = document.createElement("a")
aLiUlDivHija1_2_3.classList.add("nav-link", "text-white", "me-2", "ms-2")
aLiUlDivHija1_2_3.style = "font-size: 18px;"
aLiUlDivHija1_2_3.setAttribute("aria-current", "page")
aLiUlDivHija1_2_3.setAttribute("href", "#")
aLiUlDivHija1_2_3.innerText = "VER AHORA"
liUlDivHija1_2_3.appendChild(aLiUlDivHija1_2_3)

// form de button inniciar
let formDivHija1_2 = document.createElement("form")
formDivHija1_2.className = "d-flex"
divHija1_2.appendChild(formDivHija1_2)

//  button de INICIAR SESSION
let btnFormDivHija1_2 = document.createElement("button")
btnFormDivHija1_2.classList.add("btn", "btn-outline-light", "me-5")
btnFormDivHija1_2.type = "button"
btnFormDivHija1_2.innerText = "INICIAR SESIÓN"
formDivHija1_2.appendChild(btnFormDivHija1_2)

let btn2FormDivHija1_2 = document.createElement("button")
btn2FormDivHija1_2.classList.add("btn", "btn-primary", "me-5", "d-none")
btn2FormDivHija1_2.type = "button"
btn2FormDivHija1_2.innerText = "SUSCRÍBETE A PARAMOUNT+"
formDivHija1_2.appendChild(btn2FormDivHija1_2)
// -----------scroll btn iniciar/btn subscripcion-------
window.addEventListener('scroll', () => {
    if(window.scrollY >= 430){
        btnFormDivHija1_2.classList.add("d-none");
        btn2FormDivHija1_2.classList.remove("d-none");
        if(window.scrollY >= 2300){
            btnFormDivHija1_2.classList.remove("d-none");
            btn2FormDivHija1_2.classList.add("d-none");
        }else{
            btnFormDivHija1_2.classList.add("d-none");
            btn2FormDivHija1_2.classList.remove("d-none");
        } 
    }else {
        btnFormDivHija1_2.classList.remove("d-none");
        btn2FormDivHija1_2.classList.add("d-none");
    } 
})
// fin nav bar



// ------------container 1----------

let divTextButtonsContainer = document.createElement("div")
divTextButtonsContainer.classList.add("d-grid", "gap-1","m-4")
divContainer1.appendChild(divTextButtonsContainer)

let sectionTextButtonsContainer = document.createElement("section")
sectionTextButtonsContainer.classList.add("section1")
divTextButtonsContainer.appendChild(sectionTextButtonsContainer)

let divTextSectionTextBs = document.createElement("div")
divTextSectionTextBs.className = "texte-section1"
sectionTextButtonsContainer.appendChild(divTextSectionTextBs)

let h1DivTextDivTextS = document.createElement("h1")
h1DivTextDivTextS.classList.add("h1-font")
h1DivTextDivTextS.innerText = "HISTORIAS ÚNICAS. ESTRELLAS ICÓNICAS. UNA MONTAÑA DE ENTRETENIMIENTO."
divTextSectionTextBs.appendChild(h1DivTextDivTextS)

// pub con link --- a activar
let pubDivTextDivTextS = document.createElement("div")
pubDivTextDivTextS.classList.add("textPubRegistro", "mt-4")
divTextSectionTextBs.appendChild(pubDivTextDivTextS)

let  strong1PubDivText = document.createElement("strong")
strong1PubDivText.className = "textPubRegistro"
strong1PubDivText.innerText = "Suscríbete por $13,900.00 COP al Mes.\nCancela en cualquier momento.\n"
pubDivTextDivTextS.appendChild( strong1PubDivText)

let strong2LinkPubDivText = document.createElement("strong")
strong2LinkPubDivText.className = "stretched-link textPubRegistro"
strong2LinkPubDivText.innerText = "Únete ahora y obtén 7 días gratis"
pubDivTextDivTextS.appendChild(strong2LinkPubDivText)
// fin pub
// 3 buttons
let divButtonsSectionTextBs = document.createElement("div")
divButtonsSectionTextBs.className = "divBtnC1"
sectionTextButtonsContainer.appendChild(divButtonsSectionTextBs)

let divHijaDivButtons = document.createElement("div")
divHijaDivButtons.classList.add("d-grid","gap-2","mt-5","pb-4")
divButtonsSectionTextBs.appendChild(divHijaDivButtons)

let btn1DivHijaDivBs = document.createElement("button")
btn1DivHijaDivBs.classList.add("btn", "btn-primary","paramsDivBtnC1")
btn1DivHijaDivBs.type = "submit"
btn1DivHijaDivBs.innerText = "SUSCRÍBETE A PARAMOUNT+"
divHijaDivButtons.appendChild(btn1DivHijaDivBs)

let btn2DivHijaDivBs = document.createElement("button")
btn2DivHijaDivBs.classList.add("btn", "btn-outline-light", "mt-2","paramsDivBtnC1")
btn2DivHijaDivBs.type = "submit"
btn2DivHijaDivBs.innerText = "YA TENGO PARAMOUNT+"
divHijaDivButtons.appendChild(btn2DivHijaDivBs)

let btn3DivHijaDivBs = document.createElement("button")
btn3DivHijaDivBs.classList.add("btn", "btn-outline-light", "mt-2","paramsDivBtnC1")
btn3DivHijaDivBs.type = "submit"
btn3DivHijaDivBs.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
divHijaDivButtons.appendChild(btn3DivHijaDivBs)
// ----------------------------------------



//----------container2---------------
let divContainer2 = document.createElement("div")
divContainer2.classList.add("container-fluide", "bg", "bgImage2")
divContainer2.style.height = '100vh'
bodyPagina.appendChild(divContainer2)
// --------SECTION 1 texto lado izquierdo
let section1DivContainer2 = document.createElement("section")
section1DivContainer2.classList.add("d-grid", "gap-1", "ms-3", "mt-4")
divContainer2.appendChild(section1DivContainer2)
// -------article1 container2 text-------
let article1TextsCont2 = document.createElement("article")
article1TextsCont2.classList.add("col-lg-5", "text-white", "mt-3", "ms-1")
section1DivContainer2.appendChild(article1TextsCont2)
// -----text 1 caracter grueso
let divArticle1T1C2 = document.createElement("div")
divArticle1T1C2.classList.add("mt-2")
article1TextsCont2.appendChild(divArticle1T1C2)

let h1DivArt1T1C2 = document.createElement("h1")
h1DivArt1T1C2.classList.add("h1-font", "mb-3")
h1DivArt1T1C2.innerText = "SOMOS ORIGINALES Y EXCLUSIVOS"
divArticle1T1C2.appendChild(h1DivArt1T1C2)

// ---Text 2 caracter pequeno y delgado
let divArticle1T2C2 = document.createElement("div")
divArticle1T2C2.classList.add("mt-5")
article1TextsCont2.appendChild(divArticle1T2C2)

let strongDivArt1T1C2 = document.createElement("strong")
strongDivArt1T1C2.classList.add("textPubRegistro")
strongDivArt1T1C2.innerText = "Disfruta de historias únicas, estrellas icónicas y programas exclusivos que\nencontrarás en ningún otro lugar"
divArticle1T1C2.appendChild(strongDivArt1T1C2)

// _____article vide lado derecho ------
let articleTextContainer2 = document.createElement("article")
articleTextContainer2.classList.add("col-lg-5", "text-white")
section1DivContainer2.appendChild(articleTextContainer2)

// -----------SECTION 2---slider de card-img-link-------------------------
let section2DivContainer2 = document.createElement("section")
section2DivContainer2.classList.add("d-grid", "gap-1", "m-1", "paramsSlider")
divContainer2.appendChild(section2DivContainer2)

// -----article container slider--------
let ArticleS2DivC2 = document.createElement("article")
ArticleS2DivC2.classList.add("body__swiper")
ArticleS2DivC2.style.width = "180vh"
section2DivContainer2.appendChild(ArticleS2DivC2)

//<!-- Swiper -->
let divContainerSwiper = document.createElement("div")
divContainerSwiper.classList.add("container-fluid", "slider-control")
ArticleS2DivC2.appendChild(divContainerSwiper)

// slider_itemSSS
// -------img 1-------
let divSlider1Item1ContSwip = document.createElement("div")
divSlider1Item1ContSwip.classList.add("slider_item", "d-flex")
divContainerSwiper.appendChild(divSlider1Item1ContSwip)

let imgDivSlider1 = document.createElement("img")
imgDivSlider1.setAttribute("src", "img/halo_s1_poster_1400x2100_nb_022822_2.jpeg")
imgDivSlider1.setAttribute("alt", "halo")
imgDivSlider1.style.width = "250px"
imgDivSlider1.classList.add("p-2")
divSlider1Item1ContSwip.appendChild(imgDivSlider1)
// -------img2-----------
let divSlider2Item1ContSwip = document.createElement("div")
divSlider2Item1ContSwip.className = "slider_item"
divContainerSwiper.appendChild(divSlider2Item1ContSwip)

let imgDivSlider2 = document.createElement("img")
imgDivSlider2.setAttribute("src", "img/first_lady_s1_poster_1400x2100_nb_032322_2.jpeg")
imgDivSlider2.setAttribute("alt", "first lady")
imgDivSlider2.style.width = "250px"
imgDivSlider2.classList.add("p-2")
divSlider1Item1ContSwip.appendChild(imgDivSlider2)
// --------img 3----------
let divSlider3Item1ContSwip = document.createElement("div")
divSlider3Item1ContSwip.className = "slider_item"
divContainerSwiper.appendChild(divSlider3Item1ContSwip)

let imgDivSlider3 = document.createElement("img")
imgDivSlider3.setAttribute("src", "img/enviados_s1_latam_poster_1400x2100_nb_011822.jpeg")
imgDivSlider3.setAttribute("alt", "los enviados")
imgDivSlider3.style.width = "250px"
imgDivSlider3.classList.add("p-2")
divSlider1Item1ContSwip.appendChild(imgDivSlider3)
// -------img 4-----------****
let divSlider4Item1ContSwip = document.createElement("div")
divSlider4Item1ContSwip.className = "slider_item"
divContainerSwiper.appendChild(divSlider4Item1ContSwip)

let imgDivSlider4 = document.createElement("img")
imgDivSlider4.setAttribute("src", "img/rupauls_dragrace_s14_poster_1400x2100_nb_012722_0.jpeg")
imgDivSlider4.setAttribute("alt", "rupauls")
imgDivSlider4.style.width = "250px"
imgDivSlider4.classList.add("p-2")
divSlider1Item1ContSwip.appendChild(imgDivSlider4)
// ---------img 5---------
let divSlider5Item1ContSwip = document.createElement("div")
divSlider5Item1ContSwip.className = "slider_item"
divContainerSwiper.appendChild(divSlider5Item1ContSwip)

let imgDivSlider5 = document.createElement("img")
imgDivSlider5.setAttribute("src", "img/yellowstone_s4_poster_1400x2100_nb_102621_1.jpeg")
imgDivSlider5.setAttribute("alt", "yellow stone")
imgDivSlider5.style.width = "250px"
imgDivSlider5.classList.add("p-2")
divSlider1Item1ContSwip.appendChild(imgDivSlider5)
// --------img 6----------
let divSlider6Item1ContSwip = document.createElement("div")
divSlider6Item1ContSwip.className = "slider_item"
divContainerSwiper.appendChild(divSlider6Item1ContSwip)

let imgDivSlider6 = document.createElement("img")
imgDivSlider6.setAttribute("src", "img/killing_eve_s4_poster_1400x2100_021822.jpeg")
imgDivSlider6.setAttribute("alt", "killing-eve")
imgDivSlider6.style.width = "250px"
imgDivSlider6.classList.add("p-2")
divSlider1Item1ContSwip.appendChild(imgDivSlider6)
// --------img 7----------
let divSlider7Item1ContSwip = document.createElement("div")
divSlider7Item1ContSwip.className = "slider_item"
divContainerSwiper.appendChild(divSlider7Item1ContSwip)

let imgDivSlider7 = document.createElement("img")
imgDivSlider7.setAttribute("src", "img/yellowjackets_s1_poster_1400x2100_nb_111021_1.jpeg")
imgDivSlider7.setAttribute("alt", "yellow-jacket")
imgDivSlider7.style.width = "250px"
imgDivSlider7.classList.add("p-2")
divSlider1Item1ContSwip.appendChild(imgDivSlider7)
// -------img 8-----------
let divSlider8Item1ContSwip = document.createElement("div")
divSlider8Item1ContSwip.className = "slider_item"
divContainerSwiper.appendChild(divSlider8Item1ContSwip)

let imgDivSlider8 = document.createElement("img")
imgDivSlider8.setAttribute("src", "img/sproc_salone_poster_1400x2100_nb_121021_0.jpeg")
imgDivSlider8.setAttribute("alt", "SPROC")
imgDivSlider8.style.width = "250px"
imgDivSlider8.classList.add("p-2")
divSlider1Item1ContSwip.appendChild(imgDivSlider8)



// -------container 3------------------------
let divContainer3 = document.createElement("div")
divContainer3.classList.add("container-fluide", "bg", "bgImage3")
divContainer3.style.height = '100vh'
bodyPagina.appendChild(divContainer3)
// --------SECTION 1 texto lado izquierdo
let section1DivContainer3 = document.createElement("section")
section1DivContainer3.classList.add("d-grid", "gap-1", "ms-3", "mt-4")
divContainer3.appendChild(section1DivContainer3)
// -------article1 container2 text-------
let article1TextsCont3 = document.createElement("article")
article1TextsCont3.classList.add("col-lg-5", "text-white", "mt-4")
section1DivContainer3.appendChild(article1TextsCont3)
// -----text 1 caracter grueso
let divArticle1T1C3 = document.createElement("div")
divArticle1T1C3.classList.add("mt-1")
article1TextsCont3.appendChild(divArticle1T1C3)

let h1DivArt1T1C3 = document.createElement("h1")
h1DivArt1T1C3.classList.add("h1-font")
h1DivArt1T1C3.innerText = " TENEMOS TU CONTENIDO FAVORITO "
divArticle1T1C3.appendChild(h1DivArt1T1C3)

// ---Text 2 caracter pequeno y delgado
let divArticle1T2C3 = document.createElement("div")
divArticle1T2C3.classList.add("mt-5")
article1TextsCont3.appendChild(divArticle1T2C3)

let strongDivArt1T1C3 = document.createElement("strong")
strongDivArt1T1C3.classList.add("textPubRegistro")
strongDivArt1T1C3.innerText = "Desde películas taquilleras y series reconocidas a tus programas favoritos, en Paramount+ podrás disfrutarlo todo una y otra vez."
divArticle1T1C3.appendChild(strongDivArt1T1C3)

// _____article vide lado derecho ------
let articleTextContainer3 = document.createElement("article")
articleTextContainer3.classList.add()
section1DivContainer3.appendChild(articleTextContainer3)

// -----------SECTION 3---slider de card-img-link-------------------------
let section2DivContainer3 = document.createElement("section")
section2DivContainer3.classList.add("d-grid", "gap-1", "m-1", "paramsSlider")
divContainer3.appendChild(section2DivContainer3)

// -----article container slider--------
let ArticleS2DivC3 = document.createElement("article")
ArticleS2DivC3.classList.add("body__swiper", "d-flex", "justify-content")
ArticleS2DivC3.style.width = "180vh"
section2DivContainer3.appendChild(ArticleS2DivC3)

//<!-- Swiper -->
let divContainerSwiper2 = document.createElement("div")
divContainerSwiper2.classList.add("container-fluid", "slider-control", "g-col-12")
ArticleS2DivC3.appendChild(divContainerSwiper2)
// slider_itemSSS
// -------img 1-------
let divSlider1Item1ContSwip2 = document.createElement("div")
divSlider1Item1ContSwip2.classList.add("slider_item", "d-flex","col-12")
divContainerSwiper2.appendChild(divSlider1Item1ContSwip2)

let img1DivSlider2 = document.createElement("img")
img1DivSlider2.setAttribute("src", "img/imgC3/1883_s1_poster_1400x2100_nb_030722.jpeg")
img1DivSlider2.setAttribute("alt", "1883")
img1DivSlider2.style.width = "250px"
img1DivSlider2.classList.add("p-2")
divSlider1Item1ContSwip2.appendChild(img1DivSlider2)
// -------img2-----------
let divSlider2Item1ContSwip2 = document.createElement("div")
divSlider2Item1ContSwip2.classList.add("slider_item", "d-flex","col-12")
divContainerSwiper2.appendChild(divSlider2Item1ContSwip2)

let img2DivSlider2 = document.createElement("img")
img2DivSlider2.setAttribute("src", "img/imgC3/paw_patrol_s8a_poster_1400x2100_nb_100521_0.jpeg")
img2DivSlider2.setAttribute("alt", "paw patrol")
img2DivSlider2.style.width = "250px"
img2DivSlider2.classList.add("p-2")
divSlider2Item1ContSwip2.appendChild(img2DivSlider2)
// --------img 3----------
let divSlider3Item1ContSwip2 = document.createElement("div")
divSlider3Item1ContSwip2.classList.add("slider_item", "d-flex","col-12")
divContainerSwiper2.appendChild(divSlider3Item1ContSwip2)

let img3DivSlider2 = document.createElement("img")
img3DivSlider2.setAttribute("src", "img/imgC3/resistire_s2_poster_1400x2100_032222.jpeg")
img3DivSlider2.setAttribute("alt", "resistiré")
img3DivSlider2.style.width = "250px"
img3DivSlider2.classList.add("p-2")
divSlider2Item1ContSwip2.appendChild(img3DivSlider2)
// -------img 4-----------
let divSlider4Item1ContSwip2 = document.createElement("div")
divSlider4Item1ContSwip2.classList.add("slider_item", "d-flex","col-12")
divContainerSwiper2.appendChild(divSlider4Item1ContSwip2)

let img4DivSlider2 = document.createElement("img")
img4DivSlider2.setAttribute("src", "img/imgC3/patrick_star_s1_poster_1400x2100_120721.jpeg")
img4DivSlider2.setAttribute("alt", "patrickstar")
img4DivSlider2.style.width = "250px"
img4DivSlider2.classList.add("p-2")
divSlider2Item1ContSwip2.appendChild(img4DivSlider2)
// ---------img 5---------
let divSlider5Item1ContSwip2 = document.createElement("div")
divSlider5Item1ContSwip2.classList.add("slider_item", "d-flex","col-12")
divContainerSwiper2.appendChild(divSlider5Item1ContSwip2)

let img5DivSlider2 = document.createElement("img")
img5DivSlider2.setAttribute("src", "img/imgC3/madame_x_sa_poster_1400x2100_nb_093021_0.jpeg")
img5DivSlider2.setAttribute("alt", "madame X")
img5DivSlider2.style.width = "250px"
img5DivSlider2.classList.add("p-2")
divSlider2Item1ContSwip2.appendChild(img5DivSlider2)
// --------img 6----------
let divSlider6Item1ContSwip2 = document.createElement("div")
divSlider6Item1ContSwip2.classList.add("slider_item", "d-flex","col-12")
divContainerSwiper2.appendChild(divSlider6Item1ContSwip2)

let img6DivSlider2 = document.createElement("img")
img6DivSlider2.setAttribute("src", "img/imgC3/arriba_chef_s1a_poster_1400x2100_nb_070221.jpeg")
img6DivSlider2.setAttribute("alt", "manos arriba")
img6DivSlider2.style.width = "250px"
img6DivSlider2.classList.add("p-2")
divSlider2Item1ContSwip2.appendChild(img6DivSlider2)
// --------img 7----------
let divSlider7Item1ContSwip2 = document.createElement("div")
divSlider7Item1ContSwip2.classList.add("slider_item", "d-flex","col-12")
divContainerSwiper2.appendChild(divSlider7Item1ContSwip2)

let img7DivSlider2 = document.createElement("img")
img7DivSlider2.setAttribute("src", "img/imgC3/cecilia_s1_poster_1400x2100_nb_121721.jpeg")
img7DivSlider2.setAttribute("alt", "cecilia")
img7DivSlider2.style.width = "250px"
img7DivSlider2.classList.add("p-2")
divSlider2Item1ContSwip2.appendChild(img7DivSlider2)
// -------ok-----

//<!-- Initialize Swiper -->
$('.slider-control').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
});



// -------container 4------------------------
let divContainer4 = document.createElement("div")
divContainer4.classList.add("container-fluide", "bg", "bgImage4")
divContainer4.style.height = '100vh'
bodyPagina.appendChild(divContainer4)

let sectionDivContainer4 = document.createElement("section")
sectionDivContainer4.classList.add("mt-5", "section4")
divContainer4.appendChild(sectionDivContainer4)

let h1Div2SecDC4 = document.createElement("h1")
h1Div2SecDC4.innerText = "CUANDO QUIERAS,DONDE QUIERAS"
h1Div2SecDC4.classList.add( "h1", "h1-fontC4", "text-white")
sectionDivContainer4.appendChild(h1Div2SecDC4)

let div1SecDiCont4 = document.createElement("div")
sectionDivContainer4.appendChild(div1SecDiCont4)

let  strong1Div2SecDC4 = document.createElement("strong")
strong1Div2SecDC4.classList.add("textPubRegistroC4", "text-white")
strong1Div2SecDC4.innerText = "Suscríbete por $13,900.00 COP al Mes.\n   Cancela en cualquier momento.\n"
div1SecDiCont4.appendChild( strong1Div2SecDC4)

// 3buttons container4
let divButtonsSectionTextBsC4 = document.createElement("div")
divButtonsSectionTextBsC4.classList.add()
sectionDivContainer4.appendChild(divButtonsSectionTextBsC4)
//  ok hasta aqui

let divHijaDivButtonsC4 = document.createElement("div")
divHijaDivButtonsC4.classList.add("d-grid","gap-2","mt-4")
divButtonsSectionTextBsC4.appendChild(divHijaDivButtonsC4)
// // ok hasta aqui
let btn1DivHijaDivBsC4 = document.createElement("button")
btn1DivHijaDivBsC4.classList.add("btn", "btn-primary","paramsDivBtnC4")
btn1DivHijaDivBsC4.type = "submit"
btn1DivHijaDivBsC4.innerText = "SUSCRÍBETE A PARAMOUNT+"
divHijaDivButtonsC4.appendChild(btn1DivHijaDivBsC4)

let btn2DivHijaDivBsC4 = document.createElement("button")
btn2DivHijaDivBsC4.classList.add("btn", "btn-outline-light","paramsDivBtnC4")
btn2DivHijaDivBsC4.type = "submit"
btn2DivHijaDivBsC4.innerText = "YA TENGO PARAMOUNT+"
divHijaDivButtonsC4.appendChild(btn2DivHijaDivBsC4)

let btn3DivHijaDivBsC4 = document.createElement("button")
btn3DivHijaDivBsC4.classList.add("btn", "btn-outline-light","paramsDivBtnC4")
btn3DivHijaDivBsC4.type = "submit"
btn3DivHijaDivBsC4.innerText = "INICIA SESIÓN CON TU PROVEEDOR"
divHijaDivButtonsC4.appendChild(btn3DivHijaDivBsC4)




// ---------footer-----container5
let footerContainer5 = document.createElement("footer")
footerContainer5.classList.add("footer", "bg-dark")
footerContainer5.style.height = '400px'
bodyPagina.appendChild(footerContainer5)

let divLogoFootC5 = document.createElement("div")
divLogoFootC5.classList.add("container-fluid")
footerContainer5.appendChild(divLogoFootC5)

let imgDivLogoFootC5 = document.createElement("img")
imgDivLogoFootC5.setAttribute("src", "../img/kindpng_7354127.png")
imgDivLogoFootC5.setAttribute("alt", "logo_grey")
imgDivLogoFootC5.classList.add("color-logo", "container_logo_gris")
imgDivLogoFootC5.style.width = '150px'
divLogoFootC5.appendChild(imgDivLogoFootC5)

let divListsFootC5 = document.createElement('div')
divListsFootC5.classList.add("d-flex","container-fluid")
footerContainer5.appendChild(divListsFootC5)

let div_grid_ul = document.createElement('div')
div_grid_ul.classList.add("d-flex", "col-7", "div_ul")
divListsFootC5.appendChild(div_grid_ul)

let divcopyrightFootC5 = document.createElement('div')
divcopyrightFootC5.classList.add("d-flex","container-fluid")
footerContainer5.appendChild(divcopyrightFootC5)

let a_copyright =document.createElement("a")
a_copyright.innerText= "© 2022 Paramount. Todos los derechos reservados."
a_copyright.classList.add("margin-a_copyright", "fontLiFoot")
divcopyrightFootC5.appendChild(a_copyright)
// -----primera lista---------
let ul1DivFoC5 = document.createElement('ul')
ul1DivFoC5.classList.add("col-4")
div_grid_ul.appendChild(ul1DivFoC5)

let liUl1DivFoC5 = document.createElement('li')
ul1DivFoC5.appendChild(liUl1DivFoC5)

let titreH6LiUl1C5 = document.createElement('h6')
ul1DivFoC5.appendChild(titreH6LiUl1C5)

let atitreH6Ul1 = document.createElement('a')
atitreH6Ul1.classList.add("blockhead", "mt-2")
atitreH6Ul1.innerText = "Navegacion del sitio"
titreH6LiUl1C5.appendChild(atitreH6Ul1)

let liEl1Ul1DivFoC5 = document.createElement('li')
liEl1Ul1DivFoC5.innerText = "Paramount+ Colombia"
liEl1Ul1DivFoC5.classList.add("fontLiFoot")
ul1DivFoC5.appendChild(liEl1Ul1DivFoC5)

let liEl2Ul2DivFoC5 = document.createElement('li')
liEl2Ul2DivFoC5.innerText = "Paramount+ Global"
liEl2Ul2DivFoC5.classList.add("fontLiFoot")
ul1DivFoC5.appendChild(liEl2Ul2DivFoC5)

// -----------segunda lista-------
let ul2DivFoC5 = document.createElement('ul')
ul2DivFoC5.classList.add( "col-4")
div_grid_ul.appendChild(ul2DivFoC5)

let liUl2DivFoC5 = document.createElement('li')
ul2DivFoC5.appendChild(liUl2DivFoC5)

let h6LiTitleUl2FoC5= document.createElement('h6')
liUl2DivFoC5.appendChild(h6LiTitleUl2FoC5)

let aH6LiUl2FoC5 = document.createElement('a')
aH6LiUl2FoC5.classList.add("blockhead", "mt-5")
aH6LiUl2FoC5.innerText = "Privacidad y terminos"
h6LiTitleUl2FoC5.appendChild(aH6LiUl2FoC5)

let liEl1Ul2DivFoC5 = document.createElement('li')
liEl1Ul2DivFoC5.innerText = "Acuerdo de Suscripción"
liEl1Ul2DivFoC5.classList.add("fontLiFoot")
ul2DivFoC5.appendChild(liEl1Ul2DivFoC5)

let li2ElUl2DivFoC5 = document.createElement('li')
li2ElUl2DivFoC5.innerText = "Términos de Uso"
li2ElUl2DivFoC5.classList.add("fontLiFoot")
ul2DivFoC5.appendChild(li2ElUl2DivFoC5)

let li3ElUl2DivFoC5 = document.createElement('li')
li3ElUl2DivFoC5.innerText = "Política de privacidad y Política"
li3ElUl2DivFoC5.classList.add("fontLiFoot")
ul2DivFoC5.appendChild(li3ElUl2DivFoC5)

let li4ElUl2DivFoC5 = document.createElement('li')
li4ElUl2DivFoC5.innerText = "Política de cookies"
li4ElUl2DivFoC5.classList.add("fontLiFoot")
ul2DivFoC5.appendChild(li4ElUl2DivFoC5)

// -------Tercera lista-------
let ul3DivFoC5 = document.createElement('ul')
ul3DivFoC5.classList.add("col-4")
div_grid_ul.appendChild(ul3DivFoC5)

let liUl3DivFoC5 = document.createElement('li')
ul3DivFoC5.appendChild(liUl3DivFoC5)

let titreH6LiUl3C5 = document.createElement('h6')
ul3DivFoC5.appendChild(titreH6LiUl3C5)

let atitreH6Ul3 = document.createElement('a')
atitreH6Ul3.classList.add("blockhead", "mt-2")
atitreH6Ul3.innerText = "Soporte"
titreH6LiUl3C5.appendChild(atitreH6Ul3)

let li1ElUl3DivFoC5 = document.createElement('li')
li1ElUl3DivFoC5.innerText = "Ayuda / Contáctanos"
li1ElUl3DivFoC5.classList.add("fontLiFoot")
ul3DivFoC5.appendChild(li1ElUl3DivFoC5)

let li2ElUl3DivFoC5 = document.createElement('li')
li2ElUl3DivFoC5.innerText = "Guia de clasificaciones"
li2ElUl3DivFoC5.classList.add("fontLiFoot")
ul3DivFoC5.appendChild(li2ElUl3DivFoC5)

