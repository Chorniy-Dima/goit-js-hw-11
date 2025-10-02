import{S as f,a as m,i as p}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=document.querySelector(".gallery"),u=document.querySelector(".loader-container");function h(i){const r=i.map(s=>`<div class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
            <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
          </a>
          <div class="descr">
            <div class="descr-container">
              <h6 class="pic-title">Likes</h6>
              <p class="pic-txt">${s.likes}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Views</h6>
              <p class="pic-txt">${s.views}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Comments</h6>
              <p class="pic-txt">${s.comments}</p>
            </div>
            <div class="descr-container">
              <h6 class="pic-title">Downloads</h6>
              <p class="pic-txt">${s.downloads}</p>
            </div>
          </div>
        </div>`).join("");d.insertAdjacentHTML("afterbegin",r),new f(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function n(){d.innerHTML=""}function g(){u.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function c(){u.innerHTML=""}function y(i){m.get("https://pixabay.com/api/",{params:{key:"36689321-8b59aad86c27c2e69221e9297",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>{r.data.hits.length===0?(n(),c(),p.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):(n(),h(r.data.hits),c())}).catch(r=>{console.log(r)})}const v=document.querySelector(".form"),l=document.querySelector(".form input");document.querySelector(".form button");v.addEventListener("submit",i=>{if(i.preventDefault(),l.value.trim()===""){alert("The field cannot be empty");return}g(),y(l.value)});
//# sourceMappingURL=index.js.map
