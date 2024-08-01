let inputBox = document.querySelector('#inputBox');
let list = document.querySelector('#list');

inputBox.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        addItems(this.value)
        this.value = ""
    }
})

let addItems = (inputBox) => {
    let listItems =document.createElement("li");
    listItems.innerHTML = `${inputBox}<i></i>`;
        listItems.addEventListener("click", function(){
            this.classList.toggle('done');
        })
        listItems.querySelector("i").addEventListener("click", function(){
            listItems.remove();
        })


        list.appendChild(listItems);
}
