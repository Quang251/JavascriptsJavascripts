/*
Đây là danh sách 10 bài tập ReactJS cơ bản theo lộ trình từ làm quen cú pháp đến xử lý logic thực tế. Tôi định dạng dưới dạng raw text để bạn dễ dàng copy và gửi cho học viên hoặc Intern.
DANH SÁCH 10 BÀI TẬP REACTJS CƠ BẢN
BÀI 1: COMPONENT & PROPS (Profile Card) Yêu cầu: Tạo một component UserCard nhận vào các props: avatar, name, job. Sử dụng component này để hiển thị danh sách 3 người dùng khác nhau trên trang chính. Kiến thức: JSX, Functional Components, Truyền nhận Props.

BÀI 2: STATE & EVENT (Counter App) Yêu cầu: Tạo một ứng dụng đếm số. Có một giá trị khởi tạo là 0, nút "Tăng" (+1), nút "Giảm" (-1) và nút "Reset" (về 0). Giá trị không được giảm xuống dưới 0. Kiến thức: useState Hook, Event handling.

BÀI 3: TWO-WAY BINDING (Live Text Preview) Yêu cầu: Tạo một ô input và một thẻ h1 phía dưới. Khi người dùng gõ nội dung vào ô input, nội dung trong thẻ h1 phải thay đổi tương ứng theo thời gian thực. Kiến thức: Controlled Component, onChange event.

BÀI 4: CONDITIONAL RENDERING (Toggle Switch) Yêu cầu: Tạo một nút bấm "Show/Hide". Khi nhấn vào, hiển thị một đoạn văn bản bí mật. Nhấn lần nữa thì ẩn đoạn văn bản đó đi. Nhãn của nút cũng phải thay đổi tương ứng (Hiện/Ẩn). Kiến thức: Conditional rendering (Toán tử 3 ngôi hoặc &&).

BÀI 5: LIST RENDERING (Shopping List) Yêu cầu: Cho một mảng các đối tượng sản phẩm [{id: 1, name: 'Apple', price: 10}, ...]. Hãy render danh sách này ra màn hình dưới dạng bảng (table) hoặc danh sách (ul/li). Kiến thức: Array.map(), thuộc tính "key" trong React.

BÀI 6: USEEFFECT - BASIC (Timer) Yêu cầu: Tạo một đồng hồ bấm giờ đơn giản tự động tăng 1 đơn vị mỗi giây ngay khi trang web được load xong. Kiến thức: useEffect Hook, setInterval, Cleanup function.

BÀI 7: USEEFFECT - API FETCHING (User List) Yêu cầu: Sử dụng fetch hoặc axios trong useEffect để lấy dữ liệu từ API https://jsonplaceholder.typicode.com/users. Hiển thị tên và email của các người dùng lấy được ra màn hình. Kiến thức: useEffect (dependencies array), Fetch API, Loading state.

BÀI 8: FORM XỬ LÝ NHIỀU INPUT (Login Form) Yêu cầu: Tạo một form đăng nhập gồm Username và Password. Khi nhấn "Submit", hiển thị giá trị người dùng đã nhập ra màn hình console (không dùng thư viện ngoài như Formik). Kiến thức: Handling multiple inputs with a single state object.

BÀI 9: LỌC DỮ LIỆU (Search Filter) Yêu cầu: Cho một danh sách tên các loại trái cây. Tạo một ô tìm kiếm (Search Bar). Khi người dùng nhập ký tự, danh sách bên dưới chỉ hiển thị các loại trái cây có tên chứa ký tự đó. Kiến thức: Logic filter mảng, đồng bộ giữa Search State và List hiển thị.

BÀI 10: TODO LIST (Mini Project) Yêu cầu: Xây dựng ứng dụng Todo List hoàn chỉnh:

Thêm công việc mới vào danh sách.

Đánh dấu công việc đã hoàn thành (gạch ngang chữ).

Xóa công việc khỏi danh sách. Kiến thức: Tổng hợp kiến thức về State, Array Methods (push, filter, map), Props.
*/