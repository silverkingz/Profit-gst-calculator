// Sample competitor prices (update with actual market research)
const competitorPrices = {
    "Sourdough": 6.50,
    "Croissant": 4.50,
    "Muffin": 4.00,
    "Loaf": 8.00,
    "Cookie": 3.50
};

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

    // Get competitive price suggestion
    const competitorPriceArray = Object.values(competitorPrices);
    const averageCompetitorPrice = competitorPriceArray.reduce((a, b) => a + b, 0) / competitorPriceArray.length;
    
    // Suggest competitive price (average of market prices or calculated price)
    const competitivePrice = Math.min(sellingPrice, averageCompetitorPrice);

    // Display results
    document.getElementById('results').style.display = 'block';
    document.getElementById('selling-price').textContent = `$${sellingPrice.toFixed(2)}`;
    document.getElementById('gpm').textContent = `${grossProfitMargin.toFixed(1)}%`;
    document.getElementById('competitive-price').textContent = `$${competitivePrice.toFixed(2)}`;

    // Add competitive pricing notes
    if (competitivePrice < sellingPrice) {
        document.getElementById('competitive-price').innerHTML += 
            '<br><small>(Adjusted to match market average)</small>';
    }
}
