import React from "react";
import { nanoid } from "nanoid";
import tech from "../../../assets/data/technology.json";

function TechnologyIcons({ entry }) {
    return (
        <div className="technologies">
            {Object.keys(tech.technologyImages).map((technology) =>
                entry.technologies &&
                entry.technologies[technology] === true ? (
                    <div key={nanoid()}>
                        <abbr
                            title={
                                tech.technologySymbols[technology]
                                    ? tech.technologySymbols[technology]
                                    : ""
                            }
                        >
                            {technology && tech.technologyImages[technology] ? (
                                <img
                                    src={require(`../../../assets/img/skillsIcons/${tech.technologyImages[technology]}`)}
                                    alt={technology}
                                    width={27}
                                    height={20}
                                    loading="lazy"
                                />
                            ) : null}
                        </abbr>
                    </div>
                ) : null
            )}
        </div>
    );
}

export default React.memo(TechnologyIcons);
