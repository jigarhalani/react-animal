
import cat from './svg/cat.svg';
import bird from './svg/bird.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';

const svgImage = {
    cat,bird,cow,dog,gator,horse
};

function AnimalShow({type}){
    return <div>
        <img src={svgImage[type]} alt='animal' width="100px"></img>
    </div>;
}

export default AnimalShow;