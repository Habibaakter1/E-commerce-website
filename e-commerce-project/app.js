'use strict';
const products = [
  {
    id: 1,
    name: 'Hijab Set',
    price: 1200,
    image: '/pictures/hijab set.jpg',
    categories: ['Women'],
  },
  {
    id: 2,
    name: 'Men\'s Jubba',
    price: 1800,
    image: '/pictures/jubba.jpeg',
    categories: ['Men'],
  },
  {
    id: 3,
    name: 'Children\'s Islamic Learning Toy',
    price: 3000,
    image: '/pictures/childrens- toys.jpeg',
    categories: ['Kids'],
  },
  {
    id: 4,
    name: 'Prayer Mat',
    price: 500,
    image: '/pictures/prayer mets.jpeg',
    categories: ['Prayer Items'],
  },
  {
    id: 5,
    name: 'Tasbih Beads',
    price: 200,
    image: '/pictures/tasbih breads.jpeg',
    categories: ['Prayer Items'],
  },
  {
    id: 6,
    name: 'Ramadan Lantern',
    price: 850,
    image: '/pictures/lenterns.jpeg',
    categories: ['Home Decor'],
  },
  {
    id: 7,
    name: 'Islamic Wall Art',
    price: 1500,
    image: '/pictures/wal art.jpeg',
    categories: ['Home Decor'],
  },
  {
    id: 8,
    name: 'Non-Alcoholic Oud Perfume',
    price: 3000,
    image: '/pictures/perfume-oud.jpeg',
    categories: ['Perfumes'],
  },
  {
    id: 9,
    name: 'Digital Quran Reciter',
    price: 5000,
    image: '/pictures/quran reciter.jpeg',
    categories: ['Electronics'],
  },
  {
    id: 10,
    name: 'Ramadan Date Box',
    price: 1000,
    image: '/pictures/date-box.jpeg',
    categories: ['Food'],
  },
 
  {
    id: 11,
    name: 'Children\'s Islamic Story Book',
    price: 400,
    image: '/pictures/kids-books.jpeg',
    categories: ['Books'],
  },
  {
    id: 12,
    name: 'Women\'s Abaya',
    price: 2500,
    image: '/pictures/abayas.webp',
    categories: ['Women'],
  },
  {
    id: 13,
    name: 'Men\'s Kufi Cap',
    price: 400,
    image: '/pictures/kufi cap.jpeg',
    categories: ['Men'],
  },
  {
    id: 14,
    name: 'Islamic Jewelry (Allah Pendant)',
    price: 1200,
    image: '/pictures/pandent.jpeg',
    categories: ['Jewelry'],
  },
  {
    id: 15,
    name: 'Zam Zam Water',
    price: 800,
    image: '/pictures/zam-zam-water.jpeg',
    categories: ['Food'],
  },
  {
    id: 16,
    name: 'Halal Skincare Set',
    price: 3500,
    image: '/pictures/skin care set.jpeg',
    categories: ['Skin Care'],
  },
  {
    id: 17,
    name: 'Quranic Wall Clock',
    price: 2200,
    image: '/pictures/clock.jpeg',
    categories: ['Home Decor'],
  },
  {
    id: 18,
    name: 'Muslim Prayer Cap (Topi)',
    price: 300,
    image: '/pictures/topi.jpeg',
    categories: ['Men'],
  },
  {
    id: 19,
    name: 'Eid Mubarak Banners',
    price: 700,
    image: '/pictures/banners.jpeg',
    categories: ['Home Decor'],
  },
  {
    id: 20,
    name: 'Islamic Audio Books for Kids',
    price: 900,
    image: '/pictures/audio book.jpeg',
    categories: ['Books'],
  },
 
 
  {
    id: 21,
    name: 'Women\'s Modest Dress',
    price: 3500,
    image: '/pictures/modest dress.jpeg',
    categories: ['Women'],
  },
  {
    id: 22,
    name: 'Perfumed Prayer Mat',
    price: 1500,
    image: '/pictures/kaba-perfumed-prayer-met.jpeg',
    categories: ['Prayer Items'],
  },
 
    {
      id: 23,
      name: 'Rose Attar',
      price: 1500,
      image: '/pictures/rose attar.jpeg',
      categories: ['Perfumes'],
    },
    {
      id: 24,
      name: 'Sandalwood Attar',
      price: 2000,
      image: '/pictures/sandalwood ator.jpeg',
      categories: ['Perfumes'],
    },
    {
      id: 25,
      name: 'Amber Oud Perfume',
      price: 3500,
      image: '/pictures/amber-oud-atar.jpeg',
      categories: ['Perfumes'],
    },
    {
      id: 26,
      name: 'Bluetooth Quran Speaker',
      price: 5500,
      image: '/pictures/blootooth speaker.jpeg',
      categories: ['Electronics'],
    },
    {
      id: 27,
      name: 'Islamic Alarm Clock',
      price: 2200,
      image: '/pictures/islamic alarm clock.jpeg',
      categories: ['Electronics'],
    },
    {
        id: 28,
        name: 'Bags',
        price: 600,
        image: '/pictures/bag.jpeg',
        categories: ['Women'],
      },
    {
      id: 29,
      name: 'Children’s Quran Stories',
      price: 600,
      image: '/pictures/quran stories.jpeg',
      categories: ['Books'],
    },
    {
      id: 30,
      name: 'Islamic History Book',
      price: 1200,
      image: '/pictures/islam history book.jpeg',
      categories: ['Books'],
    },
    {
      id: 31,
      name: 'Dua and Zikr Book',
      price: 900,
      image: '/pictures/dua and zikr book.jpeg',
      categories: ['Books'],
    },
    {
      id: 32,
      name: 'ring',
      price: 1800,
      image: '/pictures/ring.jpeg',
      categories: ['Jewelry'],
    },
    {
      id: 33,
      name: 'Gold Crescent Moon Pendant',
      price: 2200,
      image: '/pictures/moon.jpeg',
      categories: ['Jewelry'],
    },
    {
      id: 34,
      name: 'Islamic Bracelet (Bismillah)',
      price: 1300,
      image: '/pictures/bracelet.jpeg',
      categories: ['Jewelry'],
    },
    {
      id: 35,
      name: 'Halal Face Serum',
      price: 2500,
      image: '/pictures/face serum.jpeg',
      categories: ['Skin Care'],
    },
    {
      id: 36,
      name: 'Halal Body Lotion',
      price: 2000,
      image: '/pictures/lotion.jpeg',
      categories: ['Skin Care'],
    },
    {
      id: 37,
      name: 'Lip Set',
      price: 1500,
      image: '/pictures/lipset.jpeg',
      categories: ['Skin Care'],
    }
    ,
        
        {
          id: 38,
          name: 'Medjool Dates',
          price: 1500,
          image: '/pictures/madjool dates.jpeg',
          categories: ['Food'],
        },
       
        {
          id: 39,
          name: 'Halal Gummy Bears',
          price: 500,
          image: '/pictures/gold-bears.jpeg',
          categories: ['Food'],
        },
        {
          id: 40,
          name: 'Eid Baklava Box',
          price: 2200,
          image: '/pictures/baklava.jpeg',
          categories: ['Food'],
        },
        {
          id: 41,
          name: 'Ajwa Dates (Premium)',
          price: 3000,
          image: '/pictures/ajwa dates.jpeg',
          categories: ['Food'],
        },
        {
          id: 42,
          name: 'Halal Turkish Delight',
          price: 1800,
          image: '/pictures/delight.jpeg',
          categories: ['Food'],
        },
        {
          id: 43,
          name: 'Halal Marshmallows',
          price: 800,
          image: '/pictures/marshmallows.jpeg',
          categories: ['Food'],
        },
        {
          id: 43,
          name: 'Halal Chocolate Assortment',
          price: 2500,
          image: '/pictures/chocolates.jpeg',
          categories: ['Food'],
        },
        {
            id: 43,
            name: 'Shoe',
            price: 2500,
            image: '/pictures/shoes.jpeg',
            categories: ['Women'],
          }
      ];
      
  
  


