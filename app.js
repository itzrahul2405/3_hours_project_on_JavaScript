// const btn = document.querySelector('button');

// const list = document.querySelector('ul')

// const expenseamount = document.querySelector('#expenseamount')
// const description = document.querySelector('#description')
// const category = document.querySelector('#form-select')




// btn.addEventListener(
//     'click',
//     (event) => {
//         event.preventDefault()

//         const expenseamount = document.querySelector('#expenseamount')
//         const description = document.querySelector('#description')
//         const category = document.querySelector('#form-select')

//         const obj = {
//             'expenseamount' : expenseamount.value,
//             'description' : description.value,
//             'category' : category.value

//         }
        

//         localStorage.setItem(obj['expenseamount'], JSON.stringify(obj))

        // newItem = document.createElement('li')
        // newItem.class = 'list-item'
        // newItem.innerText = `${obj['expenseamount']}-${obj['description']}-${obj['category']}`


        // dltBtn = document.createElement('button')
        // dltBtn.type = 'button'
        // dltBtn.innerText = 'Delete Expense'



        // dltBtn.onclick = (event) => {
        //     event.preventDefault()

        //     const targetElement = event.target;
        //     const parentElement = targetElement.parentNode;

        //     // newItem.remove()
        //     localStorage.removeItem(obj['expenseamount'])
        //     list.removeChild(parentElement)

        // }



        // editBtn = document.createElement('button')
        // editBtn.type = 'button'
        // editBtn.innerText = 'Edit Expense'




        // editBtn.onclick = (event) => {
        //     event.preventDefault()       
            
        //     const targetElement = event.target;
        //     const parentElement = targetElement.parentNode;

        //     // const x = localStorage.getItem(event.target.expenseamount)
        //     localStorage.removeItem(obj['expenseamount'])
        //     list.removeChild(parentElement)
        //     // console.log(x)
        //     expenseamount.value = obj['expenseamount']
        //     description.value = obj['description']
        //     category.value = obj['category']


        // }

        // newItem.appendChild(dltBtn)
        // newItem.appendChild(editBtn)


        // list.appendChild(newItem)

    

//     }


// )





const btn = document.querySelector('button');
const list = document.querySelector('ul');

// Function to populate the list from localStorage
function populateList() {
    // Clear the existing list
    list.innerHTML = '';

    // Iterate through localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const obj = JSON.parse(localStorage.getItem(key));

        const newItem = document.createElement('li');
        newItem.className = 'list-item';
        newItem.innerText = `${obj['expenseamount']}-${obj['description']}-${obj['category']}`;

        const dltBtn = document.createElement('button');
        dltBtn.type = 'button';
        dltBtn.innerText = 'Delete Expense';

        dltBtn.onclick = (event) => {
            event.preventDefault();

            const targetElement = event.target;
            const parentElement = targetElement.parentNode;

            // newItem.remove()
            localStorage.removeItem(key)
            list.removeChild(parentElement)
        };

        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.innerText = 'Edit Expense';

        editBtn.onclick = (event) => {
            event.preventDefault();

            const targetElement = event.target;
            const parentElement = targetElement.parentNode;
            localStorage.removeItem(key)
            list.removeChild(parentElement)
            // Populate the form with the data for editing
            expenseamount.value = obj['expenseamount'];
            description.value = obj['description'];
            category.value = obj['category'];
        };

        newItem.appendChild(dltBtn);
        newItem.appendChild(editBtn);
        list.appendChild(newItem);

        console.log(localStorage.length)
        console.log(localStorage)
    }
}

// Call the function to populate the list when the page loads
populateList();

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const expenseamount = document.querySelector('#expenseamount');
    const description = document.querySelector('#description');
    const category = document.querySelector('#form-select');

    const obj = {
        'expenseamount': expenseamount.value,
        'description': description.value,
        'category': category.value
    };

    const uniqueKey = Date.now().toString();
    localStorage.setItem(uniqueKey, JSON.stringify(obj));

    // Clear the form fields
    expenseamount.value = '';
    description.value = '';
    category.value = '';

    // Populate the list with the updated data
    populateList();
});
