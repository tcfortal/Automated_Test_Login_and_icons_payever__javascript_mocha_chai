
const { te } = require('date-fns/locale');
const {Builder, By, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chai = require('chai');



var assert = require('chai').assert





const baseForm = '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div'



describe('Test Case 1 ()', () => {



    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
     }


    it('verify URL ', async () => {
      var variable_fashion = "fashion"
        driver = await new Builder().forBrowser('chrome').build();
         var Actuel_Url = await driver.get('https://commerceos.staging.devpayever.com/registration/'+ variable_fashion);
            await sleep(3000);

               assert.equal(variable_fashion, "fashion")
                   await sleep(3000);
   });




it('verify way ', async () => {

await sleep(1000);

await driver.findElement(By.xpath(baseForm + '/two-column-form/div/peb-form-field-input[1]/div/div/span')).click();
await sleep(1000);

   await driver.findElement(By.xpath(baseForm + '/two-column-form/div/peb-form-field-input[1]/div/div/div/input')).sendKeys('');//preencha com seu nome
   await sleep(1000);
        
      await driver.findElement(By.xpath(baseForm + '/two-column-form/div/peb-form-field-input[2]/div/div/span')).click()
      await sleep(1000);;

         await driver.findElement(By.xpath(baseForm + '/two-column-form/div/peb-form-field-input[2]/div/div/div/input')).sendKeys(''); //preencha com seu sobrenome
         await sleep(1000);
                  
            await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[1]/div/div/span')).click();
            await sleep(1000);

               await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[1]/div/div/div/input[1]')).sendKeys(''); //preencha com seu sobrenome
               await sleep(1000);

                  await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[2]/div/div/span')).click();
                  await sleep(1000);

                     await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[2]/div/div/div/input[1]')).sendKeys('');  //preencha com sua senha
                     await sleep(1000);


                        await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[3]/div/div/span')).click();
                        await sleep(1000);

                           await driver.findElement(By.xpath(baseForm + '/peb-form-field-input[3]/div/div/div/input[1]')).sendKeys(''); //preencha com sua senha
                           await sleep(1000);


                              await driver.findElement(By.xpath('//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/button[1]/pe-progress-button-content')).click();
                              await sleep(5000);



       var baseForm2 = '//*[@id="layout-container"]/div/entry-default-business-registration/entry-create-business-form/form/peb-form-background/div'

                                             
                              await driver.findElement(By.xpath(baseForm2 +'/peb-form-field-input/div/div/span')).click();
                              await sleep(2000);                
                                                                  
                            await driver.findElement(By.xpath(baseForm2 + '/peb-form-field-input/div/div/div/input')).sendKeys(''); //preencha com o nome da sua loja
                           await sleep(2000);

               
                        await driver.findElement(By.xpath(baseForm2 + '/pe-autocomplete/peb-form-field-input/div/div[1]')).click();
                        await sleep(1000);

                                                         
                     await driver.findElement(By.xpath(baseForm2 + '/pe-autocomplete/peb-form-field-input/div/div[1]/div/input')).click();
                     await sleep(1000);

                  await driver.findElement(By.xpath('//*[@id="mat-option-6"]')).click();
                  await sleep(2000);



            
               await driver.findElement(By.xpath(baseForm2 + '/two-column-form/div/peb-form-field-input/div/div/span')).click();
               await sleep(2000);
                                                   
                                                
            await driver.findElement(By.xpath(baseForm2 + '/two-column-form/div/peb-form-field-input/div/div/div/input')).sendKeys(''); //preencha com seu telefone
            await sleep(2000);


         await driver.findElement(By.xpath('//*[@id="layout-container"]/div/entry-default-business-registration/button/pe-progress-button-content')).click();
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

                  it('verify Item Products' ,  async() => { 
                     let Products = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(3) > div.icons__title')).getText();
                     
                     assert.equal( Products, "Products");
               
                     });

                           it('verify Item Transactions' ,  async() => { 
                              let Transactions = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(4) > div.icons__title')).getText();
                              
                              assert.equal( Transactions, "Transactions");
                        
                              });

                                    it('verify Item Shop' ,  async() => { 
                                       let Shop = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(6) > div.icons__title')).getText();
                                       
                                       assert.equal( Shop, "Shop");
                                 
                                       });
         
                                                it('verify Item Settings' ,  async() => { 
                                                   let Settings = await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(17) > div.icons__title')).getText();
                                                   
                                                   assert.equal( Settings, "Settings");
                                             
                                                   });
                                             



      it('verify Message Item , is not in page.' ,  async() => { 

      let point_of_sale =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(5) > div.icons__title')).getText();
      let Coupons =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(7) > div.icons__title')).getText();
      let Invoice =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(8) > div.icons__title')).getText();
      let Blog =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(9) > div.icons__title')).getText();
      let Site =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(10) > div.icons__title')).getText();
      let Studio =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(11) > div.icons__title')).getText();
      let Shipping =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(12) > div.icons__title')).getText();
      let Appointments =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(13) > div.icons__title')).getText();
      let Subscriptions =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(14) > div.icons__title')).getText();
      let Social =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(15) > div.icons__title')).getText();
      let Afiliates =  await driver.findElement(By.css('body > app-root > app-lazy > user-dashboard > base-dashboard > div > div > div > widgets-layout > div > div > apps-widget > pe-widget > div > div > div.widget__content > div.widget__body > pe-widget-icons > div > div > div > div:nth-child(16) > div.icons__title')).getText();
      let Message = "Message"
       



         assert.notInclude(
            [
            point_of_sale,
            Coupons,
            Invoice,    
            Blog,
            Site,     
            Studio,
            Shipping,
            Appointments,
            Subscriptions,
            Social,
            Afiliates
         ],
         Message);

      
            });



    after(async function() {
     await driver.quit();
    });
 

});

