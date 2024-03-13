let cart = []; // Lưu trữ thông tin sản phẩm trong giỏ hàng
let cartContainerVisible = false; // Biến để kiểm soát trạng thái hiển thị của giỏ hàng

// Thêm sản phẩm vào giỏ hàng
function addToCart(productName, discount) {
  cart.push({ name: productName, discount: discount });
  alert("Đã thêm sản phẩm vào giỏ hàng!");
  updateCartUI();
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
  const cartItemsElement = document.getElementById("cart-items");
  const totalValueElement = document.getElementById("total-value");
  const cartCountElement = document.getElementById("cart-count");
  let cartItemsHTML = "";
  let totalValue = 0;

  // Duyệt qua mỗi sản phẩm trong giỏ hàng
  cart.forEach((item) => {
    cartItemsHTML += `<li>${item.name}</li>`;
    totalValue += item.discount; // Tính tổng giá trị với mức giảm giá của mỗi sản phẩm
  });

  cartItemsElement.innerHTML = cartItemsHTML;
  totalValueElement.textContent = totalValue.toFixed(2); // Hiển thị tổng giá trị với 2 chữ số sau dấu thập phân
  cartCountElement.textContent = cart.length; // Hiển thị số lượng sản phẩm trong giỏ hàng
}

// Xử lý hiển thị giỏ hàng
function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainerVisible = !cartContainerVisible;
  if (cartContainerVisible) {
    cartContainer.style.display = "block"; // Hiển thị giỏ hàng
  } else {
    cartContainer.style.display = "none"; // Ẩn giỏ hàng
  }
}

// Xử lý thanh toán
function checkout() {
  alert(
    "Xin chào! Hãy thanh toán với tổng giá trị: " +
      document.getElementById("total-value").textContent
  );
}
