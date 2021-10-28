import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { ListItemText } from '@material-ui/core';
import './styles.scss';

function Note() {
    return (
        <div>
            <div className="note__background"> 
                <div className="note">
                    <div className="note__header">
                        Không gian làm việc
                    </div>
                    <div className="note__content">
                        <div className="note__item">
                            <div className="note__item--block">
                                <AddIcon/>
                            </div>
                            <ListItemText primary="Tạo bảng mới" secondary="" />
                        </div>
                        <div className="note__item">
                            <div
                                className="note__item--block"
                                style={{
                                    backgroundImage: 'url("https://img.freepik.com/free-vector/flat-hotel-building_23-2148162501.jpg?size=338&ext=jpg")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            >
                            </div>
                            <ListItemText primary="Nhà trọ" secondary="Ghi chú nhà trọ" />
                        </div>
                        <div className="note__item">
                            <div
                                className="note__item--block"
                                style={{
                                    backgroundImage: 'url("https://cdn4.vectorstock.com/i/1000x1000/28/38/hotel-room-view-from-window-travelling-nad-vector-18872838.jpg")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            >
                            </div>
                            <ListItemText primary="Phòng trọ" secondary="Ghi chú phòng trọ" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="note__list">
                Bạn chưa có bảng ghi nào được mở gần đây!
            </div>
        </div>
    );
}

export default Note;