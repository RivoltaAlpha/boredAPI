 let currentActivity = null;

        // Local JSON data to replace the API
        const activitiesData = [
            // Education activities
            { activity: "Learn a new programming language", type: "education", participants: 1, price: 0, accessibility: 0.25 },
            { activity: "Read a book about ancient history", type: "education", participants: 1, price: 0.3, accessibility: 0.1 },
            { activity: "Take an online course on Japanese culture", type: "education", participants: 1, price: 0.4, accessibility: 0.2 },
            { activity: "Visit a local museum", type: "education", participants: 2, price: 0.2, accessibility: 0.3 },
            { activity: "Learn origami from YouTube tutorials", type: "education", participants: 1, price: 0.1, accessibility: 0.1 },
            { activity: "Study constellations and stargazing", type: "education", participants: 3, price: 0, accessibility: 0.2 },
            { activity: "Learn calligraphy basics", type: "education", participants: 1, price: 0.3, accessibility: 0.15 },
            { activity: "Watch documentary about anime history", type: "education", participants: 2, price: 0, accessibility: 0.1 },
            
            // Recreational activities
            { activity: "Have an anime marathon weekend", type: "recreational", participants: 3, price: 0.2, accessibility: 0.1 },
            { activity: "Play a new video game", type: "recreational", participants: 1, price: 0.6, accessibility: 0.1 },
            { activity: "Create fan art of your favorite character", type: "recreational", participants: 1, price: 0.2, accessibility: 0.3 },
            { activity: "Build a model kit or figurine", type: "recreational", participants: 1, price: 0.5, accessibility: 0.4 },
            { activity: "Play board games with friends", type: "recreational", participants: 4, price: 0.3, accessibility: 0.1 },
            { activity: "Go to a comic convention", type: "recreational", participants: 2, price: 0.7, accessibility: 0.3 },
            { activity: "Try virtual reality gaming", type: "recreational", participants: 1, price: 0.8, accessibility: 0.4 },
            { activity: "Create a cosplay outfit", type: "recreational", participants: 1, price: 0.6, accessibility: 0.5 },
            { activity: "Play Pokemon Go in the park", type: "recreational", participants: 2, price: 0, accessibility: 0.2 },
            
            // Social activities
            { activity: "Host a themed dinner party", type: "social", participants: 6, price: 0.4, accessibility: 0.2 },
            { activity: "Organize a karaoke night", type: "social", participants: 5, price: 0.3, accessibility: 0.1 },
            { activity: "Go to a local festival", type: "social", participants: 4, price: 0.2, accessibility: 0.3 },
            { activity: "Join a book club", type: "social", participants: 8, price: 0.1, accessibility: 0.2 },
            { activity: "Attend a poetry reading", type: "social", participants: 3, price: 0, accessibility: 0.2 },
            { activity: "Go bowling with friends", type: "social", participants: 4, price: 0.4, accessibility: 0.1 },
            { activity: "Host a game tournament", type: "social", participants: 8, price: 0.2, accessibility: 0.1 },
            { activity: "Go to a café and people-watch", type: "social", participants: 2, price: 0.3, accessibility: 0.1 },
            
            // Charity activities
            { activity: "Volunteer at a local animal shelter", type: "charity", participants: 2, price: 0, accessibility: 0.1 },
            { activity: "Organize a charity gaming stream", type: "charity", participants: 1, price: 0, accessibility: 0.3 },
            { activity: "Donate books to a library", type: "charity", participants: 1, price: 0.2, accessibility: 0.1 },
            { activity: "Help at a community garden", type: "charity", participants: 4, price: 0, accessibility: 0.3 },
            { activity: "Tutor students in your expertise", type: "charity", participants: 2, price: 0, accessibility: 0.2 },
            { activity: "Participate in a charity walk", type: "charity", participants: 5, price: 0.1, accessibility: 0.4 },
            { activity: "Make care packages for homeless", type: "charity", participants: 3, price: 0.4, accessibility: 0.1 },
            
            // Cooking activities
            { activity: "Learn to make authentic ramen", type: "cooking", participants: 1, price: 0.3, accessibility: 0.2 },
            { activity: "Try making Japanese sweets (wagashi)", type: "cooking", participants: 2, price: 0.4, accessibility: 0.3 },
            { activity: "Cook a meal from a different culture", type: "cooking", participants: 1, price: 0.5, accessibility: 0.1 },
            { activity: "Bake character-themed cookies", type: "cooking", participants: 2, price: 0.2, accessibility: 0.2 },
            { activity: "Host a cooking competition", type: "cooking", participants: 4, price: 0.6, accessibility: 0.1 },
            { activity: "Learn to make sushi", type: "cooking", participants: 1, price: 0.7, accessibility: 0.4 },
            { activity: "Try molecular gastronomy", type: "cooking", participants: 1, price: 0.8, accessibility: 0.6 },
            { activity: "Make homemade pasta from scratch", type: "cooking", participants: 2, price: 0.3, accessibility: 0.2 },
            
            // Relaxation activities
            { activity: "Practice meditation in a garden", type: "relaxation", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Take a relaxing bubble bath", type: "relaxation", participants: 1, price: 0.2, accessibility: 0.1 },
            { activity: "Do gentle yoga while listening to lo-fi", type: "relaxation", participants: 1, price: 0, accessibility: 0.2 },
            { activity: "Create a zen garden", type: "relaxation", participants: 1, price: 0.4, accessibility: 0.2 },
            { activity: "Write poetry in a peaceful spot", type: "relaxation", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Listen to ambient music and daydream", type: "relaxation", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Practice mindful tea ceremony", type: "relaxation", participants: 2, price: 0.3, accessibility: 0.1 },
            { activity: "Take a nature photography walk", type: "relaxation", participants: 1, price: 0.1, accessibility: 0.3 },
            
            // Busywork activities
            { activity: "Organize your digital photo collection", type: "busywork", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Clean and reorganize your room", type: "busywork", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Update your social media profiles", type: "busywork", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Sort through old emails", type: "busywork", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Create a digital vision board", type: "busywork", participants: 1, price: 0, accessibility: 0.2 },
            { activity: "Organize your manga/book collection", type: "busywork", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Update your anime watchlist", type: "busywork", participants: 1, price: 0, accessibility: 0.1 },
            { activity: "Backup important files to cloud storage", type: "busywork", participants: 1, price: 0.1, accessibility: 0.2 }
        ];

        function getFilteredActivities() {
            const typeSelect = document.getElementById('type');
            const participantsSelect = document.getElementById('participants');
            
            let filtered = activitiesData;
            
            // Filter by type
            if (typeSelect.value) {
                filtered = filtered.filter(activity => activity.type === typeSelect.value);
            }
            
            // Filter by participants
            if (participantsSelect.value) {
                filtered = filtered.filter(activity => activity.participants == participantsSelect.value);
            }
            
            return filtered;
        }

        async function fetchActivity() {
            const loadingDiv = document.getElementById('loading');
            const resultsDiv = document.getElementById('results');

            // Show loading
            loadingDiv.style.display = 'block';
            resultsDiv.innerHTML = '';

            // Simulate loading delay for better UX
            setTimeout(() => {
                const filteredActivities = getFilteredActivities();
                
                loadingDiv.style.display = 'none';
                
                if (filteredActivities.length === 0) {
                    displayNoResults();
                } else {
                    // Get random activity from filtered results
                    const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];
                    displayActivity(randomActivity);
                }
            }, 800); // 800ms delay for anime-style loading
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

        function displayNoResults() {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
                <div class="no-results">
                    <h3>🌸 No quests found for your criteria</h3>
                    <p>Try adjusting your filters to discover new adventures!</p>
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