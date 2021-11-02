import React from 'react';
import './styles.scss';

function SmallTab() {
    return (
        <div className="small-tab">
            <div className="small-tab__description">
                Giữ gìn sự trong sáng của tiếng Việt đang là vấn đề thu hút sự quan tâm của toàn xã hội. Hiện nay, trong xu thế hội nhập quốc tế, bên cạnh tiếp thu và Việt hóa được nhiều cái hay, cái đẹp của tiếng nói, chữ viết nước ngoài, thì sự trong sáng của tiếng Việt đang bị ảnh hưởng tiêu cực. Biểu hiện rõ ràng nhất là sự lai căng tiếng nói, chữ viết của nước ngoài ngày một tăng. Dường như ngày càng có nhiều người, nhất là lớp trẻ, khi nói và viết tiếng Việt thường chen tiếng nước ngoài.
            </div>
            <div className="small-tab__title">
                <h3>Thông tin cá nhân</h3>
            </div>
            <div className="small-tab__content">
                <div className="small-tab__list">
                    <h4>Ngày tham gia</h4>
                    <p>Tháng 8, 2021</p>
                </div>
                <div className="small-tab__list">
                    <h4>Sinh nhật</h4>
                    <p>31 tháng 01 </p>
                </div>
                <div className="small-tab__list">
                    <h4>Quê quán</h4>
                    <p>Phú Yên</p>
                </div>
                <div className="small-tab__list">
                    <h4>Địa chỉ</h4>
                    <p>Đà Nẵng</p>
                </div>
                <div className="small-tab__list">
                    <h4>Múi giờ</h4>
                    <p>UTC+8</p>
                </div>
                <div className="small-tab__list">
                    <h4>Ngôn ngữ</h4>
                    <p>Tiếng Việt, tiếng Anh</p>
                </div>
            </div>
            <div className="small-tab__title">
                <h3>Sở thích</h3>
            </div>
            <div className="small-tab__content">
                <div className="small-tab__list">
                    <h4>Linh vật</h4>
                    <p>Chó sói đồng cỏ</p>
                </div>
                <div className="small-tab__list">
                    <h4>Sở thích</h4>
                    <p>Nấu ăn</p>
                </div>
            </div>
            <div className="small-tab__title">
                <h3>Thông tin liên lạc</h3>
            </div>
            <div className="small-tab__content">
                <div className="small-tab__list">
                    <h4>Số điện thoại</h4>
                    <p>0343547418</p>
                </div>
                <div className="small-tab__list">
                    <h4>Email</h4>
                    <p>phat46907@donga.edu.vn</p>
                </div>
            </div>
        </div>
    );
}

export default SmallTab;