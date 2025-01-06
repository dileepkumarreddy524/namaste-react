const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-logo"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                    <div className="shimmer-text"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;