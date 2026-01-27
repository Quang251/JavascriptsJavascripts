// --- KHAI BÁO HÀM ---
/*
BÀI 5: TÍNH TOÁN GIỎ HÀNG (Reduce) Yêu cầu: 
Cho một mảng các Object đại diện cho sản phẩm trong giỏ hàng (mỗi object có: name, price, quantity). 
Sử dụng hàm .reduce() để tính tổng tiền. Nếu tổng tiền > 2000, giảm giá 10% trên tổng hóa đơn. 
Ví dụ: cart = [{p: 1000, q: 2}, {p: 500, q: 1}] => Total: 2250 (đã giảm)
*/
function totalCart(cart){
    let totalPrice = cart.reduce(function(acc, item){
        let itemTotal = item.price * item.quantity
        return acc + itemTotal
    },0)
    console.log(`Giỏ hàng hiện tại ${totalPrice
    }`)
//discount 10%
    let finalPrice = totalPrice
    if (totalPrice > 2000){
        let discount = (totalPrice * 10)/100;
        finalPrice = totalPrice - discount;
        console.log(`Được giảm ${discount}`);
    }else{
        console.log('Mua thêm để được giảm giá');
    }
    console.log(`Giá cuối ${finalPrice}`)
    
    
}