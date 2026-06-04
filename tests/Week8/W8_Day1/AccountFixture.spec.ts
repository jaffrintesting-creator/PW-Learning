import { test, expect } from './AccountFixture';


test('Login Page', async({loginPage}) => {
    
    // Valid Credential
    await loginPage.login("demoCSR2", "crmsfa");
    
})