let carts = [];
let selectedCategory = null;

function isProductExistInCart(productId) {
  return carts.findIndex((product) => product.id === productId) !== -1;
}

function removeProductFromCart(productId) {
  const productIndex = carts.findIndex(function (product) {
    return product.id == productId;
  });
  if (productIndex === -1) {
    alert('Product is not in the cart.');
    return;
  }
  carts.splice(productIndex, 1);
  renderCart();
}

function renderCart() {
  const cartItemList = document.getElementById('cart-items');
  cartItemList.innerHTML = '';
  carts.forEach(function (product) {
    const cartItemListElement = document.createElement('li');
    cartItemListElement.innerText = `${product.name} - ${product.price}x ${1}`;

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('text-red-500', 'ml-2');
    removeBtn.addEventListener('click', function () {
      removeProductFromCart(product.id);
    });
    cartItemListElement.appendChild(removeBtn);

    cartItemList.appendChild(cartItemListElement);
  });
}

function getProductImageElement({ productImage, productName }) {
  const productImageElement = document.createElement('img');
  productImageElement.src = productImage;
  productImageElement.alt = productName;
  productImageElement.classList.add('w-full', 'mb-4');
  return productImageElement;
}

function getProductNameElement(productName) {
  const productNameElement = document.createElement('h3');
  productNameElement.innerText = productName;
  productNameElement.classList.add('text-lg', 'font-semibold');
  return productNameElement;
}

