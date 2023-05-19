import express from "express";
const router = express.Router();

import * as LoginController from "../controllers/auth";
import * as userController from "../controllers/user";
import * as categoriesController from "../controllers/categorie";
import * as productsController from "../controllers/products";
import * as requestController from "../controllers/request";
import * as orderController from "../controllers/order";
import * as cantactController from "../controllers/cantact";
import chechAuth from "../utils/chechAuth";


router
  //auth
  .post('/login', LoginController.login)
  //users
  .get('/user', userController.getuser)
  .post('/user', userController.createUser)
  //categories
  .get('/categories', categoriesController.getcategorie)
  .get('/categories/:id', categoriesController.getcategoriebyId)
  .post('/categories', chechAuth, categoriesController.createcategorie)
  .put('/categories/:id', chechAuth, categoriesController.updatecategorie)
  .delete('/categories/:id', chechAuth, categoriesController.removeCollection)
  //Products
  .get('/products', productsController.getProducts)
  .get('/products/:id', productsController.getProductsbyId)
  .get('/productsbycategories/:id', productsController.getProductsbycategories)
  .post('/products', chechAuth, productsController.createProducts)
  .put('/products/:id', chechAuth, productsController.updateProducts)
  .delete('/products/:id', chechAuth, productsController.removeProducts)
  //Request
  .get('/request', requestController.getrequest)
  .get('/request/:id', requestController.getrequestbyId)
  .post('/request', requestController.createrequest)
  .delete('/request/:id', chechAuth, requestController.removerequest)
  //Order
  .get('/order', orderController.getorder)
  .get('/order/:id', orderController.getorderbyId)
  .post('/order', orderController.createorder)
  .delete('/order/:id', chechAuth, orderController.removeorder)
  //Contact
  .get('/cantact', cantactController.getcantact)
  .post('/cantact', chechAuth, cantactController.createcantact)
  .put('/cantact/:id', chechAuth, cantactController.updatecantact)
  .delete('/cantact/:id', chechAuth, cantactController.removeContact)

export default router;