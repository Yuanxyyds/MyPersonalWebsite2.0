import React, {useState, useEffect} from 'react';

const Github = () => {
    const [allContributions, setAllContributions] = useState(null);
    const [showedContributions, setShowedContributions] = useState([]);

    const getScreenSize = (width) => {
        if (width >= 1200) return 'xl';
        if (width >= 992) return 'lg';
        if (width >= 768) return 'md';
        if (width >= 576) return 'sm';
        return 'xs';
    };

    const filterContributionsByScreenSize = (size, contributions) => {
        if (!contributions) return [];
        switch (size) {
            case 'xl':
                return contributions;
            case 'lg':
                return contributions;
            case 'md':
                return contributions.slice(-20);
            case 'sm':
                return contributions.slice(-10); // Show the last 10 contributions on small screens
            case 'xs':
                return contributions.slice(-5); // Show the last 5 contributions on extra small screens
            default:
                return contributions; // Default to showing all contributions
        }
    };

    useEffect(() => {
        const fetchContributions = async () => {
            if (allContributions == null) {
                try {
                    const response = await fetch('https://github-contributions-api.jogruber.de/v4/Yuanxyyds?y=last');
                    const data = await response.json();
                    setAllContributions(data["contributions"]); // Set all contributions data
                } catch (error) {
                    console.error('Error fetching contributions:', error);
                }
            }
        };

        const updateContributionsByScreenSize = () => {
            const screenSize = getScreenSize(window.innerWidth); // Determine the screen size
            const filteredContributions = filterContributionsByScreenSize(screenSize, allContributions);
            setShowedContributions(filteredContributions); // Update the displayed contributions
        };


        fetchContributions().then(updateContributionsByScreenSize);
        window.addEventListener('resize', updateContributionsByScreenSize);
    }, [allContributions]);

    if (!showedContributions) {
        return <div>Loading contributions...</div>;
    }

    return (
        <div>
            <h1>Filtered Contributions</h1>
            <ul>
                {showedContributions.map((contribution, index) => (
                    <li key={index}>{contribution.date}: {contribution.count} contributions</li>
                ))}
            </ul>
        </div>
    );
};

export default Github;