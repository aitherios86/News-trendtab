// tell axios to get file 
axios.get('public/js/trending.json')
    .then(function(response){
        //1 Axios converts text to data 
        let data = response.data;
        let list = document.querySelector('#trending-list');

        //2. loop through items via creating them 
        data.forEach(function(item){
            let div = document.createElement('div');
            div.classList.add('trend-item');
        
        div.innerHTML = 
        '<span class="cat"> ' + item.category + '</span>' 
        + '<p class="top"> ' + item.topic + '</p> ' + '<span class="cnt"> ' + item.posts + '</span> ';
        
        list.appendChild(div);
        });
    });