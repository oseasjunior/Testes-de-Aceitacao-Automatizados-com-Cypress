import user from '../pages/UserRegistrationPage'
import userFactory from '../factories/UserRegistrationFactory'

describe('User Registration', function () {
    
    var register = userFactory.user()

    it('valid user registration', function () {
        user.go();
        user.clickLinkForm();
        user.clickLinkCreateUser()
        user.fillForm(register);
        user.btnCreate();
        user.noticeContentShouldBe('Usuário Criado com sucesso')

    });

    it('list users', () => {
        user.go();
        user.clickLinkForm();
        user.clickLinkList();
        user.listContentShouldBe('Lista de Usuários!!');
        
    });

    it('delete user ', () => {
        user.go();
        user.clickLinkForm();
        user.clickLinkList();
        user.clickIconDelete();
        user.noticeContentShouldBe('Seu Usuário foi removido com sucesso!')
        user.btnBack();

        
    });

});