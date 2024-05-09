//sections
let MainSection = document.querySelector('main')
let IraialinaSection = document.querySelector('#IraialinaSection')
let DimiarivoSection = document.querySelector('#DimiarivoSection')
let TeloArivoSection = document.querySelector('#TeloarivoSection')

//headers
let header = document.querySelectorAll('.header')
let HomeHeader = header[0]
let IraialinaHeader = header[1]
let DimiarivoHeader = header[2]
let TeloarivoHeader = header[3]

//Container billets
let BilletsIraialina = document.querySelector('#BilletsIraialina')
let BilletsDimiarivo = document.querySelector('#BilletsDimiarivo')
let BilletsTeloarivo = document.querySelector('#BilletsTeloarivo')

// Home Menu Divs
let CollapsedMenu = document.querySelectorAll('.CollapsedCont')
let CollapsedIraialinaHome = CollapsedMenu[0]
let CollapsedDimiarivoHome = CollapsedMenu[1]
let CollapsedTeloarivoHome = CollapsedMenu[2]

let DeveloppedCont= document.querySelectorAll('.developed')
let DeveloppedIraialinaHome = DeveloppedCont[0]
let DeveloppedDimiarivoHome = DeveloppedCont[1]
let DeveloppedTeloarivoHome = DeveloppedCont[2]

let icons = document.querySelectorAll('.fa-solid.fa-chevron-down')
let IraialinaIco = icons[0]
let DimiarivoIco = icons[1]
let TeloarivoIco = icons[2]

// Main Menu displays
let lafoEl = document.querySelector("#lafo")
let tsyLafoEl = document.querySelector("#TsyLafo")
let totalLafoEl = document.querySelector("#totalLafo")

// count displays 
let LafoIraialinaEl = document.querySelectorAll("#lafoIraialina")
let LafoDimiarivoEl = document.querySelectorAll("#lafoDimiarivo")
let LafoTeloarivoEl = document.querySelectorAll("#lafoTeloarivo")

let TsyLafoIraialinaEl = document.querySelectorAll("#TsyLafoIraialina")
let TsyLafoDimiarivoEl = document.querySelectorAll("#TsyLafoDimiarivo")
let TsyLafoTeloarivoEl = document.querySelectorAll("#TsyLafoTeloarivo")

let TotalLafoIraialinaEl = document.querySelectorAll("#totalLafoIraialina")
let TotalLafoDimiarivoEl = document.querySelectorAll("#totalLafoDimiarivo")
let TotalLafoTeloarivoEl = document.querySelectorAll("#totalLafoTeloarivo")

//counters
let IsaIraialinaLafo = 0
let IsaIraialinaTsyLafo = 35
let IraialinaTotalVolaLafo = 0

let IsaDimiarivoLafo = 0
let IsaDimiarivoTsyLafo = 200
let DimiarivoTotalVolaLafo = 0

let IsaTeloarivoLafo = 0
let IsaTeloarivoTsyLafo = 300
let TeloarivoTotalVolaLafo = 0

numberWithCommas(IraialinaTotalVolaLafo)
numberWithCommas(DimiarivoTotalVolaLafo)
numberWithCommas(TeloarivoTotalVolaLafo)

//managing displays
collapse(CollapsedIraialinaHome,DeveloppedIraialinaHome, IraialinaIco)
collapse(CollapsedDimiarivoHome,DeveloppedDimiarivoHome, DimiarivoIco)
collapse(CollapsedTeloarivoHome,DeveloppedTeloarivoHome, TeloarivoIco)

Active(MainSection, IraialinaSection, DimiarivoSection, TeloArivoSection, HomeHeader,IraialinaHeader, DimiarivoHeader, TeloarivoHeader)
Active(IraialinaSection, MainSection, DimiarivoSection, TeloArivoSection, IraialinaHeader, DimiarivoHeader, TeloarivoHeader, HomeHeader)
Active(DimiarivoSection, IraialinaSection, MainSection, TeloArivoSection, DimiarivoHeader, IraialinaHeader, TeloarivoHeader, HomeHeader)
Active(TeloArivoSection, IraialinaSection, DimiarivoSection, MainSection, TeloarivoHeader, IraialinaHeader, DimiarivoHeader, HomeHeader)

Billets(36, BilletsIraialina, "iraialina")
Billets(201, BilletsDimiarivo, "dimiarivo")
Billets(301, BilletsTeloarivo, "teloarivo")

