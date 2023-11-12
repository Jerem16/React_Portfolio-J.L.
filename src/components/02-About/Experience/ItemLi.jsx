import React from "react";
import shortid from "shortid";

const ItemLi = ({ description, entry }) => {
    return (
        <ul className={`ul-anime open`}>
            {entry.description.itemLi.map((item, itemIndex) => (
                <li
                    className={`ul-anime open`}
                    key={shortid.generate()}
                    style={{
                        transitionDelay: `${itemIndex * 0.1}s`,
                    }}
                >
                    <i className="fas fa-check"></i>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default React.memo(ItemLi);
