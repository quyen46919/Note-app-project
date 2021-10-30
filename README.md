# Cài đặt

1. Clone project này về và cd vào project
2. Mở terminal (nhớ ở đúng folder)-> npm install
3. npm audit fix
4. npm start
5. Tạo branch mới để code -> push code lên github -> sau khi code được review và merge vào master thì delete branch

# Extension
1. Prettier - Format code

## Các thư viện chính sử dụng trong dự án
1. react-router-dom
2. react-smooth-dnd
3. framer-motion
4. node-sass
5. notistack
6. formik
7. material ui v5

## Quy tắc code chung
1. Mỗi tab tương ứng 4 spaces
2. Bắt buộc kết thúc dòng với dấu chấm phẩy
3. Đuôi file là .js chứ không phải là .jsx, chọn ngôn ngữ gõ là React (góc phải phía dưới)
4. Có thể dùng class hay function components đều ok
5. Bắt buộc dùng scss và nhớ sử dụng các mixins và variables

### Quy tắc làm việc với folder
1. Cấu trúc folder như thế này
    common/                 -> Đây là folder chung này
    Avatar.js               -> Đây là components
    Avatar.scss             -> Đây là scss này
    AvatarDetails.js        -> Đây là components
    index.js                -> Đây là page chung, nơi chứa các components con khác

    feed/
    index.js
    Feed.js
    Feed.css
    FeedStory.js

    profile/
    index.js
    Profile.js
    ProfileHeader.js
    ProfileHeader.css

2. Cập nhật routing
    Nếu có nested routing trong components thì tự tạo riêng 1 file routing để phân route

#### Import file
1. IMPORT CHUNG
    Cứ hiểu folder mặc định là src rồi / xuống các folder con
2. SCSS
    @import "assets/scss/mixins.scss";
    @import "assets/scss/variables.scss";
3. IMAGES
    @import "assets/images/{tên ảnh}";