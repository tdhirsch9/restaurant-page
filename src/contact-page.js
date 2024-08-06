import Penguin from './penguin.png';
import Background from './background.jpg'

const Loadcontactspage = (() => {

    const contents = [
        "Contact Us",
        "Big Penguin",
        "Medium Penguin",
        "Lil Penguin"
    ]
    
    const contactList = [
        "",
        "",
        "",
    ]

    const content = document.getElementById("content");
    

    for (let i = 0; i < contents.length; i++){
        let newContainer = document.createElement("div")
        newContainer.classList.add("sub-container", `sub-container-${i + 1}`)
        newContainer.textContent = contents[i]
        content.appendChild(newContainer)

        if(i === 0){
            newContainer.textContent = '';
            newContainer.classList.remove("sub-container-1")
            newContainer.classList.add("contact-container-1")
            const restaurantName = document.createElement('h1')
            restaurantName.textContent = contents[0]
            restaurantName.classList.add("contact-us")
            newContainer.appendChild(restaurantName)
            for (let j = 0; j < 2; j++){
                const penguinIcon = document.createElement('img');
                penguinIcon.src = Penguin
                penguinIcon.classList.add("penguin-pic", `penguin-pic-${j + 1}`);
                newContainer.appendChild(penguinIcon) 
            }
        } else if(i === 1){
            newContainer.classList.remove("sub-container-2")
            newContainer.classList.add("contact-container-2")
            newContainer.textContent = '';
            const employeeName = document.createElement('p')
            employeeName.textContent = contents[1]
            employeeName.classList.add("employee-name")
            newContainer.appendChild(employeeName)

            const employeeTitle = document.createElement('p')
            employeeTitle.textContent = "Chef"
            employeeTitle.classList.add("employee-title", "employee-info")
            newContainer.appendChild(employeeTitle)

            const employeeNumber = document.createElement('p')
            employeeNumber.textContent = "133-333-3337"
            employeeNumber.classList.add("employee-number", "employee-info")
            newContainer.appendChild(employeeNumber)

            const employeeEmail = document.createElement('p')
            employeeEmail.textContent = "definitelyRealEmail@arctic.com"
            employeeEmail.classList.add("employee-email", "employee-info")
            newContainer.appendChild(employeeEmail)

        }  else if(i === 2){
            newContainer.classList.remove("sub-container-3")
            newContainer.classList.add("contact-container-3")
            newContainer.textContent = '';
            const employeeName = document.createElement('p')
            employeeName.textContent = contents[2]
            employeeName.classList.add("employee-name")
            newContainer.appendChild(employeeName)

            const employeeTitle = document.createElement('p')
            employeeTitle.textContent = "Manager"
            employeeTitle.classList.add("employee-title", "employee-info")
            newContainer.appendChild(employeeTitle)

            const employeeNumber = document.createElement('p')
            employeeNumber.textContent = "133-333-3336"
            employeeNumber.classList.add("employee-number", "employee-info")
            newContainer.appendChild(employeeNumber)

            const employeeEmail = document.createElement('p')
            employeeEmail.textContent = "veryRealEmail@arctic.com"
            employeeEmail.classList.add("employee-email", "employee-info")
            newContainer.appendChild(employeeEmail)
        }    else if(i === 3){
            newContainer.classList.remove("sub-container-4")
            newContainer.classList.add("contact-container-4")
            newContainer.textContent = '';
            const employeeName = document.createElement('p')
            employeeName.textContent = contents[3]
            employeeName.classList.add("employee-name")
            newContainer.appendChild(employeeName)

            const employeeTitle = document.createElement('p')
            employeeTitle.textContent = "Waiter"
            employeeTitle.classList.add("employee-title", "employee-info")
            newContainer.appendChild(employeeTitle)

            const employeeNumber = document.createElement('p')
            employeeNumber.textContent = "133-333-3335"
            employeeNumber.classList.add("employee-number", "employee-info")
            newContainer.appendChild(employeeNumber)

            const employeeEmail = document.createElement('p')
            employeeEmail.textContent = "realPenguinEmail@arctic.com"
            employeeEmail.classList.add("employee-email", "employee-info")
            newContainer.appendChild(employeeEmail)
        } 
    }




    return{
        
    }

    
    });

    export default Loadcontactspage;