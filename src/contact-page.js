
const Loadcontactspage = (() => {

    const contents = [
        "Contact Us",
        "Mama Bear",
        "Papa Bear"
    ]
    
    const daysOfWeek = [
        'Monday: 11am - 10pm',
        'Tuesday 11am - 10pm',
        'Wednesday 11am - 10pm',
        'Thursday 11am - 10pm',
        'Friday 11am - 10pm',
        'Saturday 11am - 12pm',
        'Sunday 11am - 12pm',
    ]

    const content = document.getElementById("content");
    

    for (let i = 0; i < contents.length; i++){
        let newContainer = document.createElement("div")
        newContainer.classList.add("sub-container", `sub-container-${i + 1}`)
        newContainer.textContent = contents[i]
        content.appendChild(newContainer)

        if(i === 0){
            newContainer.textContent = '';
            const restaurantName = document.createElement('h1')
            restaurantName.textContent = contents[0]
            restaurantName.classList.add("restaurant-name")
            newContainer.appendChild(restaurantName)
            for (let j = 0; j < 2; j++){
                const penguinIcon = document.createElement('img');
                penguinIcon.src = Penguin
                penguinIcon.classList.add("penguin-pic", `penguin-pic-${j + 1}`);
                newContainer.appendChild(penguinIcon) 
            }
        } else if(i === 1){
            newContainer.textContent = '';
            const review = document.createElement('p')
            review.textContent = contents[1]
            review.classList.add("review")
            newContainer.appendChild(review)

            const reviewerName = document.createElement('p');
            reviewerName.textContent = "- Lil Penguin";
            reviewerName.classList.add("reviewer-name")
            newContainer.appendChild(reviewerName)
        }  else if(i === 2){
            const businessHoursList = document.createElement('ul');
            businessHoursList.classList.add("business-hours-list")
            newContainer.appendChild(businessHoursList)
            for (let d = 0; d < 7; d++){
            const days = document.createElement("li")
            days.classList.add("days")
            days.textContent = daysOfWeek[d]
            businessHoursList.appendChild(days)
            }
        }  
    }




    return{
        
    }

    
    });

    export default Loadcontactspage;