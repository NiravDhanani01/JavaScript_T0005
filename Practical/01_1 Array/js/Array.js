let recipes = [
    {
        id: 1,
        category: "Breakfast",
        name: "Italian Wedding Soup",
        ingredients: "cornflor,garlic,salt,ginger",
        description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that"
    },
    {
        id: 2,
        category: "Lunch",
        name: "sandwich",
        ingredients: "bread,chees,potato,masala",
        description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that"
    },
    {
        id: 3,
        category: "Dinner",
        name: "Dhosa",
        ingredients: "Rava,mainda,coconut",
        description: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "
    },
]

// //here is add data
function Add(data) {
    try {
        recipes.push(data)
        localStorage.setItem("recipes", JSON.stringify(recipes))
        return recipes
    } catch (err) {
        console.log(err);
        return false
    }
}

// // delete 
function del(id) {
    try {
        let alldata = JSON.parse(localStorage.getItem("recipes"))
        let del = alldata.filter((item) => {
            return item.id !== id
        })
        localStorage.setItem("recipes", JSON.stringify(del))
        return del
    } catch (err) {
        console.log(err);
        return false
    }
}

// //edit or update 
function edit(id, category,name,ingredients,description) {
    try {
       let alldata = JSON.parse(localStorage.getItem("recipes"))
       let updateData = alldata.filter((item)=>{
        if (item.id == id) {
           item.category = category
           item.name = name
           item.ingredients = ingredients
           item.description = description
        }
        return item
       })
       localStorage.setItem("recipes", JSON.stringify(updateData))
       return updateData
    } catch (err) {
        console.log(err);
        return false
    }
}

function filterByIngredient(data) {
    try {
        let alldata = JSON.parse(localStorage.getItem("recipes"))
        let recip = alldata.filter(item => item.ingredients.includes(data))
        localStorage.setItem("recipes", JSON.stringify(recip))
        return recip
    } catch (err) {
        console.log(err);
        return false
    }
}

function viewData() {
    try {
        let tbl = ""
        let alldata = JSON.parse(localStorage.getItem("recipes"))
        alldata.map((item) => {
            tbl += `
            <tr> 
               <td> ${item.id} </td> 
               <td> ${item.category} </td> 
               <td> ${item.name} </td> 
               <td> ${item.ingredients} </td> 
               <td> ${item.description} </td> 
            <tr>
            `
        })
        document.getElementById("tbody").innerHTML = tbl
    } catch (err) {
        console.log(err);
        return false
    }
}
viewData()
// // Add 
// let obj = {
//     id: 4,
//     category: "Breakfast",
//     name: "salad",
//     ingredients: "avacado,kiwi,salt",
//     description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that"
// }
// console.log("Add New Data");
// console.log(Add(obj));
// console.log("=============");

// //edit
// console.log("Edit data");
// console.log(edit(1,"Dinner","Special Soup ","Boil water","  will be distracted  content of a page when looking at its layout. The point of using Lorem Ipsum is that"));
// console.log("=========");

// //filter data
// console.log("filer data");
// console.log(filterByIngredient("salt"));
// console.log("=============");

// // delete
// console.log("Delete Data");
// console.log(del(2));
// console.log("=============");
