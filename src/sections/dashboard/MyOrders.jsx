import { useEffect, useState } from "react";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import "../../Styles/orders.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../features/slices/orders/orderSlice";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchOrderDetailApi } from "../../apis/mainApis/order/orderApis";

function MyOrders() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const orderId = query.get("orderId");
  const dispatch = useDispatch();
  const order = useSelector((state) => state?.order?.data?.order_list);
  const [loading, setLoading] = useState(false);
  const [orderDetail, setOrderDetail] = useState([]);
  const [orderAddress, setOrderAddress] = useState({});

  const handleViewOrder = (orderId) => {
    navigate(`/dashboard/orders?orderId=${orderId}`);
  };

  const fetchOrderInformation = async () => {
    if (orderId) {
      const data = {
        order_id: orderId,
      };
      await fetchOrderDetailApi(
        data,
        setLoading,
        setOrderDetail,
        setOrderAddress
      );
    }
  };

  useEffect(() => {
    dispatch(fetchOrders(setLoading));
  }, []);

  useEffect(() => {
    if (orderId) {
      fetchOrderInformation();
    }
  }, [orderId]);

  return (
    <>
      {!orderId ? (
        <>
          {loading ? (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ flex: 3 }}
            >
              Loading.......
            </div>
          ) : (
            <div className="account__wrapper table-responsive">
              <div className="account__content">
                <div className="adreress-right dashboard">
                  {order ? (
                    <table
                      className="table table-bordered table-striped align-middle"
                    >
                      <thead className="table-light">
                        <tr style={{ fontSize: 14, textAlign: "center" }}>
                          <th scope="col">SNo</th>
                          <th scope="col">OrderIdMy</th>
                          <th scope="col">TotalAmount</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Status</th>
                          <th scope="col">Type</th>
                          <th scope="col">Date</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order && order.length > 0 ? (
                          <>
                            {order.map((item, i) => (
                              <tr
                                style={{ fontSize: 13, textAlign: "center" }}
                                key={i}
                              >
                                <th scope="row">{item.serial_no}</th>
                                <td>{item.order_number}</td>
                                <td>${item.pay_amount}</td>
                                <td>{item.total_product}</td>
                                <td>
                                  <p className="d-flex justify-content-center mt-3 order-table-status">
                                    <button>{item.payment_status}</button>
                                  </p>
                                </td>
                                <td>
                                  <p className="d-flex justify-content-center mt-3 order-table-status">
                                    <button>{item.payment_type}</button>
                                  </p>
                                </td>
                                <td>{item.date}</td>
                                <td>
                                  <button
                                    className="view-btn"
                                    onClick={() =>
                                      handleViewOrder(item.order_id)
                                    }
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <div className="d-flex justify-content-center align-items-center flex-column">
                            <img
                              src="/images/wishlist_empty.png"
                              alt="wishlist-empty"
                            ></img>
                            <h6>No address found</h6>
                          </div>
                        )}
                      </tbody>
                    </table>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      ) : loading ? (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ flex: 3 }}
        >
          Loading.......
        </div>
      ) : (
        <div className="account__wrapper">
          <div className="account__content">
            <div className="adreress-right dashboard">
              <div className="orderheading">
                <div className="order-adders">
                  <h4 className="fw-bold">Delivery Address</h4>
                  <h6 className="fw-bold">{orderAddress?.name}</h6>
                  <div className="d-flex flex-wrap">
                    <span className="fw-bold">Address Type(Home)</span>
                    <span className="fw-bold ms-2 me-2">:</span>
                    <span className="">
                      <span className="mb-0">{orderAddress?.street}</span>
                      <span className="d-inline block d-block">
                        {orderAddress?.landmark}
                      </span>
                      <span className="">{orderAddress?.city}</span>
                      <span className="d-inline block d-block">
                        {orderAddress?.state}
                      </span>
                      <span className="">{orderAddress?.pin_code}</span>
                    </span>{" "}
                  </div>
                  <div className="d-flex align-items-center flex-wrap">
                    <h6 className="fw-bold mb-0">Phone Number</h6>
                    <span className="fw-bold ms-2 me-2">:</span>
                    <span className="mb-0">
                      <span>{orderAddress?.mobile}</span>
                    </span>
                  </div>
                </div>
                <div className="order-adders ">
                  {orderDetail &&
                    orderDetail.length > 0 &&
                    orderDetail?.map((order, i) => (
                      <div
                        className="row d-flex align-items-start py-3"
                        key={i}
                      >
                        <div className="col-sm-3 col-12">
                          <div className="order-adders-image d-flex align-items-center justify-content-center">
                            <img
                              src={order.img}
                              alt="pro"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-sm-9 col-12 mt-sm-0 mt-3">
                          <p className="fw-bold mb-1">{order.product_name}</p>

                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-0">
                              <p className="mb-1">
                                Shape <span className="ms-2 me-2">:</span>
                              </p>
                            </p>
                            <p className="mb-1">{order.shape}</p>
                          </div>
                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-0">
                              <p className="mb-1">
                                Setting <span className="ms-2 me-2">:</span>
                              </p>
                            </p>
                            <p className="mb-1">{order.setting}</p>
                          </div>
                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-0">
                              <p className="mb-1">
                                Metal <span className="ms-2 me-2">:</span>
                              </p>
                            </p>
                            <p className="mb-1">{order.metal}</p>
                          </div>
                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-0">
                              <p className="mb-1">
                                Size <span className="ms-2 me-2">:</span>
                              </p>
                            </p>
                            <p className="mb-1">{order.size}</p>
                          </div>
                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-0">
                              <p className="mb-1">
                                Type <span className="ms-2 me-2">:</span>
                              </p>
                            </p>
                            <p className="mb-1">{order.type}</p>
                          </div>
                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-1">
                              Quantity
                              <span className="ms-2 me-1">:</span>
                            </p>
                            <p className="mb-1">{order.quantity}</p>
                          </div>
                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-1">
                              Sale Price
                              <span className="ms-2 me-1">:</span>
                            </p>
                            <p className="mb-1">{order.sale_price}</p>
                          </div>

                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-1">
                              Base Price
                              <span className="ms-2 me-1">:</span>
                            </p>
                            <p className="mb-1">{order.base_price}</p>
                          </div>

                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-1">
                              After Discount
                              <span className="ms-2 me-1">:</span>
                            </p>
                            <p className="mb-1">
                              {order.after_discount_amount}
                            </p>
                          </div>

                          <div className="d-flex flex-wrap delivery-address-producet">
                            <p className="fw-bold mb-1">
                              Order Number
                              <span className="ms-2 me-1">:</span>
                            </p>
                            <p className="mb-1">{order.item_order_number}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
  );
}

export default MyOrders;
