import React, { useEffect } from 'react';

/* global anime */

function Home() {
  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });

  useEffect(() => {
    Promise.resolve()
      .then(() => loadScript('/js/jquery.min.js'))
      .then(() => loadScript('/js/bootstrap.min.js'))
      .then(() => loadScript('/js/popper.min.js'))
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'))
      .then(() => loadScript('/js/jquery.magnific-popup.js'))
      .then(() => loadScript('/js/morphext.min.js'))
      .then(() => loadScript('/js/isotope.pkgd.min.js'))
      .then(() => loadScript('/js/validator.min.js'))
      .then(() => loadScript('/js/scripts.js'))
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js'))
      .then(() => {
        const animationTimer = setTimeout(() => {
          if (typeof anime !== 'undefined') {
            const textWrapper = document.querySelector('#js-rotating');
            if (!textWrapper) {
              console.error("Element #js-rotating not found");
              return;
            }

            textWrapper.style.opacity = 0;

            const phrases = [
              "D'INVESTISSEMENT",
              "D'ACCOMPAGNEMENT",
              "DE PROJETS"
            ];
            let currentPhraseIndex = 0;

            function setPhrase() {
              const cleanText = phrases[currentPhraseIndex].trim();
              textWrapper.innerHTML = cleanText.replace(/\S/g, "<span class='letter'>$&</span>");
            }

            function animatePhrase() {
              setPhrase();
              anime.timeline({ loop: false })
                .add({
                  targets: '#js-rotating .letter',
                  opacity: [0, 1],
                  easing: "easeInOutQuad",
                  duration: 2250,
                  delay: (el, i) => 150 * (i + 1),
                  begin: () => {
                    textWrapper.style.opacity = 1;
                  }
                })
                .add({
                  targets: '#js-rotating',
                  opacity: 0,
                  duration: 1000,
                  easing: "easeOutExpo",
                  delay: 1000,
                  complete: () => {
                    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                    animatePhrase();
                  }
                });
            }

            animatePhrase();
          } else {
            console.error("anime.js not loaded");
          }
        }, 1000);

        return () => clearTimeout(animationTimer);
      })
      .catch((err) => console.error('Failed to load scripts:', err));
  }, []);

  // start the return 
  return (
    <div>
          
       
          {/* Preloader */}
	<div className="spinner-wrapper">
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </div>
    {/* end of preloader */}
    

    {/* Navbar */}
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
        {/* Text Logo - Use this if you don't have a graphic logo */}
        {/* <a className="navbar-brand logo-text page-scroll" href="index.html">Aria</a> */}

        {/* Image Logo */}
        <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.png" alt="alternative"/></a>
        
        {/* Mobile Menu Toggle Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
        </button>
        {/* end of mobile menu toggle button */}

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#header">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#intro">INTRO</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#services">SERVICES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#callMe">CALL ME</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#projects">PROJECTS</a>
                </li>

                {/* Dropdown Menu */}          
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">ABOUT</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                        <div className="dropdown-items-divide-hr"></div>
                        <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                    </div>
                </li>
                {/* end of dropdown menu */}

                <li className="nav-item">
                    <a className="nav-link page-scroll" href="#contact">CONTACT</a>
                </li>
            </ul>
            <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <span className="hexagon"></span>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <span className="hexagon"></span>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div>
    </nav> {/* end of navbar */}
    {/* end of navbar */}


 
    {/* Header */}
    <header id="header" className="header">
        <video autoPlay muted loop playsInline className="bg-video">
  <source src="images/videoplayback.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-container">
                            
                            <h1>PLATEFORME <span id="js-rotating">D'INVESTISSEMENT, D'ACCOMPAGNEMENT, DE PROJETS</span></h1>
                            <p className="p-heading p-large">Une solution web pour digitaliser les parcours d’accompagnement à l’investissement et référencer les initiatives touristiques et économiques dans la région Drâa-Tafilalet.</p>
                            <a className="btn-solid-lg page-scroll" href="#intro">DÉCOUVRIR</a>
                        </div>
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </div> {/* end of header-content */}
    </header> {/* end of header */}
    {/* end of header */}



    {/* Intro */}
    <div id="intro" className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="text-container">
                        <div className="section-title">INTRO</div>
                        <h2>Nous offrons certains des meilleurs services pour le développement économique de la région</h2>
                        <p>Lancer de nouveaux projets ou renforcer la position économique d’une région peut parfois être un défi complexe et exigeant.</p>
                        <p className="testimonial-text">« Notre mission ici est d’accompagner tous les acteurs de la région grâce à l’expertise de notre équipe pour favoriser la création et la croissance durable. »</p>
                        <div className="testimonial-author">Allal El BAZ - Directeur CRI - Darâa-Tafilalet</div>
                    </div> {/* end of text-container */}
                </div> {/* end of col */}
                <div className="col-lg-7">
                    <div className="image-container">
                        <img className="img-fluid" src="images/intro-office.jpg" alt="alternative"/>
                    </div> {/* end of image-container */}
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of basic-1 */}
    {/* end of intro */}


    {/* Description */}
    <div className="cards-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                    {/* Card 1*/}
                    <div className="card">
                        <span className="fa-stack">
                            <span className="hexagon"></span>
                            <i className="fas fa-binoculars fa-stack-1x"></i>
                        </span>
                        <div className="card-body">
                            <h4 className="card-title">Analyse de l’environnement</h4>
                            <p>Nous étudions les réalités économiques et sociales locales pour poser les bases d’un développement adapté et durable.</p>
                        </div>
                    </div>
                    {/* end of card */}

                    {/* Card 2*/}
                    <div className="card">
                        <span className="fa-stack">
                            <span className="hexagon"></span>
                            <i className="fas fa-list-alt fa-stack-1x"></i>
                        </span>
                        <div className="card-body">
                            <h4 className="card-title">Accompagnement au développement</h4>
                            <p>Nous concevons des plans sur mesure et accompagnons les porteurs de projets dans chaque étape stratégique.</p>
                        </div>
                    </div>
                    {/* end of card */}

                    {/* Card 3*/}
                    <div className="card">
                        <span className="fa-stack">
                            <span className="hexagon"></span>
                            <i className="fas fa-chart-pie fa-stack-1x"></i>
                        </span>
                        <div className="card-body">
                            <h4 className="card-title">Exécution & Évaluation</h4>
                            <p>Nous assurons le suivi et l’évaluation des actions pour garantir leur efficacité et ajuster les démarches si nécessaire.</p>
                        </div>
                    </div>
                    {/* end of card */}

                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of cards-1 */}
    {/* end of description */}


    {/* Services */}
    <div id="services" className="cards-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title"> Nos Accompagnements</div>
                    <h2>Trouvez l'accompagnement adapté à votre projet,<br/> quel que soit son niveau d’avancement.</h2>
                </div> {/* end of col */}
            </div> {/* end of row */}
            <div className="row">
                <div className="col-lg-12">
                    
                    {/* Card 1*/}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/services-1.jpg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">🔍 Identification d’Opportunités</h3>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Accès à un catalogue complet de projets multisectoriels (santé, tourisme, infrastructure, agriculture, etc.)</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Filtres avancés pour trouver les projets selon secteur, budget, localisation et critères de durabilité</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Informations détaillées sur chaque projet (retour sur investissement, impact social, création d’emplois</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end of card */}

                    {/* Card 2*/}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/services-2.jpg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">🔄 Gestion des Demandes et Suivi des Projets</h3>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Soumission simplifiée des demandes d’investissement et validation par les gestionnaires</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Suivi en temps réel de l’état des projets et notifications automatiques</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Workflow sécurisé avec authentification et gestion des rôles (investisseur, porteur, admin)</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end of card */}

                    {/* Card 3*/}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/services-3.jpg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">📊 Tableaux de Bord et Analyses</h3>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Visualisation interactive des KPIs financiers et des tendances sectorielles</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Outils d’aide à la décision basés sur les données en temps réel</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Rapports personnalisés pour investisseurs et autorités régionales</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end of card */}
                    
                    {/* Card 4*/}
                    <div className="card">
                        <div className="card-image">
                            <img className="img-fluid" src="images/services-4.jpg" alt="alternative"/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">🌐 Accompagnement et Collaboration</h3>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Annuaire des partenaires régionaux pour faciliter les contacts et partenariats</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Forums et modules communautaires pour échanges et évaluations</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-square"></i>
                                    <div className="media-body">Assistance multilingue avec chatbot intelligent pour répondre aux questions réglementaires et techniques</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end of card */}

                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of cards-2 */}
    {/* end of services */}
    

    {/* Details 1 */}
	<div id="details" className="accordion">
		<div className="area-1">
		</div>{/* end of area-1 on same line and no space between comments to eliminate margin white space */}<div className="area-2">
            
            {/* Accordion */}
            <div className="accordion-container" id="accordionOne">
                <h2>Accélérez la croissance de votre projet et amplifiez son impact régional.</h2>
                <div className="item">
                    <div id="headingOne">
                        <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <span className="circle-numbering">1</span><span className="accordion-title">Un Accompagnement Complet</span>
                        </span>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
                        <div className="accordion-body">
                            La Banque de Projets Drâa-Tafilalet vous guide à chaque étape : identification, structuration, validation et mise en œuvre. Elle connecte porteurs de projets, investisseurs et partenaires autour d'une vision partagée.
                        </div>
                    </div>
                </div> {/* end of item */}
            
                <div className="item">
                    <div id="headingTwo">
                        <span className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                            <span className="circle-numbering">2</span><span className="accordion-title">Structuration Stratégique</span>
                        </span>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionOne">
                        <div className="accordion-body">
                           Déposez, suivez et développez votre projet via un workflow clair et transparent, aligné sur les priorités régionales.
                        </div>
                    </div>
                </div> {/* end of item */}
            
                <div className="item">
                    <div id="headingThree">
                        <span className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span className="circle-numbering">3</span><span className="accordion-title">Visibilité & Attractivité</span>
                        </span>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
                        <div className="accordion-body">
                            Valorisez votre projet grâce à des fiches détaillées, des visites virtuelles, des labels durables et des recommandations intelligentes.
                        </div>
                    </div>
                </div> {/* end of item */}
            </div> {/* end of accordion-container */}
            {/* end of accordion */}

		</div> {/* end of area-2 */}
    </div> {/* end of accordion */}
    {/* end of details 1 */}


    {/* Details 2 */}
	<div className="tabs">
        <div className="area-1">
            <div className="tabs-container">
                
                {/* Tabs Links */}
                <ul className="nav nav-tabs" id="ariaTabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i className="fas fa-th"></i> Intervention</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i className="fas fa-th"></i> Expertise</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i className="fas fa-th"></i> Qualité</a>
                    </li>
                </ul>
                {/* end of tabs links */}
                
                {/* Tabs Content */}
                <div className="tab-content" id="ariaTabsContent">

                    {/* Tab */}
                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                        <h4>Interventions au Service du Développement Régional</h4>
                        <p>La Banque de Projets Drâa-Tafilalet propose des outils innovants et adaptés pour soutenir les initiatives de développement dans tous les secteurs stratégiques. Cette section illustre la diversité et l'efficacité de nos domaines d’intervention.</p>
                        
                        {/* Progress Bars */}
                        <div className="progress-container">
                            <div className="title">Développement de Projets – 100%</div>
                            <div className="progress">
                                <div className="progress-bar first" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="title">Identification d’Opportunités – 76%</div>
                            <div className="progress">
                                <div className="progress-bar second" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="title">Valorisation Digitale – 90%</div>
                            <div className="progress">
                                <div className="progress-bar third" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div> {/* end of progress-container */}
                        {/* end of progress bars */}
                        
                    </div> {/* end of tab-pane */} 
                    {/* end of tab */}

                    {/* Tab */}
                    <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                        <ul className="list-unstyled li-space-lg first">
                            <li className="media">
                                <div className="media-bullet">1</div>
                                <div className="media-body"><strong>High quality</strong> is on top of our list when it comes to the way we deliver the services</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">2</div>
                                <div className="media-body"><strong>Maximum impact</strong> is what we look for in our actions</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">3</div>
                                <div className="media-body"><strong>Quality standards</strong> are important but meant to be exceeded</div>
                            </li>
                        </ul>
                        <ul className="list-unstyled li-space-lg last">
                            <li className="media">
                                <div className="media-bullet">4</div>
                                <div className="media-body"><strong>We're always looking</strong> for industry leaders to help them win their market position</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">5</div>
                                <div className="media-body"><strong>Evaluation</strong> is a key aspect of this business and important</div>
                            </li>
                            <li className="media">
                                <div className="media-bullet">6</div>
                                <div className="media-body"><strong>Ethic</strong> procedures ar alwasy at the base of everything we do</div>
                            </li>
                        </ul>
                    </div> {/* end of tab-pane */}
                    {/* end of tab */}

                    {/* Tab */}
                    <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                        <p><strong>We strive to achieve</strong> 100% customer satisfaction for both types of customers: hiring companies and job seekers. Types of customers: <a className="green" href="#your-link">with huge potential</a></p>
                        <p><strong>Our goal is to help</strong> your company achieve its full potential and establish long term stability for <a className="green" href="#your-link">the stakeholders</a></p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">It's easy to get a quotation, just call our office anytime</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">We'll get back to you with an initial estimate soon</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Get ready to see results even after only 30 days</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Ask for a quote and start improving your business</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Just fill out the form and we'll call you right away</div>
                            </li>
                        </ul>
                    </div> {/* end of tab-pane */}
                    {/* end of tab */}

                </div> {/* end of tab-content */}
                {/* end of tabs content */}

            </div> {/* end of tabs-container */}
        </div>{/* end of area-1 on same line and no space between comments to eliminate margin white space */}<div className="area-2"></div> {/* end of area-2 */}
    </div> {/* end of tabs */}
    {/* end of details 2 */}


    {/* Testimonials */}
    <div className="slider">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Découvrez les Témoignages de Nos Utilisateurs</h2>
                    <p className="p-heading">Nos porteurs de projets et investisseurs sont au cœur de notre mission. Leur succès est la meilleure preuve de l’efficacité et de l’impact de la plateforme pour le développement régional.</p>
                </div> {/* end of col */}
            </div> {/* end of row */}
            <div className="row">
                <div className="col-lg-12">

                    {/* Card Slider */}
                    <div className="slider-container">
                        <div className="swiper-container card-slider">
                            <div className="swiper-wrapper">
                                
                                {/* Slide */}
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-1.jpg" alt="alternative"/>
                                        <div className="card-body">
                                            <div className="testimonial-text">Ma démarche a été structurée grâce à la plateforme, et a attiré les bons partenaires pour créer un réel impact local.</div>
                                            <div className="testimonial-author">Youssef El Amrani – Porteur de Projet</div>
                                        </div>
                                    </div>
                                </div> {/* end of swiper-slide */}
                                {/* end of slide */}
        
                                {/* Slide */}
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-2.jpg" alt="alternative"/>
                                        <div className="card-body">
                                            <div className="testimonial-text">La plateforme m’a aidé à trouver des projets fiables et à investir durablement à Drâa-Tafilalet. </div>
                                            <div className="testimonial-author">Karim El Fassi – Investisseur</div>
                                        </div>
                                    </div>        
                                </div> {/* end of swiper-slide */}
                                {/* end of slide */}
        
                                {/* Slide */}
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-3.jpg" alt="alternative"/>
                                        <div className="card-body">
                                            <div className="testimonial-text">Le directeur intervient directement pour guider les porteurs de projets.</div>
                                            <div className="testimonial-author">Rachid Smail – Développeur</div>
                                        </div>
                                    </div>        
                                </div> {/* end of swiper-slide */}
                                {/* end of slide */}
        
                                {/* Slide */}
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-4.jpg" alt="alternative"/>
                                        <div className="card-body">
                                            <div className="testimonial-text">La plateforme m’a aidée à découvrir de nouveaux projets et à soutenir le développement de la région.</div>
                                            <div className="testimonial-author">Samira El Fassi – Porteuse de Projet</div>
                                        </div>
                                    </div>
                                </div> {/* end of swiper-slide */}
                                {/* end of slide */}
        
                                {/* Slide */}
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-5.jpg" alt="alternative"/>
                                        <div className="card-body">
                                            <div className="testimonial-text">je recommande cette plateforme à tous les porteurs de projets.</div>
                                            <div className="testimonial-author">Aghjedim Ayoub - Manager</div>
                                        </div>
                                    </div>        
                                </div> {/* end of swiper-slide */}
                                {/* end of slide */}
        
                                {/* Slide */}
                                <div className="swiper-slide">
                                    <div className="card">
                                        <img className="card-image" src="images/testimonial-6.jpg" alt="alternative"/>
                                        <div className="card-body">
                                            <div className="testimonial-text">Un outil essentiel pour soutenir les projets de Drâa-Tafilalet.</div>
                                            <div className="testimonial-author">Lina Bensalah – Gestionnaire de Projets</div>
                                        </div>
                                    </div>        
                                </div> {/* end of swiper-slide */}
                                {/* end of slide */}
                            
                            </div> {/* end of swiper-wrapper */}
        
                            {/* Add Arrows */}
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                            {/* end of add arrows */}
        
                        </div> {/* end of swiper-container */}
                    </div> {/* end of sliedr-container */}
                    {/* end of card slider */}

                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of slider */}
    {/* end of testimonials */}


    {/* Call Me */}
    <div id="callMe" className="form-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">CALL ME</div>
                        <h2 className="white">Have Us Contact You By Filling And Submitting The Form</h2>
                        <p className="white">You are just a few steps away from a personalized offer. Just fill in the form and send it to us and we'll get right back with a call to help you decide what service package works.</p>
                        <ul className="list-unstyled li-space-lg white">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">It's very easy just fill in the form so we can call</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">During the call we'll require some info about the company</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Don't hesitate to email us for any questions or inquiries</div>
                            </li>
                        </ul>
                    </div>
                </div> {/* end of col */}
                <div className="col-lg-6">
                   
                    {/* Call Me Form */}
                    <form id="callMeForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="lname" name="lname" required/>
                            <label className="label-control" for="lname">Name</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="lphone" name="lphone" required/>
                            <label className="label-control" for="lphone">Phone</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="lemail" name="lemail" required/>
                            <label className="label-control" for="lemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <select className="form-control-select" id="lselect" required>
                                <option className="select-option" value="" disabled selected>Interested in...</option>
                                <option className="select-option" value="Off The Ground">Off The Ground</option>
                                <option className="select-option" value="Accelerated Growth">Accelerated Growth</option>
                                <option className="select-option" value="Market Domination">Market Domination</option>
                            </select>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox white">
                            <input type="checkbox" id="lterms" value="Agreed-to-Terms" name="lterms" required/>I agree with Aria's stated <a className="white" href="privacy-policy.html">Privacy Policy</a> and <a className="white" href="terms-conditions.html">Terms & Conditions</a>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">CALL ME</button>
                        </div>
                        <div className="form-message">
                            <div id="lmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>
                    {/* end of call me form */}
                    
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of form-1 */}
    {/* end of call me */}


    {/* Projects */}
	<div id="projects" className="filter">
		<div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">PROJECTS</div>
                    <h2>Projects That We're Proud Of</h2>
                </div> {/* end of col */}
            </div> {/* end of row */}
            <div className="row">
                <div className="col-lg-12">
                    {/* Filter */}
                    <div className="button-group filters-button-group">
                        <a className="button is-checked" data-filter="*"><span>SHOW ALL</span></a>
                        <a className="button" data-filter=".design"><span>DESIGN</span></a>
                        <a className="button" data-filter=".development"><span>DEVELOPMENT</span></a>
                        <a className="button" data-filter=".marketing"><span>MARKETING</span></a>
                        <a className="button" data-filter=".seo"><span>SEO</span></a>
                    </div> {/* end of button group */}
                    <div className="grid">
                        <div className="element-item development">
                            <a className="popup-with-move-anim" href="#project-1"><div className="element-item-overlay"><span>Online Banking</span></div><img src="images/project-1.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item development">
                            <a className="popup-with-move-anim" href="#project-2"><div className="element-item-overlay"><span>Classic Industry</span></div><img src="images/project-2.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item design development marketing">
                            <a className="popup-with-move-anim" href="#project-3"><div className="element-item-overlay"><span>BoomBap Audio</span></div><img src="images/project-3.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item design development marketing">
                            <a className="popup-with-move-anim" href="#project-4"><div className="element-item-overlay"><span>Van Moose</span></div><img src="images/project-4.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item design development marketing seo">
                            <a className="popup-with-move-anim" href="#project-5"><div className="element-item-overlay"><span>Joy Moments</span></div><img src="images/project-5.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item design marketing seo">
                            <a className="popup-with-move-anim" href="#project-6"><div className="element-item-overlay"><span>Spark Events</span></div><img src="images/project-6.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item design marketing">
                            <a className="popup-with-move-anim" href="#project-7"><div className="element-item-overlay"><span>Casual Wear</span></div><img src="images/project-7.jpg" alt="alternative"/></a>
                        </div>
                        <div className="element-item design marketing">
                            <a className="popup-with-move-anim" href="#project-8"><div className="element-item-overlay"><span>Zazoo Apps</span></div><img src="images/project-8.jpg" alt="alternative"/></a>
                        </div>
                    </div> {/* end of grid */}
                    {/* end of filter */}
                    
                </div> {/* end of col */}
            </div> {/* end of row */}
		</div> {/* end of container */}
    </div> {/* end of filter */}
    {/* end of projects */}


    {/* Project Lightboxes */}
    {/* Lightbox */}
    <div id="project-1" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <img className="img-fluid" src="images/project-1.jpg" alt="alternative"/>
            </div> {/* end of col */}
            <div className="col-lg-4">
                <h3>Online Banking</h3>
                <hr className="line-heading"/>
                <h6>Strategy Development</h6>
                <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                    <p className="testimonial-author">General Manager</p>
                </div>
                <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div> {/* end of col */}
        </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-2" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <img className="img-fluid" src="images/project-2.jpg" alt="alternative"/>
            </div> {/* end of col */}
            <div className="col-lg-4">
                <h3>Classic Industry</h3>
                <hr className="line-heading"/>
                <h6>Strategy Development</h6>
                <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                    <p className="testimonial-author">General Manager</p>
                </div>
                <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div> {/* end of col */}
        </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-3" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <img className="img-fluid" src="images/project-3.jpg" alt="alternative"/>
            </div> {/* end of col */}
            <div className="col-lg-4">
                <h3>BoomBap Audio</h3>
                <hr className="line-heading"/>
                <h6>Strategy Development</h6>
                <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                    <p className="testimonial-author">General Manager</p>
                </div>
                <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div> {/* end of col */}
        </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-4" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <img className="img-fluid" src="images/project-4.jpg" alt="alternative"/>
            </div> {/* end of col */}
            <div className="col-lg-4">
                <h3>Van Moose</h3>
                <hr className="line-heading"/>
                <h6>Strategy Development</h6>
                <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                    <p className="testimonial-author">General Manager</p>
                </div>
                <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div> {/* end of col */}
        </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-5" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <img className="img-fluid" src="images/project-5.jpg" alt="alternative"/>
            </div> {/* end of col */}
            <div className="col-lg-4">
                <h3>Joy Moments</h3>
                <hr className="line-heading"/>
                <h6>Strategy Development</h6>
                <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                    <p className="testimonial-author">General Manager</p>
                </div>
                <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div> {/* end of col */}
        </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-6" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <img className="img-fluid" src="images/project-6.jpg" alt="alternative"/>
            </div> {/* end of col */}
            <div className="col-lg-4">
                <h3>Spark Events</h3>
                <hr className="line-heading"/>
                <h6>Strategy Development</h6>
                <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                    <p className="testimonial-author">General Manager</p>
                </div>
                <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div> {/* end of col */}
        </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-7" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <img className="img-fluid" src="images/project-7.jpg" alt="alternative"/>
            </div> {/* end of col */}
            <div className="col-lg-4">
                <h3>Casual Wear</h3>
                <hr className="line-heading"/>
                <h6>Strategy Development</h6>
                <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                    <p className="testimonial-author">General Manager</p>
                </div>
                <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div> {/* end of col */}
        </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}

    {/* Lightbox */}
    <div id="project-8" className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div className="row">
            <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
            <div className="col-lg-8">
                <img className="img-fluid" src="images/project-8.jpg" alt="alternative"/>
            </div> {/* end of col */}
            <div className="col-lg-4">
                <h3>Zazoo Apps</h3>
                <hr className="line-heading"/>
                <h6>Strategy Development</h6>
                <p>Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current needs</p>
                <p>By offering the best professional services and quality products in the market. Don't hesitate and get in touch with us.</p>
                <div className="testimonial-container">
                    <p className="testimonial-text">Need a solid foundation for your business growth plans? Aria will help you manage sales and meet your current requirements.</p>
                    <p className="testimonial-author">General Manager</p>
                </div>
                <a className="btn-solid-reg" href="#your-link">DETAILS</a> <a className="btn-outline-reg mfp-close as-button" href="#projects">BACK</a> 
            </div> {/* end of col */}
        </div> {/* end of row */}
    </div> {/* end of lightbox-basic */}
    {/* end of lightbox */}
    {/* end of project lightboxes */}


    {/* Team */}
    <div className="basic-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Our Team Of Consultants</h2>
                    <p className="p-heading">We're only as strong and as knowledgeable as our team. So here are the men and women which help customers meet goals and grow companies</p>
                </div> {/* end of col */}
            </div> {/* end of row */}
            <div className="row">
                <div className="col-lg-12">

                    {/* Team Member */}
                    <div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="images/team-1.png" alt="alternative"/>
                        </div> {/* end of image-wrapper */}
                        <p className="p-large">John Whitelong</p>
                        <p className="job-title">General Manager</p>
                        <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                        </span>
                    </div> {/* end of team-member */}
                    {/* end of team member */}

                    {/* Team Member */}
                    <div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="images/team-2.png" alt="alternative"/>
                        </div> {/* end of image wrapper */}
                        <p className="p-large">Veronique Smith</p>
                        <p className="job-title">Business Developer</p>
                        <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                        </span>
                    </div> {/* end of team-member */}
                    {/* end of team member */}

                    {/* Team Member */}
                    <div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="images/team-3.png" alt="alternative"/>
                        </div> {/* end of image wrapper */}
                        <p className="p-large">Chris Zimerman</p>
                        <p className="job-title">Online Marketer</p>
                        <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                        </span>
                    </div> {/* end of team-member */}
                    {/* end of team member */}

                    {/* Team Member */}
                    <div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="images/team-4.png" alt="alternative"/>
                        </div> {/* end of image wrapper */}
                        <p className="p-large">Mary Villalonga</p>
                        <p className="job-title">Community Manager</p>
                        <span className="social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <span className="hexagon"></span>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                        </span>
                    </div> {/* end of team-member */}
                    {/* end of team member */}

                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of basic-2 */}
    {/* end of team */}


    {/* About */}
    <div id="about" className="counter">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xl-6">
                    <div className="image-container">
                        <img className="img-fluid" src="images/about.jpg" alt="alternative"/>
                    </div> {/* end of image-container */}
                </div> {/* end of col */}
                <div className="col-lg-7 col-xl-6">
                    <div className="text-container">
                        <div className="section-title">ABOUT</div>
                        <h2>We're Passionate About Delivering Growth Services</h2>
                        <p>Our goal is to provide the right business growth services at the appropriate time so companies can benefit from the created momentum and thrive for a long period of time</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">Everything we recommend has direct positive impact</div>
                            </li>
                            <li className="media">
                                <i className="fas fa-square"></i>
                                <div className="media-body">You will become an important partner of our company</div>
                            </li>
                        </ul>

                        {/* Counter */}
                        <div id="counter">
                            <div className="cell">
                                <div className="counter-value number-count" data-count="231">1</div>
                                <div className="counter-info">Happy<br/>Users</div>
                            </div>
                            <div className="cell">
                                <div className="counter-value number-count" data-count="121">1</div>
                                <div className="counter-info">Issues<br/>Solved</div>
                            </div>
                            <div className="cell">
                                <div className="counter-value number-count" data-count="159">1</div>
                                <div className="counter-info">Good<br/>Reviews</div>
                            </div>
                        </div>
                        {/* end of counter */}

                    </div> {/* end of text-container */}      
                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of counter */}
    {/* end of about */}


    {/* Contact */}
    <div id="contact" className="form-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="text-container">
                        <div className="section-title">CONTACT</div>
                        <h2>Get In Touch Using The Form</h2>
                        <p>You can stop by our office for a cup of coffee and just use the contact form below for any questions and inquiries</p>
                        <ul className="list-unstyled li-space-lg">
                            <li className="address"><i className="fas fa-map-marker-alt"></i>22nd Innovative Street, San Francisco, CA 94043, US</li>
                            <li><i className="fas fa-phone"></i><a href="tel:003024630820">+81 720 22 126</a></li>
                            <li><i className="fas fa-phone"></i><a href="tel:003024630820">+81 720 22 128</a></li>
                            <li><i className="fas fa-envelope"></i><a href="mailto:office@aria.com">office@aria.com</a></li>
                        </ul>
                        <h3>Follow Aria On Social Media</h3>

                        <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-pinterest fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <span className="hexagon"></span>
                                <i className="fab fa-behance fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> {/* end of text-container */}
                </div> {/* end of col */}
                <div className="col-lg-6">
                    
                    {/* Contact Form */}
                    <form id="contactForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required/>
                            <label className="label-control" for="cname">Name</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required/>
                            <label className="label-control" for="cemail">Email</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" for="cmessage">Your message</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="cterms" value="Agreed-to-Terms" required/>I agree with Aria's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">SUBMIT MESSAGE</button>
                        </div>
                        <div className="form-message">
                            <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>
                    {/* end of contact form */}

                </div> {/* end of col */}
            </div> {/* end of row */}
        </div> {/* end of container */}
    </div> {/* end of form-2 */}
    {/* end of contact */}

    </div>
  )
}

export default Home
