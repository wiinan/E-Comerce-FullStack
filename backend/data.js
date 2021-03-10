import bcrypt from 'bcryptjs';
const data =  {
    users: [
        {
            name:'admin',
            email:'admin@email.com',
            password:bcrypt.hashSync('123',8),
            isAdmin: true
        },
        {
            name:'test',
            email:'test@email.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false
        }
    ],
    product:[
        {
            name:'Mi A3',
            image: '../images/91AHzW462WL._AC_SX466_.jpg',
            price:1200,
            countInStock:10,
            brand:'Xiaomi',
            rating:4.5,
            numReviews:10,
            description:'high quality'
        },
        {
            name:'Redmi 8',
            image: '../images/91AHzW462WL._AC_SX466_.jpg',
            price:1250,
            countInStock:10,
            brand:'Xiaomi',
            rating:4.5,
            numReviews:10,
            description:'high quality'
        },
        {
            name:'MiA',
            image: '../images/91AHzW462WL._AC_SX466_.jpg',
            price:1200,
            countInStock:10,
            brand:'Xiaomi',
            rating:5.0,
            numReviews:10,
            description:'high quality'
        },
        {
            name:'Mi A2',
            image: '../images/91AHzW462WL._AC_SX466_.jpg',
            price:1200,
            countInStock:10,
            brand:'Xiaomi',
            rating:3.5,
            numReviews:10,
            description:'high quality'
        },
        {
            name:'Redmi 9',
            image: '../images/91AHzW462WL._AC_SX466_.jpg',
            price:1200,
            countInStock:10,
            brand:'Xiaomi',
            rating:4.5,
            numReviews:10,
            description:'high quality'
        },
    ]
};
export default data;