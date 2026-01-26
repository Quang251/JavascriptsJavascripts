// --- KHAI BÁO HÀM ---
function calculateBill(cart) {
    // Kiểm tra đầu vào
    if (!Array.isArray(cart) || cart.length === 0) {
        console.error("❌ Giỏ hàng đang rỗng hoặc không hợp lệ!");
        return 0;
    }

    // 1. Dùng REDUCE để tính tổng tiền (Subtotal)
    
    const subtotal = cart.reduce(function(acc, item) {
        let itemTotal = item.price * item.quantity;   
        return acc + itemTotal;
    }, 0); //  result = 0

    console.log(`---------------------------------`);
    console.log(`💰 Tổng tiền tạm tính: ${subtotal}`);

    // 2. Logic giảm giá
    let finalTotal = subtotal;
    
    if (subtotal > 2000) {
        let discountAmount = subtotal * 0.1; // 10%
        finalTotal = subtotal - discountAmount;
        console.log(`Đơn hàng > 2000. Bạn được giảm: ${discountAmount}`);
    } else {
        console.log(`Mua thêm để được giảm giá (Cần > 2000).`);
    }

    console.log(`SỐ TIỀN PHẢI TRẢ: ${finalTotal}`);
    console.log(`---------------------------------`);
    
    return finalTotal;
}

// --- HƯỚNG DẪN TEST ---
console.log("🚀 Đã xong! Hãy copy dòng dưới để test:");
console.log("calculateBill([ {name: 'Iphone', price: 1000, quantity: 2}, {name: 'Sạc', price: 500, quantity: 1} ])");