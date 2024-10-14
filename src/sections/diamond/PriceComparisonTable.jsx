import "../../Styles/PriceComparisonTable.css";

function PriceComparisonTable({ types }) {
    const carats = Object.keys(types);


    return (

        <div className="price-comparison-table">
            <h5>Price Comparison</h5>
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Carat Total Weight</th>
                            <th>Beautiful (Color: I-J, Clarity: I1-I2)</th>
                            <th>Brilliant (Color: H-I, Clarity: SI1-SI2)</th>
                            <th>Masterpiece (Color: G-H, Clarity: VS1-VS2)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carats.map((carat) => {
                            const variations = types[carat];
                            const beautifulPrice = variations[1]?.Beautiful[0]?.sale_price || '-';
                            const brilliantPrice = variations[2]?.Brilliant[0]?.sale_price || '-';
                            const masterpiecePrice = variations[3]?.Masterpiece[0]?.sale_price || '-';

                            return (
                                <tr key={carat}>
                                    <td>{carat} ctw</td>
                                    <td>{beautifulPrice}</td>
                                    <td>{brilliantPrice}</td>
                                    <td>{masterpiecePrice}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PriceComparisonTable;