function getProductPriceElement(productPrice) {
  const productPriceElement = document.createElement('h3');
  productPriceElement.textContent = `${productPrice}`;
  productPriceElement.classList.add('text-grey-700');
  return productPriceElement;
}

function getAddToCartButton(product) {
  const addToCartToBtn = document.createElement('button');
  addToCartToBtn.textContent = 'Add to Cart';
  addToCartToBtn.classList.add(
    'bg-blue-500',
    'hover:bg-blue-700',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'mt-2'
  );

  addToCartToBtn.addEventListener('click', function () {
    if (isProductExistInCart(product.id)) {
      alert('This product is already in the cart.');
      return;
    }
    carts.push(product);
    renderCart();
  });

  return addToCartToBtn;
}

function getProductCart(product) {
  const cart = document.createElement('div');
  cart.classList.add('bg-white', 'p-4', 'rounded', 'shadow');

  const productImage = getProductImageElement({
    productImage: product.image,
    productName: product.name,
  });
  cart.appendChild(productImage);

  const productName = getProductNameElement(product.name);
  cart.appendChild(productName);

  const productPrice = getProductPriceElement(product.price);
  cart.appendChild(productPrice);

  const addToCartButton = getAddToCartButton(product);
  cart.appendChild(addToCartButton);

  return cart;
}

function renderProducts() {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';

  let categorizedProducts = products;
  if (selectedCategory) {
    categorizedProducts = products.filter(function (product) {
      return product.categories.includes(selectedCategory);
    });
  }
  categorizedProducts.forEach(function (product) {
    const productCart = getProductCart(product);
    productListContainer.appendChild(productCart);
  });
}

function getProductCategories() {
  const productCategories = products.map(function (product) {
    return product.categories;
  });

  const categoryFlatList = productCategories.flat();
  const uniqueCategories = new Set(categoryFlatList);
  return [...uniqueCategories];
}

function renderCategories() {
  const categoryContainer = document.getElementById('category-filters');
  categoryContainer.innerHTML = '';

  const categories = getProductCategories();
  categories.forEach(function (category) {
    const categoryBtn = document.createElement('button');
    categoryBtn.innerText = category
    categoryBtn.classList.add(
      'bg-gray-400',
      'hover:bg-gray-300',
      'text-gray-800',
      'font-semibold',
      'py-2',
      'px-4',
      'rounded',
      'mr-2'
    );
    categoryBtn.addEventListener('click',function(){
    selectedCategory = category;
    renderProducts();
    });
    categoryContainer.appendChild(categoryBtn);
  });
}

renderProducts();
renderCategories();

const clearFilterBtn =document.getElementById('clear-filters-btn');
clearFilterBtn.addEventListener('click',function(){
  selectedCategory = null;
  renderProducts();
})

const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click',function(){
  carts=[];
  renderCart();
});
