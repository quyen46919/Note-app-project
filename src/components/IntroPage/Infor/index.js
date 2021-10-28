import React from 'react';
import './styles.scss';
import Personal from '../Personal';
import Phatimg from 'assets/images/intro-ChauPhat.jpg';
import Quyenimg from 'assets/images/intro-ChauQuyen.jpg';
import Taiimg from 'assets/images/intro-HuuTai.jpg';
import Nghiaimg from 'assets/images/intro-HuuNghia.jpg';


function Infor() {
    return (
        <div className="intro-infor">
            <div className="infor-informer"><Personal img={Phatimg} name="Nguyễn Châu Phát" job="Designer"/></div>
            <div className="infor-informer"><Personal img={Quyenimg} name="Nguyễn Châu Quyền" job="Web Developer"/></div>
            <div className="infor-informer"><Personal img={Taiimg} name="Hoàng Hữu Tài" job="Web Developer"/></div>
            <div className="infor-informer"><Personal img={Nghiaimg} name="Hoàng Hữu Nghĩa" job="Web Developer"/></div>
        </div>
    );
}

export default Infor;