import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";

const app = new Hono()

app.use(
    '/admin/*',
    basicAuth({
        username: 'admin',
        password: 'secret'
    })
)

app.get('/admin/jobs', (c) =>{
    return c.text('you are authorized')
})
app.get('/', (c) =>{
    return new Response('good morning')
})

app.get('/api/hello', (c) =>{
    return c.json({
        ok: true,
        message: 'hello hono'
    })
})
app.get('posts/:id', (c) =>{
    const page = c.req.query('page')
    const id = c.req.param('id')
    c.header('x-message', 'he!')
    return c.text(`you want see ${page} of ${id}`)
})

app.post('/posts', (c) => c.text('created', 201))

app.delete('/delete/:id', (c)=> c.text(`${c.req.param('id')}`))
const port = 3000
console.log(('server is run'));
serve({
    fetch: app.fetch,
    port
})

