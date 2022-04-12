import { test } from '@japa/runner'

test.group('Task', () => {
  test('create task', async ({ assert, client }) => {
    const response = await client.post('/tasks/create').json({
      title: 'Task',
      description: 'teste',
    })

    console.log(response.body())

    assert.equal(response.status(), 200)
  })

  test('get task', async ({ assert, client }) => {
    const response = await client.get('/tasks/1')
    console.log(response.body())

    assert.equal(response.status(), 200)
  })

  test('get tasks', async ({ assert, client }) => {
    const response = await client.get('/tasks')
    console.log(response.body())

    assert.equal(response.status(), 200)
  })

  test('edit task', async ({ assert, client }) => {
    const response = await client.put('/tasks/edit/1').json({
      title: 'Task 232',
      description: 'Teste',
      status: 'WORKING',
    })

    console.log(response.body())

    assert.equal(response.status(), 200)
  })

  test('finish task', async ({ assert, client }) => {
    const response = await client.put('/tasks/finish/1')

    console.log(response.body())

    assert.equal(response.status(), 200)
  })

  test('delete task', async ({ assert, client }) => {
    const response = await client.delete('/tasks/delete/1')

    console.log(response.body())

    assert.equal(response.status(), 200)
  })
})
