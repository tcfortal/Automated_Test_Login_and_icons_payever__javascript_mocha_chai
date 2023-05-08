
const { te } = require('date-fns/locale');
const {Builder, By, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chai = require('chai');



var assert = require('chai').assert





const baseForm = '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div'



describe('Test Case 2 ()', () => {



    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
     }


    it('verify URL ', async () => {
      var variable_fashion = "santander"
        driver = await new Builder().forBrowser('chrome').build();
         var Actuel_Url = await driver.get('https://commerceos.staging.devpayever.com/registration/'+ variable_fashion);
            await sleep(3000);

               assert.equal(variable_fashion, "santander")
                   await sleep(3000);
   });




it('verify way ', async () => {

await sleep(1000);

await driver.findElement(By.xpath(baseForm + '/two-column-form/div/peb-form-field-input[1]/div/div/span')).click();
await sleep(1000);

   await driver.findElement(By.xpath(baseForm + '/two-column-form/div/peb-form-field-input[1]/div/div/div/input')).sendKeys(''); //preencha com seu nome
   await sleep(1000);
        
      await driver.findElement(By.xpath(baseForm + '/two-column-form/div/peb-form-field-input[2]/div/div/span')).click()
      await sleep(1000);;

         await driver.findElement(By.xpath(baseForm + '/two-column-form/div/peb-form-field-input[2]/div/div/div/input')).sendKeys('César');//preencha com seu sobrenome
         await sleep(1000);
                  
            await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[1]/div/div/span')).click();
            await sleep(1000);

               await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[1]/div/div/div/input[1]')).sendKeys(''); //preencha com seu email
                await sleep(1000);

                  await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[2]/div/div/span')).click();
                  await sleep(1000);

                     await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[2]/div/div/div/input[1]')).sendKeys(''); // preencha com sua senha 
                     await sleep(1000);


                        await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[3]/div/div/span')).click();
                        await sleep(1000);

                           await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[3]/div/div/div/input[1]')).sendKeys(''); // confirme sua senha
                           await sleep(1000);


                              await driver.findElement(By.xpath('//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/button[1]/pe-progress-button-content')).click();
                              await sleep(5000);



      var baseForm2 = '//*[@id="layout-container"]/div/entry-dynamic-business-registration/entry-dynamic-business-form/form/peb-form-background/div'

                                                                 
                              await driver.findElement(By.xpath(baseForm2 + '/peb-form-field-input[1]/div/div/span')).click();
                              await sleep(2000);                
                                                               
                            await driver.findElement(By.xpath(baseForm2 + '/peb-form-field-input[1]/div/div/div/input')).sendKeys(''); //preencha com o nome da sua empresa
                           await sleep(2000);


                                                             
                        await driver.findElement(By.xpath(baseForm2 + '/pe-autocomplete-industry/pe-autocomplete/peb-form-field-input/div/div[1]')).click();
                        await sleep(1000);
                                                         
                     await driver.findElement(By.xpath(baseForm2 + '/pe-autocomplete-industry/pe-autocomplete/peb-form-field-input/div/div[1]/div/input')).click();
                     await sleep(1000);

                  await driver.findElement(By.xpath('//*[@id="mat-option-6"]')).click();
                  await sleep(2000);   
      

             await driver.findElement(By.xpath(baseForm2 + '/pe-input-phone/peb-form-field-input/div/div/span')).click();
             await sleep(2000);
                                            
                                                    
          await driver.findElement(By.xpath(baseForm2 + '/pe-input-phone/peb-form-field-input/div/div/div/input')).sendKeys(''); //preencha com seu telefone 
          await sleep(2000);


       await driver.findElement(By.xpath(baseForm2 + '/peb-form-field-input[2]/div/div/span')).click();
       await sleep(2000);
                                                   
                                                   
    await driver.findElement(By.xpath(baseForm2 + '/peb-form-field-input[2]/div/div/div/input')).sendKeys('');//preencha com number
    await sleep(2000);







await driver.findElement(By.xpath('//*[@id="layout-container"]/div/entry-dynamic-business-registration/button/pe-progress-button-content')).click();
await sleep(10000);

await driver.findElement(By.xpath('//*[@id="cdk-overlay-1"]/welcome-screen/div/div/button/pe-progress-button-content')).click();
await sleep(6000);

});



         

      it('verify Item Checkout' ,  async() => { 
        let Checkout = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(1) > div.icons__title')).getText();
    
        assert.equal( Checkout, "Checkout");

         });

            it('verify Item Connect' ,  async() => { 
               let Connect = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(2) > div.icons__title')).getText();
            
               assert.equal( Connect, "Connect");
         
               });

                  it('verify Item point_of_sale' ,  async() => { 
                    let point_of_sale = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(3) > div.icons__title')).getText();
                      
                     assert.equal( point_of_sale, "Point of Sale");
               
                     });

                           it('verify Item Transactions' ,  async() => { 
                            let Transactions = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(4) > div.icons__title')).getText();
                              
                              assert.equal( Transactions, "Transactions");
                        
                              });

                                      it('verify Item Settings' ,  async() => { 
                                        let Settings = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(5) > div.icons__title')).getText();

                                          assert.equal( Settings, "Settings");
                                          await sleep(5000);

                                           });
                                         
                                             



   


    after(async function() {
     await driver.quit();
    });
 

});

