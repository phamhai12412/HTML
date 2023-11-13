// let registerLogoutLink = document.getElementById("registerLogoutLink");
// let loginLink = document.getElementById("loginLink");
// let fullName = document.getElementById("fullName");
// let logout = document.getElementById("logout");
// // Kiểm tra xem có dữ liệu người dùng trong localStorage hay không
// let userDataString = localStorage.getItem("user");

// if (userDataString) {
//   // Nếu có dữ liệu, giải mã chuỗi JSON thành đối tượng JavaScript
//   var userData = JSON.parse(userDataString);

//   // Thay đổi nội dung của thẻ <a> cho Đăng nhập thành userData.fullname
//   loginLink.innerHTML = "";
//   fullName.innerText = userData.fullName;
//   fullName.onclick = function () {
//     window.location.href = "profile.html";
//   };
//   // Thay đổi nội dung và href của thẻ <a> cho Đăng kí thành Đăng xuất

//   registerLogoutLink.innerHTML = "";
//   logout.innerHTML = `<i class="far fa-arrow-right-to-bracket"></i>`;
//   logout.onclick = function () {
//     // Xóa dữ liệu người dùng từ localStorage khi đăng xuất
//     localStorage.removeItem("user");
//     window.location.href = "index.html";
//   };
// } else {
//   loginLink.onclick = function () {
//     window.location.href = "login.html";
//   };
//   registerLogoutLink.onclick = function () {
//     window.location.href = "register.html";
//   };
// }
// // ====================================
// let bookingForm = document.getElementById("booking");
// bookingForm.onsubmit = async function (event) {
//   // Ngăn chặn hành động mặc định của form (không chuyển trang)
//   event.preventDefault();
//   try {
//     await handleBooking();
//   } catch (error) {
//     console.error("Error:", error.message);
//     // Xử lý lỗi
//     swal({
//       title: "Đặt xe thất bại",
//       text: error.message,
//       icon: "error",
//     });
//   }
//   // Gọi hàm xử lý khi nhấn nút "Book Taxi"
// };

// // Hàm xử lý khi nhấn nút "Book Taxi"
// async function handleBooking() {
//   // Lấy giá trị từ các trường input
//   let start = document.getElementById("start").value;
//   let end = document.getElementById("end").value;
//   let fullnamebooking = document.getElementById("fullnamebooking").value;
//   let phoneNumber = document.getElementById("phoneNumber").value;
//   let vehicleType = document.getElementById("vehicleType").value;
//   let pickupDate = document.getElementById("pickupDate").value;
//   let pickupTime = document.getElementById("pickupTime").value;
//   if (
//     start &&
//     end &&
//     fullnamebooking &&
//     phoneNumber &&
//     vehicleType &&
//     pickupDate &&
//     pickupTime
//   ) {
//     try {
//       // Thực hiện yêu cầu Fetch API
//       const response = await fetch("http://localhost:8080/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           start: start,
//           end: end,
//           fullnamebooking: fullnamebooking,
//           phoneNumber: phoneNumber,
//           vehicleType: vehicleType,
//           pickupDate: pickupDate,
//           pickupTime: pickupTime,
//         }),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`${errorText}`);
//       } else {
//         swal({
//           title: "Đặt xe thành công",
//           text: "Chúng tôi sẽ gọi lại cho bạn",
//           icon: "success",
//         }).then(function () {
//           window.location.href = "index.html";
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//       throw error; // Re-throw lỗi để nó có thể được xử lý ở cấp độ cao hơn
//     }
//   } else {
//     // Nếu có trường nào đó không được nhập, hiển thị thông báo lỗi
//     swal({
//       title: "Đặt xe thất bại",
//       text: "Vui lòng điền đầy đủ thông tin",
//       icon: "error",
//     });
//   }
// }
