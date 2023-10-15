import Button from "../Button/Button";

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
    const buttons = {
        href: "../../assets/data/experience.json",
        class: "hire-me",
    };

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
                <Button
                    btnName={hireButtonText}
                    href={buttons.href}
                    btnClass={buttons.class}
                />
            </div>
        </div>
    );
}

export default HomeInfo;
