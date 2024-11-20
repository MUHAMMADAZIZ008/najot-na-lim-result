import knex from "knex";
const db = knex({
    client: 'pg',
    connection: {
        host:'127.0.0.1',
        post: 5432,
        user: 'postgres',
        password: '3636',
        database: 'postgres'
    }
})

const user = await db.select("*").table('users')
console.log(user);


const users = await db
  .select('*')
  .fromRaw('(select * from "users" where "id" > ?)', [5]);
console.log(users);

// const result = await db('users')
//     .insert({
//         name: 'kileer',
//         email: 'killer@gmail.com',
//         password: 'qwert123',
//         role: 'user',
//         avatar: 'costumer',
//         username: 'killer',
//         phone_number: '998911452675',
//         is_active: false,
//       })
//     .returning("*")
// console.log(result);
