const menuBtn = document.querySelector('.menu-bar');
const menuPage=document.querySelector('.menuPage');
const backBtn=document.querySelector('.back-btn');
const backBtn2=document.querySelectorAll('.back-btn2');
const mainHead=document.querySelector('.main-head');
const frontendProjectBtn=document.querySelector('.frontend');
const allfrontendProjects=document.querySelectorAll('.frontend-project');
const allProjects=document.querySelectorAll('.project-item');
const fullStackProjectBtn=document.querySelector('.fullstack');
const allfullStackProjects=document.querySelectorAll('.fullstack-project');
const cyberSecurityBtn=document.querySelector('.cyberSecurity');
const allCyberSecurityProjects=document.querySelectorAll('.cyberSecurity-projects');
const allProjectBtn=document.querySelector('.allproject');
const projectTypeItem=document.querySelectorAll('.project-types-item');
const detailCloseBtn= document.querySelector('.project-detail-close-btn');
const detailContainer=document.querySelector('.project-detail-container');
const readMoreDetailBtn=document.querySelectorAll('.read-More-btn');

menuBtn.addEventListener('click',()=>{
    if(menuPage){
        menuPage.classList.toggle('open');
    }
})

backBtn.addEventListener('click',()=>{
    if(menuPage.classList.contains('open')){
        menuPage.classList.toggle('open');
    }
   
})
backBtn2.forEach(button => {
    button.addEventListener('click', () => {
        if(menuPage.classList.contains('open')){
            menuPage.classList.remove('open'); // Use remove instead of toggle for certainty
        }
    });
});

window.addEventListener('scroll',()=>{
    if (window.scrollY>=50) {
        mainHead.classList.add('scrolled');
    }else{
        mainHead.classList.remove('scrolled');
    }
} );


const projectHandler=(property,query)=>{
    allProjects.forEach((project)=>{
        project.style.display=property;
    })
    query.forEach((project)=>{
        project.style.display='block';
        })
}

const projectTypeHandler=(query)=>{
    projectTypeItem.forEach((project)=>{
        project.classList.remove('visited');
    })
    query.classList.add('visited');
}

fullStackProjectBtn.addEventListener('click',()=>{
    projectTypeHandler(fullStackProjectBtn);
    projectHandler('none',allfullStackProjects);
})
frontendProjectBtn.addEventListener('click',()=>{
    projectTypeHandler(frontendProjectBtn);
    projectHandler('none',allfrontendProjects);
})
cyberSecurityBtn.addEventListener('click',()=>{
    projectTypeHandler(cyberSecurityBtn);
    projectHandler('none',allCyberSecurityProjects);
})
allProjectBtn.addEventListener('click',()=>{
    projectTypeHandler(allProjectBtn);
    projectHandler('block',allCyberSecurityProjects);
});

readMoreDetailBtn.forEach(button=>{
    button.addEventListener('click',()=>{
        detailContainer.style.display='block';
    })
})

detailCloseBtn.addEventListener('click',()=>{
    detailContainer.style.display='none';
});

projectTypeHandler(allProjectBtn);
