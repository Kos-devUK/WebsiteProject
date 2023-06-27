let boardItems = document.getElementsByClassName('boardItems');
let searchTitle = document.getElementsByClassName('searchTitle');
let searchBox = document.getElementById('searchBox');
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function filterData() {



    for (let i = 0; i < searchTitle.length; i++) {
        let title = searchTitle[i].getElementsByTagName('h4')[0];
        //console.log(title.innerHTML);
        let txtValue = title.innerContent || title.innerText
        if (txtValue.toUpperCase().indexOf(searchBox.value.toUpperCase())) {
            //console.log(title.innerHTML);
            searchTitle[i].style.display = "none";
        } else {
            console.log(searchTitle[i].innerHTML);
            searchTitle[i].style.display = "block";
        }
    }

})