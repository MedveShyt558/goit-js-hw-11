import{a as f,S as u,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="51558465-0914f7551664f70cb69e4c653";async function y(o){const s={key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(d,{params:s})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-img" />
          </a>
          <div class="info">
            <p>"<span class="info-title">Likes </span> ${t.likes}"</p>
            <p>"<span class="info-title">Views </span> ${t.views}"</p>
            <p>"<span class="info-title">Comments</span> ${t.comments}"</p>
            <p>"<span class="info-title">Downloads</span> ${t.downloads}"</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",s),g.refresh()}function L(){c.innerHTML=""}function b(){l.classList.add("is-visible")}function w(){l.classList.remove("is-visible")}const p=document.querySelector(".form"),v=p.elements["search-text"];p.addEventListener("submit",async o=>{o.preventDefault();const s=v.value.trim();if(s===""){a.warning({message:"Please enter a search term!",position:"topRight"});return}L(),b(),y(s).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}h(t.hits)}).catch(t=>{a.error({message:"Oops! Something went wrong. Please try again.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
