import express from "express";
const router = express.Router();

import * as LoginController from "../controllers/auth";
import * as userController from "../controllers/user";
import * as categoriesController from "../controllers/categorie";
import * as productsController from "../controllers/products";
import * as requestController from "../controllers/request";
import * as orderController from "../controllers/order";
import * as cantactController from "../controllers/cantact";

router
  //auth
  .post('/login', LoginController.login)
  //users
  .get('/user', userController.getuser)
  //categories
  .get('/categories', categoriesController.getcategorie)
  .get('/categories/:id', categoriesController.getcategoriebyId)
  .post('/categories', categoriesController.createcategorie)
  .put('/categories/:id', categoriesController.updatecategorie)
  .delete('/categories/:id', categoriesController.removeCollection)
  //Products
  .get('/products', productsController.getProducts)
  .get('/products/:id', productsController.getProductsbyId)
  .post('/products', productsController.createProducts)
  .put('/products/:id', productsController.updateProducts)
  .delete('/products/:id', productsController.removeProducts)
  //Request
  .get('/request', requestController.getrequest)
  .get('/request/:id', requestController.getrequestbyId)
  .post('/request', requestController.createrequest)
  .delete('/request/:id', requestController.removerequest)
  //Order
  .get('/order', orderController.getorder)
  .get('/order/:id', orderController.getorderbyId)
  .post('/order', orderController.createorder)
  .delete('/order/:id', orderController.removeorder)
  //Contact
  .get('/cantact', cantactController.getcantact)
  .post('/cantact', cantactController.createcantact)
  .put('/cantact/:id', cantactController.updatecantact)
  .delete('/cantact/:id', cantactController.removeContact)

export default router;