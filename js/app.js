class MenuItem {
    constructor(logoSrc = "", title = "Sample Text", description = "Sample Description") {
        this.logoSrc = logoSrc;
        this.title = title;
        this.description = description;
    }

    render() {
        return `<a class="menu-point-link">
                    <div class="menu-point"> 
                        <img src="${this.logoSrc}" alt="${this.title}" class="logo-image">
                        <div class="menu-point-content">
                            <h2>${this.title}</h2>
                            <p>${this.description}</p>
                        </div>
                        <img class="arrow" src="img/ARROW.png" id="${this.title}">
                    </div>
                </a>`
    }
}

class MenuList {
    constructor() {
        this.menuItemPool = [
            { title: 'multiscreen', description: 'Многоканальный мониторинг', src: 'img/mslogo.png'},
            { title: 'multirec', description: 'Полицейская запись', src: 'img/mrlogo.png'},
            { title: 'multiprobe', description: 'Распределённый мониторинг', src: 'img/mplogo.png'},
            { title: 'vplay 5', description: 'Вещательный сервер', src: 'img/vplaylogo.png'},
            { title: 'vrec', description: 'Многоканальная запись', src: 'img/vrlogo.png'},
            { title: 'oplan', description: 'Комплексная автоматизация ТВ', src: 'img/oplanlogo.png'},
            { title: 'multituner', description: 'Мониторинг радиовещания', src: 'img/mtlogo.png'},
            { title: 'asi-sdi splitter', description: 'Разделитель ASI/SDI', src: 'img/asisdilogo.png'},
            { title: 'pci-e cards', description: 'Карты ввода-вывода', src: 'img/pcilogo.png'},
            { title: 'cdn-video', description: 'Облачный Playout', src: 'img/CDNLOGO.png'}
        ]
    }

    render() {
        let outputHTML = '';
        this.menuItemPool.forEach(item => {
            const newMenuItem = new MenuItem(item.src, item.title, item.description);
            outputHTML += newMenuItem.render();
        });
        document.querySelector('.menu-software').innerHTML = outputHTML;
    }
}

const indexMenu = new MenuList();
indexMenu.render()

class ContentItem {
    constructor(title, imageList) {
        this.title = title;
        this.imageList = imageList;
    }

    configureImages() {
        let outputHTML = '';
        this.imageList.forEach((item) => {
            outputHTML += `<img src="${item}" alt="content-image" width="100%">`
        });

        return outputHTML
    }

    render() {
        return `<div class="product-info">
                    <div id="${this.title}"></div> 
                    ${this.configureImages()}                
                </div>`
    }
}

class ContentList {
    constructor() {
        this.contentImagesPool = [
            { title: 'multiscreen', imagePool: ['img/MULTISCREEN RUS WEB-0.jpg','img/MULTISCREEN RUS WEB-1.jpg','img/MULTISCREEN RUS WEB-2.jpg','img/MULTISCREEN RUS WEB-3.jpg']},
            { title: 'multirec', imagePool: ['img/MULTIREC RUS WEB-0.jpg','img/MULTIREC RUS WEB-1.jpg','img/MULTIREC RUS WEB-2.jpg','img/MULTIREC RUS WEB-3.jpg']},
            { title: 'multiprobe', imagePool: ['img/Stream MultiProbe-1.jpg','img/Stream MultiProbe-2.jpg']},
            { title: 'vplay 5', imagePool: ['img/VPLAY RUS WEB-0.jpg','img/VPLAY RUS WEB-1.jpg','img/VPLAY RUS WEB-2.jpg','img/VPLAY RUS WEB-3.jpg']},
            { title: 'vrec', imagePool: ['img/VREC RUS WEB-0.jpg','img/VREC RUS WEB-1.jpg']},
            { title: 'oplan', imagePool: ['img/OPLAN RUS WEB-0.jpg','img/OPLAN RUS WEB-1.jpg']},
            { title: 'multituner', imagePool: ['img/MULTITUNER RUS WEB-0.jpg','img/MULTITUNER RUS WEB-1.jpg','img/MULTITUNER RUS WEB-2.jpg','img/MULTITUNER RUS WEB-3.jpg']},
            { title: 'asi-sdi splitter', imagePool: ['img/ASI SDI SPLITTER WEB-1.jpg','img/ASI SDI SPLITTER WEB-2.jpg']},
            { title: 'pci-e cards', imagePool: ['img/StreamLabs Cards-1.jpg','img/StreamLabs Cards-2.jpg','img/StreamLabs Cards-3.jpg','img/StreamLabs Cards-4.jpg']},
            { title: 'cdn-video', imagePool: ['img/Cloud Playout Stream labs and CDNvideo-0.jpg','img/Cloud Playout Stream labs and CDNvideo-1.jpg']}
        ]
    }

    render() {
        let outputHTML = '';
        this.contentImagesPool.forEach(item => {
            const newContentItem = new ContentItem(item.title, item.imagePool);
            outputHTML += newContentItem.render();
        });
        document.querySelector('.container').innerHTML += outputHTML;
    }
}

const indexContent = new ContentList();
indexContent.render();

const arrows = document.querySelectorAll('.arrow');
const menuPoints = document.querySelectorAll('.menu-point-link');
const contentImages = document.querySelectorAll('.product-info');

menuPoints.forEach(function(item) {
    item.addEventListener('mousedown', function() {
        hideArrows();
        const activeArrow = this.querySelector('.arrow');
        activeArrow.classList.add('active');
        changeContent(activeArrow.id, contentImages);
    });
});

function hideArrows() {
    arrows.forEach(function(item) {
        item.classList.remove('active');
    });
};

function changeContent(activeArrowId, contentImages) {
    contentImages.forEach(function(item) {
        item.hidden = true;
        if (item.firstElementChild.id === activeArrowId) {
            item.hidden = false;
            item.scrollTop = 0;
        }
    });
}