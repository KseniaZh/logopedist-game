import {
} from "./types";

import dinosaur_0 from '../../img/dinosaur/dinosaur1.jpg';
import dinosaur_1 from '../../img/dinosaur/dinosaur2.jpg';
import dinosaur_2 from '../../img/dinosaur/dinosaur3.jpg';
import dinosaur_3 from '../../img/dinosaur/dinosaur4.jpg';
import dinosaur_4 from '../../img/dinosaur/dinosaur5.jpg';
import dinosaur_5 from '../../img/dinosaur/dinosaur6.jpg';
import dinosaur_6 from '../../img/dinosaur/dinosaur7.jpg';
import dinosaur_7 from '../../img/dinosaur/dinosaur8.jpeg';
import dinosaur_8 from '../../img/dinosaur/dinosaur9.png';
import dinosaur_9 from '../../img/dinosaur/dinosaur10.png';
import dinosaur_10 from '../../img/dinosaur/dinosaur11.jpg';

import dog_0 from '../../img/dogs/dog1.png';
import dog_1 from '../../img/dogs/dog2.jpg';
import dog_2 from '../../img/dogs/dog3.jpg';
import dog_3 from '../../img/dogs/dog4.jpg';
import dog_4 from '../../img/dogs/dog6.jpg';
import dog_5 from '../../img/dogs/dog7.jpg';
import dog_6 from '../../img/dogs/dog8.jpg';
import dog_7 from '../../img/dogs/dog9.png';
import dog_8 from '../../img/dogs/dog10.jpg';
import dog_9 from '../../img/dogs/dog11.jpeg';
import dog_10 from '../../img/dogs/dog12.jpeg';
import dog_11 from '../../img/dogs/dog13.png';
import dog_12 from '../../img/dogs/dog14.jpg';

import doll_0 from '../../img/dolls/doll1.jpg';
import doll_1 from '../../img/dolls/doll2.jpg';
import doll_2 from '../../img/dolls/doll3.jpg';
import doll_3 from '../../img/dolls/doll4.jpg';
import doll_4 from '../../img/dolls/doll5.jpg';
import doll_5 from '../../img/dolls/doll6.jpg';
import doll_6 from '../../img/dolls/doll7.jpg';
import doll_7 from '../../img/dolls/doll8.jpg';
import doll_8 from '../../img/dolls/doll9.jpg';
import doll_9 from '../../img/dolls/doll10.jpg';
import doll_10 from '../../img/dolls/doll11.jpg';

import princess_0 from '../../img/princess/princess1.jpg';
import princess_1 from '../../img/princess/princess2.jpg';
import princess_2 from '../../img/princess/princess3.jpg';
import princess_3 from '../../img/princess/princess4.jpg';
import princess_4 from '../../img/princess/princess5.jpg';
import princess_5 from '../../img/princess/princess6.jpg';
import princess_6 from '../../img/princess/princess7.jpg';
import princess_7 from '../../img/princess/princess8.jpg';
import princess_8 from '../../img/princess/princess9.jpg';
import princess_9 from '../../img/princess/princess10.jpg';
import princess_10 from '../../img/princess/princess11.jpg';

import unicorn_0 from '../../img/unicorns/unicorn1.jpg';
import unicorn_1 from '../../img/unicorns/unicorn2.jpg';
import unicorn_2 from '../../img/unicorns/unicorn3.jpg';
import unicorn_3 from '../../img/unicorns/unicorn4.jpg';
import unicorn_4 from '../../img/unicorns/unicorn5.jpg';
import unicorn_5 from '../../img/unicorns/unicorn6.png';
import unicorn_6 from '../../img/unicorns/unicorn7.jpg';
import unicorn_7 from '../../img/unicorns/unicorn8.jpg';
import unicorn_8 from '../../img/unicorns/unicorn9.jpg';
import unicorn_9 from '../../img/unicorns/unicorn10.jpg';
import unicorn_10 from '../../img/unicorns/unicorn11.jpg';

import dragon_0 from '../../img/dragon/dragon1.jpg';
import dragon_1 from '../../img/dragon/dragon2.png';
import dragon_2 from '../../img/dragon/dragon3.jpg';
import dragon_3 from '../../img/dragon/dragon4.jpg';
import dragon_4 from '../../img/dragon/dragon5.jpg';
import dragon_5 from '../../img/dragon/dragon6.jpg';
import dragon_6 from '../../img/dragon/dragon7.jpg';
import dragon_7 from '../../img/dragon/dragon8.jpg';
import dragon_8 from '../../img/dragon/dragon9.jpg';
import dragon_9 from '../../img/dragon/dragon10.jpg';
import dragon_10 from '../../img/dragon/dragon11.png';



const initialState = {
    'dinosaur': [
        dinosaur_0,
        dinosaur_1,
        dinosaur_2,
        dinosaur_3,
        dinosaur_4,
        dinosaur_5,
        dinosaur_6,
        dinosaur_7,
        dinosaur_8,
        dinosaur_9,
        dinosaur_10, 
    ],
    'dogs': [
        dog_0,
        dog_1,
        dog_2,
        dog_3,
        dog_4,
        dog_5,
        dog_6,
        dog_7,
        dog_8,
        dog_9,
        dog_10,
    ],
    'dolls': [
        doll_0,
        doll_1,
        doll_2,
        doll_3,
        doll_4,
        doll_5,
        doll_6,
        doll_7,
        doll_8,
        doll_9,
        doll_10,
    ],
    'princess': [
        princess_0,
        princess_1,
        princess_2,
        princess_3,
        princess_4,
        princess_5,
        princess_6,
        princess_7,
        princess_8,
        princess_9,
        princess_10,
    ],
    'unicorns': [
        unicorn_0,
        unicorn_1,
        unicorn_2,
        unicorn_3,
        unicorn_4,
        unicorn_5,
        unicorn_6,
        unicorn_7,
        unicorn_8,
        unicorn_9,
        unicorn_10,
    ],
    'dragon': [
        dragon_0,
        dragon_1,
        dragon_2,
        dragon_3,
        dragon_4,
        dragon_5,
        dragon_6,
        dragon_7,
        dragon_8,
        dragon_9,
        dragon_10,
    ],
 };



const stateImages = (state = initialState, action) => {

    switch (action.type) {

        //case FLAG_OPEN_COMPARE_WINDOW:
        //    return {
        //        ...state,
        //        flagOpenCompareWindow: action.payload
        //    };
        default:
            return state;
    }
}
export default stateImages