import React, {useState} from 'react';
import axios from 'axios';
import {Container} from "react-bootstrap";
import {IoTrashBin} from "react-icons/io5";
import Typewriter from "typewriter-effect";

const FileDropUpload = ({submitText, onSubmit, isProcessing = false, processingMessage = ""}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    // Handle file selection or drop
    const handleFileAdded = (file) => {
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));// Show a preview of the image
    };

    const handleFileRemoved = () => {
        if (previewUrl != null) {
            URL.revokeObjectURL(previewUrl)
        }
        setPreviewUrl(null);
        setSelectedFile(null);
    };


    // Handle manual file selection
    const handleInputChange = (event) => {
        const file = event.target.files[0];
        handleFileAdded(file);
    };

    // Handle drag events
    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    // Handle file drop
    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        handleFileAdded(file);
    };

    // Handle file upload
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert("Please select or drop a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            // POST request to upload the image to your backend
            const response = await axios.post('/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log("File uploaded successfully: ", response.data);
        } catch (error) {
            console.error("Error uploading file: ", error);
        }
    };

    return (
        <Container className="file-upload-section">
            {previewUrl == null ?
                <form onSubmit={handleSubmit} className="fade-in">
                    <input
                        type="file"
                        style={{display: 'none'}}
                        id="fileInput"
                        onChange={handleInputChange}
                        accept="image/*"/>

                    <label htmlFor="fileInput" className={`drop-area ${isDragging ? 'dragging' : ''}`}>
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}>
                            <p>Drag & drop a file here, or click to select one</p>
                        </div>
                    </label>
                </form>
                :
                <div>
                    <div className="drop-area preview ">
                        <img src={previewUrl} alt="Preview" width="100%"/>
                    </div>
                    {isProcessing ?
                        <div className="typewriter-wrapper-upload">
                            <Typewriter
                                options={{
                                    strings: [
                                        processingMessage,
                                    ],
                                    cursor: '_',
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 200,
                                }}/>
                        </div> :
                        <ul style={{marginTop: "10px"}}>
                            <button onClick={() => onSubmit(selectedFile)} type="submit"
                                    className="text-button">
                                {submitText}
                            </button>
                            <button onClick={handleFileRemoved} type="submit" className="text-button">
                                <IoTrashBin/>
                            </button>
                        </ul>}
                </div>
            }
        </Container>
    );
};

export default FileDropUpload;