function Active(Show, FirstToHide,SecondToHide,ThirdToHide, Header, Header2, Header3, Header4){
        Header.addEventListener("click", function(){
        Show.style.display = 'flex';
        Header.style.borderBottom = '#4E4E4E solid 3px';
        FirstToHide.style.display = 'none';
        SecondToHide.style.display = 'none';
        ThirdToHide.style.display = 'none';

        Header2.style.borderBottom = 'none';
        Header3.style.borderBottom = 'none';
        Header4.style.borderBottom = 'none';
})
}

function collapse(Collapse,Develop,Icon){
    let isClicked = false
    Collapse.addEventListener("click", function(){
        if(!isClicked){
            Develop.style.display ='inherit';
            Icon.setAttribute("class", "fa-solid fa-chevron-up");
            isClicked = true
        } else{
            Develop.style.display ='none';
            Icon.setAttribute("class", "fa-solid fa-chevron-down")
            isClicked = false
        }
        
    })
}

function Billets(isaBillet, section, karazany){ 
   
    for(let i = 1; i < `${isaBillet}`; i++){
        let billet = document.createElement('li')
        billet.className = `${karazany}`
        billet.innerText = i
        section.append(billet)
        let isClicked = false      

        billet.addEventListener("click", function(){
            if(!isClicked){
                //styles
                billet.style.color = 'whitesmoke';
                billet.style.background = '#59D8BC';
                billet.style.scale = '120%';
                billet.style.boxShadow = '5px 4px 0px #D6D6D6';
                isClicked = true

                //redirecting counts
                if(billet.classList.contains('iraialina')){
                    IsaIraialinaLafo ++;
                    IsaIraialinaTsyLafo -= 1;
                    IraialinaTotalVolaLafo += 10000;

                } else if(billet.classList.contains('dimiarivo')){
                    IsaDimiarivoLafo ++;
                    IsaDimiarivoTsyLafo -= 1;
                    DimiarivoTotalVolaLafo += 5000;

                } else if(billet.classList.contains('teloarivo')){
                    IsaTeloarivoLafo ++ ;
                    IsaTeloarivoTsyLafo -- ;
                    TeloarivoTotalVolaLafo += 3000;

                }
            } else{
                //styles
                billet.style.color = '#4E4E4E';
                billet.style.background = 'white';
                billet.style.scale = '100%';
                billet.style.boxShadow = '5px 4px 7px #D6D6D6';

                //redirecting counts
                if(billet.classList.contains('iraialina')){
                    IsaIraialinaLafo --;
                    IsaIraialinaTsyLafo ++;
                    IraialinaTotalVolaLafo -= 10000;

                } else if(billet.classList.contains('dimiarivo')){
                    IsaDimiarivoLafo --
                    IsaDimiarivoTsyLafo ++;
                    DimiarivoTotalVolaLafo -= 5000;

                } else if(billet.classList.contains('teloarivo')){
                    IsaTeloarivoLafo --
                    IsaTeloarivoTsyLafo ++;
                    TeloarivoTotalVolaLafo -= 3000;

                } 
            }

        UpdateCountDisplays(LafoIraialinaEl, TsyLafoIraialinaEl, TotalLafoIraialinaEl, IsaIraialinaLafo, IsaIraialinaTsyLafo, IraialinaTotalVolaLafo) 
        UpdateCountDisplays(LafoDimiarivoEl, TsyLafoDimiarivoEl, TotalLafoDimiarivoEl, IsaDimiarivoLafo, IsaDimiarivoTsyLafo, DimiarivoTotalVolaLafo) 
        UpdateCountDisplays(LafoTeloarivoEl, TsyLafoTeloarivoEl, TotalLafoTeloarivoEl, IsaTeloarivoLafo, IsaTeloarivoTsyLafo, TeloarivoTotalVolaLafo) 
        })
    
    }
        
}

function UpdateCountDisplays(LafoEl, TsyLafoEl, TotalEl, IsaLafo, IsaTsyLafo, VolaTotal){
        LafoEl[0].innerText = `Lafo:  ${IsaLafo}`
        TsyLafoEl[0].innerText = ` Tsy lafo: ${IsaTsyLafo}` 
        TotalEl[0].innerText = ` Total: ${VolaTotal} Ar` 

        LafoEl[1].innerText = `Lafo:  ${IsaLafo}`
        TsyLafoEl[1].innerText = ` Tsy lafo: ${IsaTsyLafo}` 
        TotalEl[1].innerText = ` Total: ${VolaTotal} Ar`
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
