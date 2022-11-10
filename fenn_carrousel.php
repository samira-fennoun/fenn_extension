<?php
/**
 * 
 * @package carrousel
 * @author  samira fennoun
 * @copyright Collège Maisonneuve
 * @version 1.0.0
*/
/*
Plugin Name: fenn_carrousel
Description: Permet d'afficher une boite modale de l'image séléctionnée d'une galerie. Pour ensuite accéder à toutes images de la galerie

Author: samira fennoun
Author URI: https://github.com/e2295531/31w_fennoun
Version: 1.0.0
*/
// filemtime() // retourne en milliseconde le temps de la dernière sauvegarde
// plugin_dir_path() // retourne le chemin du répertoire du plugin
// __FILE__ // le fichier en train de s'exécuter
// wp_enqueue_style() // Intègre le link:css dans la page
// wp_enqueue_script() // intègre le script dans la page
// wp_enqueue_scripts // le hook

function fenn_enqueue(){
    $version_css=filemtime(plugin_dir_path(__FILE__)."style.css");
    $version_js=filemtime(plugin_dir_path(__FILE__)."js/carrousel.js");
     wp_enqueue_style('fenn_carrousel_css',
                        plugin_dir_url(__FILE__)."style.css",
                        array(),
                        $version_css,
                        false);
     wp_enqueue_script('fenn_carrousel_js',
                        plugin_dir_url(__FILE__)."js/carrousel.js",
                        array(),
                        $version_js,
                        true);
    
}


add_action("wp_enqueue_scripts",'fenn_enqueue');

function fenn_boite_carrousel(){
 /////////////////////////////////////// HTML
 // Le conteneur d'une boîte
 $contenu =
    "<button class='bouton'>Ouvrir carrousel</button>"
 ."<div class='carrousel'>"
 ."<button class='carrousel__x'>X</button>"
 ."<a class='prev' >&#10094;</a>"
  ."<a class='next' >&#10095;</a>"
 ."<figure class='carrousel__figure'></figure>"
 ."<form class='carrousel__form'></form>"
 
 
 ."</div><!--fin class='boite-->";

 return $contenu;

}
add_shortcode('fenn_carrousel', 'fenn_boite_carrousel');