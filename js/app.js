// select needed elements
const navUL = document.getElementById('navbar-list');
const pageMainSections = ['Hero', 'About', 'Work', 'Gallery'];
const mainSectionsContainer = document.getElementById('main');

// create navbar links
(function () {
    for (let navItem of pageMainSections) {
        let li = document.createElement("li");
        let displayedItem;
        if (navItem.includes('-') > 1) displayedItem = navItem.replace('-', ' ');
        li.innerHTML += `<a href="#${navItem.toLowerCase()}"><span>${displayedItem ? displayedItem : navItem}</span></a>`;
        li.className = "navbar-item";
        navUL.appendChild(li);
    }
})();

// create sections and containers
(function () {
    let newMainSection;
    const sectionContainer = document.createElement('div');

    for (let section of pageMainSections) {
        const sectionContainer = document.createElement('div');
        newMainSection = document.createElement("section");
        newMainSection.id = `${section.toLowerCase()}`;
        sectionContainer.className = `container ${section.toLowerCase()}`;
        newMainSection.appendChild(sectionContainer);
        mainSectionsContainer.appendChild(newMainSection);
    }
    sectionContainer.classList.add('container');
    document.getElementsByTagName('footer')[0].prepend(sectionContainer);
})();

// create hero section
(function () {
    const heroContainer = document.querySelector('#hero .container');
    const heroTitle = document.createElement("h2");
    const heroSub1 = document.createElement("p");
    const heroSub2 = document.createElement("p");
    heroTitle.innerText = introText.title;
    heroSub1.innerText = introText.quote;
    heroSub2.innerText = introText.action;
    heroTitle.className = 'section-title';
    heroSub1.className = 'own-quotes';
    heroSub2.className = 'goto-gallery';
    heroContainer.append(heroTitle);
    heroContainer.append(heroSub1);
    heroContainer.append(heroSub2);
})();

// create about section
(function () {
    const aboutContainer = document.querySelector('#about .container');
    const aboutContent = document.createElement("div");
    const aboutTitle = document.createElement("h2");
    const aboutSub1 = document.createElement("p");
    const aboutSub2 = document.createElement("p");
    aboutTitle.innerText = aboutConan.title;
    aboutSub1.innerText = aboutConan.sub;
    aboutSub2.innerText = aboutConan.sub2;
    aboutContent.className = 'content';
    aboutTitle.className = 'section-main-title';
    aboutSub1.className = 'own-quotes';
    aboutContent.append(aboutTitle);
    aboutContent.append(aboutSub1);
    aboutContent.append(aboutSub2);
    aboutContainer.append(aboutContent);
})();


// create work section
(function () {
    const workContainer = document.querySelector('#work .container');
    const workContentTitle = document.createElement('h2');
    const workItemsContent = document.createElement('div');
    workContentTitle.innerText = 'My work';
    workContentTitle.className = 'section-main-title';
    let workItem, workItemHeader, workItemDesc;
    workContainer.append(workContentTitle);
    for (let item of workItems) {
        workItem = document.createElement("div");
        workItemHeader = document.createElement("h4");
        workItemDesc = document.createElement("p");
        workItemHeader.innerHTML = item.title;
        workItemDesc.innerHTML = item.description;
        workItem.className = "work-box";
        workItem.append(workItemHeader)
        workItem.append(workItemDesc)
        workItemsContent.append(workItem);
    }
    workContainer.append(workItemsContent);
    workItemsContent.className = "work-statistics";
})();

// create gallery section
(function () {
    const galleryContainer = document.querySelector('#gallery .container');
    const galleryTitle = document.createElement("h2");
    galleryTitle.innerText = 'My Gallery';
    galleryTitle.className = 'section-main-title';
    galleryContainer.append(galleryTitle);
    let baseURK = './images/port-';
    for (let i = 1; i < 5; i++) {
        const galleryImage = document.createElement("img");
        galleryImage.src = baseURK + `${i}` + '.png';
        console.log(galleryImage.src)
        galleryContainer.append(galleryImage);
    }
})();


// create footer section
(function () {
    let footer = document.querySelector('footer .container');
    const footerTitleContent = document.createElement('h2');
    const footerUlContent = document.createElement('ul');
    footerTitleContent.innerHTML = 'Contact me &#128526'
    officialLinks.map(item => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.setAttribute('href', item.link);
        anchor.innerText = item.name;
        li.appendChild(anchor);
        footerUlContent.appendChild(li);
    });
    footerTitleContent.className = 'section-main-title';
    console.log(document.querySelector('footer'))
    footer.append(footerTitleContent)
    footer.append(footerUlContent);
})();


// scroll function
(function () {
    const scrollTop = document.createElement('div');
    const scrollTopIcon = document.createElement('span');
    let navLinks = document.querySelectorAll("nav ul li a");
    let newPosition = 0,
        lastPosition;
    scrollTop.className = 'scroll-top display-none';
    scrollTop.id = 'scrollMeUp';
    scrollTopIcon.className = 'fas fa-chevron-up';
    scrollTop.append(scrollTopIcon);
    document.getElementsByTagName('body')[0].prepend(scrollTop)

    window.addEventListener('scroll', function (e) {
        newPosition = window.scrollY;
        const scroller = document.getElementById('scrollMeUp');
        if (lastPosition > 100 || window.scrollY > 100) {
            scroller.classList.remove('display-none');
        } else {
            scroller.classList.add('display-none');
        }
    });

    window.addEventListener("scroll", event => {
        let callTop = window.scrollY + 110;
        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (
                section.offsetTop <= callTop &&
                section.offsetTop + section.offsetHeight > callTop
            ) {
                section.classList.add('active')
                link.parentElement.classList.add("current");
            } else {
                section.classList.remove('active')
                link.parentElement.classList.remove("current");
            }
        });
    });
})()