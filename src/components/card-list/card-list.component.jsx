// import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

// Components re-render based on two conditions, when setState() gets called, 
// (probably not true->) and when props are updated.

const CardList = ({ monsters }) => (
    // console.log('render from CardList')
    // console.log(this.props)
    // const { monsters } = this.props;

    // Using IMPILCIT RETURN since there is nothing else to return.
        <div className='card-list'>
            {
                monsters.map((monster) => {
                    return (
                        <Card monster={monster} key={monster.id} />
                    );
                })
            }
        </div>
    );

export default CardList;