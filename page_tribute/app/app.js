document.addEventListener('DOMContentLoaded', () => {
    loadedApi()
})
let dataStan = []
let dataJobs = []
async function loadedApi(dates){
    try{
        res = await fetch("https://dtony-404.github.io/API-s/Tribute_3/API.JSON")
        data = await res.json()
        loadedWelcome(data.Stan_Lee, data.Steve_Jobs)
        if(dates == 1){
            dataJobs.push(data.Steve_Jobs)
            destructurar(dataJobs)
            pintar_templates(dataJobs)
        }
        else if(dates == 2){
            dataStan.push(data.Stan_Lee)
            destructurar(dataStan)
            pintar_templates(dataStan)
        }
    }
    catch(error){
        console.log(error)
    }
}
let main = document.getElementById('main')

function loadedWelcome(Stan_Lee, Steve_Jobs){
    main.innerHTML = ''
    main.innerHTML = `
    <div class="uk-position-relative">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="min-height: 300; max-height: 600; animation: push">
        <ul class="uk-slideshow-items">
            <li>
                <img src="${Stan_Lee.image_Row[1]}" alt="" uk-cover>
            </li>
            <li>
                <img src="${Stan_Lee.image_Row[2]}" alt="" uk-cover>
            </li>
            <li>
                <img src="${Steve_Jobs.image_Row[2]}" alt="" uk-cover>
            </li>
            <li>
                <img src="${Steve_Jobs.image_Row[3]}" alt="" uk-cover>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    </div>
        <div class="uk-position-top">
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                <div class="uk-navbar-nav">
                    <li class="uk-active"><a href="" class="uk-dark uk-card uk-card-primary uk-card-body uk-animation-scale-up">Category</a></li>
                    <li>
                        <a href="" class="uk-dark uk-card uk-card-secondary uk-card-body uk-animation-scale-up">Category</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="">Welcome</a></li>
                                <li><a onclick="loadedApi(2)">Stan Lee</a></li>
                                <li><a onclick="loadedApi(1)">Steve Jobs</a></li>
                            </ul>
                        </div>
                    </li>
                </div>
            </nav>
        </div>
    </div>
    <article class="uk-article uk-container">

        <h1 class="uk-article-title"><a class="uk-link-reset uk-container" href="">Tribute Page</a></h1>

        <p class="uk-article-meta">Created August 17, 2021, posted on my <a href="https://github.com/DTony-404" target="e_target">git-hub</a>.</p>

        <p class="uk-text-lead">This page links two people who were extremely influential in life, Stan Lee who created a large part of the marvel universe, said universe has marked multiple generations and Steve Jobs, who was the boss and founder of Apple for many years, in addition to buying an extremely company which is disney.</p>

        <div class="uk-grid-small uk-child-width-auto uk-container" uk-grid>
            <div class="uk-card uk-card-default uk-width-1-2@m">
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                        <img class="uk-border-circle" width="83" height="150" src="${Steve_Jobs.image_Top}">
                        </div>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                            <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div class="uk-card-footer">
                    <a href="#" class="uk-button uk-button-text" onclick="loadedApi(1)">Read more</a>
                </div>
       </div>
       <div class="uk-card uk-card-default uk-width-1-2@m" uk-sortable="handle: .uk-card">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                    <img class="uk-border-circle" width="80" height="140" src="${Stan_Lee.image_Top}">
                    </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">Stanley Martin Lieber</h3>
                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">November 12 2018</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text" onclick="loadedApi(2)">Read more</a>
            </div>
        </div>
        </div>

    </article>
    `    
}
let pinter = "";
function destructurar(data){
    
    data.map(destructurar => {
        const {Description} = destructurar
        for(i = 1; i < Object.keys(Description.id).length; i ++){
            console.log(Object.values(Description.id[1].date))       
                var marco = `
            <dl class="uk-container uk-description-list">
                <dt>--${Description.id[i].date}--</dt>
                <dd>${Description.id[i].description}</dd>
            </dl>
            `
            pinter += marco
            console.log(pinter)
        } 
    
    })
}

function pintar_templates(data){
    main.innerHTML = ''
    // Crear un appenchild para la descripcion
    data.map(info => {
        let tribute = document.createElement('div')
        const {name,alias,image_Top,image_Row} = info
             
        tribute.innerHTML += `
        <div id="test-filter" class="uk-height-large uk-background-cover uk-overflow-hidden uk-flex uk-flex-top" uk-parallax="sepia: 100;" style="background-image: url('${image_Top}');">

            <h1 class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-filter; blur: 0,5;">${alias}</h1>

            <div class="uk-position-top">
                <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                    <div class="uk-navbar-nav">
                        <li class="uk-active"><a href="" class="uk-dark uk-card uk-card-primary uk-card-body uk-animation-scale-up">Category</a></li>
                        <li>
                            <a href="" class="uk-dark uk-card uk-card-secondary uk-card-body uk-animation-scale-up">Category</a>
                            <div class="uk-navbar-dropdown">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li class="uk-active"><a href="">Welcome</a></li>
                                    <li><a onclick="loadedApi(2)">Stan Lee</a></li>
                                    <li><a onclick="loadedApi(1)">Steve Jobs</a></li>
                                </ul>
                            </div>
                        </li>
                    </div>
                </nav>
            </div>
        </div>
        <h1>${name}</h1>
        ${pinter}
        <div class="uk-position-relative" uk-slideshow="animation: fade">
            <ul class="uk-slideshow-items">
                <li>
                    <img src="${image_Row[1]}" alt="" uk-cover>
                </li>
                <li>
                    <img src="${image_Row[2]}" alt="" uk-cover>
                </li>
                <li>
                    <img src="${image_Row[3]}" alt="" uk-cover>
                </li>
            </ul>

            <div class="uk-position-bottom-center uk-position-small">
                <ul class="uk-thumbnav">
                    <li uk-slideshow-item="0"><a href="#"><img src="${image_Row[1]}" width="100" alt=""></a></li>
                    <li uk-slideshow-item="1"><a href="#"><img src="${image_Row[2]}" width="100" alt=""></a></li>
                    <li uk-slideshow-item="2"><a href="#"><img src="${image_Row[3]}" width="100" alt=""></a></li>
                </ul>
            </div>

        </div>
        `
        main.appendChild(tribute)
    }) 
}
