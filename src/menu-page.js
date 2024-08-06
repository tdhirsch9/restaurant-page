import Penguin from './penguin.png';
import Background from './background.jpg'
import Penguinglacier from './pole.png'

const Loadmenupage = (() => {

    const contents = [
        "Menu",
        "Beverages",
        "Polar Punch",
        "Iceburg infusion",
        "Sides",
        "Glacial Garlic Bread",
        "Frosty Fries",
        "Entrees",
        "Penguin's Pizza",
        "Arctic Chicken Alfredo"
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
            restaurantName.classList.add("menu")
            newContainer.appendChild(restaurantName)
            for (let j = 0; j < 2; j++){
                const penguinIcon = document.createElement('img');
                penguinIcon.src = Penguin
                penguinIcon.classList.add("penguin-pic", `penguin-pic-${j + 1}`);
                newContainer.appendChild(penguinIcon) 
            }
        } else if (i === 1){

            newContainer.classList.remove("sub-container-2")
            newContainer.classList.remove("sub-container")
            newContainer.classList.add("menu-section-container", "beverages-title")
            newContainer.textContent = '';
            const menuSection = document.createElement('h1')
            menuSection.textContent = contents[1]
            menuSection.classList.add("menu-section")
            newContainer.appendChild(menuSection)

            const glacier = document.createElement('img')
            glacier.src = Penguinglacier
            glacier.classList.add('menu-glacier-image')
            newContainer.appendChild(glacier)

        }   else if(i === 2){
            newContainer.classList.remove("sub-container-3")
            newContainer.classList.add("menu-container")
            newContainer.textContent = '';
            const menuItem = document.createElement('p')
            menuItem.textContent = contents[2]
            menuItem.classList.add("menu-item")
            newContainer.appendChild(menuItem)

            const itemDescription = document.createElement('p')
            itemDescription.textContent = "Refresh with our Polar Punch, a crisp mix of cranberry juice, lime, and mint."
            itemDescription.classList.add("item-description")
            newContainer.appendChild(itemDescription)

            const itemCost = document.createElement('p')
            itemCost.textContent = "$3"
            itemCost.classList.add("item-cost")
            newContainer.appendChild(itemCost)

            const itemImg = document.createElement('div')
            itemImg.classList.add("item-img")
            newContainer.appendChild(itemImg)

        }  else if(i === 3){
            newContainer.classList.remove("sub-container-4")
            newContainer.classList.add("menu-container")
            newContainer.textContent = '';
            const menuItem = document.createElement('p')
            menuItem.textContent = contents[3]
            menuItem.classList.add("menu-item")
            newContainer.appendChild(menuItem)

            const itemDescription = document.createElement('p')
            itemDescription.textContent = "Chill out with our Iceberg Infusion, a cool blend of blueberry juice and lemonade."
            itemDescription.classList.add("item-description")
            newContainer.appendChild(itemDescription)

            const itemCost = document.createElement('p')
            itemCost.textContent = "$3"
            itemCost.classList.add("item-cost")
            newContainer.appendChild(itemCost)

            const itemImg = document.createElement('div')
            itemImg.classList.add("item-img")
            newContainer.appendChild(itemImg)
        }    else if(i === 4){
            newContainer.classList.remove("sub-container")
            newContainer.classList.add("menu-section-container")
            newContainer.textContent = '';
            const menuSection = document.createElement('h1')
            menuSection.textContent = contents[4]
            menuSection.classList.add("menu-section")
            newContainer.appendChild(menuSection)
        } else if (i === 5){
            newContainer.classList.remove("sub-container-4")
            newContainer.classList.add("menu-container")
            newContainer.textContent = '';
            const menuItem = document.createElement('p')
            menuItem.textContent = contents[5]
            menuItem.classList.add("menu-item")
            newContainer.appendChild(menuItem)

            const itemDescription = document.createElement('p')
            itemDescription.textContent = "Warm up with our Glacial Garlic Bread, featuring crispy baguette slices toasted to perfection and generously spread with a blend of garlic butter and herbs."
            itemDescription.classList.add("item-description")
            newContainer.appendChild(itemDescription)

            const itemCost = document.createElement('p')
            itemCost.textContent = "$7"
            itemCost.classList.add("item-cost")
            newContainer.appendChild(itemCost)

            const itemImg = document.createElement('div')
            itemImg.classList.add("item-img")
            newContainer.appendChild(itemImg)
        } else if (i === 6){
            newContainer.classList.remove("sub-container-4")
            newContainer.classList.add("menu-container")
            newContainer.textContent = '';
            const menuItem = document.createElement('p')
            menuItem.textContent = contents[6]
            menuItem.classList.add("menu-item")
            newContainer.appendChild(menuItem)

            const itemDescription = document.createElement('p')
            itemDescription.textContent = "Enjoy our Frosty Fries, perfectly crispy on the outside and fluffy on the inside. These golden potato fries are lightly seasoned and served with a cool, creamy dipping sauce."
            itemDescription.classList.add("item-description")
            newContainer.appendChild(itemDescription)

            const itemCost = document.createElement('p')
            itemCost.textContent = "$6"
            itemCost.classList.add("item-cost")
            newContainer.appendChild(itemCost)

            const itemImg = document.createElement('div')
            itemImg.classList.add("item-img")
            newContainer.appendChild(itemImg)
        }  else if (i === 7){
            newContainer.classList.remove("sub-container")
            newContainer.classList.add("menu-section-container")
            newContainer.textContent = '';
            const menuSection = document.createElement('h1')
            menuSection.textContent = contents[7]
            menuSection.classList.add("menu-section")
            newContainer.appendChild(menuSection)
        }  else if (i === 8){
            newContainer.classList.add("menu-container")
            newContainer.textContent = '';
            const menuItem = document.createElement('p')
            menuItem.textContent = contents[8]
            menuItem.classList.add("menu-item")
            newContainer.appendChild(menuItem)

            const itemDescription = document.createElement('p')
            itemDescription.textContent = "Indulge in our signature Penguin's Pizza, topped with a delightful blend of savory mozzarella, zesty marinara, and a medley of premium toppings."
            itemDescription.classList.add("item-description")
            newContainer.appendChild(itemDescription)

            const itemCost = document.createElement('p')
            itemCost.textContent = "$20"
            itemCost.classList.add("item-cost")
            newContainer.appendChild(itemCost)

            const itemImg = document.createElement('div')
            itemImg.classList.add("item-img")
            newContainer.appendChild(itemImg)
        }    else if (i === 9){
            newContainer.classList.add("menu-container")
            newContainer.textContent = '';
            const menuItem = document.createElement('p')
            menuItem.textContent = contents[9]
            menuItem.classList.add("menu-item")
            newContainer.appendChild(menuItem)

            const itemDescription = document.createElement('p')
            itemDescription.textContent = "Savor the creamy richness of our Arctic Chicken Alfredo, featuring tender grilled chicken slices atop a bed of perfectly cooked fettuccine pasta."
            itemDescription.classList.add("item-description")
            newContainer.appendChild(itemDescription)

            const itemCost = document.createElement('p')
            itemCost.textContent = "$15"
            itemCost.classList.add("item-cost")
            newContainer.appendChild(itemCost)

            const itemImg = document.createElement('div')
            itemImg.classList.add("item-img")
            newContainer.appendChild(itemImg)
        }  
    }




    return{
        
    }

    
    });

    export default Loadmenupage;