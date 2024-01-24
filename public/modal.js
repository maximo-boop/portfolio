const iconClose = document.getElementById('iconClose');
const body = document.querySelector('body');
const html = document.querySelector('html');

const data = {
   'li-0': {
      title: 'Desarrollo integral de un portal de Bienes Raíces',
      description: `En la realización de este proyecto me encargué de varios aspectos y en cada etapa del desarrollo, prioricé las buenas prácticas, la optimización del código y la relevancia del mismo en cuanto al SEO.\n\n Me encargué del diseño y la implementación del Front-end, creando interfaces de usuario interactivas y atractivas que permitían a los usuarios explorar propiedades inmobiliarias de manera intuitiva.<br>Además de implementar programación del lado del Back-end, diseñando una sólida arquitectura basada en Node.js para gestionar las solicitudes de los usuarios y garantizar un rendimiento excepcional.<br>También, la implementación de MySQL fue otro componente esencial de este proyecto. Configuré y administré una base de datos que sirvió como el almacén central de la información detallada sobre las propiedades inmobiliarias y usuarios.`,
      urlWeb: "#",
      subTitle: "Experiencia laboral"
   },
   'li-1': {
      title: 'E-commerce de ropa urbana',
      description: `El objetivo de este proyecto fue crear una tienda online de ropa urbana o casual, para mostrar las siguientes caracteristicas principales:\n\n<span class='font-bold'>Login</span>: permite a los usuarios registrarse e iniciar sesión en la tienda online. Esto les da acceso a su perfil y a otras opciones exclusivas.<br><span class='font-bold'>Carrito de compras</span>: permite a los usuarios agregar, eliminar y modificar los productos que desean comprar, así como ver el subtotal y el total de su pedido.<br><span class='font-bold'>Perfil</span>: permite a los usuarios ver y editar sus datos personales, como su nombre, dirección, teléfono, etc. También les permite ver el historial de sus compras y el estado de sus envíos.<br><span class='font-bold'>Filtrado de productos</span>: permite a los usuarios buscar y ordenar los productos según diferentes criterios, como el precio, la categoría, etc.`,
      urlWeb: "https://test-e-commerce-seven.vercel.app/",
      urlGitHub: "https://github.com/maximo-boop/test-e-commerce.git",
      subTitle: "Proyecto personal"
   }
};

const openModal = (id) => {
   const itemData = data[id];
   const titleElement = document.getElementById('modal-title');
   const subTitleElement = document.getElementById('modal-subTitle');
   const descriptionElement = document.getElementById('modal-description');
   const iconContainer1 = document.getElementById('icon-container-1');
   const iconContainer2 = document.getElementById('icon-container-2');
   const badgeWeb = document.getElementById('badgeWeb');
   const badgeGitHub = document.getElementById('badgeGitHub');

   titleElement.textContent = itemData.title;
   subTitleElement.textContent = itemData.subTitle;
   descriptionElement.innerHTML = itemData.description.replace(/\n/g, '<br/>');
   badgeWeb.href = itemData.urlWeb
   badgeGitHub.href = itemData.urlGitHub

   if (id === "li-0") {
      iconContainer1.style.display = 'flex'
      iconContainer2.style.display = 'none'
      badgeGitHub.style.display = 'none'
   } else {
      iconContainer1.style.display = 'none'
      iconContainer2.style.display = 'flex'
      badgeGitHub.style.display = 'flex'
   }

   modal.classList.add('openModal');
   body.style.overflow = 'hidden';
};

const closeModal = () => {
   modal.classList.toggle('openModal');
   body.style.overflow = 'visible';
}

iconClose.addEventListener('click', () => closeModal());

document.querySelectorAll('li').forEach((li) => {
   li.addEventListener('click', () => openModal(li.id));
});
