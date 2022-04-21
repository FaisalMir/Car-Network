{/*This file contains all the dummy data needed for the app
    to be designed and working. For this version of the app,
    all the information is being included and coded in. But
    in the future versions of the app, these informations
    will instead be dynamic so users can fill in the data
    points as required. */}

import assets from "./assets";

const PhotoData = [
    {
        //a unique id given to each image
        id: "CarPic1",
        //the title of the print
        title: "Foxbody Mustang",
        //the creator of the vehicle
        creator: "Ford Shelby",
        //the date the image was taken
        date: "August 3, 2021",
        //a short description about the image
        description: "This picture was taken right before the beginning of spring.",
        //the price of the bid at the time of viewing
        price: 50,
        //connecting the image of the car with these list of crieterias
        image: assets.car1,
    },

    {
        id: "CarPic2",
        title: "Frankenstein",
        creator: "Toyota",
        date: "July 14, 2021",
        description: "This car is a product of parts from multiple different cars",
        price: 89.99,
        image: assets.car2,
    },
    {
        id: "CarPic3",
        title: "Hakone",
        creator: "Mitsubishi and Honda",
        date: "January 19, 2022",
        description: "A picture taken in front of the Cornwall entrance in Regina, SK",
        price: 210,
        image: assets.car3,
    },

    {
        id: "CarPic4",
        title: "Kyle's Miata",
        creator: "Mazda",
        date: "September 8, 2021",
        description: "A lowered miata in front of the Conexus hall",
        price: 39.99,
        image: assets.car4,
    },

    {
        id: "CarPic5",
        title: "Airport Shot",
        creator: "Honda, Nissan and Subaru",
        date: "February 7, 2022",
        description: "A picture taken at the airport shortly before security arrived",
        price: 19.99,
        image: assets.car5,
    },

    {
        id: "CarPic6",
        title: "Blaze's Fiero",
        creator: "Pontiac",
        date: "October 31, 2021",
        description: "A Halloween shoot for a car covered in blood and in the rain",
        price: 76.99,
        image: assets.car6,
    },
];

export {PhotoData};