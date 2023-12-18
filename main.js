// // Hàm tìm số lớn nhất trong mảng
// function timSoLonNhat(mang) {
//     // Nếu mảng rỗng, trả về null
//     if (mang.length === 0) {
//       return null;
//     }
  
//     // Gán số đầu tiên là số lớn nhất
//     let soLonNhat = mang[0];
  
//     // Duyệt qua mảng để tìm số lớn nhất
//     for (let i = 1; i < mang.length; i++) {
//       if (mang[i] > soLonNhat) {
//         soLonNhat = mang[i];
//       }
//     }
  
//     // Trả về số lớn nhất
//     return soLonNhat;
//   }
  
//   // Mảng kiểm thử
//   let mangTest = [3, 7, 2, 1, 8, 4, 5];
  
//   // Gọi hàm và in kết quả
//   let ketQua = timSoLonNhat(mangTest);
//   console.log("Số lớn nhất trong mảng là: " + ketQua);

// Bai tap tim ra so lon nhat

// var mangtest = [1,3,2,5,34,65,44];
// var ketqua = timsolonnhat(mangtest);
// console.log('so lon nhat la: ' + ketqua);
// function timsolonnhat(arr){
//     if(arr.length===0){
//         return null;
//     }
//     var solonnhat = arr[0];
//     for(var i= 1; i< arr.length; i++){
//         if(arr[i]/5){
//             solonnhat = arr[i];
//         }
//     }
//     return solonnhat;
// }


var nguoiyeu = {
    ten: 'Thao',
    tuoi: 22,
    dia_chi:{
        Xa: 'Cao duc',
        Huyen: 'Gia Binh'
    }
}
document.write(nguoiyeu.dia_chi.Xa)

