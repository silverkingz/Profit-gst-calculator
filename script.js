function calculatePrice() {
    // Get input values
    const cost = parseFloat(document.getElementById('cost').value);
    const grossProfit = parseFloat(document.getElementById('gross-profit').value);
    const includeGST = document.getElementById('gst').value === 'yes';

    // Basic validation
    if (isNaN(cost) || isNaN(grossProfit) || cost < 0 || grossProfit < 0) {
        alert('Please enter valid positive numbers');
        return;
    }

    // Calculate base price
    let sellingPrice = cost + grossProfit;

    // Add GST if required
    if (includeGST) {
        sellingPrice *= 1.15;
    }

    // Calculate gross profit margin
    const grossProfitMargin = (grossProfit / sellingPrice) * 100;

    // Display results
    document.getElementById('results').style.display = 'block';
    document.getElementById('selling-price').textContent = `$${sellingPrice.toFixed(2)}`;
    document.getElementById('gpm').textContent = `${grossProfitMargin.toFixed(1)}%`;
}
