
(function () {
 
    let elmGalerie = document.querySelector(".galerie");
    let  elmGalerieImg = document.querySelectorAll(".galerie figure img");
    let elmBouton = document.querySelector(".bouton");
    let elmCarrousel = document.querySelector(".carrousel");
    let elmCarrousel__x = document.querySelector(".carrousel__x");
    let elmCarrousel__figure = document.querySelector(".carrousel__figure");
    let elmCarrousel__form = document.querySelector(".carrousel__form");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    let index = 0;
    let dernierIndex = -1;
    
    //boutton carrousel 
  
    elmBouton.addEventListener("mousedown", function () {
      elmCarrousel.classList.add("carrousel--ouvrir");
    });
  
  //voir l'image suivante   
  
    next.addEventListener("mousedown", function () {
      (elmActiveImg = elmCarrousel__figure.querySelector(".carrousel__figure__img--activer")),
        (dernierIndex = elmActiveImg.dataset.index),
        (index = elmActiveImg.dataset.index),
        elmActiveImg.classList.remove("carrousel__figure__img--activer"),
        (elmNextImg = elmCarrousel__figure.querySelector(
          `[data-index='${++index}']`
        )),
        elmNextImg == null &&
          ((index = 0),
          (elmNextImg = elmCarrousel__figure.querySelector(
            `[data-index='${index}']`
          ))),
        (elmCarrousel__form.querySelector(`[data-index='${index}']`).checked =
          !0),
        elmNextImg.classList.add("carrousel__figure__img--activer");
    });
  
    // voir l'image précédente
  
    prev.addEventListener("mousedown", function () {
        (elmActiveImg = elmCarrousel__figure.querySelector(
          ".carrousel__figure__img--activer"
        )),
          (dernierIndex = elmActiveImg.dataset.index),
          (index = elmActiveImg.dataset.index),
          elmActiveImg.classList.remove("carrousel__figure__img--activer");
        let f = elmCarrousel.querySelectorAll(".carrousel__form__radio").length;
        index <= 0
          ? ((index = f - 1),
            (elmNextImg = elmCarrousel__figure.querySelector(
              `[data-index='${index}']`
            )))
          : (elmNextImg = elmCarrousel__figure.querySelector(
              `[data-index='${--index}']`
            )),
          (elmCarrousel__form.querySelector(`[data-index='${index}']`).checked =
            !0),
          elmNextImg.classList.add("carrousel__figure__img--activer");
    });
    
    //boucle sur tous les elements img dans le galerie
    for (const elmImg of elmGalerieImg)
      ajout_img_dans_carrousel(elmImg),
        ajout_radio_dans_carrousel(),
        elmImg.addEventListener("mousedown", function () {
          elmCarrousel.classList.add("carrousel--ouvrir"),
            elmCarrousel__figure.children[this.dataset.index].classList.add(
              "carrousel__figure__img--activer"
            ),
            (elmCarrousel__form.children[this.dataset.index].checked = !0),
            (dernierIndex = this.dataset.index);
        });
    
    // fonction pour ajouter l'image dans carrousel
    function ajout_img_dans_carrousel(elmImg) {
      elmImg.dataset.index = index;
  
      let elmCarrouselImg = document.createElement("img");
  
      elmCarrouselImg.setAttribute("src", elmImg.getAttribute("src"));
  
      elmCarrouselImg.classList.add("carrousel__figure__img");
      elmCarrouselImg.dataset.index = index;
      elmCarrousel__figure.appendChild(elmCarrouselImg);
    }
  
  //fonction pour ajouter les bouttons radio dans carrousel 
  
    function ajout_radio_dans_carrousel() {
      let elmCarrousel__form__radio = document.createElement("input");
      elmCarrousel__form__radio.setAttribute("name", "carrousel__form__radio"),
        elmCarrousel__form__radio.setAttribute("class", "carrousel__form__radio"),
        elmCarrousel__form__radio.setAttribute("type", "radio"),
        (elmCarrousel__form__radio.dataset.index = index),
        index++,
        elmCarrousel__form.appendChild(elmCarrousel__form__radio),
        elmCarrousel__form__radio.addEventListener("mousedown", function () {
          dernierIndex != -1 &&
            elmCarrousel__figure.children[dernierIndex].classList.remove(
              "carrousel__figure__img--activer"
            ),
            elmCarrousel__figure.children[this.dataset.index].classList.add(
              "carrousel__figure__img--activer"
            ),
            (dernierIndex = this.dataset.index);
        });
    }
    elmCarrousel__x.addEventListener("mousedown", function () {
      elmCarrousel.classList.remove("carrousel--ouvrir");
    });
  })();
  
  
  