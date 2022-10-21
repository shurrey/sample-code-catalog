import * as icons from "react-icons/di";

import './card.styles.css';

const Card = ({ sample }) => {
    
    console.log("Card Component Sample => " + sample);

    const { name, language, tags, icon, last_update, url } = sample;
    console.log("Card Component Name => " + name);
    console.log("Card Component Language => " + language);
    console.log("Card Component Tags => " + tags);
    console.log("Card Component Last Update => " + last_update);
    console.log("Card Component url => " + url);

    let langString = language.toLocaleLowerCase();
    console.log("Card Component langString => " + langString);

    const ICON = icons[icon];
    console.log("Card Component ICON => " + ICON);

    return (
        <div className='card-container'>
            <div className="logo">
                <div className='card-icon-container'>
                    <ICON className='card-icon' />
                    <p>{language}</p>
                </div>
            </div>
            <h2><a href={url} rel="noreferrer noopener" target="_blank">{name}</a></h2>
            <caption>{last_update}</caption>
            <div>
                <p className="tags">{tags}</p>
            </div>
        </div>
    )
}

export default Card;