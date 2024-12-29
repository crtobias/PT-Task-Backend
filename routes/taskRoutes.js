import express from "express";
import { createTask , getAllTasks , getTaskById , updateTask , deleteTask } from "../controllers/taskControllers.js";
import { validationId, validationTitle } from "../validation/task-validation.js";

const router = express.Router();

router.post('/', validationTitle() ,createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


export default router;


/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API para gestionar tareas
 */

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la tarea
 *               description:
 *                 type: string
 *                 description: Descripción de la tarea
 *               completed:
 *                 type: boolean
 *                 description: Estado de la tarea, por defecto es false
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *       400:
 *         description: Solicitud mal formada
 */

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Obtener todas las tareas o filtrarlas por estado
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: completed
 *         description: Filtrar tareas por estado de completado
 *         required: false
 *         schema:
 *           type: boolean
 *     responses:
 *       200:
 *         description: Lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la tarea
 *                   title:
 *                     type: string
 *                     description: Título de la tarea
 *                   description:
 *                     type: string
 *                     description: Descripción de la tarea
 *                   completed:
 *                     type: boolean
 *                     description: Estado de la tarea
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación
 *       400:
 *         description: Solicitud mal formada
 */

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Obtener una tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la tarea
 *                 title:
 *                   type: string
 *                   description: Título de la tarea
 *                 description:
 *                   type: string
 *                   description: Descripción de la tarea
 *                 completed:
 *                   type: boolean
 *                   description: Estado de la tarea
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de creación
 *       404:
 *         description: Tarea no encontrada
 */

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Actualizar una tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Nuevo título de la tarea
 *               description:
 *                 type: string
 *                 description: Nueva descripción de la tarea
 *               completed:
 *                 type: boolean
 *                 description: Nuevo estado de la tarea
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 *       400:
 *         description: Solicitud mal formada
 *       404:
 *         description: Tarea no encontrada
 */

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Eliminar una tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 *       404:
 *         description: Tarea no encontrada
 */


