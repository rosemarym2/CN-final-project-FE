import { useState } from "react";
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import './imgChanger.css';
import Pic1 from "../../images/1.png";
import Pic2 from "../../images/2.png";
import Pic3 from "../../images/3.png";


export const PicChanger = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [profileImg, setProfileImg] = useState("");

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleImageChange = (profileImg) => {
        setProfileImg();
    };

    return (
        <>
            <Button className="imgSelectBtn" type="primary" onClick={showModal}>
                Change profile photo
            </Button>
            <Modal title="Pick an image.." visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <img className="userImgSelected" src={Pic1} />
                <img className="userImgSelected" src={Pic2} />
                <img className="userImgSelected" src={Pic3} />
            </Modal>
        </>
    );
}

