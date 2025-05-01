const products = [
    { id: 1, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 2, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 3, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 4, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 5, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 6, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 7, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 8, name: "Kugoo Kirin M4", price: "29 900 ₽" }
];

const selectedIds = new Set();
  const productList = document.getElementById("product-list");
  const selectedDisplay = document.getElementById("selects-id");
  
  products.map((product) => {
    const div = document.createElement("div");
    div.className = "m-4 p-4 border rounded w-[250px]";
    div.innerHTML = `
      <img src="./src/images/moto.png" alt="moto">
      <h3 class="text-lg font-bold mt-2">${product.name}</h3>
      <div class="flex gap-3 text-sm mt-1">
        <p><img src="./src/images/Group.svg" alt=""> 2000 mAh</p>
        <p><i class="fa-solid fa-bolt"></i> 1,2 л.с.</p>
      </div>
      <div class="flex gap-3 text-sm">
        <p><i class="fa-solid fa-gauge-high"></i> 60 км/ч</p>
        <p><i class="fa-solid fa-stopwatch-20"></i> 5 часов</p>
      </div>
      <p class="mt-2 text-gray-500 line-through">39 900 ₽</p>
      <h4 class="text-xl font-semibold">${product.price}</h4>
      <div class="flex items-center justify-between mt-3">
        <i class="fa-solid fa-heart" style="color: #b30000;"></i>
        <i class="fa-solid fa-basket-shopping cursor-pointer" style="color: #6F73EE;" data-id="${product.id}"></i>
      </div>
    `;
    productList.appendChild(div);
  });
  

  
productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-basket-shopping")) {
    const id = e.target.getAttribute("data-id");
    if (id) {
      selectedIds.add(id);
      selectedDisplay.innerText = `Buyurtma qilmoqchi bo'lgan mahsulotlaringiz ID lari: ${[...selectedIds].join(", ")}`;
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addProductButton");
  
    addButton.addEventListener("click", () => {
      const title = document.getElementById("productTitle").value.trim();
      const price = document.getElementById("productPrice").value.trim();
      const type = document.getElementById("productType").value.trim();
      const battery = document.getElementById("productBattery").value.trim();
      const speed = document.getElementById("productSpeed").value.trim();
      const power = document.getElementById("productPower").value.trim();
      const hours = document.getElementById("productHours").value.trim();
  
      if (!title || !price || !type || !battery || !speed || !power || !hours) {
        alert("Iltimos, barcha maydonlarni to‘ldiring.");
        return;
      }
  
      const productList = document.getElementById("product-list");
  
      const card = document.createElement("div");
      card.className = "w-[300px] bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-xl transition";
  
      card.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${title}</h3>
        <p class="text-gray-600"><strong>Narxi:</strong> ${price}</p>
        <p class="text-gray-600"><strong>Tur:</strong> ${type}</p>
        <p class="text-gray-600"><strong>Batareya:</strong> ${battery}</p>
        <p class="text-gray-600"><strong>Tezlik:</strong> ${speed}</p>
        <p class="text-gray-600"><strong>Quvvat:</strong> ${power}</p>
        <p class="text-gray-600"><strong>Ish vaqti:</strong> ${hours}</p>
      `;
  
      productList.appendChild(card);
  
      document.getElementById("productTitle").value = "";
      document.getElementById("productPrice").value = "";
      document.getElementById("productType").value = "";
      document.getElementById("productBattery").value = "";
      document.getElementById("productSpeed").value = "";
      document.getElementById("productPower").value = "";
      document.getElementById("productHours").value = "";
    });
  });
  