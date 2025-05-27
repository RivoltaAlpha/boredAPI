        let currentActivity = null;

        async function fetchActivity() {
            const typeSelect = document.getElementById('type');
            const participantsSelect = document.getElementById('participants');
            const loadingDiv = document.getElementById('loading');
            const resultsDiv = document.getElementById('results');

            // Show loading
            loadingDiv.style.display = 'block';
            resultsDiv.innerHTML = '';

            // Build query parameters
            const params = new URLSearchParams();
            if (typeSelect.value) params.append('type', typeSelect.value);
            if (participantsSelect.value) params.append('participants', participantsSelect.value);

            const url = `https://www.boredapi.com/api/activity?${params.toString()}`;
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Hide loading
                loadingDiv.style.display = 'none';
                
                if (data.error) {
                    displayError(data.error);
                } else {
                    displayActivity(data);
                }
                
            } catch (error) {
                loadingDiv.style.display = 'none';
                displayError('Failed to fetch activity. Please check your connection and try again.');
                console.error('Error:', error);
            }
        }

        function displayActivity(activity) {
            const resultsDiv = document.getElementById('results');
            
            const activityCard = document.createElement('div');
            activityCard.className = 'activity-card';
            
            // Get emoji for activity type
            const typeEmojis = {
                education: '📚',
                recreational: '🎮',
                social: '👥',
                charity: '💝',
                cooking: '🍜',
                relaxation: '🧘',
                busywork: '⚡'
            };

            const typeEmoji = typeEmojis[activity.type] || '🌟';
            const accessibilityStars = '⭐'.repeat(Math.max(1, Math.round((1 - activity.accessibility) * 5)));
            const priceLevel = activity.price === 0 ? 'Free' : 
                             activity.price <= 0.3 ? 'Low Cost' :
                             activity.price <= 0.6 ? 'Moderate Cost' : 'High Cost';

            activityCard.innerHTML = `
                <h2 class="activity-title">${typeEmoji} ${activity.activity}</h2>
                <div class="activity-meta">
                    <div class="meta-item">
                        <span>Quest Type</span>
                        ${activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                    </div>
                    <div class="meta-item">
                        <span>Party Size</span>
                        ${activity.participants} ${activity.participants === 1 ? 'Hero' : 'Heroes'}
                    </div>
                    <div class="meta-item">
                        <span>Accessibility</span>
                        ${accessibilityStars}
                    </div>
                    <div class="meta-item">
                        <span>Cost Level</span>
                        ${priceLevel}
                    </div>
                </div>
            `;
            
            resultsDiv.appendChild(activityCard);
            currentActivity = activity;
        }

        function displayError(message) {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
                <div class="error">
                    <strong>Quest Failed!</strong><br>
                    ${message}
                </div>
            `;
        }

        // Fetch initial activity on page load
        window.addEventListener('load', fetchActivity);

        // Allow Enter key to trigger search
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                fetchActivity();
            }
        });