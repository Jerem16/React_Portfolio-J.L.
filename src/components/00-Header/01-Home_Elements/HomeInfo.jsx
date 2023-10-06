function HomeInfo({
    welcome,
    name,
    presentation,
    profession,
    description,
    question,
    answer,
    hireButtonText,
}) {
    return (
        <div className="blockInfo">
            <div className="home-info">
                <h3 className="hello">
                    {welcome}
                    <span className="name">{name}</span>
                </h3>
                <h3 className="my-profession">
                    {presentation}
                    <span className="typing"></span>
                </h3>
                <p>{description}</p>
                <a href="#contact" className="btn hire-me">
                    {hireButtonText}
                </a>
            </div>
        </div>
    );
}

export default HomeInfo;
