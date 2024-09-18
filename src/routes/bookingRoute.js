const Booking = require('../controllers/bookingController')
const verifiJwt = require('../middlewares/authMidlleware')
const express = require('express')
const router = express.Router()

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
router.post('/',verifiJwt.authToken,Booking.Booking)
router.delete('/',verifiJwt.authToken,Booking.DeleteBooking)

module.exports = router