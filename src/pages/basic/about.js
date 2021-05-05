import React from 'react';
import Media from "react-bootstrap/cjs/Media";

function About() {
    return (
        <>
            <h1 className={"text-center mb-5"}>A Propos</h1>
            <Media className={"mb-5"}>
                <img
                    width={350}
                    height={350}
                    className="align-self-center mr-3"
                    src="https://media.istockphoto.com/vectors/vector-flat-dental-icon-white-teeth-smile-vector-id539836506?k=6&m=539836506&s=170667a&w=0&h=o9k0JOM_0wnGg3caI94nZ4Mp6pdHmFB_bSuhaqxMIOU="
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <p>
                        Le dentiste maîtrise différentes techniques pour éclaircir les dents de ses patients. Avant
                        tout, il procède à un détartrage complet. En effet, le tartre est souvent responsable de cette
                        dyschromie qui peut être source de complexe. Qui plus est, en retirant la plaque dentaire, le
                        dentiste s’assure que le traitement de blanchiment sera parfaitement efficace.

                        Dans un second temps, le spécialiste détermine avec son patient la couleur que ce dernier veut
                        obtenir pour ses dents. Il peut ensuite mettre en œuvre différentes techniques :
                        Le fauteuil au laser : après avoir posé un écarteur dans la bouche et des protections sur les
                        gencives, le dentiste applique un gel blanchissant concentré en peroxyde d’hydrogène ou en
                        peroxyde de carbamide. Photosensible, ce gel est activé par le faisceau laser de la lampe,
                        lequel agrandit également les pores de l’émail dentaire pour faciliter la pénétration de l’agent
                        blanchissant.
                        La lampe de blanchiment : la technique et les produits sont les mêmes. En revanche, c’est une
                        lumière bleue et froide qui active le gel blanchissant.
                        Le blanchiment dentaire ambulatoire : dans un premier temps, le dentiste prend une empreinte de
                        la dentition afin de réaliser une gouttière sur mesure. A la maison, vous positionnez cette
                        gouttière sur les dents, après avoir appliqué à l’intérieur le produit blanchissant fourni par
                        le professionnel.
                        En moyenne, au cabinet, il faut compter 1 heure pour un traitement de blanchiment complet.
                        Jamais définitif, il doit être renouvelé tous les 2 ans environ. Pour ce qui est du prix, tout
                        dépend de la réputation du praticien et des techniques employées. Comptez entre 400 et 1 000 €.
                    </p>
                    <br/>
                    <p>
                        Dans le commerce, il existe quantité de produits dits de « home bleaching » :

                        Dentifrices blancheur, la plupart du temps à base de bicarbonate de soude ou de charbon actif
                        Kits de blanchiment, avec gouttières et produit de blanchiment
                        Lampes LED de blanchiment avec gel blanchissant
                        Stylo blanchissant
                        Bandelettes blanchissantes
                        Etc.
                        Dans tous les cas, il est conseillé de ne pas abuser de ces produits, lesquels peuvent abîmer
                        l’émail des dents ou agresser les gencives. Pour garder des dents blanches, il est conseillé de
                        :

                        Bien se brosser les dents chaque jour
                        Éviter certains aliments au fort pouvoir colorant comme le vin, les fruits rouges, le café, le
                        thé, etc.
                        Limiter, voire arrêter, la consommation de tabac
                        Se rendre au moins une fois par an chez le dentiste pour un détartrage
                    </p>
                </Media.Body>
            </Media>
        </>
    );
}

export default About;