export default function StarRating({rating}) {
    const TOTAL_STARS = 5;
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<img key={stars.length} src="./assets/star.svg" alt="Star rating icon"/>);
    }

    if (rating % 1 === 0.5) {
        stars.push(<img key={stars.length} src="./assets/half-star.svg"
                        alt="Half-star rating icon"/>);
    }

    while (stars.length < TOTAL_STARS) {
        stars.push(<img key={stars.length} src="./assets/empty-star.svg"
                        alt="Empty star rating icon"/>);
    }

    return <div className="rating">{stars}</div>;
}