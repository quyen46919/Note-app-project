import React from 'react';
import './styles.scss';

function Text(props) {
    return (
        <div className="intro-text">
            <p className="text__title">{props.title}</p>
            <p>Phần mềm Quản lý ghi chú - trợ lý đắc lực trong công việc.</p>
            <p>Nottable được cung cấp các công cụ hỗ trợ ghi chú chuyên nghiệp, bạn có thể lưu trữ ghi chú cá nhân hoặc dùng với team của bạn trong các dự án..</p>
        </div>
    );
}

export default Text;