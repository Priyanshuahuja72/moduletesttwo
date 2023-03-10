let body = document.getElementById('Wrap')
let nameChange = document.getElementById('headingSpan')
let image1 = document.getElementById('Image1')  
let divOfImg1 = document.getElementById('Image1')
let a = 0; 
let image2 = document.getElementById('Image2') 
let divOfImg2 = document.getElementById('Image2')
let b = 0; 
let image3 = document.getElementById('Image3') 
let divOfImg3 = document.getElementById('Image3')
let c = 0; 
let image4 = document.getElementById('Image4') 
let divOfImg4 = document.getElementById('Image4')
let d = 0; 
let modalClick = document.getElementById('modalImgClick')
let userInfo = document.createElement('div')  
let diceDisplay = document.createElement('div')  
diceDisplay.className = "img1_registration"
let congratsCoupon = document.createElement('div')
congratsCoupon.className = "img1_registration"
let image1Clicked = false;
let image2Clicked = false;
let image3Clicked = false;
let image4Clicked = false;

let userDetail = []
image1.addEventListener("click",() => {
    
    if(!image2Clicked){
        
        if(a<1){
            a++;
            divOfImg1.classList.add("selected")
        body.classList.add("body_blur")  
        modalClick.style.visibility = "visible"
        let registerButton = document.getElementById('regBtn')
    
        
        registerButton.addEventListener("click",() => {
            let fullName = document.getElementById('fullName').value
            let email = document.getElementById('emailAddress').value
            let username = document.getElementById('username').value
            if(fullName !== "" && email !== "" && username !== "" ){
                body.classList.remove("body_blur")
                image1Clicked = true;
                if(image1Clicked){
                    nameChange.innerText = "IMAGE 2"
                }
                let name = document.getElementById('fullName').value
                let email = document.getElementById('emailAddress').value
                let username = document.getElementById('username').value
        
                let user = {
                    userName: name,
                    userEmail: email,
                    userUsername: username
                }
                userDetail.push(user)
                modalClick.style.visibility = "hidden"
            }else{
                alert("Please fill the details properly")
            }
            
    })
        }
        
    }
    
})


    image2.addEventListener("click",() => {
        if(image1Clicked === true){
            if(!image3Clicked){
                
                if(b<1){
                    b++;
                    divOfImg1.classList.remove("selected")
                    divOfImg2.classList.add("selected")
                    body.classList.add("body_blur")
                    image2Clicked = true
                    if(image2Clicked){
                        nameChange.innerText = "IMAGE 3"
                    }
                    modalClick.style.visibility = "visible"
                    let img1Registration = document.getElementById('imageRegistration')
                    img1Registration.style.display = "none"
                
                    userInfo.className = "imageRegistration"
                
                    let usersName = document.createElement('h1')
                    let yourNameText = document.createElement('span')
                    yourNameText.className = "span_color"
                    yourNameText.innerText = "Your Name: "
                    usersName.innerText = yourNameText.innerText + ( userDetail[0].userName).toUpperCase()
                    
                    
                    usersName.className = "img2_username"
                    
                
                    let userKaUsername = document.createElement('h1')
                    userKaUsername.innerText = "Your username: " +(userDetail[0].userUsername)
                    userKaUsername.className = "img2_username"
                
                    userInfo.appendChild(usersName)
                    userInfo.appendChild(userKaUsername)
                
                    modalClick.appendChild(userInfo)
                }
                
            }
            
    }})


