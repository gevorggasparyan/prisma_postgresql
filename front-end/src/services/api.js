const BASE_URL = 'http://localhost:3001/items';

export const fetchData = async () => {
    try {
        const response = await fetch(BASE_URL);
        return await response.json();
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const deleteItem = async (id) => {
    try {
        await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    } catch (error) {
        console.log(error);
    }
};

export const editItem = async (id, editedData) => {
    try {
        await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedData),
        });
    } catch (error) {
        console.log(error);
    }
};
