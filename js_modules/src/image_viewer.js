import big from '../images/big.jpg';
import small from '../images/small.jpg';

import './image_viewer.css';
const image1 = document.createElement('img');
const image2 = document.createElement('img');
image1.src = big;
image2.src = small;

document.body.appendChild(image1);
document.body.appendChild(image2);

