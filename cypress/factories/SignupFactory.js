var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {
    deliver: function(){

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {
                name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '88963521410',
                address: {
                    postal_code: 63700155,
                    street: 'Rua Clóvis Beviláqua',
                    number: '1477',
                    details: 'apto 01',
                    district: 'São Vicente',
                    city_state: 'Crateús/CE'
    
                },
                deliver_method: 'Moto',
                cnh: 'cnh-digital.jpg.jpg'
        }
        return data;
    }
}