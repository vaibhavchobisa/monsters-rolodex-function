import './card.styles.css';
import { Monster } from '../../App';

type CardProps = {
    monster: Monster;
}

const Card = ({ monster }: CardProps) => {
    const { id, name, email } = monster;
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}/?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2 className='h2'>{name}</h2>
            <p className='email'>{email.toLocaleLowerCase()}</p>
        </div>
    )
}

export default Card;