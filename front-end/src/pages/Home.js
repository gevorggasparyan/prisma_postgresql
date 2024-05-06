import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import { fetchData, deleteItem, editItem } from '../services/api';

const Home = () => {
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedData, setEditedData] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        fetchData().then((jsonData) => setData(jsonData));
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteItem(id);
            fetchData().then((jsonData) => setData(jsonData));
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (id) => {
        setEditingId(id);
        const itemToEdit = data.find((item) => item.id === id);
        setEditedData({
            name: itemToEdit.name,
            price: itemToEdit.price,
            description: itemToEdit.description,
        });
    };

    const handleSave = async () => {
        try {
            await editItem(editingId, editedData);
            fetchData().then((jsonData) => {
                setData(jsonData);
                setEditingId(null);
                setEditedData({ name: '', price: '', description: '' });
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        setEditingId(null); // Reset editing state in Card
        setEditedData({ name: '', price: '', description: '' }); // Clear edited data
    };

    return (
        <div>
            <h1>Menu API</h1>
            <Menu
                data={data}
                editingId={editingId}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleInputChange={handleInputChange}
                handleSave={handleSave}
                editedData={editedData}
                handleCancel={handleCancel}
            />
        </div>
    );
};

export default Home;
