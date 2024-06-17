import './CollapseA.css';

function CollapseAbout () {
    return (
        <section className='collapse-about'>
            <div className='rubriques'>
                <li className='notions'>Fiabilité</li>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>

            <div className='rubriques'>
                <li className='notions'>Respect</li>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>

            <div className='rubriques'>
                <li className='notions'>Service</li>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>

            <div className='rubriques'>
                <li className='notions'>Sécurité</li>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div> 
        </section>
    )
}

export default CollapseAbout;