let secondChance = 2;
image3.addEventListener("click" , () => {
    if(image2Clicked){
        image3Clicked = true;
        if(!image4Clicked){
            
            if(c<1){
                c++;
                
                divOfImg2.classList.remove("selected")
                 divOfImg3.classList.add("selected")
                body.classList.add("body_blur")
                if(secondChance === 2){
                    modalClick.removeChild(userInfo)
                }

                userInfo.style.display = "none"
                diceDisplay.innerHTML = ""
                
                
                modalClick.style.visibility = "visible"
                let diceTitle = document.createElement('h4')
                diceTitle.className = "dice_title"
                let x = 3;
                diceTitle.innerText = "Click the dice " + x + " times";
                diceDisplay.appendChild(diceTitle)
        
                let diceImageArr = ["images/dice-six-faces-one.png","images/dice-six-faces-two.png","images/dice-six-faces-three.png","images/dice-six-faces-four.png","images/dice-six-faces-five.png","images/dice-six-faces-six.png"]
                
                let diceImage = document.createElement('img')
                diceImage.style.cursor = "pointer"
                let srcNumber = 0;
                diceImage.src = diceImageArr[srcNumber]
                
                let clickCount = 0
            
            let numberDisplay = document.createElement('div')
            numberDisplay.className = "number_display"
    
            let total = document.createElement("h2")
            total.className = "total"
            let totalNumber = 0;
    
            let totalButton = document.createElement('button')
            totalButton.className = "total_button"
    
            let tryAgain = document.createElement('h1')
            let y = 2
                diceImage.addEventListener("click",() => {
                    if(clickCount < 3){
                        x--;
                        if(x>0){
                            diceTitle.innerText = "Click the dice " + x + " times";
                        }else{
                            diceTitle.innerText = "Your Current Chance is Over";
                        }
                    srcNumber = Math.round(Math.random()*5);
                    diceImage.src = diceImageArr[srcNumber]
                    clickCount++;
    
                    let diceNumberArr = []
                    diceNumberArr.push(srcNumber+1);
    
                    let diceNumberArrDisplay = document.createElement('h4')
                    if(clickCount < 3){
                        diceNumberArrDisplay.innerText = " " + diceNumberArr + " +  ";
                    }else{
                        diceNumberArrDisplay.innerText = " " + diceNumberArr;
                    }
                    
                    totalNumber += srcNumber+1
                    total.innerText = "Total: " +totalNumber
    
                    numberDisplay.appendChild(diceNumberArrDisplay)
                    diceDisplay.appendChild(numberDisplay)
                    if(clickCount === 3){
                        if(totalNumber > 10){
                            tryAgain.innerText = "Congratulation --> Click on the 4th image and the last image"
                            totalButton.innerText = "Move Ahead"
                            totalButton.addEventListener("click" , () => {
                                body.classList.remove("body_blur")
                                image3Clicked = true
                                if(image3Clicked){
                                    nameChange.innerText = "IMAGE 4"
                                }
                                modalClick.removeChild(diceDisplay)
                                modalClick.style.visibility = "hidden"
                            })
                            diceDisplay.appendChild(tryAgain);
                            diceDisplay.appendChild(totalButton)
                        }else{
                            y--;
                            if (y === 0 || secondChance === 1) {
                                tryAgain.innerText = "Bad Luck better for next time";
                                totalButton.innerText = "Reload the page for another try";
                                totalButton.addEventListener("click", () => {
                                        location.reload();
                                 });
                                diceDisplay.appendChild(tryAgain);
                                diceDisplay.appendChild(totalButton);
                            }else{
                                tryAgain.innerText = "Oops score is less than 10 ! better luck for next time"
                                totalButton.innerText = "Try Again all the best"
                                totalButton.addEventListener("click",() => {
                                        c=0;
                                        image3Clicked = false
                                        body.classList.remove("body_blur")
                                        secondChance--;
                                        console.log(image2Clicked);       
                            })
                            diceDisplay.appendChild(tryAgain)
                            diceDisplay.appendChild(totalButton)
                            alert("Try Again after scoring more than 10")

                          }
                            
                        }
                    }
                    
                    diceDisplay.appendChild(total)
                }})
            
            
            
            diceImage.className = "dice_image"
            diceDisplay.appendChild(diceImage)
            modalClick.appendChild(diceDisplay)
            }
            
        }
        
    }
    
})

    image4.addEventListener("click",() => {
        
        if(image3Clicked){
            
            if(d<1){
                d++;
                    divOfImg3.classList.remove("selected")
                divOfImg4.classList.add("selected")

                body.classList.add("body_blur")
                modalClick.style.visibility = "visible"
                console.log((modalClick.visibility));
                let randomCoupon = coupon();
                

                let displayCoupon = document.createElement('h1')
                displayCoupon.className = "display_coupon"
                displayCoupon.innerText =  randomCoupon

                let congratsImage = document.createElement('img')
                congratsImage.className = "congrats_image"
                congratsImage.src = "images/congrats.png"

                congratsCoupon.appendChild(displayCoupon)
                congratsCoupon.appendChild(congratsImage)
                modalClick.appendChild(congratsCoupon)
            }
            
    }})

function coupon(){
    let coupon = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 12; i++) {
    coupon += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return coupon;
}
let cancelModel = document.getElementById('CancelMod')
cancelModel.addEventListener("click", () => {
    modalClick.style.visibility = "hidden"
    body.classList.remove("body_blur")
})