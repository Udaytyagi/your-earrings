import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import "../../Styles/orders.css"

function MyOrders() {

    
    return (
        <>
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead className="table-light">
                        <tr style={{ fontSize: 14, textAlign: "center" }}>
                            <th scope="col">SNo</th>
                            <th scope="col">OrderIdMy</th>
                            <th scope="col">TotalAmount</th>
                            <th scope="col">Image</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ fontSize: 13, textAlign: "center" }}>
                            <th scope="row">1</th>
                            <td>RC566071840438484</td>
                            <td>$100.00</td>
                            <td className="d-flex justify-content-center">
                                <div className="order-table-image">
                                    <img
                                        src="/images/review-img.png"
                                        alt="image-order"
                                        style={{ width: "58%" }}
                                    />
                                </div>
                            </td>
                            <td>2</td>
                            <td>
                                <p className="d-flex justify-content-center mt-3 order-table-status">
                                    <button>COD</button>
                                </p>
                            </td>
                            <td>2024-08-21</td>
                            <td>
                                <button className="view-btn">View</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

            {/* <nav>
                <ul className="pagination d-flex justify-content-end">
                    <li className="page-item">
                        <a href="#" className="page-link prev-page">
                            <TbPlayerTrackPrevFilled />

                        </a>
                    </li>
                    <li className="page-item active current-page">
                        <a href="#" className="page-link">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link next-page">
                            <TbPlayerTrackNextFilled />

                        </a>
                    </li>
                </ul>
            </nav> */}
        </>
    )
}

export default MyOrders
