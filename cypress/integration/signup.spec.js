import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage';

describe('Signup', () => {

    /*beforeEach(function() {
        cy.fixture('deliver.json').then((d)=>{
            this.deliver = d;
        })
    })*/

    it('user should be a deliver', function() {
        
        var deliver = signupFactory.deliver();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.modalContentShouldBe(expectedMessage);

    })

    it('invalid document', function() {

        var deliver = signupFactory.deliver();
        deliver.cpf = '012365987qq';
        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido'); 
    })

    it('invalid email', function() {
        var deliver = signupFactory.deliver();
        deliver.email = 'raquelteste.com';
        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.'); 
    })

    context('Required fields', function(){
        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'deliverymethod', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signup.go();
            signup.submit();
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output);
            })
        })
    })
})
//npx cypress run -b nomeDoNavegador (Rodar teste em outros navegadores)