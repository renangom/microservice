import request from 'supertest';
import { app } from '../../infra/server';


describe("Testing api routes", () => {
    it('Should create a new product', async () => {
        const produto = {
            name: 'Produto de Teste',
            description: 'Descrição do produto de teste',
            imageUrl: 'https://exemplo.com/imagem.png',
            price: 9.99,
            stockQuantity: 10,
        };

        const response = await request(app).post('/product').send(produto).expect(201);


        expect(response.body).toEqual({
            id: response.body.id,
            ...produto
        });
    });

    it("should find a new product", async () => {
        
    })
})