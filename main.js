const skillsContent= document.getElementsByClassName('skill-content')
    skillheader = document.querySelectorAll('.skill-header')

function toggleskills(){
    let itemClass = this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skill-content skill-close'
    }
    if(itemClass === 'skill-content skill-close'){
        this.parentNode.className = 'skill-content skill-open'
    }
}

skillheader.forEach(el => {
    el.addEventListener('click',toggleskills)
    
});