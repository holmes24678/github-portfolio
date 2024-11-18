// Smooth scroll using jQuery
function scrollToSection(sectionId) {
    $('html, body').animate({ scrollTop: $(`#${sectionId}`).offset().top }, 500);
}

// Copy code functionality
function copyCode(iconElement) {
    const code = $(iconElement).siblings('pre').text();
    
    // First hide the feedback text in case it's visible from a previous action
    const feedback = $(iconElement).siblings('.copy-feedback');
    feedback.removeClass('visible');

    navigator.clipboard.writeText(code).then(() => {
        // After copying, show the feedback
        feedback.addClass('visible');
        setTimeout(() => feedback.removeClass('visible'), 2000);  // Hide after 2 seconds
    }).catch(() => {
        alert('Failed to copy code.');
    });
}

// Toggle search form visibility
$(document).ready(() => {
    // Open or close the search form when clicking on the search icon
    $('.toggle-search').on('click', () => {
        $('#search-form').toggleClass('d-none active');
        
        // Toggle visibility of the search icon based on the form's state
        if ($('#search-form').hasClass('active')) {
            $('.toggle-search').addClass('d-none');  // Hide the search icon
            $('#search-form input').focus();  // Focus on the input
        } else {
            $('.toggle-search').removeClass('d-none');  // Show the search icon
        }
    });

    // Submit the form when the search icon is clicked inside the form
    $('#search-form').on('submit', (e) => {
        e.preventDefault();
        alert('Search submitted: ' + $('#search-form input').val());
        // You can replace this with actual search functionality
    });

    // Close the search form if clicked outside
    $(document).on('click', (e) => {
        if (!$(e.target).closest('#search-form').length && !$(e.target).closest('.toggle-search').length) {
            $('#search-form').removeClass('active').addClass('d-none');
            $('.toggle-search').removeClass('d-none');
        }
    });
});




