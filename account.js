<!DOCTYPE html>
<html>
<head>
    <title>Firebase Storage Upload</title>
    <style>
        .upload-container {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        .progress-bar {
            height: 20px;
            background-color: #f0f0f0;
            border-radius: 4px;
            margin: 10px 0;
        }
        .progress {
            height: 100%;
            background-color: #4CAF50;
            border-radius: 4px;
            width: 0%;
            transition: width 0.3s;
        }
        #file-list {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="upload-container">
        <h2>Upload Files to Firebase Storage</h2>
        <input type="file" id="file-upload" multiple>
        <button id="upload-button">Upload Files</button>
        
        <div class="progress-bar">
            <div class="progress" id="upload-progress"></div>
        </div>
        
        <div id="file-list"></div>
    </div>

    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-storage-compat.js"></script>
    <script>
        // Initialize Firebase (paste your config here)
       const firebaseConfig = {
    apiKey: "AIzaSyDOsuZBeR5RkEXivt9aLcDaOeFKuc5tS3o",
    authDomain: "icecommerce-73a10.firebaseapp.com",
    databaseURL: "https://icecommerce-73a10.firebaseio.com",
    projectId: "icecommerce-73a10",
    storageBucket: "icecommerce-73a10.appspot.com",
    messagingSenderId: "128064356219",
    appId: "1:128064356219:web:fceea2632aa36931b987de",
    measurementId: "G-YXFQTCHKLW"
};
        const app = firebase.initializeApp(firebaseConfig);
        const storage = firebase.storage();

        // DOM elements
        const fileUpload = document.getElementById('file-upload');
        const uploadButton = document.getElementById('upload-button');
        const uploadProgress = document.getElementById('upload-progress');
        const fileList = document.getElementById('file-list');

        // Upload files
        uploadButton.addEventListener('click', () => {
            const files = fileUpload.files;
            if (files.length === 0) {
                alert('Please select at least one file');
                return;
            }

            Array.from(files).forEach(file => {
                uploadFile(file);
            });
        });

        // Upload a single file
        function uploadFile(file) {
            // Create a storage reference
            const storageRef = storage.ref(`uploads/${file.name}`);
            
            // Display file in list
            const fileItem = document.createElement('div');
            fileItem.textContent = `Uploading: ${file.name}...`;
            fileList.appendChild(fileItem);

            // Upload the file
            const uploadTask = storageRef.put(file);

            // Listen for state changes, errors, and completion
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Progress monitoring
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploadProgress.style.width = progress + '%';
                    fileItem.textContent = `Uploading ${file.name}: ${Math.round(progress)}%`;
                },
                (error) => {
                    // Handle errors
                    console.error('Upload error:', error);
                    fileItem.textContent = `Error uploading ${file.name}: ${error.message}`;
                    fileItem.style.color = 'red';
                },
                () => {
                    // Upload completed successfully
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        fileItem.textContent = `Upload complete: ${file.name}`;
                        fileItem.innerHTML += `<br><a href="${downloadURL}" target="_blank">Download URL</a>`;
                        
                        // You can store this URL in your database if needed
                        console.log('File available at', downloadURL);
                    });
                }
            );
        }
    </script>
</body>
</html>
