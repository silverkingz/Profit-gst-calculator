function calculatePrice() {
    // Get input elements
    const costInput = document.getElementById('cost');
    const profitInput = document.getElementById('profit');
    const gstSelect = document.getElementById('gst');
    
    // Get values
    const cost = parseFloat(costInput.value);
    const profit = parseFloat(profitInput.value);
    const includeGST = gstSelect.value === 'yes';
    
    // Validate inputs
    if (isNaN(cost) || cost < 0) {
        alert('Please enter a valid product cost');
        return;
    }
    
    if (isNaN(profit) || profit < 0) {
        alert('Please enter a valid profit amount');
        return;
    }

    // Calculate base price
    let sellingPrice = cost + profit;
    
    // Add GST if required
    if (includeGST) {
        sellingPrice *= 1.15;
    }

    // Calculate profit margin
    const profitMargin = (profit / sellingPrice) * 100;

    // Update results
    document.getElementById('sellingPrice').textContent = `$${sellingPrice.toFixed(2)}`;
    document.getElementById('profitMargin').textContent = `${profitMargin.toFixed(1)}%`;
    
    // Show results
    document.querySelector('.results').style.display = 'block';
}
