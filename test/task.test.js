import request from "supertest"

// testing directo al deploy pero podria apuntar a app
const baseUrl = 'https://pt-task-backend.onrender.com';

describe('Task API Endpoints', () => {
  let taskId; 

  test('POST /task - Crear una tarea', async () => {
    const newTask = {
      title: 'Prueba Tarea',
      description: 'Esto es una tarea de prueba'
    };

    const response = await request(baseUrl)
      .post('/task')
      .send(newTask);

    expect(response.status).toBe(201); 
    expect(response.body).toHaveProperty('_id'); 
    expect(response.body.title).toBe(newTask.title);

    taskId = response.body._id;
  });

  test('GET /task - Obtener todas las tareas', async () => {
    const response = await request(baseUrl).get('/task');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /task?completed=true - Filtrar tareas completadas', async () => {
    const response = await request(baseUrl).get('/task?completed=true');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    response.body.forEach(task => {
      expect(task.completed).toBe(true);
    });
  });

  test('GET /task/:id - Obtener una tarea por ID', async () => {
    const response = await request(baseUrl).get(`/task/${taskId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', taskId);
  });

  test('PUT /task/:id - Editar una tarea por ID', async () => {
    const updatedTask = {
      title: 'Tarea Editada',
      description: 'Descripción actualizada',
    };

    const response = await request(baseUrl)
      .put(`/task/${taskId}`)
      .send(updatedTask);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(updatedTask.title);
    expect(response.body.description).toBe(updatedTask.description);
  });

  test('DELETE /task/:id - Eliminar una tarea por ID', async () => {
    const response = await request(baseUrl).delete(`/task/${taskId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('msg', 'Tarea eliminada exitosamente');
  });

  test('GET /docs - Verificar documentación Swagger', async () => {
    const response = await request(baseUrl).get('/docs').redirects(1); 

    expect(response.status).toBe(200);
    expect(response.text).toContain('Swagger UI'); 
  });

});