/**
 * @swagger
 * /booking:
 *   post:
 *     summary: Cria uma nova reserva
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               timeslot_id:
 *                 type: integer
 *                 example: 1
 *               service_id:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: "confirmed"
 *               payment_method_id:
 *                 type: string
 *                 example: "pm_card_visa"
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Booking created successfully"
 *                 booking:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 2
 *                     user_id:
 *                       type: integer
 *                       example: 1
 *                     timeslot_id:
 *                       type: integer
 *                       example: 1
 *                     service_id:
 *                       type: integer
 *                       example: 1
 *                     status:
 *                       type: string
 *                       example: "confirmed"
 *                     payment_status:
 *                       type: string
 *                       example: "paid"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-09-18T18:02:11.484Z"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-09-18T18:02:11.484Z"
 *       401:
 *         description: Não autorizado - Token inválido ou ausente
 */

/**
 * @swagger
 * /booking:
 *   delete:
 *     summary: Delete a booking reserv
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               service_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: booking deleted with sucess
 *       401:
 *         description: error trying to delete de booking
 *       404:
 *         description: error trying to delete because booking may not exist
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
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

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: User login
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
 *                 example: "robson"
 *               password:
 *                 type: string
 *                 example: "testes"
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "logged"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI2NzUzNTg2LCJleHAiOjE3MjY3NTcxODZ9.xFkLqNDhIZcWxw50QpCOdur9y4I0IxwbjlI8IV3tZkk"
 *       401:
 *         description: Unauthorized - Invalid credentials
 */
/**
 * @swagger
 * /service:
 *   post:
 *     summary: Create a new service (Admin only)
 *     security:
 *       - bearerAuth: [] 
 *     tags:
 *       - service
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "professional"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 25.00
 *               description:
 *                 type: string
 *                 example: "aircut service."
 *               start_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-15 09:20:00"
 *               end_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-15 10:50:00"
 *               avaliable_slots:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: Service created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "service created"
 *       400:
 *         description: Bad request - Cannot create this service
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "cannot create this service"
 *       401:
 *         description: Unauthorized - User not logged in
 *       403:
 *         description: Forbidden - User is not an administrator
 */

/**
 * @swagger
 * /service:
 *   get:
 *     summary: Get all available services
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - service
 *     responses:
 *       200:
 *         description: Successfully retrieved services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "professional"
 *                   description:
 *                     type: string
 *                     example: "aircut service."
 *                   price:
 *                     type: string
 *                     example: "25.00"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-09-18T15:53:59.000Z"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-09-18T15:53:59.000Z"
 *       401:
 *         description: Unauthorized - User not logged in
 */

/**
 * @swagger
 * /service/{id}:
 *   put:
 *     summary: Update an existing service
 *     security:
 *       - bearerAuth: [] 
 *     tags:
 *       - service
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the service to be updated
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "test"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 666.00
 *               description:
 *                 type: string
 *                 example: "A professional duoling."
 *               avaliable_slots:
 *                 type: integer
 *                 example: 10
 *               start_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-15 09:20:00"
 *               end_time:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-20 09:20:00"
 *     responses:
 *       200:
 *         description: Service updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "service updated"
 *       400:
 *         description: Error in request or service not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "there is no service on database"
 *       401:
 *         description: Unauthorized - User not logged in
 *       404:
 *         description: Service not found
 */

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update an existing user's information
 *     security:
 *       - bearerAuth: [] 
 *     tags:
 *       - user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the user to be updated
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "tete2"
 *               email:
 *                 type: string
 *                 example: "email@email"
 *               password:
 *                 type: string
 *                 example: "julinho"
 *     responses:
 *       200:
 *         description: User updated successfully
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
 *                   example: "tete2"
 *                 role:
 *                   type: string
 *                   example: "admin"
 *                 email:
 *                   type: string
 *                   example: "email@email"
 *                 password:
 *                   type: string
 *                   example: "$2a$10$hzsFB0A8QW3juduAKXh3B./6BWZhD8A.ymTHaBBjYjHa//xZoeEiK"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-18T15:53:43.000Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-09-19T15:49:40.000Z"
 *       400:
 *         description: Error in request or user not found
 *       401:
 *         description: Unauthorized - User not logged in
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /service/{id}:
 *   delete:
 *     summary: Delete a service by its ID
 *     security:
 *       - bearerAuth: []  
 *     tags:
 *       - service
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the service to be deleted
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Service deleted successfully"
 *       400:
 *         description: Error while trying to delete the service, possibly due to existing bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Cannot delete the service. There are bookings associated with this timeslot."
 *       401:
 *         description: Unauthorized - User not logged in or not an administrator
 *       404:
 *         description: Service not found
 */
