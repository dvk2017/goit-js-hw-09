import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as o}from"./assets/vendor-C0lvKic3.js";const r=[{preview:"../img/arcad/img-1_400.jpg",original:"../img/arcad/img-1.jpg",description:"Hokkaido Flower"},{preview:"../img/arcad/img-2_400.jpg",original:"../img/arcad/img-2.jpg",description:"Container Haulage Freight"},{preview:"../img/arcad/img-3_400.jpg",original:"../img/arcad/img-3.jpg",description:"Aerial Beach View"},{preview:"../img/arcad/img-4_400.jpg",original:"../img/arcad/img-4.jpg",description:"Flower Blooms"},{preview:"../img/arcad/img-5_400.jpg",original:"../img/arcad/img-5.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],t=r.reduce((a,{preview:e,original:i,description:p})=>a+=`
        <li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${e}"
      data-source="${i}"
      alt="${p}"
    />
  </a>
</li>
        `,""),g=document.querySelector(".gallery");g.insertAdjacentHTML("beforeend",t);new o(".gallery .gallery-link",{captionsData:'<input type="email" name="email" autofocus />',captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
