import small from '../images/small.jpg';
import './image_viewer.css';

export default () => {
    const image = document.createElement('img');
    image.src = small;
    document.body.appendChild(image);
};