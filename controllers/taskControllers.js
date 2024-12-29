import Task from "../models/task.js";

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newTask = new Task({ title, description });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error interno al crear la tarea' });
    }
};


export const getAllTasks = async (req, res) => {
    try {
        const { completed } = req.query;
        let query = {};

        if (completed !== undefined) {
            query.completed = completed === 'true';  
        }

        const tasks = await Task.find(query);
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
};


export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Tarea no encontrada con ese ID' });
        }
        res.status(200).json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
};

export const updateTask = async (req, res) => {
    const { title, description, completed } = req.body;
    const newTask = {};


    if (title) newTask.title = title;
    if (description) newTask.description = description;
    if (completed !== undefined) newTask.completed = completed;

    try {
        let task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Tarea no encontrada con ese ID' });
        }

        task = await Task.findByIdAndUpdate(req.params.id, { $set: newTask }, { new: true });
        res.status(200).json(task);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
};


export const deleteTask = async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ msg: 'Tarea no encontrada con ese ID' });
        }

        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: 'Tarea eliminada exitosamente' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
};
