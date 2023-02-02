function toggleDropdownShow(){
    document.getElementById("dropdown").classList.toggle("show-dropdown")
    console.log("toggled dropdown")
}
window.onclick = function(event) {
    if (!event.target.matches(".burger, #dropdown-container, #burgersvgpath")){
        console.log("somewhere not burger clicked, hiding dropdown content")
        console.log(event.target)
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show-dropdown")) {
                openDropdown.classList.remove("show-dropdown")
            }
        }
    }
}

let gallery = document.getElementById("gallery-list")

function addImagesToGallery(){
fetch("https://api.github.com/repos/dual-shock/dual-shock.github.io/git/trees/main?recursive=1")
    .then((response) => response.json())
    .then(data => {
        trees = data.tree
        console.log(data.tree)
      
        for(let i=0;i<trees.length;i++){
            tree = trees[i]
            if(tree.path.substring(0,13)=="imgs/gallery/"){
                console.log("tree",i,"is img")
                let galleryImage = `
                <li>
                    <img src="${tree.path}" />
                    <!--div class="gallery-overlay"><span>${tree.path.slice(13)}</span></div-->
                </li>
                `
                gallery.innerHTML += galleryImage
            }
        }
    })
}

addImagesToGallery()

