const request = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/accounts';
let user;

//jest.setTimeout(20000); // Aumente o tempo limite globalmente

beforeAll(async () => {
   const res = await app.services.user
   .save({ name: 'User Account', mail: `${Date.now()}@mail.com`, password:'123456'});
    user = { ...res[0]};
});

test('Deve inserir uma conta com sucesso', () => {
    return request(app).post(MAIN_ROUTE)
    .send({name: 'Acc #1', user_id: user.id})
    .then((result) => {
        expect(result.status).toBe(201);
        expect(result.body.name).toBe('Acc #1')
    });    
});

test('Não deve inserir uma conta sem nome', ()=> {
    return request(app).post(MAIN_ROUTE)
    .send({user_id: user.id})
    .then((result) => {
        expect(result.status).toBe(400);
        expect(result.body.error).toBe('Nome é um atributo obrigatório')
    });    
})

test('Deve listar todas as contas',  () => {
    return  app.db('accounts')
        .insert({ name: 'Acc list', user_id: user.id})
        .then(async () => await request(app).get(MAIN_ROUTE))
        .then( (res) => {
             expect(res.status).toBe(200);
             expect(res.body.length).toBeGreaterThan(0);        
    })
})

test('deve retornar uma conta por Id', () => {
    return app.db('accounts')
    .insert({ name: 'Acc by Id', user_id: user.id},['id'])
    .then(async acc => await request(app).get(`${MAIN_ROUTE}/${acc[0].id}`))
    .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.name).toBe('Acc by Id');
        expect(res.body.user_id).toBe(user.id);
    })
})

test('Deve alterar uma conta', () => {
    return app.db('accounts')
    .insert({ name: 'Acc Alterar', user_id: user.id},['*'])
    .then(acc => 
        request(app).put(`${MAIN_ROUTE}/${acc[0].id}`)
        .send({name: 'Acc Updated'}))
    .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.name).toBe('Acc Updated')
    })    
})

test('Deve remover uma conta', () => {
    return app.db('accounts')
        .insert({name: 'Acc #1 Delete', user_id: user.id}, ['*'])
        .then(acc => 
                request(app).delete(`${MAIN_ROUTE}/${acc[0].id}`))
        .then((res) => {
            expect(res.status).toBe(204);
        })
});