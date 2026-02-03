import React from 'react';
import './App.css'; // Giữ lại dòng này để web vẫn nhận style mặc định (nếu có)

// --- 1. LOGIC BÀI TOÁN (Đã sửa lỗi logic) ---
function getSum(arr, k) {
  let newSum = [];
  let num = new Set();

  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    let m = k - n;

    // Kiểm tra xem số bù (m) đã có trong tập hợp chưa
    if (num.has(m)) {
      newSum.push([m, n]);
    }
    // QUAN TRỌNG: Thêm số hiện tại (n) vào tập hợp để check cho các số sau
    num.add(n); 
  }
  return newSum;
}

// --- 2. COMPONENT HIỂN THỊ ---
function App() {
  // Dữ liệu đầu vào
  const array = [0, 1, 2, 3, 4, 5, 6];
  const k = 6;
  
  // Gọi hàm tính toán
  const ketQua = getSum(array, k);

  return (
    <div className="App" style={{}}>
      <h1>Kết quả bài toán Two Sum</h1>
      
      <div style={{}}>
        <p>Mảng đầu vào: <b>[{array.join(', ')}]</b></p>
        <p>Tổng cần tìm (k): <b>{k}</b></p>
      </div>

      <hr style={{}} />

      <h3>Các cặp số tìm thấy:</h3>
      
      {/* Logic hiển thị kết quả ra màn hình */}
      {ketQua.length > 0 ? (
        <ul style={{}}>
          {ketQua.map((capSo, index) => (
            <li key={index} style={{ 
            
            }}>
               Cặp số: {capSo[0]} và {capSo[1]}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'red' }}>Không tìm thấy cặp số nào.</p>
      )}
    </div>
  );
}

export default App;