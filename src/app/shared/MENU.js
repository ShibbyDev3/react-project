import beerImage from '../assets/img/menu/beer.jpg';
import bratwurstImage from '../assets/img/menu/bratwurst.jpg';
import chocolateImage from '../assets/img/menu/chocolate.jpg';
import nachoImage from '../assets/img/menu/nacho.jpg';
import pizzaImage from '../assets/img/menu/pizza.jpg';
import popcornImage from '../assets/img/menu/popcorn.jpg';
import sodaImage from '../assets/img/menu/soda.jpg';
import sourwormsImage from '../assets/img/menu/sourworms.jpg';

const menuData = [
    {
        id: 0,
        name: `Popcorn`,
        price: `$9.99`,
        description: `Salty, Buttery, Delicious. What else needs to be said about this classic movie staple...othen than we offer free refills.`,
        image: popcornImage,
        category: `food`
    },
    {
        id: 1,
        name: `Nachos`,
        price: `$9.99`,
        description: `Corn tortilla chips smothered in beef, cheese and salsa. A great way to kick the movie up a notch!`,
        image: nachoImage,
        category: `food`
    },
    {
        id: 2,
        name: `Bratwurst`,
        price: `$9.99`,
        description: `Why settle for a hot dog, when you can have a bratwurst instead. We offer a variety of toppings!`,
        image: bratwurstImage,
        category: `food`
    },
    {
        id: 3,
        name: `Personal Pizza`,
        price: `$9.99`,
        description: `Grab yourself a delicious peronsal pan pizza. (We won't charge extra if you ask for a cup of jalapenos)`,
        image: pizzaImage,
        category: `food`
    },
    {
        id: 4,
        name: `Sour Worms`,
        price: `$2.99`,
        description: `Do you like a snack that bites back? Well then you will love our sour worms. Fruity, Sour, and Sweet.`,
        image: sourwormsImage,
        category: `candy`
    },
    {
        id: 5,
        name: `Chocolate`,
        price: `$2.99`,
        description: `You'll love the milk chocolate that we offer, you'll love it even more mixed into your popcorn.`,
        image: chocolateImage,
        category: `candy`
    },
    {
        id: 5,
        name: `Soda`,
        price: `$1.99`,
        description: `You'll need something to wash down those tasty treats. Why do you treat your self to a soda.`,
        image: sodaImage,
        category: `beverages`
    },
    {
        id: 6,
        name: `Beer`,
        price: `$9.99`,
        description: `Sometimes a soda doesn't cut it. We have many different beers on tap. Served ice cold.`,
        image: beerImage,
        category: `beverages`
    },
]