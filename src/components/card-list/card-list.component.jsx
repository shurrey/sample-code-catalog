import './card-list.styles.css';
import Card from '../card/card.component'

const CardList =({ samples }) => (
    <div className='card-list'>
        {samples.map((sample, id) => {
            return (
                <div key={id}>
                    <Card sample={sample} />
                </div>
            )
        })}
    </div>       
);

export default CardList;