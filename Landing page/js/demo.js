document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById("menuIcon");
    const closeBtn = document.getElementById("closeBtn");
    const sidebar = document.getElementById("sidebar");

    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.add("active"); // Add 'active' class to show sidebar
    }

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove("active"); // Remove 'active' class to hide sidebar
    }

    // Event listener for menu icon to open sidebar
    menuIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        openSidebar();
    });

    // Event listener for close button to close sidebar
    closeBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        closeSidebar();
    });
});
