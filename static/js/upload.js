document.addEventListener('DOMContentLoaded', function() {
  // Get references to elements
  const uploadButton = document.getElementById('upload');
  const uploadText = document.getElementById('upload-text');
  const fileInput = document.getElementById('file-input');
  const videoPreview = document.getElementById('video-preview');
  const fileName = document.getElementById('file-name');
  const buttonsContainer = document.getElementById('buttons-container');
  
  // When the "Select from device" button is clicked, trigger the file input click
  uploadButton.addEventListener('click', function() {
    fileInput.click();
  });

  // When a file is selected, display the file name, size, and video preview
  fileInput.addEventListener('change', function () {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
      // Hide upload-related elements
      document.getElementById('file-logo').style.display = 'none';
      document.getElementById('container-text').style.display = 'none';
      uploadButton.style.display = 'none';

      // Show the video preview
      const fileURL = URL.createObjectURL(selectedFile);
      videoPreview.style.display = 'block';
      videoPreview.src = fileURL; // Set the video source to the selected file

      // Display the selected file name
      fileName.textContent = `Selected video: ${selectedFile.name}`;

      // Display the file size
      const fileSize = selectedFile.size; // Size in bytes
      const formattedSize = formatFileSize(fileSize); // Format size to KB or MB
      const sizeText = `Size: ${formattedSize}`;
      const fileSizeElement = document.createElement('p');
      fileSizeElement.textContent = sizeText;
      fileName.appendChild(fileSizeElement); // Append the file size below the file name

      // Show the buttons below the video
      buttonsContainer.style.display = 'flex';
    } else {
      // Reset everything if no file is selected
      document.getElementById('file-logo').style.display = 'block';
      document.getElementById('container-text').style.display = 'block';
      uploadButton.style.display = 'flex';
      videoPreview.style.display = 'none';
      fileName.textContent = 'No file selected';
    }
  });

  // Add click event listeners for the buttons (for testing purposes)
  document.getElementById('video-object-detection').addEventListener('click', function() {
    alert('Video Object Detection button clicked!');
    // Call your function here for video object detection
  });

  document.getElementById('video-object-tracking').addEventListener('click', function() {
    alert('Video Object Tracking button clicked!');
    // Call your function here for video object tracking
  });

  document.getElementById('process-dense-optical-flow').addEventListener('click', function() {
    alert('Processing video with Dense Optical Flow!');
    // Call your function here for dense optical flow processing
  });

  document.getElementById('process-sparse-optical-flow').addEventListener('click', function() {
    alert('Processing video with Sparse Optical Flow!');
    // Call your function here for sparse optical flow processing
  });
});

// Function to open the sidebar
function toggleSidebar() {
  document.getElementById('sidebar').classList.add('open');
}

// Function to close the sidebar
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

// Example functions for the sidebar items
function goToDashboard() {
  alert('Dashboard clicked');
  closeSidebar(); // Close sidebar after action
}

function goToProfile() {
  alert('Profile clicked');
  closeSidebar();
}

function goToSignIn() {
  alert('Sign In clicked');
  closeSidebar();
}

function goToSupport() {
  alert('Support clicked');
  closeSidebar();
}

function loginClicked() {
  alert('Login clicked');
  closeSidebar();
}

// Function for the Desktop button
function goToDesktop() {
  alert("Desktop button clicked!");
  // Add your code for the Desktop action here
}

// Function for the Login button
function loginClicked() {
  alert("Log In button clicked!");
  // Add your code for the login action here
}

// Function to format file size in KB or MB
function formatFileSize(sizeInBytes) {
  if (sizeInBytes < 1024) {
    return sizeInBytes + ' bytes';
  } else if (sizeInBytes < 1024 * 1024) {
    return (sizeInBytes / 1024).toFixed(2) + ' KB';
  } else {
    return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
}
