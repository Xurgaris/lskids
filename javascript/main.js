//MENU PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = {
        "btn-cab-masc": document.querySelector('.dropdown-menu'),
        "btn-cab-fem": document.querySelector('.dropdown-menu-2'),
    };

    Object.keys(menuButtons).forEach(id => {
        const button = document.getElementById(id);
        const menu = menuButtons[id];

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the document
            closeAllMenus();
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    });

    const closeAllMenus = () => {
        Object.values(menuButtons).forEach(menu => {
            menu.style.display = 'none';
        });
    };

    document.addEventListener('click', () => {
        closeAllMenus();
    });
});
//FIM MENU PRINCIPAL



//SUBMENUS
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = {
        "btn-navegation-conj": document.querySelector('#submenu'),
        "btn-navegation-camis": document.querySelector('#submenu-two'),
        "btn-navegation-casac": document.querySelector('#submenu-three'),
        "btn-navegation-pij": document.querySelector('#submenu-four'),
       
        "btn-navegation-conj-fem": document.querySelector('#submenu-fem'),
        "btn-navegation-casac-fem": document.querySelector('#submenu-two-fem'),
        "btn-navegation-vest-fem": document.querySelector('#submenu-three-fem'),
        "btn-navegation-pij-fem": document.querySelector('#submenu-four-fem'),
       
    };

    Object.keys(menuButtons).forEach(id => {
        const button = document.getElementById(id);
        const menu = menuButtons[id];

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the document
            closeAllMenus();
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    });

    const closeAllMenus = () => {
        Object.values(menuButtons).forEach(menu => {
            menu.style.display = 'none';
        });
    };

    document.addEventListener('click', () => {
        closeAllMenus();
    });
});


// SCRIPT Carrossel 
let count = 1;

document.getElementById("radio1").checked = true;


setInterval(function () {
    nextImage();
}, 4000)

function nextImage() {
    count++
    if (count > 4) {
        count = 1
    }

    document.getElementById("radio"+count).checked = true
}
// FIM SCRIPT CARROSSEL


//MENU CELULAR
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = {
        "menubar": document.querySelector('.main-dropdown-cel'),
    };

    Object.keys(menuButtons).forEach(id => {
        const button = document.getElementById(id);
        const menu = menuButtons[id];

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the document
            closeAllMenus();
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    });

    const closeAllMenus = () => {
        Object.values(menuButtons).forEach(menu => {
            menu.style.display = 'none';
        });
    };

    document.addEventListener('click', () => {
        closeAllMenus();
    });
});

//SUBMENU CELULAR
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = {
        "btn-cab-masc-cel": document.querySelector('.menu-cel-masc'),
        "btn-cab-fem-cel": document.querySelector('.menu-cel-fem'),
        "btn-cab-contato": document.querySelector('.infor-contato'),
    };

    Object.keys(menuButtons).forEach(id => {
        const button = document.getElementById(id);
        const menu = menuButtons[id];

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the document
            closeAllMenus();
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    });

    const closeAllMenus = () => {
        Object.values(menuButtons).forEach(menu => {
            menu.style.display = 'none';
        });
    };

    document.addEventListener('click', () => {
        closeAllMenus();
    });
});

//SUBMENU MASCULINHO-TAMANHOS CELULAR
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = {
        "btn-navegation-conj-cel": document.querySelector('#submenu-cel'),
        "btn-navegation-camis-cel": document.querySelector('#submenu-two-cel'),
        "btn-navegation-casac-cel": document.querySelector('#submenu-three-cel'),
        "btn-navegation-pij-cel": document.querySelector('#submenu-four-cel'),
    };

    Object.keys(menuButtons).forEach(id => {
        const button = document.getElementById(id);
        const menu = menuButtons[id];

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the document
            closeAllMenus();
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    });

    const closeAllMenus = () => {
        Object.values(menuButtons).forEach(menu => {
            menu.style.display = 'none';
        });
    };

    document.addEventListener('click', () => {
        closeAllMenus();
    });
});

//SUBMENU FEMININO-TAMANHOS CELULAR
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = {
        "btn-navegation-conj-cel-fem": document.querySelector('#submenu-cel-fem'),
        "btn-navegation-cas-cel-fem": document.querySelector('#submenu-two-cel-fem'),
        "btn-navegation-vest-cel-fem": document.querySelector('#submenu-three-cel-fem'),
        "btn-navegation-pij-cel-fem": document.querySelector('#submenu-four-cel-fem'),
    };

    Object.keys(menuButtons).forEach(id => {
        const button = document.getElementById(id);
        const menu = menuButtons[id];

        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the document
            closeAllMenus();
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    });

    const closeAllMenus = () => {
        Object.values(menuButtons).forEach(menu => {
            menu.style.display = 'none';
        });
    };

    document.addEventListener('click', () => {
        closeAllMenus();
    });
});