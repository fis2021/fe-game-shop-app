import { useState } from 'react';
import {Link, useParams} from 'react-router-dom'

import {Descriptions, Button, Modal, Table} from "antd";
import { useSelector } from "stateManager";
import { retrieveGames } from "components/DataRetriever/actions";
import columnSearchMixin from "../Home/columnSearchMixin";

const Game = () => {
    const { id } = useParams();
    const loading = useSelector(retrieveGames.loadingSelector);
    const { name, categories, seller, description, key }  = useSelector(state => state.games[id]);

    const globalCategories = useSelector(state => Object.values(state.categories));
    const localCategories = globalCategories.filter(category => categories.includes(category.id));

    const sellerName = useSelector(state => state.users[seller].username);

    const reviews = useSelector(state => Object.values(state.reviews)).filter(rev => rev.game === parseInt(id, 10));
    const totalRating = reviews.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating;
    }, 0);
    const rating = totalRating / reviews.length;


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return loading ? 'Loading...' : <>
        <Descriptions title={ name } layout="vertical">
            <Descriptions.Item label="Category">
                { localCategories.map(category => category.name).join(',') }
            </Descriptions.Item>
            <Descriptions.Item label="Seller">{ sellerName }</Descriptions.Item>
            <Descriptions.Item label="Rating">{ rating }</Descriptions.Item>
            <Descriptions.Item label="Description">{ description }</Descriptions.Item>
        </Descriptions>

        <Table dataSource={reviews} columns={[
            {
                title: 'Rating',
                dataIndex: 'rating',
                key: 'rating',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
        ]} />

        <Button type="primary" onClick={ () => {showModal(); setIsDisabled(true);} } disabled={ isDisabled }>Buy this game</Button>
        <Modal title="Game key" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>{ key }</p>
        </Modal>
    </>
}

export default Game
