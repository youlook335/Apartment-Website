import React from "react";
import "../../Styles/Floor.css";
import Button from "../Button";

const Penthouse = () => {
    return (
        <>
            <div className="floor-contain">
                <h1 className="floor">Choose the perfect space for you</h1>
                <button className="batn">Studio</button>
                <button className="batn">2-Bedroom</button>
                <button className="batn">3-Bedroom</button>
                <button className="batn" style={{backgroundColor: "#000", color: "#fff"}}>
                    Penthouse
                </button>
                <button className="batn">Double height</button>
            </div>
            <div className="floor-contain1">
                <div className="num">
                    <p>Unit size</p>
                    <p className="num1">2,400 sq.ft</p>
                    <hr />
                    <p>Balcony area</p>
                    <p className="num1">400 sq.ft</p>
                    <hr />
                    <p>Total area</p>
                    <p className="num1">2,800 sq.ft</p>
                    <hr />
                    <p>Floor</p>
                    <p className="num1">15th (Top floor)</p>
                    <hr />
                    <p>Price</p>
                    <p className="num11">$1,500,000</p>
                    <hr />
                    <div className="bon">
                        <Button cont="I am Intersted" />
                    </div>
                </div>
                <div className="divimg">
                    <img src="https://cdn.prod.website-files.com/66f2a1ff6b406660029665a0/673ac2fc863f48cfa20de3d4_fp-04.svg" alt="Map Floor " />
                </div>
            </div>
        </>
    );
};

export default Penthouse;
