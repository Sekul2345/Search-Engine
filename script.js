const accesskey="SDi4hNpv1O-P5hXasXtC3ibzJU6zqcitf0aoqCQi-8E";

const searchForm =document.getElementById("search-form")
const searchBox =document.getElementById("search-box")
const searchResult =document.getElementById("search-result")
const showMoreBtn =document.getElementById("show-more-btn")
let keyword="";
let page=1;

async function searchImage() {
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    if(page===1){
        searchResult.innerHTML="";
    }

    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();
})
