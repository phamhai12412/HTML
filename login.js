// let login = document.getElementById("loginForm");
// login.onsubmit = async function (event) {
//   event.preventDefault();
//   try {
//     const data = await submitForm();
//     console.log("Data received:", data);
//     // Thực hiện xử lý dữ liệu ở đây
//     localStorage.setItem("user", JSON.stringify(data));
//     const userDataString = JSON.parse(localStorage.getItem("user"));
//     swal({
//       title: "Đăng nhập thành công",
//       text: "Xin chào: " + data.fullName,
//       icon: "success",
//     }).then(function () {
//       window.location.href = "index.html";
//     });
//   } catch (error) {
//     console.error("Error:", error.message);
//     swal({
//       title: "Đăng nhập không thành công",
//       text: error.message,
//       icon: "error",
//     });
//   }
// };

// async function submitForm() {
//   var email = document.getElementById("emailInput").value;
//   var password = document.getElementById("passwordInput").value;

//   try {
//     // Thực hiện yêu cầu Fetch API
//     const response = await fetch("http://localhost:8080/api/v1/sign/sign-in", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: email,
//         password: password,
//       }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();

//       throw new Error(`${errorText}`);
//     }

//     // Chuyển đổi dữ liệu từ phản hồi thành JSON và trả về
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error.message);
//     throw error; // Re-throw lỗi để nó có thể được xử lý ở cấp độ cao hơn
//   }
// }
