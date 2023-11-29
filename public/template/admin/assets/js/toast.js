const showToastButton = document.getElementById('showToast');
const toast = document.getElementById('toast');

showToastButton.addEventListener('click', function() {
    toast.style.display = 'block';

    // Tự động ẩn thông báo sau 3 giây
    setTimeout(function() {
        toast.style.display = 'none';
    }, 3000);
});