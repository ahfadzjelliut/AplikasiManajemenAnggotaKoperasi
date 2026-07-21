import React from "react";

function Card({
    judul,
    isi,
    footer,
    className=""
}) {
    return (

        <div className={`card ${className}`}>
            {judul &&
                <div className="card-header">
                    {judul}
                </div>
            }

            <div className="card-body">
                {isi}
            </div>
            { footer &&
                <div className="card-footer">
                    {footer}
                </div>
            }
        </div>
    );

}
export default Card;
