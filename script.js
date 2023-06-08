

// we need to get all the panels.. querySelector will return the first element that matches the specified selector or group of selectors. No matches... then null is returned. 

// querySelectorAll puts all the elements into a node list ... almost like an array. 

const panels = document.querySelectorAll('.panel');

// console.log(panels[1])

//forEach() is an high order array method that takes in an function as an arg
panels.forEach((panel) => {
    //add eventlistener so something can happen 
    //run function when click happens
    panel.addEventListener('click', () => {
        //remove active class before adding it
        removeActiveClass();
       //add the active class to what was clicked on 
       panel.classList.add('active')
    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}