const fs = require('fs');
const Path = require('path');
const {Router} = require('express');
const router = Router();

/**leer el archivo json productos*/
const json_products = fs.readFileSync('src/products.json', 'utf-8');
const productos =  JSON.parse(json_products);
/**leer el archivo json user (Cada user tiene su propio carrito de compras)*/
const json_user = fs.readFileSync('src/user.json', 'utf-8');
const users =  JSON.parse(json_user);

/**  Ruta Raiz */
router.get('/', (req, res) => {
    res.render('index', { productos });
});

/** Route: para agregar productos al carrito de mi user  */
/*router.get('/new-entry', (req, res) => {
  res.render('new-entry');
});*/

module.exports = router;