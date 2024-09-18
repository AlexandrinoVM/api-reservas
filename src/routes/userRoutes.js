const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const {apiMiddleware,authToken} = require('../middlewares/authMidlleware')


/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Robson"
 *               email:
 *                 type: string
 *                 example: "teste"
 *               role:
 *                 type: string
 *                 example: "admin"
 *               password:
 *                 type: string
 *                 example: "testes"
 *     responses:
 *       200:
 *         description: User created with sucess
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Robson"
 *                 email:
 *                   type: string
 *                   example: "teste"
 *                 role:
 *                   type: string
 *                   example: "admin"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-18T18:02:11.484Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-18T18:02:11.484Z"
 *       400:
 *         description: cannot create user
 *   
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: get user
 *     tags:
 *       - user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User created with sucess
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Robson"
 *                 email:
 *                   type: string
 *                   example: "teste"
 *                 role:
 *                   type: string
 *                   example: "admin"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-18T18:02:11.484Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-18T18:02:11.484Z"
 *       400:
 *         description: cannot create user
 *   
 */

/**
 * @swagger
 * /user/{user_id}:
 *   get:
 *     summary: Return the user by the ID
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - user
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *         example: 1
 *     responses:
 *       200:
 *         description: Details of the returned user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Robson"
 *                 email:
 *                   type: string
 *                   example: "robson@example.com"
 *                 role:
 *                   type: string
 *                   example: "admin"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-18T18:02:11.484Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-18T18:02:11.484Z"
 *       400:
 *         description: Cannot get the user
 *       404:
 *         description: user not found
 */


/**
 * @swagger
 * /user/:
 *   delete:
 *     summary: Update the user by the id get by the headers
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - user
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: user ID
 *         example: 1
 *     responses:
 *       200:
 *         description: user deleted
 *       400:
 *         description: cannot delete this user
 */
router.post('/',authController.userRegister)
router.get('/',apiMiddleware,userController.getUser)
router.get('/:id',userController.getUserById)
router.put('/',authToken,userController.updateUser)
router.delete('/:id',apiMiddleware,userController.deleteUser)
router.post('/login',authController.userLogin)
module.exports = router