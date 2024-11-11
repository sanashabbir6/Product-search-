const products = [
    { name: "Laptop", availability: "Available" },
    { name: "Smartphone", availability: "Available" },
    { name: "Headphones", availability: "Available" },
    { name: "watch", availability: "Out of Stock" },
    { name: "computer", availability: "Out of Stock" },
    { name: "printer", availability: "Out of Stock" },
    { name: "Mouse", availability: "Out of Stock" },
    { name: "Keyboard", availability: "Available" },
  ];
  

  const displayProductStatus = (query) => {
    const productStatus = document.getElementById("productStatus");
    productStatus.innerHTML = ""; 

    const product = products.find((p) => p.name.toLowerCase() === query.toLowerCase());
  
    const button = document.createElement("button");
  
    if (product) {
      button.textContent = product.availability;
      button.className = product.availability === "Available" ? "available" : "out-of-stock";
      button.disabled = product.availability === "Out of Stock";
    } else {
      button.textContent = "Out of Stock";
      button.className = "out-of-stock";
      button.disabled = true;
    }
  
    productStatus.appendChild(button);
  };
  
  document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim();
    displayProductStatus(query);
  });
  
  document.getElementById("searchInput").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      document.getElementById("searchButton").click();
    }
  });
  