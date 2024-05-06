import React from 'react';
import Card from './Card';
import styles from '../styles/App.module.css';

const Menu = ({ data, editingId, handleEdit, handleDelete, handleCancel, handleInputChange, handleSave, editedData }) => (
    <div className={styles.cardGrid}>
        {data.map((item) => (
            <Card
                key={item.id}
                item={item}
                editing={editingId === item.id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleInputChange={handleInputChange}
                handleSave={handleSave}
                editedData={editedData}
                handleCancel={handleCancel}
            />
        ))}
    </div>
);

export default Menu;
