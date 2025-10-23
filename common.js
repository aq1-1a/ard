// منع القائمة السياقية (الضغط الطويل) على الأزرار والروابط
document.addEventListener('contextmenu', function(e) {
    // تحديد العناصر التي نريد منع القائمة السياقية عليها
    const isButton = e.target.closest('button, a[href], [onclick], [role="button"], input[type="submit"], input[type="button"], .btn, .modal-btn, .link a');
    
    if (isButton) {
        e.preventDefault();
        return false;
    }
});