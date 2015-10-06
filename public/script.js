document.addEventListener("DOMContentLoaded", function() {
    // get all of our list items
    // 1. Select all the items to filter
    var dataList = document.createElement("select");
    dataList.id = "mySelect";
    myDiv.appendChild(dataList);
    //setup click event handlers on our checkboxes
    // 2. Select all the checkboxes to watch
    var checkBoxes = document.createElement('checkBoxes');
    var val = 1;
    var cap;
    checkBoxes.type = 'checkbox';
    checkBoxes.name = val;
    checkBoxes.value = cap;
    checkBoxes.appendChild(document.createTextNode(cap));

    for (var i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;
        document.addEventListener('DOMContentLoaded', filterItems(){
            document.querySelector('checkBox1'.addEventListener('checkBoxStateChange', Handler);
        });
        // 3. Add an event listener for each checkbox
        // each checkbox should use filterItems()

    }
    // event handler
    function filterItems() {
        if (this.checked) {
            handleDisplay(true, this.value);
        } else if (!this.checked) {
            handleDisplay(false, this.value);
        }
    }
    function handleDisplay(show, value){
        for (var i = 0; i < dataList.length; i++) {
            var item = dataList[i];
            // 4. show or hide the item if the item attribute "data-category" == value
            if(item == value) {
                if(filterItems() == true){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }
        }
    }
});