// JavaScript to toggle course details
function showDetails(courseId) {
    // Hide all details
    document.querySelectorAll('.course-detail').forEach(detail => {
        detail.classList.remove('active');
    });

    // Show selected course detail
    document.getElementById(courseId).classList.add('active');
}
