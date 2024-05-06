import React from 'react';
import styles from '../styles/App.module.css';

const Card = ({ item, editing, handleEdit, handleDelete, handleCancel, handleInputChange, handleSave, editedData }) => (
    <div className={`${styles.card} ${editing ? styles.editing : ''}`}>
        <div className={styles.imageContainer}>
            <img src={item.image} alt={item.name} className={styles.image} />
        </div>
        {editing ? (
            <>
                <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="price"
                    value={editedData.price}
                    onChange={handleInputChange}
                    placeholder="Price"
                />
                <input
                    type="text"
                    name="description"
                    value={editedData.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </>
        ) : (
            <>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
            </>
        )}
    </div>
);

export default Card;
