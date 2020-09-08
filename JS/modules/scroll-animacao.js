export default function initiAnimacaoScroll(){

    const sections = document.querySelectorAll('[data-anime="scroll"]')
    
    if(sections.length){
    
    const windowMetade = window.innerHeight * 0.6;
    
    function animascroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;

            if(isSectionVisible){
                section.classList.add('ativo')
            }else if (section.classList.contains('ativo')){
                section.classList.remove('ativo');
            }
        })
    }
    
    animascroll()
    
    window.addEventListener('scroll', animascroll)
    }
}
    
    