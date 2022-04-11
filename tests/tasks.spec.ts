import { test } from '@japa/runner'

test.group('Task', () => {
  test('task create', async ({ assert, client }) => {
    const response = await client.post('/tasks/create').json({
      title: 'Teste',
      description: 'Teste',
    })

    console.log(response.body())

    assert.equal(response.status(), 200)
  })

  test('edit task', async ({ assert, client }) => {
    const response = await client.put('/tasks/edit/1').json({
      title: 'Teste',
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
