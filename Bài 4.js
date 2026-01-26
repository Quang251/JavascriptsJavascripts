function findSecondLargest(arr) {
    // Kiểm tra nếu người dùng quên dấu ngoặc []
  

    if (arr.length < 2) {
        console.error("❌ Lỗi: Mảng cần ít nhất 2 số khác nhau.");
        return;
    }

    let max = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if (current > max) {
            second = max;
            max = current;
        } else if (current > second && current < max) {
            second = current;
        }
    }

    if (second === -Infinity) {
        console.log("⚠️ Không có số lớn thứ 2 (Các số bằng nhau hết).");
        return null;
    }

    console.log(`✅ Số lớn nhất là: ${max}`);
    console.log(`✅ Số lớn thứ hai là: ${second}`);
    return second;
}

// Thông báo khi code đã nhận
console.log("🚀 Đã sẵn sàng! Hãy gõ lệnh theo mẫu: findSecondLargest([dãy số])");