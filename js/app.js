window.addEventListener("DOMContentLoaded", ()=>{
            //hide show menu links on the mobile view
/*             let navButton = document.getElementById('humbergarbtn');
            let navLinks = document.querySelector('.nav-ul')
            navButton.addEventListener('click', ()=>{
                if(!navLinks.classList.contains('show-nav')){
                    navLinks.classList.add('show-nav')
                }else{
                    navLinks.classList.remove('show-nav')  
                }
            })*/
            //show display method two
            let toggleMenu = ()=>{
                document.querySelector('.nav-ul').classList.toggle('show-nav');

            }
            let humbergarbtn = document.getElementById('humbergarbtn');
            humbergarbtn.onclick = toggleMenu;
           })
