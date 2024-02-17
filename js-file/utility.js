const buttns = document.getElementsByClassName('BTN');

let count = 0;

for (const btn of buttns) {
    btn.addEventListener('click', function (e) {
        count += 1;
       
        const placeName = e.target.parentNode.parentNode.parentNode.childNodes[1].innerText;
        // console.log(placeName)

        const price = e.target.parentNode.parentNode.childNodes[1].innerText;
     
        const titleContainer = document.getElementById('itile-container');

        const p = document.createElement("p");
        p.innerText = count + ".  " + placeName + " " + price;


// valadition part 900 tk beshi hole alart dibe
        const budgt = document.getElementById('budgt').innerText;
        const convertBudgt = parseInt(budgt);

        if (convertBudgt - parseInt(price) < 0) {
            alert("Budgt nai vhai Tk income kore ashen")
            return
        }
        document.getElementById('budgt').innerText = convertBudgt - parseInt(price)

// --------------------alart code end----------------------------


        titleContainer.appendChild(p)
        
        count = count + 1; 
        

        

        // document.getElementById("total-cost").innerText = convrtTotalCost + parseInt(price) 
        
    
        

         
        totalCost("total-cost", parseInt(price))
        grandTotal('grand-total', parseInt(price))
        
        setInnerText('card-count' , count)
    })
}



// common function

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


// total cost section
function totalCost(id, value) {
        
    const totalCost = document.getElementById(id).innerText;

    const convrtTotalCost = parseInt(totalCost);

    const sum = convrtTotalCost + parseInt(value)
    setInnerText("total-cost" , sum)

}



   // grand grandtotal cost
function grandTotal(category) {
    const totalCost = document.getElementById("total-cost").innerText;
    const convertedTotalCost = parseInt(totalCost);

    if (category == "bus") {
        setInnerText('grand-total', convertedTotalCost + 100)
        
    } else if (category == 'train') {
        setInnerText('grand-total', convertedTotalCost - 200)
        
    } else if (category == 'flight') {
        setInnerText('grand-total', convertedTotalCost + 500)
        
    } else {
        setInnerText('grand-total', convertedTotalCost)
    }

    
}