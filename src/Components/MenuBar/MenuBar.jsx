import {Menu} from "antd";
import {HomeOutlined} from "@ant-design/icons"

const MenuBar = () => {
    const getItem = (label, key, icon) => ({key, icon, label})

    const menu = [
        getItem('Home', '1', <HomeOutlined/>)
    ]

    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={menu}
        >
        </Menu>
    )
}

export default MenuBar