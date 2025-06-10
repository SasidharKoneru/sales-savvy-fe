import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Add_product() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState('');
    const [category, setCategory] = useState('');

    const navigate = useNavigate(); 

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name,
            description,
            price,
            photo,
            category
        };

        try {
            const resp = await fetch('http://localhost:8081/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const msg = await resp.text();
            alert(msg);
            if (msg === "Product added successfully") {
                navigate('/pm'); // Redirect to Product M  anagement page
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to submit data");
        }
    }

    return (
        <>
            <h4>Add Product</h4>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label>Description: </label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <label>Price: </label>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <label>Photo URL: </label>
                <input
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                />
                <br />
                <label>Category: </label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <br />
                <button type="submit">Add Product</button>
            </form>
        </>
    )
}